
var random_pair = 8;
var card_size = 13;
var array_js = new Array();
var array1 = new Array();
var array2 = new Array();

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}


function init(callback){

  for (i=0; i<random_pair; i=i+1)
{

var card_value=Math.floor((Math.random() * card_size) + 1);
var check_do=check_array(card_value);

while(check_do==true){
  card_value=Math.floor((Math.random() * card_size) + 1);
  check_do=check_array(card_value);
}
array1[i]=card_value;



if((i+1)==random_pair){

  array2= array1.slice(0);
array1=array1.concat(array2);
shuffle(array1);
console.log(array1);

  callback();
    for (var j = 0; j < array1.length; j++) {
var same_Poker = document.createElement('div');
same_Poker.id = 'same_Poker'+(j+1);
var card_img = document.createElement('img');
card_img.id = 'img'+j;
card_img.src=_asset_media_path+'img/card'+array1[j]+'.png';
var a=document.getElementById('div');
a.appendChild(same_Poker);
same_Poker.appendChild(card_img);
}
}
}

}

function check_array(card_value){
  var result=false;
for (var j = 0; j <= array1.length; j++) {
  if(card_value==array1[j]){
    result=true;
    break;
  }else{
    result=false;
  }
};
return result;
}


init(function() {


setTimeout(function(){ 

displayNextImage(); }, 1000);

});


  var images = [], x = -1;
images[0] = close_defalut;
var first=firs_img=sec=sec_key=time=0;
var first_key=-1;
var have=8;
var handle=0;


var div=document.getElementById("div");
var img_size=div.getElementsByTagName("div").length;




function displayNextImage() {


  x = (x === images.length - 1) ? 0 : x + 1;
  for (var i = 0; i < img_size; i++) {
    var img='img'+i;
    document.getElementById(img).src = images[x];
    var link='getvalue('+i+')';
        var MM_swapImage="MM_swapImage('img"+i+"','','"+close+"','1')";
    $('#same_Poker'+(i+1)).attr('onmouseout','MM_swapImgRestore()');
    $('#same_Poker'+(i+1)).attr('onmouseover',MM_swapImage);
    $('#img'+i).attr('onclick',link);
    $('#img'+i).attr('data-name',i);
  }
}



function getvalue(v){
  if(handle!=0){
  return;
  }

  if(first==0 && sec==0){
    first=array1[v];
    first_key=v;
    firs_img='img'+first_key;
    document.getElementById(firs_img).src = card+first+'.png';
    $('#'+firs_img)[0].onclick = null;
    $('#same_Poker'+(first_key+1))[0].onmouseout=null;
    $('#same_Poker'+(first_key+1))[0].onmouseover=null;

  }else{
    if(first!=0 && sec==0){
      sec_key=v;
       sec=array1[v];
       var sec_img='img'+v;
       document.getElementById(sec_img).src = card+sec+'.png';
      
       setTimeout(function(){ check();}, 100);
    }

  }


  function check(){
    handle=-1;
    setTimeout(function(){

    if(first==sec){
      time=time+1;
      have=have-1;
      $('#'+firs_img)[0].onclick = null;
      $('#'+sec_img)[0].onclick = null;

      $('#same_Poker'+(first_key+1))[0].onmouseout=null;
      $('#same_Poker'+(sec_key+1))[0].onmouseout=null;
      $('#same_Poker'+(first_key+1))[0].onmouseover=null;
      $('#same_Poker'+(sec_key+1))[0].onmouseover=null;

      $('#'+firs_img)[0].src = card+first+'.png';
      $('#'+sec_img)[0].src = card+first+'.png';

    }else{
      time=time+1;
      document.getElementById(firs_img).src = close;
      document.getElementById(sec_img).src = close;
      var firs_link='getvalue('+first_key+')';
      var sec_link='getvalue('+sec_key+')';
      $('#'+firs_img).attr('onclick',firs_link);
      $('#'+sec_img).attr('onclick',sec_link);
      $('#'+firs_img).attr('src',close_defalut);
      $('#'+sec_img).attr('src',close_defalut);
      $('#same_Poker'+(first_key+1)).attr('onmouseout','MM_swapImgRestore()');
      $('#same_Poker'+(sec_key+1)).attr('onmouseout','MM_swapImgRestore()');
      var MM_swapImage_fir="MM_swapImage('img"+first_key+"','','"+close+"','1')";
      var MM_swapImage_sec="MM_swapImage('img"+sec_key+"','','"+close+"','1')";
      $('#same_Poker'+(first_key+1)).attr('onmouseover',MM_swapImage_fir);
      $('#same_Poker'+(sec_key+1)).attr('onmouseover',MM_swapImage_sec);

    }
    first=sec=first_key=sec_key=0;
    handle=0;
}, 100);

  }
}
