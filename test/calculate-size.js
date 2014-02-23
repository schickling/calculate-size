// env
var url = 'http://localhost:9000/test/resources/index.html';

// helper method
casper.calculateSize = function(text, options) {
  return this.evaluate(function(text, options) {
    return calculateSize(text, options);
  }, {
    text: text,
    options: options
  });
}

casper.start(url, function() {
  casper.test.comment('test one word');
  var size = this.calculateSize('Hello');
  this.test.assertEquals(size.width, 35);
  this.test.assertEquals(size.height, 16);
});

casper.thenOpen(url, function() {
  casper.test.comment('test two words');
  var size = this.calculateSize('Hello world!');
  this.test.assertEquals(size.width, 81);
  this.test.assertEquals(size.height, 16);
});

casper.thenOpen(url, function() {
  casper.test.comment('test different font family');
  var size = this.calculateSize('Hello world!', {
    font: 'Verdana'
  });
  this.test.assertEquals(size.width, 96);
  this.test.assertEquals(size.height, 19);
});

casper.thenOpen(url, function() {
  casper.test.comment('test different font size');
  var size = this.calculateSize('Hello world!', {
    fontSize: '40px'
  });
  this.test.assertEquals(size.width, 205);
  this.test.assertEquals(size.height, 40);
});

casper.thenOpen(url, function() {
  casper.test.comment('test bold text');
  var size = this.calculateSize('Hello world!', {
    fontWeight: 'bold'
  });
  this.test.assertEquals(size.width, 81);
  this.test.assertEquals(size.height, 16);
});

// TODO write test span is invisible

casper.run();