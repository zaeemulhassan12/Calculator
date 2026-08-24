let input =document.getElementById("input");
let buttons =document.querySelectorAll("button");

let String="";
let arr = Array.from(buttons)

arr.forEach(button => {
    button.addEventListener("click" , (e)=>{
        let value = e.target.innerHTML;

    if(value ==="="){
        String = eval(String);
        input.value =String;
    }
    else if (value ==="AC"){
        String ="";
        input.value = String;
    }else if (value ==="DEL"){
        String = String.slice(0,-1);
        input.value = String;
    }else{
        String += value;
        input.value = String;
    }
    })
})