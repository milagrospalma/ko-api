$(document).ready(function(){
	let typeClient = '';

	$('#oldClient').on('click', function(event) {
		typeClient = 'registrado';
		console.log(typeClient);
		$('#btn-select').text('Estoy registrado(a)')
	});

	$('#newClient').on('click', function(event) {
		typeClient = 'nuevo';
		console.log(typeClient);
		$('#btn-select').text('Soy nuevo(a)')
	});

	$('#btnClient').on('click', function(event) {
		if(typeClient === 'registrado') {
			$('#box-1').addClass('hide');
			$('#box-2').removeClass('hide');
			

		} else if(typeClient === 'nuevo') {
			 window.location.href = 'src/views/view3.html';

		} else {
			alert('Por favor elija una opcion')
		}
	});
})