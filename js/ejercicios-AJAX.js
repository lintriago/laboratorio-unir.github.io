document.addEventListener('DOMContentLoaded', () => {

	let url = window.location.href;
	let input_recurso = document.querySelector("#recurso");
	let btn_enviar = document.querySelector("#enviar");

	input_recurso.value = url;

	btn_enviar.addEventListener("click", event => {
		alert(url);
	});
});