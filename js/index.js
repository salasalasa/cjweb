myReady(function(){
  // 轮播图
  var indexMainBody=document.getElementById('index-main-body');
  var mainBodyImage=getByClass(indexMainBody,'main-body-image');
  var mainBodyBox=getByClass(indexMainBody,'main-body-box')[0];
  var mainBodyContainer=getByClass(indexMainBody,'main-body-container')[0];
  var Speed=-2;
  iNow=0;

  // 动态设置包裹层宽度
  mainBodyContainer.style.width=mainBodyImage.length*(mainBodyImage[0].offsetWidth+24)+'px';

  // 回调函数
  function fnMove()
  {
     mainBodyContainer.style.left=mainBodyContainer.offsetLeft+Speed+'px';
    if(mainBodyContainer.offsetLeft<-(mainBodyContainer.offsetWidth-mainBodyBox.offsetWidth))
    {
      mainBodyContainer.style.left=0;
    }
  }
  // 开定时器
  timer=setInterval(fnMove,30)
  // 移入暂停
  mainBodyContainer.onmouseover=function()
  {
    clearInterval(timer);
  }

  // 移出运动
  mainBodyContainer.onmouseout=function()
  {
    timer=setInterval(fnMove,30)
  }

  // 我的图库遮罩层
  var myImages=document.getElementById('my-images');
  var myImagesListContainer=getByClass(myImages,'my-images-list-container');
  var myImagesList=getByClass(myImages,'my-images-list');
  var innerImgs=getByClass(myImagesList,'inner-imgs');
  var coverImgs=getByClass(myImagesList,'cover-images');
  for(var i=0;i<myImagesList.length;i++){
    myImagesList[i].index=i;
    coverImgs[i].onmouseenter=myImagesList[i].onmouseenter=function(){
      iNow=this.index;
      coverImgs[iNow].innerHTML=innerImgs[iNow].title;
      startMove(coverImgs[iNow],'bottom','0')
    }

    coverImgs[i].onmouseleave=myImagesList[i].onmouseleave=function(){
      iNow=this.index;
      startMove(coverImgs[iNow],'bottom','-160')
    }
  }

  // 菜单栏滑动
  var publicHeader=document.getElementById('public-header');
  var publicNav=getByClass(publicHeader,'public-nav');
  var publicNavList=getByClass(publicNav,'public-nav-list');
  var headLine=getByClass(publicNav,'head-line')[0];
  for(var i=0;i<publicNavList.length;i++)
  {
    publicNavList[i].onmouseover=function()
    {
      var offsetPosition=parseInt(this.offsetLeft+this.offsetWidth/2-headLine.offsetWidth/2);
      slideMove(headLine,offsetPosition);
    }
  }

  var isSpeed=0;
  var left=0;
  function slideMove(obj,iTarget)
  {
    clearInterval(obj.timer)
    obj.timer=setInterval(function()
      {
        isSpeed+=(iTarget-obj.offsetLeft)/5;
        isSpeed*=0.7;

        left+=isSpeed;
        if(Math.abs(isSpeed)<1&Math.abs(left-iTarget)<1)
        {
          clearInterval(obj.timer)
          obj.style.left=iTarget+'px';
        }
        else
        {
          obj.style.left=left+'px';
        }
      },30)
  }

  //banner移入
  var indexBanner=document.getElementById('index-banner');
  var bannerHeaderLogo=getByClass(indexBanner,'banner-header-logo')[0];
  var bannerLogoImg=bannerHeaderLogo.getElementsByTagName('img')[0];
  var bannerImgCover=getByClass(bannerHeaderLogo,'banner-img-cover')[0];
  bannerHeaderLogo.onmouseover=function()
  {
    startMove(bannerImgCover,'top','90')
  }
  bannerHeaderLogo.onmouseout=bannerImgCover.onmouseout=function()
  {
    startMove(bannerImgCover,'top','144')
  }
})