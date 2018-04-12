$(document).ready(function(){
	let typeClient = '';

	$('#oldClient').on('click', function(event) {
		typeClient = 'registrado';
		console.log(typeClient);
	});

	$('#newClient').on('click', function(event) {
		typeClient = 'nuevo';
		console.log(typeClient);
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