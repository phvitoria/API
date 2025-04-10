const xhr = new XMLHttpRequest();  

xhr.open('GET', 'https://api.ecommerce.com/produtos', true); // O 3º parâmetro (true) define o modo assíncrono.  

xhr.onreadystatechange = function() {  
    if (xhr.readyState === 4) { // Estado 4 = Operação concluída  
      if (xhr.status === 200) {  
        const resposta = JSON.parse(xhr.responseText);  
        tratarResposta(resposta); // Função para atualizar a UI  
      } else {  
        tratarErro(xhr.statusText); // Ex: exibir mensagem de erro  
      }  
    }  
  };  

  xhr.send(); // Para POST, enviamos dados no corpo: xhr.send(JSON.stringify(data));  

  const dadosUsuario = { nome: "Cliente", email: "cliente@email.com" };  
xhr.send(JSON.stringify(dadosUsuario)); // Envia dados no corpo da requisição  

function atualizarInterface(dados) {  
    const container = document.getElementById('produtos');  
    dados.forEach(produto => {  
      container.innerHTML += `<div>${produto.nome} - R$${produto.preco}</div>`;  
    });  
  }  

  function exibirErro(mensagem) {  
    const divErro = document.createElement('div');  
    divErro.className = 'erro';  
    divErro.textContent = mensagem;  
    document.body.appendChild(divErro);  
  }  