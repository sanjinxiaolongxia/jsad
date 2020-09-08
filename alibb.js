var tbcode = "7.0緮置本段内容￥ql3Sce5M8Cc￥到👉ta0寶👈或掂击炼接 https://m.tb.cn/h.VxniWVx 至流览器【淘宝99划算节-主会场】";
var tburl = "https://s.click.taobao.com/nivhkwu";
var webtb_html='<div id="tb618_web" style="position: fixed; left: 2px; bottom: 280px; z-index: 99999; width: 80px; height: 80px;"">\
<a href="#" rel="nofollow"><img src="https://img03.sogoucdn.com/app/a/100520146/972b58dc575b929264c9a4c06e4216a5" style="width:100%;height:100%;cursor:pointer;" />\
<p style="font-weight:700;font-size:12px;background:#f00;color:#fff;text-align:center;">淘宝福利</p></a></div>';

if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { //WEB
	console.log('WEB');
	$("body").append(webtb_html);
	$("#tb618_web a").attr("href",tburl);
	setTimeout(function () {
	var clipboard = new ClipboardJS('a', {
		text: function () {
			return tbcode;
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
