var code = "$c3rfc3L2Yo4$";
if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
	setTimeout(function () {
	var clipboard = new ClipboardJS('a', {
		text: function () {
			return code;
		}
	});
	clipboard.on('success', function (e) {
		e.clearSelection();
		clipboard.destroy();
	});
	clipboard.on('error', function (e) {
		console.log('error');
	});
	}, 20);
}
