$(document).ready(function () {

//年確認
$("#yyyy").change(function(event){
  event.stopPropagation();
  var val = $.trim($(this).val());
  var month = $(this).next().next();
  var day = $(this).next().next().next().next();
  var i=1;
  day.empty().append('<option value="0">&nbsp;&nbsp;&nbsp;&nbsp;</option>');
  month.empty().append('<option value="0">&nbsp;&nbsp;&nbsp;&nbsp;</option>');
  if(val!=0)
    for(i=1;i<=12;i++)
    {
      month.append('<option value='+i+'>'+i+'</option>');
    }
});

//月日確認
$("#mm").change(function(event){
  event.stopPropagation();
  var val = $.trim($(this).val());
  var day = $(this).next().next();
  var year = $.trim($("#yyyy").val());
  var i=1;
  day.empty().append('<option value="0">&nbsp;&nbsp;&nbsp;&nbsp;</option>');
  if(val!=0)
  if(val==1||val==3||val==5||val==7||val==8||val==10||val==12)
  {
    for(i=1;i<=31;i++)
    {
      day.append('<option value='+i+'>'+i+'</option>');
    }
  }
  else if(val==4||val==6||val==9||val==11)
  {
    for(i=1;i<=30;i++)
    {
      day.append('<option value='+i+'>'+i+'</option>');
    }
  }
  else if(year==1988||year==1992||year==1996||year==2000||year==2004||year==2008)
  {
    for(i=1;i<=29;i++)
    {
      day.append('<option value='+i+'>'+i+'</option>');
    }
  }
  else
  {
    for(i=1;i<=28;i++)
    {
      day.append('<option value='+i+'>'+i+'</option>');
    }
  }
 });
});


//check email 是否重複
function vemail(base_app)
{
    var r = 0;
    var pattern = /^[a-zA-Z0-9]+([\._-][a-zA-Z0-9]+)*@(([a-zA-Z0-9]+([\.-][a-zA-Z0-9]+)?)+\.)+[a-zA-Z]+$/; 
    ok          = pattern.test($('#email').val()); 
    pattern     = /^[a-z0-9]+([\._-][a-z0-9]+)*@(([a-z0-9]+([\.-][a-z0-9]+)?)+\.)+[a-z]+$/; 
    ok2         = pattern.test($('#email').val()); 
    pattern     = /[ ]+/; 
    ok3         = pattern.test($('#email').val());
    pattern     = /^[a-zA-Z0-9]+([\._-][a-zA-Z0-9]+)*@((wizard101+([\.-][a-zA-Z0-9]+)?)+\.)+[a-zA-Z]+$/; 
    ok4         = pattern.test($('#email').val());
    pattern     = /^[a-zA-Z0-9]+([\._-][a-zA-Z0-9]+)*@((pirates101+([\.-][a-zA-Z0-9]+)?)+\.)+[a-zA-Z]+$/; 
    ok5         = pattern.test($('#email').val());

    if(ok5)
    {
      alert('此信箱無法註冊');
      return false;
    }
    if(ok4)
    {
      alert('此信箱無法註冊');
      return false;
    } 
    if(ok3)
    {
      alert('信箱不能有空格');
      return false;
    } 
    if(ok)
    {
      if(ok2)
      {   
        $.ajax({
          type:"post",
          url: base_app + "ajax/regist_check/",
          data:{'email':$('#email').val()},
          dataType  : "json",
          success:function(result){
            if (result.check_num == 0)
            {
              r=1;
            } else if (result.check_num == 1) {
              alert('信箱已被他人使用');
              r=0;
            }
          }
        });
        if(r==1)
          return true;
        else
          return false;
      } else {
        alert('信箱不能帶大寫字母');
        r=0;
        return false;
      }
    }
    else
    {
      alert('信箱格式不正確');
      r=0;
      return false;
    }
} 

