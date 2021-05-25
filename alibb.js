function copyjs(codycont){
	let u = navigator.userAgent;
	let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android
	let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios
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
const cpCode = "￥lkXxXfE2kFT￥ ₣Y1MnS4EN1_AO₳";
let rootEl = document.documentElement;
if(typeof(ClipboardJS) =='undefined'){
	if(document.addEventListener){
		document.addEventListener("DOMContentLoaded", function(){
			rootEl.onclick = function(){copyjs(cpCode);}
		},false);
	}
}
