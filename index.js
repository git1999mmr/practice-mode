document.getElementById("#submit").addEventListener("click",click);

function click() {
            var a = new Audio("./click1.wav");
            a.play();
}

function equate(){
 
    var id=document.form1.username.value;  
    var ps=document.form1.password.value;  
    if(id.length=="" && ps.length=="") {  
        alert("User Name and Password fields are empty");  
        return false;  
    }  
    else  
    {  
        if(id.length=="") {  
            alert("User Name is empty");  
            return false;  
        }   
        if (ps.length=="") {  
        alert("Password field is empty");  
        return false;  
        }  
    }                             
    console.log("Print it")
    var username = document.form1.username.value;
    var password = document.form1.password.value;
    let userdata = ["varun","mahi","praveen","pavan","reshma","lokesh"];
    let passworddata = ["varun","mahi","praveen","pavan","reshma","lokesh"];
    
    for(var i=0;i<2;i++){
      console.log("for looped")

      if (username == userdata[i] && password == passworddata[i]){  
      alert("Login Succesful");
      window.location = "loged.html";

     return false ;
    }
   }
           console.log("for looped in")

    alert("Login Unsuccessfull");
  }

  
 

 
