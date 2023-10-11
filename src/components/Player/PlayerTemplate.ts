



export const source = `<div class="player">
    <audio src="{{this.Content}}"></audio>
    <div class="progressBar">
        <div class="progress"></div>
    </div>
    <div class="contentContainer">
        {{#each items}}
             <div class="{{this.key}}"><img class="playerBtns" src="{{this.href}}" alt=""></div>
        {{/each}}
        <div><img class="avatar" src="{{port}}{{this.Preview}}" alt="./static/img/noImage.png"></div>
        <div class="info">
            <div class="title">{{this.Name}}</div>
            <div class="artist">{{this.Artist.0.Name}}</div>
        </div>
        <div class="likeBtn"><img class="playerBtns" src="./static/img/likeBtn.svg" alt=""></div>
        <div class="volumeBtn"><img class="playerBtns" src="./static/img/volumeBtn.svg" alt=""></div>
    </div>
</div>`;