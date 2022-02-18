function transform(){
    var input = document.getElementById("input-block")

    input.style.border = "1px solid #262626"
}

function event1(){
    var input = document.getElementById("usuario")
    var label = document.getElementById("label")

    if(input.value.length >= 1){
        label.style.display = "block"
        input.style.marginTop = "10px"
    }
}

function event2(){
    var input = document.getElementById("usuario")
    var label = document.getElementById("label")

    if(input.value.length == 0){
        label.style.display = "none"
        input.style.marginTop = "0px"
    }
}