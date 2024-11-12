const { ViscaCamera } = require('./dist/Camera');
const { ViscaCommand } = require('./dist/Command');

//cam = new ViscaCamera('192.168.68.105', 5672); // ???
//cam = new ViscaCamera('192.168.68.105', 5678); // TCP
cam = new ViscaCamera('192.168.68.105', 52381); // UDP

cam.on('connected', async () => {
	console.log('Camera connected');

	//await sendCommand(cam, ViscaCommand.cameraZoomOut(-1), 500);
	//await sendCommand(cam, ViscaCommand.cameraZoomOut(0), 500);
	//await sendCommand(cam, ViscaCommand.cameraZoomOut(1), 500);
	//await sendCommand(cam, ViscaCommand.cameraZoomOut(2), 500);
	//await sendCommand(cam, ViscaCommand.cameraZoomOut(3), 500);
	//await sendCommand(cam, ViscaCommand.cameraZoomOut(4), 500);
	//await sendCommand(cam, ViscaCommand.cameraZoomOut(5), 500);
	//await sendCommand(cam, ViscaCommand.cameraZoomOut(6), 500);
	//await sendCommand(cam, ViscaCommand.cameraZoomOut(7), 500);
	//await sendCommand(cam, ViscaCommand.cameraZoomStop(), 500);

	//await sendCommand(cam, ViscaCommand.cameraZoomIn(-1), 500);
	//await sendCommand(cam, ViscaCommand.cameraZoomIn(0), 500);
	//await sendCommand(cam, ViscaCommand.cameraZoomIn(1), 500);
	//await sendCommand(cam, ViscaCommand.cameraZoomIn(2), 500);
	//await sendCommand(cam, ViscaCommand.cameraZoomIn(3), 500);
	//await sendCommand(cam, ViscaCommand.cameraZoomIn(4), 500);
	//await sendCommand(cam, ViscaCommand.cameraZoomIn(5), 500);
	//await sendCommand(cam, ViscaCommand.cameraZoomIn(6), 500);
	//await sendCommand(cam, ViscaCommand.cameraZoomIn(7), 500);
	//await sendCommand(cam, ViscaCommand.cameraZoomStop(), 500);

	// Esquerda
	//await sendCommand(cam, ViscaCommand.cameraPanTilt(0, 0,2,3), 1000);
	//await sendCommand(cam, ViscaCommand.cameraPanTilt(6, 0,2,3), 1000);
	//await sendCommand(cam, ViscaCommand.cameraPanTilt(12,0,2,3), 1000);
	//await sendCommand(cam, ViscaCommand.cameraPanTilt(18,0,2,3), 1000);
	//await sendCommand(cam, ViscaCommand.cameraPanTilt(24,0,2,3), 1000);
	//await sendCommand(cam, ViscaCommand.cameraPanTilt(0, 0,3,3), 1000);

	// Direita
	//await sendCommand(cam, ViscaCommand.cameraPanTilt(0, 0,1,3), 1000);
	//await sendCommand(cam, ViscaCommand.cameraPanTilt(6, 0,1,3), 1000);
	//await sendCommand(cam, ViscaCommand.cameraPanTilt(12,0,1,3), 1000);
	//await sendCommand(cam, ViscaCommand.cameraPanTilt(18,0,1,3), 1000);
	//await sendCommand(cam, ViscaCommand.cameraPanTilt(24,0,1,3), 1000);
	//await sendCommand(cam, ViscaCommand.cameraPanTilt(0, 0,3,3), 1000);

	// Baixo
	//await sendCommand(cam, ViscaCommand.cameraPanTilt(0,0, 3,2), 1000);
	//await sendCommand(cam, ViscaCommand.cameraPanTilt(0,6, 3,2), 1000);
	//await sendCommand(cam, ViscaCommand.cameraPanTilt(0,12,3,2), 1000);
	//await sendCommand(cam, ViscaCommand.cameraPanTilt(0,18,3,2), 1000);
	//await sendCommand(cam, ViscaCommand.cameraPanTilt(0,20,3,2), 1000);
	//await sendCommand(cam, ViscaCommand.cameraPanTilt(0,0, 3,3), 1000);

	// Cima
	//await sendCommand(cam, ViscaCommand.cameraPanTilt(0,0, 3,1), 1000);
	//await sendCommand(cam, ViscaCommand.cameraPanTilt(0,6, 3,1), 1000);
	//await sendCommand(cam, ViscaCommand.cameraPanTilt(0,12,3,1), 1000);
	//await sendCommand(cam, ViscaCommand.cameraPanTilt(0,18,3,1), 1000);
	//await sendCommand(cam, ViscaCommand.cameraPanTilt(0,20,3,1), 1000);
	//await sendCommand(cam, ViscaCommand.cameraPanTilt(0,0, 3,3), 1000);


	// Zoom, Direita, Cima
	//await sendCommand(cam, ViscaCommand.cameraZoomIn(3), 500);
	//await sendCommand(cam, ViscaCommand.cameraPanTilt(6,6, 1,1), 500);
	//await sendCommand(cam, ViscaCommand.cameraZoomStop(), 2000);
	//await sendCommand(cam, ViscaCommand.cameraPanTilt(0,0, 3,3), 1000);

	await sendCommand(cam, ViscaCommand.cameraPresetRecall(1), 2000);
	await sendCommand(cam, ViscaCommand.cameraPresetRecall(2), 2000);
	await sendCommand(cam, ViscaCommand.cameraPresetRecall(3), 2000);
	await sendCommand(cam, ViscaCommand.cameraPresetRecall(80), 2000);
	await sendCommand(cam, ViscaCommand.cameraPresetRecall(81), 2000);

});

function sendCommand(camera, command, timeout) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(command.description);
			camera.sendCommand(command);
			resolve("ok");
		}, timeout);
	});
}
const myPromise = 
cam.on('closed', () => {
	console.log('Camera connection closed');
});
cam.on('error', (err) => console.log('Camera error:', err));