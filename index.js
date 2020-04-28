var pics_src = new Array("images/sea.jpg","images/leaf.jpg","images/flower.jpg");
var num = -1;

slideshow_timer();

function slideshow_timer(){
    if (num == 2){
        num = 0;
    }
    else {
        num ++;
    }
    document.getElementById("mypic").src=pics_src[num];
    setTimeout("slideshow_timer()",5000);
}