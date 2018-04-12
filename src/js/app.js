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
			$('#box-1').addClass('hide');
			$('#box-2').removeClass('hide');

		} else if(typeClient === 'nuevo') {
			$('#box-1').addClass('hide');
			$('#box-3').removeClass('hide');

		} else {
			alert('por favor elija una opcion >:(')
		}
	});
})