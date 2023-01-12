
var inputName=prompt("lütfen isminizi giriniz..");

document.getElementById("myName").innerHTML = inputName;

function currentTime() {
        var background = document.getElementById("b1");
        var list = background.classList;
        let date = new Date(); 
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();
        let weekday =[' Pazar', ' Pazartesi', ' Salı', ' Çarşamba', ' Perşembe', ' Cuma', ' Cumartesi'][new Date().getDay()];
        hh = (hh < 10) ? "0" + hh : hh;
        mm = (mm < 10) ? "0" + mm : mm;
        ss = (ss < 10) ? "0" + ss : ss;            
        let time = hh + ":" + mm + ":" + ss + weekday ;
        document.getElementById("myClock").innerText = time; 
        let t = setTimeout(function(){ currentTime() }, 1000);
        if (10>ss) {
          background.className= '' ;
          list.add ("bg-primary");  
        } 
        else if (20>ss ){
          background.className= '' ;
          list.add ("bg-secondary");  
        }
        else if (30>ss){
          background.className= '' ;
          list.add ("bg-success");  
        }
        else if (40>ss){
          background.className= '' ;
          list.add ("bg-info");  
        }
        else if (50>ss){
          background.className= '' ;
          list.add ("bg-danger");  
        }
        else {
          background.className= '' ;
          list.add ("bg-light");
        }
  
}

currentTime();
