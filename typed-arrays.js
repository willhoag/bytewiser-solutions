process.stdin.on('data', function (buf){
	var ui8 = new Uint8Array(buf);
	console.log(JSON.stringify(ui8));
});
