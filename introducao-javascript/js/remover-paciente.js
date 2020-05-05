var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function (event) {//remover paciente
    event.target.parentNode.classList.add("fadeOut");//ira "sumir" com as informacoes

    setTimeout(function () {//vai esperar para realizar a acao de remocao
        event.target.parentNode.remove();//remocao
    }, 500);//tempo de espera
});

//pacientes.forEach(function (paciente) {
  //  paciente.addEventListener("dblclick", function () {
    //    this.remove();
  //  });
//});