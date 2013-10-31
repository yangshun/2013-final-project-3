// Socket registration code
var path = window.location.pathname.slice(1).split('/');
var myroom = 'lobby'; // default
if (path.length === 2 && path[1] !== '') {
	// We have a room id
	myroom = path[1];
}
socket.emit('client-register', {name: myname, type: 'screen', room: myroom });

// Socket Events
socket.on('controller-input', function(data) {
	Screen.controller_input(data);
});

socket.on('server-controller-join', function(data) {
	socket.emit('screen-controller-join', Screen.controller_join(data));
});

socket.on('server-controller-leave', function(data) {
	Screen.controller_leave(data);
});

socket.on('server-screen-ready', function(data) {
	if (data.success) {
		$(function() {Screen.init();});
	} else {
		console.log(data.error);
	}
});