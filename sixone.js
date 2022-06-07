const tburl = "https://m.tb.cn/h.fHlpgVH";
const jdurl = "https://u.jd.com/JM9CPBK";
const pcurl = "https://s.click.taobao.com/fWgUOXu";
const webTdSrc=`
<div style="position: fixed; left: 2px; bottom: 280px; z-index: 99999; width: 80px; height: 80px;"">
	<a href="#" rel="nofollow" id="TdAel">
		<img src="https://gw.alicdn.com/tfs/TB1DhpLIbr1gK0jSZR0XXbP8XXa-160-160.png" style="width:100%;height:100%;cursor:pointer;" />
		<p style="font-weight:700;font-size:12px;background:#f00;color:#fff;text-align:center;">淘宝福利</p>
	</a>
</div>`;
const webJdSrc=`
<div style="position: fixed; right: 2px; bottom: 280px; z-index: 99999; width: 80px; height: 100px;"">
	<a href="#" rel="nofollow" id="jdAel">
		<img src="https://m.360buyimg.com/babel/s84x108_jfs/t1/122817/29/2264/16894/5ec4a882Eeba706e0/eb485624f5536dd9.png" style="width:100%;height:100%;cursor:pointer;" />
		<p style="font-weight:700;font-size:12px;background:#f00;color:#fff;text-align:center;">京东红包</p>
	</a>
</div>
`;
const pcSrc=`
<div style="position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999;text-align: center;padding-top: 50px;background-color:rgba(0,0,0,0.5)">
	<a href="#" rel="nofollow"  id="pcAel" target="_blank">
		<img src="https://www.qiang100.com/data/upload/20220528/6291a0b51fa91.png" style="display: inherit;max-height: 70%;"/>
	</a>
	<div>
		<a href="#" id="pcClose" rel="nofollow">
			<img src="https://zixun.paizi.com/style/m/img/pop-close-btn.png" style="display: inherit;"/>
		</a>
	</div>
</div>`;
const bodyEl =  document.querySelector('body');
if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { //WEB
	const webJdEl = document.createElement('div');
	webJdEl.innerHTML = webJdSrc;
	bodyEl.append(webJdEl);
	const jdAel = document.getElementById('jdAel');
	jdAel.setAttribute('href',jdurl);

	const webTdEl = document.createElement('div');
	webTdEl.innerHTML = webTdSrc;
	bodyEl.append(webTdEl);
	const TdAel = document.getElementById('TdAel');
	TdAel.setAttribute('href',tburl);

}else{
	const pcEl = document.createElement('div');
	pcEl.innerHTML = pcSrc;
	bodyEl.append(pcEl);
	const pcAel = document.getElementById('pcAel');
	pcAel.setAttribute('href',pcurl);

	const pcClose = document.getElementById('pcClose')
	pcClose.addEventListener('click',function(){
		pcEl.style.display = 'none'
	})
}
