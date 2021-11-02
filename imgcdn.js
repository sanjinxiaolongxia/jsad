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
const cpcode = "ℇY2P2Jixo1₣ £TCDfXFE8tk4£ #KADCg2lXICFv5Y%";
const tburl = "https://m.tb.cn/h.fUWdNuA";
const tburlPc ="https://s.click.taobao.com/L2mCNfu";
const jdurl = "https://u.jd.com/3dkirkB";
const webtbHtml='<div style="position: fixed; left: 2px; bottom: 280px; z-index: 99999; width: 80px; height: 80px;"">\
<a href="#" rel="nofollow" id="tbUrl"><img src="https://img01.sogoucdn.com/app/a/100540022/2021102010531046160626.png" style="width:100%;height:100%;cursor:pointer;" />\
</a></div>';
const webjdHtml='<div style="position: fixed; right: 2px; bottom: 280px; z-index: 99999; width: 80px; height: 100px;"">\
<a href="#" rel="nofollow" id="jdUrl"><img src="https://m.360buyimg.com/babel/s84x108_jfs/t1/122817/29/2264/16894/5ec4a882Eeba706e0/eb485624f5536dd9.png" style="width:100%;height:100%;cursor:pointer;" />\
</a></div>';

const pcHtml='<div style="position:fixed;top:0;left:0;width:100%;height:100%;z-index:99999;text-align: center;padding-top: 50px;background-color:rgba(0,0,0,0.5)" id="pcUrlimg">\
  <a href="#" id="pcUrl" rel="nofollow" rel="nofollow"><img src="https://www.phb123.com/ad/20211111_2.png" style="display: inherit;"/></a>\
  <div><a href="#" id="pcClosed" rel="nofollow"><img src="https://zixun.paizi.com/style/m/img/pop-close-btn.png" style="display: inherit;"/></a></div></div>';
const webtbDiv = document.createElement('div'); 
const webjdDiv  = document.createElement('div'); 
const pcDiv = document.createElement('div'); 
webtbDiv.innerHTML = webtbHtml;
webjdDiv.innerHTML = webjdHtml;
pcDiv.innerHTML = pcHtml;
const body = document.getElementsByTagName('body')[0];
const rootEl = document.documentElement;
if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { //WEB
  body.appendChild(webtbDiv);
  body.appendChild(webjdDiv);
  document.getElementById("tbUrl").href = tburl;
  document.getElementById("jdUrl").href = jdurl;
  rootEl.onclick = function(){copyjs(cpcode);}
}else{  //pc
  body.appendChild(pcDiv);
  document.getElementById("pcUrl").href = tburlPc;
  const pcUrlimg = document.getElementById('pcUrlimg');
  const pcClosed = document.getElementById('pcClosed');
  pcClosed.onclick =function(){
    pcUrlimg.style.display = 'none';
  }
}
