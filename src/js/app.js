$(document).ready(function(){
	let typeClient = '';

	$('#oldClient').on('click', function(event) {
		typeClient = 'registrado';
	});

	$('#newClient').on('click', function(event) {
		typeClient = 'nuevo';
	});

	$('#btnClient').on('click', function(event) {
		if(typeClient === 'registrado') {
			window.location.href = '../views/vista-3.html';

		} else if(typeClient === 'nuevo') {
			window.location.href = '../views/vista-2.html';

		} else {
			alert('por favor elija una opcion >:(')
		}
	});
})