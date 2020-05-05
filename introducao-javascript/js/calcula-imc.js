var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 350) {
        console.log("Peso Inválido.")
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido.";
        paciente.classList.add("paciente-invalido");
    }
    if (altura <= 0 || altura >= 2.50) {
        console.log("Altura Inválida.")
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválida.";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);
    return imc.toFixed(2);
}
titulo.addEventListener("click", function () {
    console.log("função anonima");
});

