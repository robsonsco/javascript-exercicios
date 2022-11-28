function gerarTabuada() {
    let tab = document.getElementById('seltab')
    let inputnum = document.getElementById('txtnumber').value
 
    if (inputnum.length == 0) {
    
        window.alert('Por favor, digite um número!')
    
    } else {
        tab.innerHTML = "";
        for (m = 0; m<=10; m++){
            let item = document.createElement('option')
            item.text = `${inputnum} x ${m} = ${inputnum*m}`
            tab.appendChild(item);
        }
    }
    document.getElementById('txtnumber').value= "";
}

 