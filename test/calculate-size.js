casper.start('http://casperjs.org/', function() {
  this.echo(this.getTitle());
});

casper.run();