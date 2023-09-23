(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['Feed.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li class=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"className") : depth0), depth0))
    + "\">\n            <a class=\"feeda\" href=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"href") : depth0), depth0))
    + "\" data-section=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"key") : depth0), depth0))
    + "\">\n                "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "\n            </a>\n        </li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li class=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"className") : depth0), depth0))
    + "\">\n            <a href=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"albumHref") : depth0), depth0))
    + "\" >\n                <img class=\"contentPhoto\" src=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"image") : depth0), depth0))
    + "\" alt=\"1\">\n                <p class=\"songName\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</p>\n            </a>\n            <a href=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"artistHref") : depth0), depth0))
    + "\" ><p class=\"artistName\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"artist") : depth0), depth0))
    + "</p></a>\n        </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n<div class=\"feedText\">Главное</div>\n<ul class=\"feed\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":10,"column":13}}})) != null ? stack1 : "")
    + "</ul>\n\n<h1>Новые треки, альбомы и сборники</h1>\n\n<ul class=\"content\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":4},"end":{"line":24,"column":13}}})) != null ? stack1 : "")
    + "</ul>\n    ";
},"useData":true});
})();