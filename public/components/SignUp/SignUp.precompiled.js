(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['SignUp.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <li class=\"login__item\">\n                <input class=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"className") : depth0), depth0))
    + "\" type=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"type") : depth0), depth0))
    + "\" placeholder=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "\" required >\n            </li> \n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n<div class=\"container\">\n    <ul class=\"signup\">\n         <div class=\"container\">\n            <li class=\"login__item\">\n            <a name=\"/feed\" href=\"\"><img class=\"imgLogo\" src=\"Logo.svg\" alt=\"\"></a>\n            <div class=\"logoText\">MusicOn</div>    \n            </li>\n         </div>\n        <form method=\"post\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":12},"end":{"line":15,"column":21}}})) != null ? stack1 : "")
    + "            <li class=\"login__item\">\n                <button class=\"SubmitLoginButton\" type=\"submit\">Зарегистрироваться</button>\n            </li>\n        </form>\n        <li class=\"login__item\">\n            <div class=\"yet\">\n            Уже есть учетная запись?\n            <a name=\"/login\" class=\"yeta\" href=\"/login\">Войдите</a>\n            </div>\n        </li>\n    </ul>\n</div>";
},"useData":true});
})();