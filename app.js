var ham =document.querySelector('.ham');
var items=document.querySelector('.items_second');
console.log("fdgdf")
ham.addEventListener('click', ()=>{
  if(items.style.display == "flex"){
    items.style.display = "none";
  }
  else{
    items.style.display = "flex";
  }
});

