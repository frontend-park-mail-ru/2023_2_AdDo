export const source = `<div class="menucontainer">
                        <ul class="links">
                            <li class="menuItem">
                                <a href=""><img class="imgLogo" src="./static/img/Logo.svg" alt=""></a>
                                <div class="logoText">MusicOn</div>    
                            </li>
                            {{#each items}}
                                <li class="{{this.className}}">
                                    <h2 class="headera" data-section="{{this.href}}">
                                        {{this.name}}
                                    </h2>
                                </li>
                            {{/each}}
                        </ul>
                        <ul class="rest">
                            <li class="menuItem">
                                <img class="magnifyingGlass" src="./static/img/Loupe.svg" alt="">
                                    <form class="inputSearch"> 
                                        <input type="text" data-section="text" class="search" placeholder ="Введите название песни или альбома">
                                    </form>
                            </li>
                            {{#if isAuth}}
                            <li class="menuItem">
                                <div class="profile">
                                <img class="imgAvatar" src="./static/img/worm.jpg" alt="">
                                <a class="signout" href="/signout" data-section="/signout">
                                    Выйти
                                </a>
                                </div>
                            </li>
                            {{else}}
                            <li class="menuItem">
                                <a href="login" data-section="/login" ><button class="defaultButton" data-section="/login">Войти</button></a>
                            </li>
                            {{/if}}
                        </ul>
                    </div>`;