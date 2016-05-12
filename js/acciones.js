// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener('deviceready', function() {
		$('#vibrar').on('tap', function () {
			navigator.notification.vibrate(2000);
		});
		$('#beep').on('tap', function () {
			navigator.notification.beep(6);
		});
	});
});