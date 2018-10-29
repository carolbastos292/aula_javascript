var titulo = document.querySelector(".titulo"); //pega a classe titulo
titulo.textContent = "Nutricionista"; //altera o valor dela

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){
	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoValido = validaPeso(peso); //true ou false
	var alturaValida = validaAltura(altura);

	if(!pesoValido){
		console.log("peso Invalido");
		pesoValido = false;
		tdImc.textContent = "Peso Invalido";
		paciente.classList.add("paciente-invalido"); //adiciona a classe do css paciente-invalido ao paciente invalido
	}
	if (!alturaValida){
		console.log("Altura Invalido")
		alturaValida = false;
		tdImc.textContent = "Altura Invalida";
		paciente.classList.add("paciente-invalido");//adiciona a classe do css paciente-invalido ao paciente invalido
	}

	if (pesoValido && alturaValida ){
		var imc = calculaImc(peso,altura);
		tdImc.textContent = imc; //pega o valor da tag que contem a class info-imc e atribui a ela o valor do calculo do imc
	}
}

function validaPeso(peso){
	if(peso >= 0 && peso < 1000){
		return true;
	}else{
		return false;
	}
}

function validaAltura(altura){
	if(altura >= 0 && altura < 3){
		return true;
	}else{
		return false;
	}
}

function calculaImc(peso, altura){
	var imc = 0;
	imc = peso / (altura * altura);
	return imc.toFixed(2);
}







