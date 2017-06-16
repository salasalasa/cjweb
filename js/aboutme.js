myReady(function(){
	var publicHeader=document.getElementById('public-header');
	var publicNav=getByClass(publicHeader,'public-nav')[0];
	var headLine=getByClass(publicNav,'head-line')[0];
	var publicNavList=getByClass(publicNav,'public-nav-list');
	var aboutMeBody=document.getElementById('aboutme-body');
	var aboutMeHead=getByClass(aboutMeBody,'aboutme-head')[0];
	var aboutMeLogoBox=getByClass(aboutMeBody,'aboutme-head-logo')[0];
	var aboutMelogo=aboutMeLogoBox.getElementsByTagName('a')[0];
	var aboutmeHeadDecoration=getByClass(aboutMeHead,'aboutme-head-decoration')[0];
	var aboutmeHeadCover=getByClass(aboutMeLogoBox,'aboutme-head-cover')[0];
	var aboutMeLogoBoxImg=aboutMeLogoBox.getElementsByTagName('img')[0];
	var aboutmeIntrBoxTxt=getByClass(aboutMeBody,'aboutme-intr-box')[0].getElementsByTagName('li');
	//菜单栏缓冲运动回调函数
	(function(){
		for(var i=0;i<publicNavList.length;i++)
	{
		publicNavList[i].onmouseenter=function()
		{
			var offsetPosition=parseInt(this.offsetLeft+this.offsetWidth/2-headLine.offsetWidth/2);
			//引入缓冲运动框架
			slideMove(headLine,offsetPosition);
			
		}
	}
	})()
	
	// 修饰线滑动出现
	startMove(aboutmeHeadDecoration,'width','1000');
	// 头像下滑
	timer3=setInterval(function()
		{
			var logoSpeed=aboutMelogo.offsetTop-90;
			logoSpeed*=1.009;
			aboutMelogo.style.top=logoSpeed+'px';
			if(aboutMelogo.offsetTop>=100)
			{
				clearInterval(timer3)
				// 头像设置
				startMove(aboutmeHeadCover,'top','110')
				aboutMeLogoBoxImg.onmouseover=aboutmeHeadCover.onmouseenter=function()
				{
					startMove(aboutmeHeadCover,'top','200');
				}
				aboutMeLogoBoxImg.onmouseleave=aboutmeHeadCover.onmouseleave=function()
				{
					startMove(aboutmeHeadCover,'top','110')
				}
			}
		},30);
		(function(){
			for(var i=0;i<aboutmeIntrBoxTxt.length;i++){
				aboutmeIntrBoxTxt[i].style.left=-(300+i*400)+"px";
				startMove(aboutmeIntrBoxTxt[i],"left","0")
			}
		})()

	//滚动时修饰线出现
	window.onscroll=function()
	{
		var aboutmeSkill=getByClass(aboutMeBody,'aboutme-skill');
		var aboutMeSkillLine=getByClass(aboutmeSkill,'aboutme-h2-line');
		var aboutmeSkillImg=getByClass(aboutmeSkill,'aboutme-skill-img');
		var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		if(scrollTop>=400)
		{
			startMove(aboutMeSkillLine[0],'width','250')
		}
		if(scrollTop>=900){
			startMove(aboutMeSkillLine[1],'width','250');
			for(var i=0;i<aboutmeSkillImg.length;i++)
			{
				startMove(aboutmeSkillImg[i],'opacity','100')
			}
		}
		if(scrollTop>=1100){
			startMove(aboutMeSkillLine[2],'width','250');
		};
	}

})