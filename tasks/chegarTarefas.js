let colors = require('colors');

(function chegarTarefas() {

	let tarefaCompleta = true;

	const tarefa = require('./tarefas/modalImagemEditavel')
	const etapas = tarefa.etapas;

	console.log("********************************************  Tarefas  ********************************************".cyan)
	console.log()
	console.log("tarefa: " + tarefa.tituloTarefa.underline.grey)
	console.log()

	for(let etapaKey in etapas) {
		console.log(etapaKey.toString().yellow + (etapas[etapaKey] ? etapas[etapaKey].toString().green : etapas[etapaKey].toString().red));

		if(!etapas[etapaKey]){
			tarefaCompleta = false;
		}
	}

	if(tarefaCompleta) {
		console.log()
		console.log()
		console.log("Tarefa finalizada!".green)
	}

	console.log()
	console.log()
	console.log("********************************************  Tarefas  ********************************************".cyan)

})();
