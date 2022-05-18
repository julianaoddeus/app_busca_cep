function BuscaCep(){
    let cep = document.getElementById('cep').value
 
    let resultado = document.getElementById('endereco-completo')
    
    resultado.innerHTML = 
    $.ajax({
        type:"GET",
        url: `https://viacep.com.br/ws/${cep}/json/`,
        success: (function(endereco){
            console.dir(endereco)
        })
    })
     

}


document.getElementById('pesquisar').addEventListener('click', function(){
    BuscaCep();
})
