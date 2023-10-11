export const source = `<div class="feedContainer">
                        <div class="feedText">Главное</div>
                        <ul class="feed">
                            {{#each items}}
                                <li class="{{this.className}}">
                                    <div class="feeda" data-section="{{this.key}}">
                                        {{this.name}}
                                    </div>
                                </li>
                            {{/each}}
                        </ul>
                        <h1 class="zagolovok">Новые треки, альбомы и сборники</h1>
                        <div class="contentContainer">
                            <ul class="content">
                                {{#each content}}
                                    <li class="{{this.className}}">
                                        <div class="songContainer">
                                            <div class="imageContainer">
                                                <img class="contentPhoto" src="{{this.port}}{{this.Preview}}" alt="1">
                                                <div class="playButton" data-section="{{this.Id}}"></div>
                                            </div>
                                            <div class="songName">
                                                {{this.Name}}
                                            </div>
                                            <div class="artistName">
                                                {{this.Artist.0.Name}}
                                            </div>
                                        </div>  
                                    </li>   
                                {{/each}}   
                            </ul>
                        </div>
                    </div>`;


    