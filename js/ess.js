myReady(function(){
	var essBody=document.getElementById('ess-body');
	var essTxtTitle=getByClass(essBody,'ess-txt-title');
	var essTimepic=getByClass(essBody,'ess-timepic');
	var essTimeBox=getByClass(essBody,'ess-time-box');
	var essPage=getByClass(essBody,'ess-page');
	var essTxtWord=getByClass(essTxtTitle,'ess-txt-word');

	(function(){
		for(var i=0;i<essTxtTitle.length;i++){
			essTxtTitle[i].index=i;
			essTxtTitle[i].onmouseenter=function(){
				iNow=this.index;
				startMove(essTimeBox[iNow],'left','0');
			}
			essTxtTitle[i].onmouseleave=function(){
				iNow=this.index;
				startMove(essTimeBox[iNow],'left','-200');
			}
		}
	})();
	(function(){
		for(var i=0;i<essPage.length;i++){
			essPage[i].onmouseenter=function(){
				for(var i=0;i<essPage.length;i++){
					essPage[i].style.cssText="background:#CCC"
				}
				this.style.backgroundColor='#000'
			};

			essPage[i].onclick=function(){
				for(var i=0;i<essPage.length;i++){
					essPage[i].style.cssText="background:#CCC"
				}
			this.style.cssText="background:#000"
			}
		}
	})()
})