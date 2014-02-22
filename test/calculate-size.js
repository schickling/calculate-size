var url = 'http://localhost:9000/test/resources/index.html';

casper.calculateSize = function() {
  return this.evaluate(function() {
    return calculateSize();
  });
}

casper.start(url, function() {
  this.echo(this.getTitle());
  console.log(this.calculateSize());
});

casper.run();