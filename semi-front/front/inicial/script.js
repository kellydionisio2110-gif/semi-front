function somar(){
    var n1 = parseFloat (document.getElementById('soma1').value)
    var n2 = parseFloat (document.getElementById('soma2').value)
    var res = document.getElementById('respSoma')
    res.textContent = n1 + n2  
    
}

function dividir(){
    var n1 = parseFloat (document.getElementById('div1').value)
    var n2 = parseFloat (document.getElementById('div2').value)
    var res = document.getElementById('respDiv')
    res.textContent = n1 / n2  
}

function diminuir(){
    var n1 = parseFloat (document.getElementById('sub1').value)
    var n2 = parseFloat (document.getElementById('sub2').value)
    var res = document.getElementById('respSub')
    res.textContent = n1 - n2  
}

function Multiplicar (){
    var n1 = parseFloat (document.getElementById('multi1').value)
    var n2 = parseFloat (document.getElementById('multi2').value)
    var res = document.getElementById('respMulti')

    if(n2 !== 0 && n1 !== 0){
        res.textContent = (n1 / n2). toFixed(2) 
    }else{
            res.textContent = "Não se dividi por 0"
    }
    
    }


