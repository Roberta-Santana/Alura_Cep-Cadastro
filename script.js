/* var consultaCEP = new Promise((resolve, reject) => {// Simulando uma operação de busca de CEP
  let sucesso = true; // Simulando sucesso ou falha
  if (sucesso) {
    resolve(fetch('https://viacep.com.br/ws/01001250/json/'));
  } else {
    reject('operação falhou!');
  }
}); */
var consultaCEP = fetch('https://viacep.com.br/ws/01001250/json/');

consultaCEP.then(convesao=> convesao.json())
.then(r => {
    if(r.erro){ //casos com formato de CEP válido, mas valor inexistente
        throw Error('Esse CEP não existe!')
    } else {console.log(r)}
})
.catch(erro => console.log(erro))
.finally(msg => console.log("Procesamento concluído"));

console.log(consultaCEP);