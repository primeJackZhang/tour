
//------首页轮播图----
	$(function(){
		var myTouch = util.toucher(document.getElementById('banner'));  
  
		myTouch.on('swipeLeft',function(e){  
		    $('#carright').click();  
		}).on('swipeRight',function(e){  
		    $('#carleft').click();  
		});  

	});

//----------推荐特惠滑动-----------
window.onload=function(){

    var W=document.documentElement.getBoundingClientRect().width;
    console.log(W);
    var startX,startY,endX,endY,time,isScrolling;
    var banner=document.getElementById("dest-banner");
    var slider=document.getElementById("dest-slider");
    var sWidth=slider.getBoundingClientRect().width;
    var maxWidth=W-sWidth;
    slider.style.left=0;
    
    banner.addEventListener("touchstart",function(event){
         var touch=event.targetTouches[0];
         startX=touch.pageX;
         startY=touch.pageY;
         console.log(startX,startY)
         isScrolling=0;
    },false);

    banner.addEventListener("touchmove",function(event){
        // console.log("move");
        var touch=event.targetTouches[0];
            endX=touch.pageX;
            endY=touch.pageY;
            endPosX=endX-startX;
            endPosY=endY-startY;
            startX=endX;
            startY=endY;
            isScrolling=Math.abs(endPosX)<Math.abs(endPosY)?1:0;
            
            //1：上下，0：左右
            // console.log(isScrolling);
            if (isScrolling == 0){
                event.preventDefault(); //把滚动条的移动阻止了
            	slider.style.left=parseInt(slider.style.left)+endPosX+"px";
            	if(parseInt(slider.style.left)>=0){
            		slider.style.left="0px";
            	}else if(parseInt(slider.style.left)<=maxWidth){
            		slider.style.left=maxWidth+"px";
            	}
             	// console.log(slider.style.left);
            	// console.log(endPosX);
            }
        },false);

          banner.addEventListener("touchend",function(){
            console.log("end");
     },false);  
}
//***********地理定位***********
var x=document.getElementById("local");
function getLocation()
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition);
    }
  else{x.innerHTML="Geolocation is not supported by this browser.";}
  }
function showPosition(position)
  {
  x.innerHTML="Latitude: " + position.coords.latitude +
  "<br />Longitude: " + position.coords.longitude;
  }






