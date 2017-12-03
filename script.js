const bluetooth = require('node-bluetooth');
const device = new bluetooth.DeviceINQ();
var player = require('play-sound')(opts = {})

device
.on('finished',  console.log.bind(console, 'finished'))
.on('found', function found(address, name){
 	console.log('Found: ' + address + ' with name ' + name);
}).inquire();
 
function play() {
	player.play('http://www.download2mp3.com/mozart_htm_files/Mozart%20Talking%20Steel%20Concerto.mp3', { timeout: 300 }, function(err){
	  if (err) throw err
	})
}