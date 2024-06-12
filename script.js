var consultaCEP = fetch('https://viacep.com.br/ws/01001250/json/')
.then(convesao=> convesao.json())
.then(r => console.log(r))
.catch(erro => console.log(erro));

console.log(consultaCEP);