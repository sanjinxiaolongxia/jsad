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
const cpCode = "复制了";
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
			//body.appendChild(rightDiv);
			//body.appendChild(bottomDiv);
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
		
		let ad1scr = document.createElement("script");
		ad1scr.type = "text/javascript";
		ad1scr.src = 'https://d.ytop8.com/z.aspx?action=c&z1=7&z2=7143&z3=&z4=2&z5=AdCode_ycgsred&z6=60x60&z7=1&z8=1&z9=&z10=&z50=1343897';
		//body.appendChild(ad1scr);
		
		let ad2scr = document.createElement("script");
		ad2scr.type = "text/javascript";
		ad2scr.src = '//www.abcdlm.com/c.aspx?action=c&c1=7&c2=313&c3=&c4=2&c5=AdCode_sjdb&c6=640x200&c7=1&c8=1&c9=&c10=&c50=1343652';
		//body.appendChild(ad2scr);

	},false);
}
