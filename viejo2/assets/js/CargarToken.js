function parseJwt(token) {
    localStorage.setItem('tokenApp', token);
    window.history.replaceState(null, null, window.location.pathname);
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    token = JSON.parse(window.atob(base64));
    return token.Datos;
};
var Parametrizar = function(){
    try {
        if (location.search && location.search  != "" && location.search.substr(0, 7) == '?token='){
            var Key = location.search.substr(7);
            window.payload = parseJwt(Key);
        }else location = "/login.html";
    } catch (error) {location.replace("/login.html")}

}
let Token = localStorage.getItem('tokenApp');
if (Token == undefined) Parametrizar();
else window.payload = parseJwt(Token);