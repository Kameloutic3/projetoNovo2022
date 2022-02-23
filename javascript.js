


document.querySelector(".calcular").addEventListener("click", ()=>{
    checkInput();
})

let valor;

function checkInput(){
    const expressao = document.querySelector(".expressao").value;
    const superior = document.getElementById("superior").value;
    const inferior = document.getElementById("inferior").value;
    const intervalos = document.querySelector(".intervalo").value; 
    console.log(expressao, superior, inferior, intervalos)
    if(expressao.trim() != '' && superior.trim() != '' && inferior.trim() != '' && intervalos.trim() != ''){
        valor = expressao;
        let result = simpsons_(Number(inferior), Number(superior), Number(intervalos));
        document.getElementById("area-texto").innerHTML = result.toFixed(20);
    }
}

function func(x){
    return eval(valor);
}

// Function for approximate integral
function simpsons_(ll, ul, n){
 
    let h = (ul - ll) / n;

    let x = [];
    let fx= [];

    for (let i = 0; i <= n; i++) {
        x[i] = ll + i * h;
        fx[i] = func(x[i]);
    }

    let res = 0;
    for (let i = 0; i <= n; i++) {
        if (i == 0 || i == n)
            res += fx[i];
        else if (i % 2 != 0)
            res += 4 * fx[i];
        else
            res += 2 * fx[i];
    }
    res = res * (h / 3);
    return res;
}
