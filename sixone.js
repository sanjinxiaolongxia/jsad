const tburl = "https://m.tb.cn/h.fHlpgVH";
const jdurl = "https://u.jd.com/NdC2OYM";
const pcurl = "https://u.jd.com/NwCvH43";
const webTdSrc=`
<div style="position: fixed; left: 2px; bottom: 280px; z-index: 99999; width: 80px; height: 80px;"">
	<a href="#" rel="nofollow" id="TdAel">
		<img src="https://gw.alicdn.com/tfs/TB1DhpLIbr1gK0jSZR0XXbP8XXa-160-160.png" style="width:100%;height:100%;cursor:pointer;" />
	</a>
</div>`;
const webJdSrc=`
<div style="position: fixed; right: 2px; bottom: 280px; z-index: 99999; width: 80px; height: 100px;"">
	<a href="#" rel="nofollow" id="jdAel">
		<img src="https://www.qiang100.com/data/upload/20210524/60ab188d5dd43.png" style="width:100%;height:100%;cursor:pointer;" />
	</a>
</div>
`;
const pcSrc=`
<div style="position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999;text-align: center;padding-top: 50px;background-color:rgba(0,0,0,0.5)">
	<a href="#" rel="nofollow"  id="pcAel" target="_blank">
		<img src="https://www.qiang100.com/data/upload/20210524/60ab188d5dd43.png" style="display: inherit;max-height: 70%;"/>
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
