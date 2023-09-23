(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['Header.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li class=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"className") : depth0), depth0))
    + "\">\n            <a class=\"headera\" href=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"href") : depth0), depth0))
    + "\" data-section=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"key") : depth0), depth0))
    + "\">\n                "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "\n            </a>\n        </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<ul class=\"menu\">\n    <li class=\"menu__item\">\n        <a href=\"\"><img class=\"imgLogo\" src=\"Logo.svg\" alt=\"\"></a>\n        <div class=\"logoText\">MusicOn</div>    \n    </li>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":12,"column":13}}})) != null ? stack1 : "")
    + "    <li class=\"menu__item\"><img src=\"Loupe.svg\" alt=\"\"></li>\n    <li class=\"menu__item\">\n        <form class=\"input_search\"> \n            <input type=\"text\" name=\"text\" class=\"search\" placeholder =\"Введите название песни или альбома\">\n        </form>\n    </li>\n    <li class=\"menu__item\">\n        <button class=\"loginButton\">Войти</button>\n    </li>\n</ul>\n\n\n\n\n\n";
},"useData":true});
})();