//for display input

function getinput(num){
var result=document.getElementById("input");
 result.value+=num
}

//for result

function getoutput(){
    var result=document.getElementById("input");
     result.value=eval(result.value)
    }

  //for clearing the screen   
    
  function clearscreen(){
    var result=document.getElementById("input");
     result.value="";
    }

    //12% gst

   function GSTCALCULATOR(){
   var result=document.getElementById("input");
   result.value=(result.value)*100/280;
  
   }
   function GSTCALC(){
    var result=document.getElementById("input");
    result.value=(result.value)*100/118;
   }

    function GSTCAL(){
      var result=document.getElementById("input");
      result.value=(result.value)*100/112;

    }
    function GSTCA(){
      var result=document.getElementById("input");
      result.value=(result.value)*100/105;

    }
    function GST(){
      var result=document.getElementById("input");
      result.value=(result.value)*100/103;

    }