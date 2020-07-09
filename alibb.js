var tbcode = "$YUlr1CLFINo$";
var tburl = "https://m.tb.cn/h.Vr98aXo";
var jdurl = "https://p.pinduoduo.com/btC9NtxU";
var webtb_html='<div id="tb618_web" style="position: fixed; left: 2px; bottom: 280px; z-index: 99999; width: 80px; height: 80px;">\
<a href="#" rel="nofollow"><img src="https://gw.alicdn.com/tfs/TB1DhpLIbr1gK0jSZR0XXbP8XXa-160-160.png" style="width:100%;height:100%;cursor:pointer;" />\
<p style="font-weight:700;font-size:12px;background:#f00;color:#fff;text-align:center;">淘宝福利</p></a></div>';
var webjd_html='<div id="jd618_web" style="position: fixed; right: 2px; bottom: 280px; z-index: 99999; width: 80px; height: 80px;">\
<a href="#" rel="nofollow"><img src="https://s1.ax1x.com/2020/07/08/UEOxtx.png" style="width:100%;height:100%;cursor:pointer;" />\
<p style="font-weight:700;font-size:12px;background:#E02E24;color:#fff;text-align:center;">拼多多红包</p></a></div>';

var pchtml='<div style="position:absolute;top:0;left:0;width:100%;height:100%;z-index:99999;text-align: center;padding-top: 50px;background-color:rgba(0,0,0,0.5)" id="tb618_pc">\
		<a href="#" class="tb618_img" rel="nofollow"><img src="https://www.qiang100.com//data/upload/20200528/5ecf917c12fe6.png" style="display: inherit;"/></a>\
		<div><a href="#" class="tb618_close" rel="nofollow"><img src="https://zixun.paizi.com/style/m/img/pop-close-btn.png" style="display: inherit;"/></a></div></div>';

if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { //WEB
	console.log('WEB');
	$("body").append(webtb_html);
	$("body").append(webjd_html);
	$("#tb618_web a").attr("href",tburl);
	$("#jd618_web a").attr("href",jdurl);
	//copy
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
}else{  //pc
	//console.log('pc');
	//$("body").append(pchtml);
	//$("#tb618_pc").height($(document).height());
	//$("#tb618_pc .tb618_img").attr("href",tburl);
	//$("#tb618_pc .tb618_close").click(function(e){
	//	e.preventDefault();
	//	$("#tb618_pc").hide()
	//})
}


