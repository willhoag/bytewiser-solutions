var fullBuffer = [];
process.stdin
	.on('data', function (buf) { fullBuffer.push(buf); })
	.on('end', function () { console.log(Buffer.concat(fullBuffer)); });
