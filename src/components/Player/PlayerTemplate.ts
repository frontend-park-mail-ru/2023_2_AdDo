



export const source = `<div class="player">
    <audio src="{{this.Content}}"></audio>
    <div class="progressBar">
        <div class="progress"></div>
    </div>
    <div class="contentContainer">
        <div class="prevBtn"><img class="playerBtns" data-section="prevBtn" src="./static/img/SwitchBack.svg" alt=""></div>
        {{#if Playing}}
        <div class="playBtn"><img class="playerBtns"  data-section="playBtn"src="./static/img/Play.svg" alt=""></div>
        {{else}}
        <div class="pauseBtn"><img class="playerBtns"  data-section="pauseBtn"src="./static/img/Pause.svg" alt=""></div>
        {{/if}}
        {{#each items}}
             <div class="{{this.key}}"><img class="playerBtns" data-section="{{this.key}}" src="{{this.href}}" alt=""></div>
        {{/each}}

        <div><img class="avatar" src="{{port}}{{song.Preview}}" alt=""></div>
        <div class="info">
            <div class="title">{{song.Name}}</div>
            <div class="artist">{{song.Artist.0.Name}}</div>
        </div>
        <div class="likeBtn"><img class="playerBtns" data-section="likeBtn" src="./static/img/Like.svg" alt=""></div>
        <div class="volumeBtn"><img class="playerBtns"  data-section="volumeBtn"src="./static/img/SoundOn.svg" alt=""></div>
    </div>
</div>`;