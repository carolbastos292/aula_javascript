var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("dblclick", function(event){
	//parentNode seleciona o pai do elemento, nesse caso eh removido a tag <tr>
	event.target.parentNode.classList.add("fadeOut");

	setTimeout(function(){
		event.target.parentNode.remove(); 
	}, 500);
	
});