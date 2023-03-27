let prior =document.getElementsByClassName("box")
 for(var i=0;i<prior.length;i++){
      if(i==0) {prior[i].style.backgroundColor = "blue";}
       else if(i==prior.length-1) {prior[i].style.backgroundColor = "palevioletred"}
       else if(i==8) {prior[i].style.backgroundColor = "green"}
       else if(i%2==1)  {prior[i].style.backgroundColor = "lime"}
       else {prior[i].style.backgroundColor = "white"}
 }
