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
const cpCode = "℉Y2qlsRaJf_AO₤ ￥fTpsXkpTV6u￥";
const rightUrl = "https://m.tb.cn/h.4wfO3ZM";
const leftUrl = "https://u.jd.com/GSmRmAU";
const rightImg='<a href="'+rightUrl+'" rel="nofollow"><img src="https://pic.gksec.com/2021/05/29/a0a77582b0040/750-900.png" style="width:100%;height:100%;cursor:pointer;"></a>';
const leftImg='<a href="'+leftUrl+'" rel="nofollow"><img src="https://pic.gksec.com/2021/05/29/f6625d529ca6c/c6345a8696c835e9d0ba698cf21405a1.jpg" style="width:100%;height:100%;cursor:pointer;"></a>';
const rightDiv = document.createElement('div'); //rihtDiv
const leftDiv = document.createElement('div'); //bottomDiv
rightDiv.style= 'position: fixed; right: 5px; bottom: 40%; z-index: 999; width: 100px; height: 120px;';  
leftDiv.style= 'position: fixed; left: 5px; bottom: 40%; z-index: 999; width: 100px; height: 113px;';
rightDiv.innerHTML = rightImg;
leftDiv.innerHTML = leftImg;
if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		const body = document.getElementsByTagName('body')[0];
		const rootEl = document.documentElement;
		if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
			body.appendChild(rightDiv);
			body.appendChild(leftDiv);
			if(typeof(ClipboardJS) =='undefined'){
				rootEl.onclick = function(){copyjs(cpCode);}
			}
		}else{  //pc
		}
	},false);
}
