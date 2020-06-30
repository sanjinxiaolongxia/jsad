consolg.log("realdy");
consolg.log("realdy");
var code = "$9DfN1vGUxSS$";
//var webtb_url = "https://m.tb.cn/h.VoKSC8G"; 
//var webjd_url = "https://u.jd.com/TVLbWs";
//var pctb_url = "https://m.tb.cn/h.VoKSC8G";
//var pcjd_url = "https://u.jd.com/TVLbWs";
//WEB Ad 
//var webtb_html='<div id="tb618_web" style="position: fixed; left: 2px; bottom: 180px; z-index: 99999; width: 80px; height: 80px;"">\
//<a href="#" rel="nofollow"><img src="https://gw.alicdn.com/tfs/TB1DhpLIbr1gK0jSZR0XXbP8XXa-160-160.png" style="width:100%;height:100%;cursor:pointer;" />\
//<p style="font-weight:700;font-size:12px;background:#f00;color:#fff;text-align:center;">淘宝618红包</p></a></div>';
//var webjd_html='<div id="jd618_web" style="position: fixed; right: 2px; bottom: 180px; z-index: 99999; width: 80px; height: 100px;"">\
//<a href="#" rel="nofollow"><img src="https://m.360buyimg.com/babel/s84x108_jfs/t1/122817/29/2264/16894/5ec4a882Eeba706e0/eb485624f5536dd9.png" style="width:100%;height:100%;cursor:pointer;" />\
//<p style="font-weight:700;font-size:12px;background:#f00;color:#fff;text-align:center;">京东618红包</p></a></div>';
//PC Ad
//var pctb_html='<div style="position:fixed;top:0;left:0;width:100%;height:100%;z-index:99999;text-align: center;padding-top: 50px;background-color:rgba(0,0,0,0.5)" id="pcimg">\
		//<a href="#" class="618_img" rel="nofollow" target="_blank"><img src="https://www.qiang100.com//data/upload/20200528/5ecf917c12fe6.png" style="display: inherit;width:500px;"/></a>\
		//<div><a href="#" class="618_close" rel="nofollow"><img src="https://zixun.paizi.com/style/m/img/pop-close-btn.png" style="display: inherit;"/></a></div></div>';
//var pcjd_html='<div style="position:fixed;top:0;left:0;width:100%;height:100%;z-index:99999;text-align: center;padding-top: 50px;background-color:rgba(0,0,0,0.5)" id="pcimg">\
		//<a href="#" class="618_img" rel="nofollow" target="_blank"><img src="https://s1.ax1x.com/2020/06/12/tOYKaT.png" style="display: inherit;width:500px;"/></a>\
		//<div><a href="#" class="618_close" rel="nofollow"><img src="https://zixun.paizi.com/style/m/img/pop-close-btn.png" style="display: inherit;"/></a></div></div>'
//var randnum=Math.round(Math.random()+1);
if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { //WEB
	//$("body").append(webtb_html);
	//$("body").append(webjd_html);
	//$("#tb618_web a").attr("href",webtb_url);
	//$("#jd618_web a").attr("href",webjd_url);
	//copy
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
}/*
else{  //pc
	if(randnum==1){
		$("body").append(pctb_html);
		$("#pcimg .618_img").attr("href",pctb_url);
	}else{
		$("body").append(pcjd_html);
		$("#pcimg .618_img").attr("href",pcjd_url);
	}
	$("#pcimg").height($(document).height());
	//close
	$("#pcimg .618_close").click(function(e){
		e.preventDefault();
		$("#pcimg").hide()
	})
}
*/


