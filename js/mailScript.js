$(document).ready(function () {
	  var idCampaign = validateCookie();
    // Variables para almacenar las selecciones del usuario
    var selectedEmailPromotion = "";
    var selectedOption2 = "";
    var selectedImage1 = "";
    var selectedImage2 = "";
    var tipoEnvio = "mail";
    var url = "https://leadpatron.com/bix/forms/success?contactid=test@bix.com";

    // Evento para el botón de Campaña de Correo Electrónico
    $('#emailBtn').click(function () {
        // Mostrar el paso 1
        $('#formContainer').html(`
            <div id="emailStep1" class="step-section">
            <div class="col-12 text-center">
            <img src="assets/images/2.png" alt="Paso 1" class="img-fluid mb-4" />
        </div>
                <hr>
                <div class="row">
                    <div class="col-md-6">
                        <select id="emailQuestion1" class="form-control mb-3 display-4" style="font-size: 16px;">
                            <option value="">Selecciona una opción</option>
                            <option value="2x1">2x1 (Veni compra y llévate otro de regalo)</option>
                            <option value="15%">15% OFF solo por hoy</option>
                            <option value="35%">35% OFF solo por hoy</option>
                            <option value="50%">50% OFF solo esta semana</option>
                      <option value="48Hs de locos">¡48 horas de locura! Acercate por promociones imbatibles.</option>
                      <option value="Mayo Imperdible">¡Mayo con ofertas! Encontrá las mejores promos y ganale a la inflación.</option>
                        </select>
                    </div>
                    <div class="col-md-6 d-flex justify-content-center align-items-center">
                        <img id="emailPromoImage1" src="assets/images/mail.jpg" alt="Promoción 1" style="max-width: 100%; max-height: 300px;">
                    </div>
                </div>
                <div class="container3 pb-4">
                    <button id="emailNextStep" class="btn btn-secondary display-4  btn-block email-button">Siguiente</button>
                    <button id="emailCancel" class="btn btn-danger display-4" >Cancelar</button>
                </div>
            </div>
        `);
    });

    // Evento para manejar el cambio de selección en el paso 1
    $(document).on("change", "#emailQuestion1", function () {
        selectedEmailPromotion = $(this).val();
        switch (selectedEmailPromotion) {
            case "2x1":
                selectedImage1 = "assets/images/mail_2x1.jpg";
                break;
            case "15%":
                selectedImage1 = "assets/images/mail_15_off.jpg";
                break;
            case "35%":
                selectedImage1 = "assets/images/mail_35_off.jpg";
                break;
            case "50%":
                selectedImage1 = "assets/images/mail_50_off.jpg";
                break;
            case "48Hs de locos":
                    selectedImage1 = "assets/images/48hs.jpg";
                    break;
            case "Mayo Imperdible":
                selectedImage1 = "assets/images/mayo.jpg";
                break;    
            default:
                selectedImage1 = "assets/images/mail.jpg"; // Imagen por defecto
        }
        $("#emailPromoImage1").attr("src", selectedImage1);
    });

    // Evento para manejar el siguiente paso desde el paso 1 al paso 2
    $(document).on('click', '#emailNextStep', function () {
        if (selectedEmailPromotion) {
            // Mostrar el paso 2
            $('#formContainer').append(`
                <div id="emailStep2" class="step-section">
                <div class="col-12 text-center">
                <img src="assets/images/3.png" alt="Paso 2" class="img-fluid mb-4" />
            </div>
                    <hr>
                    <div class="row">
                        <div class="col-md-6">
                            <select id="emailQuestion2" class="form-control mb-3 display-4" style="font-size: 16px;">
                                <option value="">Selecciona una opción</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                                <option value="300">300</option>
                                <option value="500">500</option>
                            </select>
                        </div>
                        <div class="col-md-6 d-flex justify-content-center align-items-center">
                            <img id="emailPromoImage2" src="assets/images/imp.jpg" alt="Promoción 2" style="max-width: 100%; max-height: 300px;">
                        </div>
                    </div>
                    <div class="container3 pb-4">
                        
                        <button id="emailNextStep2" class="btn btn-secondary display-4  btn-block email-button" >Siguiente</button>
                        
                        <button id="emailCancel" class="btn btn-danger display-4" >Cancelar</button>
                    </div>
                </div>
            `);
        } else {
            $('#formContainer').append(`<p class="display-4 text-dark">Por favor, selecciona una opción en el paso 1.</p>`);
        }
    });

    // Evento para manejar el cambio de selección en el paso 2
    $(document).on("change", "#emailQuestion2", function () {
        selectedOption2 = $(this).val();
        switch (selectedOption2) {
            case "50":
                selectedImage2 = "assets/images/imagen_50.jpg";
                break;
            case "100":
                selectedImage2 = "assets/images/imagen_100.jpg";
                break;
            case "300":
                selectedImage2 = "assets/images/imagen_300.jpg";
                break;
            case "500":
                selectedImage2 = "assets/images/imagen_500.jpg";
                break;
            default:
                selectedImage2 = "assets/images/imp.jpg"; // Imagen por defecto
        }
        $("#emailPromoImage2").attr("src", selectedImage2);
    });

    // Evento para manejar el botón "Atrás" desde el paso 2 al paso 1
    $(document).on('click', '#emailBackToStep1', function () {
        $('#emailStep2').remove();
    });

    // Evento para manejar el siguiente paso desde el paso 2 al resumen
    $(document).on('click', '#emailNextStep2', function () {
        if (selectedOption2) {
            // Crear el modal de resumen
            var resumenModal = `
                <div id="emailSummaryModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="resumenModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="text-center container3">
                                    <img class="img-fluid" src="assets/images/4.png" alt="Paso 3" >
                                </div>
                                <hr>
                                <div class="row text-center">
                                    <div class="col-12 col-md-12 display-4 ">
                                        <p style="font-size: 18px;">¿Qué promoción te gustaría enviar por correo electrónico?<br></p>
                                        <p style="font-size: 24px;"><strong> ${selectedEmailPromotion} </strong></p>
                                        <img id="emailPromoImageSummary1"  src="${selectedImage1}" alt="Promoción 1" style="max-width: 60%; max-height: auto; display: block; margin-left: auto; margin-right: auto;" ><hr>
                                    </div>
                                    <div class="col-12 col-md-12 display-4 text-center">
                                        <p style="font-size: 18px;">¿A cuántos destinatarios quieres enviar el correo electrónico?</p><p <p style="font-size: 24px;"><strong>${selectedOption2} destinatarios </strong></p>
                                        <img id="emailPromoImageSummary2" src="${selectedImage2}" style="max-width: 60%; max-height: auto; display: block; margin-left: auto; margin-right: auto;" alt="Promoción 2" >
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button id="emailSubmitForm" class="btn btn-secondary display-4  btn-block" style="font-size: 15px;">Enviar</button>
                                <button id="emailCancelModal" class="btn btn-danger display-4  btn-block" style="font-size: 15px;" data-dismiss="modal">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // Añadir el modal al cuerpo del documento
            $('body').append(resumenModal);

            // Mostrar el modal
            $('#emailSummaryModal').modal('show');
        } else {
            $('#formContainer').append(`<p class="display-4 text-dark">Por favor, selecciona una cantidad de destinatarios en el paso 2.</p>`);
        }
    });

    // Evento para cancelar y volver al inicio
    $(document).on('click', '#emailCancel, #emailCancelModal', function () {
        // Borrar el contenido del contenedor de formularios
        $('#formContainer').html('');
        // Eliminar el modal del resumen
        $('#emailSummaryModal').modal('hide').remove();
        // Restablecer las variables seleccionadas
        selectedEmailPromotion = "";
        selectedOption2 = "";
        selectedImage1 = "";
        selectedImage2 = "";
    });
	
	// Función para obtener el valor de una cookie por su nombre
	function getCookie(cookieName) {
		var name = cookieName + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var cookieArray = decodedCookie.split(';');
		for(var i = 0; i <cookieArray.length; i++) {
			var cookie = cookieArray[i];
			while (cookie.charAt(0) == ' ') {
				cookie = cookie.substring(1);
			}
			if (cookie.indexOf(name) == 0) {
				return cookie.substring(name.length, cookie.length);
			}
		}
		return "";
	}
	


    // Evento para enviar el formulario
    $(document).on('click', '#emailSubmitForm', function () {
		var idCampaign = validateCookie();
			
        var emailFormData = {
            campaignId: idCampaign,
            formData: {
                cantidad: selectedOption2,
                mensaje: selectedEmailPromotion,
                tipoEnvio: tipoEnvio
            }
        };

        // Convertir los datos a formato JSON
        var jsonString = JSON.stringify(emailFormData);

        // Realizar una solicitud POST para enviar los datos
        $.post('https://leadpatron.com/bix/deliveryManager?action=deliverManager', jsonString)
            .done(function (response) {
                // Redirigir a la URL especificada si la solicitud es exitosa
                window.location.href = url;
            })
            .fail(function (error) {
                // Mostrar un mensaje de error en la consola si hay un error
                console.error('Error en la solicitud POST:', error);
            });

        // Cerrar el modal después de enviar el formulario
        $('#emailSummaryModal').modal('hide').remove();
    });
	  
	window.addEventListener('pageshow', function(event) {
		var historyTraversal = event.persisted || 
		   (typeof window.performance != 'undefined' && 
			window.performance.navigation.type === 2);
		if (historyTraversal) {
			// Forzar un refresco de la página
			window.location.reload();
		}
	});
	
	function validateCookie(){
		var idCampaign = getCookie('campaignId');
		if (!idCampaign){
			const baseUrl = 'https://leadpatron.com/bix/landing/DeliveryManagerLogin/001';
			window.location.href = baseUrl;
		} else{
			return idCampaign;
		}
	}

});
