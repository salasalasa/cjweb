myReady(function(){
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
  // 菜单栏滑动
  function slideMove(obj,iTarget)
  {
    clearInterval(obj.timer)
    obj.timer=setInterval(function()
      {
        isSpeed+=(iTarget-obj.offsetLeft)/9;
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
});

/*获取样式*/
function getStyle(obj,attr)
{
    if(obj.currentStyle)
    {
        return obj.currentStyle[attr];
    }
    else
    {
        return getComputedStyle(obj,false)[attr]
    }
}

/*兼容性获取class*/
 function getByClass(obj, sName)
{
  var aEle=document.getElementsByTagName('*');
  var aResult=[];
  // 遍历dom树，筛选class选择器
  for(var i=0;i<aEle.length;i++)
  {
    if(aEle[i].className==sName)
    {
        aResult.push(aEle[i]);
    }
  }
  return aResult;
}

/*链式运动框架*/
function startMove(obj,attr,iTarget,fn)
{
  // 清除定时器
	clearInterval(obj.timer);
  // 开定时器
    obj.timer=setInterval(function()
        {
          var iCur=0;
          // 获取并保存样式至iCur
          if(attr=="opacity")
          {
            // 透明度浮点取整，样式*100消除小数
             iCur=parseInt(parseFloat(getStyle(obj,attr))*100);
          }
          else
          {
             iCur=parseInt(getStyle(obj,attr));
          }
            // 设置速度
            var iSpeed=(iTarget-iCur)/10;
             iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
            if(iCur==iTarget)
            {
                clearInterval(obj.timer);
                // 存在fn函数再运行，兼容ie
                if(fn)
                {
                  fn();
                }
            }
            else
            {
              if(attr=="opacity")
              {
                // 兼容低版本ie
                obj.style.filter="alpha(opcity:"+(iCur+iSpeed)+")";
                // 取样式*100，此处除去100
                obj.style.opacity=(iCur+iSpeed)/100;
              }
              else
              {
                obj.style[attr]=iCur+iSpeed+"px";
              }
                
            }
        },30)
}