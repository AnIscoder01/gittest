var plus = Array.from(document.querySelectorAll(".plus-btn"));
var minus = document.querySelectorAll(".minus-btn");
var counter =document.querySelectorAll(".counter");
var deletecart =document.querySelectorAll(".delete");
var addcart=document.querySelectorAll(".shop");
var hearts=document.querySelectorAll(".heart");
//remove block
for(let i=0;i<deletecart.length;i++){
    deletecart[i].addEventListener("click",function(){
        deletecart[i].parentElement.parentElement.parentElement.remove();
        updatetotal();
    });
  
}

//total block

function updatetotal(){
  
    let cartitems=document.querySelector(".cart-items");
    let cartrows=cartitems.querySelectorAll(".card");
    var total=0;
    for(let i=0;i<cartrows.length;i++){
        var cartrow=cartrows[i];
        var  priceelment=cartrow.querySelector(".price");
        var quantityelment=cartrow.querySelector(".quan");
        var price=Number(priceelment.innerText.replace('$',''));
        var quantity=Number(quantityelment.innerText);
        total=total+(price*quantity);
       
   }   
    document.querySelector(".totalprice").innerText="$"+total;
 
}



//heart icon


for (let i=0;i<hearts.length;i++){
hearts[i].addEventListener("click",function(){
    if (hearts[i].style.color!="red")
    {
        hearts[i].style.color="red";
    }
    else{
        hearts[i].style.color="grey"
    }

})
}

//addcart block
for(let i=0;i<addcart.length;i++){
    addcart[i].addEventListener("click",function(){
        updatetotal();
    });
}


for (let i = 0; i < plus.length; i++) {
   //plus function 
    plus[i].addEventListener("click", function () {
     counter[i].innerText = Number(counter[i].innerText) + 1;
     updatetotal();
  //  plus[i].nextElementSibling.innerText++;
    });
    // minus function
    minus[i].addEventListener("click", function () {
      if (minus[i].previousElementSibling.innerText > 0) {
        minus[i].previousElementSibling.innerText--;
        updatetotal();
      }
      
    });
}

