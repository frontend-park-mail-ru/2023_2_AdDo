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
                <input class="{{this.className}}" data-section="{{this.name}}" type="{{this.type}}" placeholder="{{this.text}}" required >
            </li> 
            {{/each}}
            <li class="loginItem">
                <div style="display: block;">
                    <div class="passCheckDisabled" data-section="passcheck" >Неверное имя пользователя или пароль!</div>
                </div>
            </li>
            <li class="loginItem">
                <button class="SubmitBigButton"  data-section="/feed" type="submit">Войти</button>
            </li>
        </form>
        <li class="loginItem">
            <div class="yet">
            Ещё нет учётной записи?
            <a data-section="/signup" class="yeta" href="/login">Зарегистрируйтесь</a>
            </div>
        </li>
    </ul>
</div>`;
    