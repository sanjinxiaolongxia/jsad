var code = "$Jp8Qc2rN46t$ https://m.tb.cn/h.VwRXfkz";
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
