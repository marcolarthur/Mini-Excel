  let tabela = document.querySelector("#tabela");
  let celular = [];
  let k = 1;
  let j = 1;
  let salvarValor = [];
  let salvarValor2 = [];
  let contador = 1;
  for (let i = 100; i > 0; i--) {
    let linha = tabela.insertRow(1);
    let celula1 = linha.insertCell(0);
    for (let j = 1; j < 27; j++) {
      celular[j] = linha.insertCell(j);
      celular[j].innerHTML = "<input type='text' name= " + String.fromCharCode(j+64)+i  + " onfocus='retornarValor(this.name)' onfocusout='retornarValor2(this.name)' onkeypress='mudarValores(this.name, this.value.toUpperCase(), event)' id= "+ contador +" >";
      contador++;
    }
    celula1.innerHTML = i;

}

function retornarValor(nome) {
  let resultado = document.getElementsByName(nome)[0];
  if (salvarValor2[resultado.id] != null) {
    if (resultado.value != null) {
      resultado.value = salvarValor2[resultado.id];
    }
  }
}

function retornarValor2(nome) {
  let resultado = document.getElementsByName(nome)[0];
  if (salvarValor[resultado.id] != null) {
    if (resultado.value != null) {
      resultado.value = salvarValor[resultado.id];
    }
  }
}



function rodar(resultado, contas) {
    if (resultado.style.transform == "rotateX(360deg)") {
      resultado.style = "transform:rotateX(0deg);"
    }else {
      resultado.style = "transform:rotateX(360deg);"
    }
    salvarValor2[resultado.id] = resultado.value
    resultado.value = eval(contas);
    salvarValor[resultado.id] = resultado.value;
}









function mudarValores(nome, valor, e) {
  if (e.keyCode == 13) {
    console.log(nome);
    console.log(valor);
    if (valor.charAt(0) === "=") {
      let contas = valor.slice(1);
      let nomes = [];
      nomes = contas.match(/[A-Z]\d+/g);
      for (let i = 0; i < contas.length; i++) {
        if(contas.match(/[A-Z]\d+/)){
            contas = contas.replace(/[A-Z]\d+/, document.getElementsByName(nomes[i])[0].value || "0");
        }
      }
    let resultado = document.getElementsByName(nome)[0];
    rodar(resultado, contas);
    }
  }
}

let botao = document.querySelector("#botao");
botao.addEventListener("click", function(){
    for (let i = 1; i < 101; i++) {
      for (let j = 1; j < 27; j++) {
        let resultado = document.getElementsByName(String.fromCharCode(j+64)+i)[0];
        resultado.value = Math.floor(Math.random() * 10 + 1);
      }
    }
    document.getElementsByName(String.fromCharCode(1+64)+1)[0].value = "";

});


let botao1 = document.querySelector("#botao1");
botao1.addEventListener("click", function(){
  for (let i = 1; i < 101; i++) {
    for (let j = 1; j < 27; j++) {
      let resultado = document.getElementsByName(String.fromCharCode(j+64)+i)[0];
      resultado.value = "";
    }
  }
  document.getElementsByName(String.fromCharCode(1+64)+1)[0].value = "";
});
