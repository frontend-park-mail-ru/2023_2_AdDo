



export const source = `<div class="player">
    <audio src="{{this.Content}}"></audio>
    <div class="progressBar">
        <div class="progress"></div>
    </div>
    <div class="contentContainer">
        {{#each items}}
             <div class="{{this.key}}"><img class="playerBtns" src="{{this.href}}" alt=""></div>
        {{/each}}
        <div><img class="avatar" src="{{port}}{{song.Preview}}" alt="./static/img/noImage.png"></div>
        <div class="info">
            <div class="title">{{song.Name}}</div>
            <div class="artist">{{song.Artist.0.Name}}</div>
        </div>
        <div class="likeBtn"><img class="rightPlayerBtns" src="./static/img/likeBtn.svg" alt=""></div>
        <div class="volumeBtn"><img class="rightPlayerBtns" src="./static/img/volumeBtn.svg" alt=""></div>
    </div>
</div>`;