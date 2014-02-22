var url = 'http://localhost:9000/test/resources/index.html';

casper.calculateSize = function(text, options) {
  return this.evaluate(function(text, options) {
    return calculateSize(text, options);
  }, {
    text: text,
    options: options
  });
}

casper.start(url, function() {
  var size = this.calculateSize("Hello");
  this.test.assertEquals(size.width, 35);
  this.test.assertEquals(size.height, 18);
});

casper.run();