export const source = `<div class="loginContainer">
    <ul class="login">
         <div class="container">
            <li class="loginItem">
            <a data-section="/feed" href=""><img class="imgLogo" src="./static/img/Logo.svg" alt=""></a>
            <div class="logoText">MusicOn</div>    
            </li>
         </div>
        <form method="post">
            {{#each items}}
            <li class="loginItem">
                <input class="{{this.className}}" type="{{this.type}}" data-section="{{this.name}}" placeholder="{{this.text}}" required >
            </li> 
            {{/each}}
            <li class="loginItem">\
                <div style="display: block;">
                    <div class="passCheckDisabled" data-section="passcheck" >Пароли не совпадают!</div>
                    <div class="passCheckDisabled" data-section="lengthPassword" >Пароль (от 6 до 30 символов)</div>
                </div>
            </li>
            <li class="loginItem">
                <button class="SubmitBigButton" data-section="/feed" type="submit">Зарегистрироваться</button>
            </li>
        </form>
        <li class="loginItem">
            <div class="yet">
            Уже есть учетная запись?
            <a data-section="/login" class="yeta" href="/login">Войдите</a>
            </div>
        </li>
    </ul>
</div>`;