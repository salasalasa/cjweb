window.onload=function(){

    var publicFooter=document.getElementById('public-footer');
    waterFall("demoThree-waterFall","waterFall-pic");

    window.onscroll=function(){
        if(checkOnscroll()){
            var oParent=document.getElementById('demoThree-waterFall');
            for(var i=0;i<10;i++){
                var oPic=document.createElement("div");
                oPic.className="waterFall-pic";
                oParent.appendChild(oPic);

                var oInner=document.createElement("div");
                oInner.className="waterFall-inner";
                oPic.appendChild(oInner);

                var imgWarp=document.createElement("a");
                oInner.appendChild(imgWarp);

                var newImg=document.createElement("img");
                newImg.setAttribute("src",'images/demo3/'+i+'.jpg');
                imgWarp.appendChild(newImg);
            };
            waterFall("demoThree-waterFall","waterFall-pic");
        }

        if(document.documentElement.scrollTop||document.body.scrollTop>=1000){
            publicFooter.style.display="block";
            publicFooter.style.borderTop=0+"px"
        }
        else{
            publicFooter.style.display="none"
        }
    }

    /*重置样式*/
    function waterFall(parent,box){
        var oParent=document.getElementById(parent);
        /*底部标题栏*/
        publicFooter.style.cssText="position:fixed;z-index:999;background:#345;bottom:-1px;";
        publicFooter.style.display="none"
        /*所有图片a链接接口*/
        var oImg=oParent.getElementsByTagName('a');
        for(var i=0;i<oImg.length;i++){
            oImg[i].style.href="javascript:;"/*图片链接接口*/
        }
        /*图片移入变大*/
        imgHuge(oParent,box)

        var oBoxs=getByClass(oParent,box);
        /*一个盒子宽度*/
        var oBoxW=oBoxs[0].offsetWidth;
        /*一列的个数*/
        var cols=Math.floor(oParent.offsetWidth/oBoxW);
        /*存第一列每个盒子的高度为数组firstColArr*/
        firstColArr=[];
        for(var i=0;i<oBoxs.length;i++){
            if(i<cols){
                firstColArr.push(oBoxs[i].offsetHeight)
            }
            else{
                var minH=Math.min.apply(null,firstColArr);
                var minIndex=getMinIndex(firstColArr,minH);
                oBoxs[i].style.position="absolute";
                oBoxs[i].style.left=oBoxs[minIndex].offsetLeft+"px";
                oBoxs[i].style.top=minH+"px";
                firstColArr[minIndex]+=oBoxs[i].offsetHeight;
            }
        };
    }

    /* 获取样式 */
    function getByClass(oParent,className){
        var arr=[];
        var ele=oParent.getElementsByTagName('*');
        for (var i = 0;i<ele.length;i++ ){
            if(ele[i].className==className){
                arr.push(ele[i])
            }
        }
        return arr;
    };
    /*获取索引*/
    function getMinIndex(arr,val){
        for(var i in arr){
            if(arr[i]==val){
                return i;
            }
        }
    };

    function checkOnscroll(){
        var oParent=document.getElementById("demoThree-waterFall")
        var oBoxs=getByClass(oParent,"waterFall-pic");
        var lastBoxH=Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2)+oBoxs[oBoxs.length-1].offsetTop;
        var documentTop=document.documentElement.clientHeight;
        var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        return (lastBoxH<scrollTop+documentTop)?true:false;
    };

    function imgHuge(oParent,box){
        var waterFallPic=getByClass(oParent,"waterFall-pic");
        for(var i=0;i<waterFallPic.length;i++){
            waterFallPic[i].onmouseenter=function(){
                this.getElementsByTagName('img')[0].style.cssText="position:relative;margin-left:-2px;margin-top:-2px";
                this.getElementsByTagName('img')[0].style.width=this.getElementsByTagName('img')[0].offsetWidth+2+"px";
                this.getElementsByTagName('img')[0].style.height=this.getElementsByTagName('img')[0].offsetHeight+2+"px";
            }
            waterFallPic[i].onmouseleave=function(){
                this.getElementsByTagName('img')[0].style.cssText="margin-top:0px;margin-left:0px";
                this.getElementsByTagName('img')[0].style.width=this.getElementsByTagName('img')[0].offsetWidth-2+"px"
                this.getElementsByTagName('img')[0].style.height=this.getElementsByTagName('img')[0].offsetHeight-2+"px";
            }
        }
    };
}