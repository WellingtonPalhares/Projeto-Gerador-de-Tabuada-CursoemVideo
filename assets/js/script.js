function gerador () {
    numTabuadatxt = document.getElementById("numerinho");
    res = document.getElementById ("selec")
    numTabuada = Number(numTabuadatxt.value)
    var n = 1

    if (numTabuadatxt.value.length == 0 || numTabuada == 0){
        alert("[ERRO] Insira um número válido ")
    } else{
        res.innerHTML = "" 
        do { 
            let item = document.createElement('option') 
            item.text = `${numTabuada} x ${n} = ${numTabuada * n}`
            item.value = `res${n}`
            res.appendChild(item)
            n++
        } while ( n < 11)
    }
}