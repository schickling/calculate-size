(function(name, definition) {
  if (typeof define === 'function') { // AMD
    define(definition);
  } else if (typeof module !== 'undefined' && module.exports) { // Node.js
    module.exports = definition();
  } else { // Browser
    var theModule = definition(),
      global = this,
      old = global[name];
    theModule.noConflict = function() {
      global[name] = old;
      return theModule;
    };
    global[name] = theModule;
  }
})('calculateSize', function() {

  function createDummyElement(text, options) {
    var element = document.createElement('div'),
      textNode = document.createTextNode(text);

    element.appendChild(textNode);

    element.style.fontFamily = options.font;
    element.style.fontSize = options.fontSize;
    element.style.fontWeight = options.fontWeight;
    element.style.position = 'absolute';
    element.style.visibility = 'hidden';
    element.style.left = '-999px';
    element.style.top = '-999px';
    element.style.width = 'auto';
    element.style.height = 'auto';

    document.body.appendChild(element);

    return element;
  }

  function destoryElement(element) {
    element.parentNode.removeChild(element);
  }

  var cache = {}

  return function(text, options) {

    var cacheKey = JSON.stringify({ text: text, options: options });

    if (cache[cacheKey]) {
      return cache[cacheKey];
    }

    // prepare options
    options = options || {};
    options.font = options.font || 'Times';
    options.fontSize = options.fontSize || '16px';
    options.fontWeight = options.fontWeight || 'normal';

    var size = {}, element;

    element = createDummyElement(text, options);

    size.width = element.offsetWidth;
    size.height = element.offsetHeight;

    destoryElement(element);

    cache[cacheKey] = size;

    return size;
  };

});
