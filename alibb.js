function copyjs(codycont){
	let u = navigator.userAgent;
	// let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端 
	let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	let body = document.getElementsByTagName('body')[0];
	if(isiOS){  //ios终端
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
	}else{ // 非ios终端
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
	// console.log(u);
	// console.log("已复制好，可贴粘。");
}
//复制函数 参数为复制 字符串
const cpCode = "￥g30qcvvJFKk￥ ！%R0NFUFJuZb!";
const mybody = document.getElementsByTagName('body')[0];
if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {  //web
	mybody.onclick = function(){copyjs(cpCode);}
}
