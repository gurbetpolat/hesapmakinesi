const indexpage = document.querySelector(".index-page");

 const tus = document.querySelector(".tus");
 const tusac = document.querySelector("#tusac");
 const tusb = document.querySelector("#tusb");


const ekran = document.querySelector(".ekran");
const kapsayıcı=document.querySelector(".kapsayıcı");

let displayValue=0;

updateDisplay();

function updateDisplay(){
    ekran.value=displayValue;
}

kapsayıcı.addEventListener("click", function(e){
    const element=e.target;

     if(!element.matches("button")) return;

     if(element.classList.contains("tus sign")){
        console.log("tus sign",element.value);
        return;
     }
     if(element.classList.contains("tus decimal")){
        console.log("tus decimal",element.value);
        return;
     }
     if(element.classList.contains("tus clear")){
        console.log("tus clear",element.value);
        return;
     }



    // console.log("number",element.value);
        inputNumber(element.value);
        updateDisplay();

});

function inputNumber(num){
    displayValue=num;
}




 let ekranValue = 0;
 indexpage.addEventListener("click", function (e) {
    if (e.target.classList.contains("tus") && (e.target.classList.contains("sign")
        || e.target.classList.contains("num")) && !e.target.classList.contains("eq")) {
        ekranValue = e.target.textContent
       ekran.value += ekranValue

   }

 });

// tusac.addEventListener("click", function (e) {
//     ekran.value = 0;
// })



// tusb.addEventListener("click", function (e) {


//     let arr = ekran.value.split("")
    

//     let index = arr.findIndex(function (eleman) {
//         return eleman == "/"

        
//     })
    

//     console.log(index);
// })


