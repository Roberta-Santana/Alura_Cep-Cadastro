/* MÉTODO ALURA, CONVERSÃO.JSON(), CATCH E FINALLY
    var consultaCEP = fetch('https://viacep.com.br/ws/01001250/json/');
consultaCEP.then(convesao=> convesao.json())
.then(r => {
    if(r.erro){ //casos com formato de CEP válido, mas valor inexistente
        throw Error('Esse CEP não existe!')
    } else {console.log(r)}})
.catch(erro => console.log(erro))
.finally(msg => console.log("Procesamento concluído"));  ${cep}
console.log(consultaCEP); */

//ALURA, VÁRIOS FETCH'S/PROMISES - 
async function buscaEndereco(cep){
    try{
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var consultaCEPConvertido = await consultaCEP.json();
    if(consultaCEPConvertido.erro){
        throw Error('Cep inexistente!')
    }

    preencherCampos(consultaCEPConvertido)
    
    console.log(consultaCEPConvertido);
    return consultaCEPConvertido;
  }
/*     catch (erro) {
        console.log(erro);
    }  */finally {
        console.log("Processamento concluído");
    }
}

var cep = document.getElementById('cep');
cep.addEventListener('focusout', ()=> {buscaEndereco(cep.value);
});

function preencherCampos(dadosJson) {
  for (const elementoHtml in dadosJson) {
    if (dadosJson.hasOwnProperty(elementoHtml)) {
      const elemento = document.getElementById(elementoHtml);
      if (elemento) {
        elemento.value = dadosJson[elementoHtml];
      }
    }
  }
}

/* função preencherCampos(dadosJson){
uma var listaDosIdsHtml = que receba lista dos elementos do html
listaDosElementos.forEach(elemento => {elemento.dadosJson})
} */

/* //criando um array de CEPS para serem consultados com várias promises 
let ceps = ['01001250', '49041140'];
let conjuntoCeps = ceps.map(elementoCep=> buscaEndereco(elementoCep));
Promise.all(conjuntoCeps).then(retornoDeCadaElementoNaFuncao => console.log(retornoDeCadaElementoNaFuncao)) */


/* //MÉTODO GPT RESOLVE,REJECT
    var consultaCEP = new Promise((resolve, reject) => {// Simulando uma operação de busca de CEP
  let sucesso = true; // Simulando sucesso ou falha
  if (sucesso) {
    resolve(fetch('https://viacep.com.br/ws/01001250/json/'));
  } else {
    reject('operação falhou!');
  }
}); */

/* MÉTODO GPT - ASYNC TRY
    async function buscarDados() {
    try {
      let resposta = await fetch('https://viacep.com.br/ws/01001000/json/');
      if (!resposta.ok) {
        throw new Error('Erro na rede');
      }
      let dados = await resposta.json();
      if (dados.erro) {
        throw new Error('Esse CEP não existe!');
      } console.log('Dados:', dados);
    } 
    catch (erro) {
      console.error('Erro capturado:', erro.message);
    } finally {
      console.log('Requisição finalizada, sucesso ou falha.');
    }
  }  
  buscarDados(); */

