$(document).ready(function () {
  var idCampaign = validateCookie();
  // Variables para almacenar las opciones seleccionadas
  var selectedOption1 = "";
  var selectedOption2 = "";
  var selectedImage1 = "";
  var selectedImage2 = "";
  var tipoEnvio = "whatsapp";
  var url = "https://leadpatron.com/bix/forms/success?contactid=test@bix.com";

  // Mostrar el paso 1 al hacer clic en el botón de WhatsApp
  $("#whatsappBtn").click(function () {
      // Mantener visible el paso 1 en el contenedor
      $("#formContainer").append(`
          <div id="step1" class="row">
              <div class="col-12 text-center">
                  <img src="assets/images/2.png" alt="Paso 1" class="img-fluid mb-4" />
              </div>
              <div class="col-md-6">
                  <select id="question1" class="form-control mb-3">
                      <option value="">Selecciona una opción</option>
                      <option value="2x1">2x1 (veni comprá y llévate otro de regalo)</option>
                      <option value="15%">15% OFF solo por hoy</option>
                      <option value="35%">35% OFF solo por hoy</option>
                      <option value="50%">50% OFF solo esta semana</option>
                      <option value="48Hs de locos">¡48 horas de locura! Acercate por promociones imbatibles.</option>
                      <option value="Mayo Imperdible">¡Mayo con ofertas! Encontrá las mejores promos y ganale a la inflación.</option>
                  </select>
              </div>
              <div class="col-md-6">
                  <img id="promoImage1" src="assets/images/wa.jpg" alt="Promoción 1" style="max-width: 100%; max-height: 300px;">
              </div>
          </div>
          <hr>
          <div class="text-center">
              <button id="nextStep1" class="btn btn-secondary display-4  btn-block " >Siguiente</button>
              <button id="cancelBtn" class="btn btn-danger display-4" >Cancelar</button>
          </div>
      `);
  });

  // Actualizar la imagen según la opción seleccionada en la pregunta 1
  $(document).on("change", "#question1", function () {
      selectedOption1 = $(this).val();
      if (selectedOption1 === "2x1") {
          selectedImage1 = "assets/images/imagen_2x1.jpg";
      } else if (selectedOption1 === "15%") {
          selectedImage1 = "assets/images/imagen_15_off.jpg";
      } else if (selectedOption1 === "35%") {
          selectedImage1 = "assets/images/imagen_35_off.jpg";
      } else if (selectedOption1 === "50%") {
          selectedImage1 = "assets/images/imagen_descuentos_50.jpg";
        } else if (selectedOption1 === "48Hs de locos") {
            selectedImage1 = "assets/images/48hsw.jpg";
        } else if (selectedOption1 === "Mayo Imperdible") {
            selectedImage1 = "assets/images/mayoimperdible.jpg";
      } else {
          selectedImage1 = ""; // Limpiar la imagen si no se selecciona ninguna opción
      }
      $("#promoImage1").attr("src", selectedImage1);
  });

  // Avanzar al paso 2
  $(document).on("click", "#nextStep1", function () {
      if (selectedOption1) {
          // Mantener visible el paso 1 y mostrar el paso 2
          $("#formContainer").append(`
              <div id="step2" class="row">
                  <div class="col-12 text-center">
                      <img src="assets/images/3.png" alt="Paso 2" class="img-fluid mb-4" />
                  </div>
                  <div class="col-md-6">
                      <select id="question2" class="form-control mb-3">
                          <option value="">Selecciona una opción</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                          <option value="300">300</option>
                          <option value="500">500</option>
                      </select>
                  </div>
                  <div class="col-md-6">
                      <img id="promoImage2" src="assets/images/imp.jpg" alt="Promoción 2" style="max-width: 100%; max-height: 300px;">
                  </div>
              </div>
              <hr>
              <div class="text-center">
                  
                  <button id="nextStep2" class="btn btn-secondary display-4  btn-block " >Siguiente</button>
                  
                  <button id="cancelBtn" class="btn btn-danger display-4" ;  ">Cancelar</button>
              </div>
          `);
      } else {
          // Mostrar un mensaje si no se selecciona una opción en la pregunta 1
          $("#formContainer").append(
              `<p class="text-dark display-4">Por favor, selecciona una opción en la pregunta 1.</p>`
          );
      }
  });

  // Volver al paso 1 desde el paso 2
  $(document).on("click", "#prevStep1", function () {
      $("#step2").remove(); // Eliminar el paso 2 del DOM
  });

  // Actualizar la imagen según la opción seleccionada en la pregunta 2
  $(document).on("change", "#question2", function () {
      selectedOption2 = $(this).val();
      if (selectedOption2 === "50") {
          selectedImage2 = "assets/images/imagen_50.jpg";
      } else if (selectedOption2 === "100") {
          selectedImage2 = "assets/images/imagen_100.jpg";
      } else if (selectedOption2 === "300") {
          selectedImage2 = "assets/images/imagen_300.jpg";
      } else if (selectedOption2 === "500") {
          selectedImage2 = "assets/images/imagen_500.jpg";
      } else {
          selectedImage2 = ""; // Limpiar la imagen si no se selecciona ninguna opción
      }
      $("#promoImage2").attr("src", selectedImage2);
  });

  // Continuar al resumen
  $(document).on("click", "#nextStep2", function () {
      if (selectedOption2) {
          // Llamar a la función para mostrar el resumen de la campaña de WhatsApp
          mostrarResumenWhatsApp();
      } else {
          // Mostrar un mensaje si no se selecciona una cantidad de prospectos
          $("#formContainer").append(
              `<p class="text-dark display-4">Por favor, selecciona una cantidad de prospectos.</p>`
          );
      }
  });

  // Mostrar el resumen de la campaña de WhatsApp
  function mostrarResumenWhatsApp() {
      var resumenContent = `<div class="text-center container3">
                  <img class="img-fluid" src="assets/images/4.png" alt="Paso 3">
              </div>
              <hr>
              <div class="row text-center">
                  <div class="col-12 col-md-12 display-4 ">
                      <p style="font-size: 18px;">¿Qué promoción te gustaría Lanzar?<br></p>
                      <p style="font-size: 24px;"><strong>
                              ${selectedOption1} </strong>
                      </p>
                      <img id="whatsappPromoImageSummary1" src="${selectedImage1}" alt="Promoción 1"
                          style="max-width: 60%; max-height: auto; display: block; margin-left: auto; margin-right: auto;">
                      <hr>
                  </div>
                  <div class="col-12 col-md-12 display-4 ">
                      <p style="font-size: 18px;">¿Cuántos prospectos quieres impactar?</p>
                      <p style="font-size: 24px;"><strong>${selectedOption2}</strong>
                      </p>
                      <img id="whatsappPromoImageSummary2" src="${selectedImage2}" alt="Promoción 2"
                          style="max-width: 60%; max-height: auto; display: block; margin-left: auto; margin-right: auto;"></div></div>
                          `;

      // Insertar el contenido del resumen en el modal específico de WhatsApp
      $("#whatsappSummaryContent").html(resumenContent);

      // Mostrar el modal de resumen de WhatsApp
      $("#whatsappSummaryModal").modal("show");

      // Configura los eventos para los botones de enviar y cancelar
      $("#whatsappSendBtn").off("click").on("click", enviarResumenWhatsApp);
      $("#whatsappCancelBtn").off("click").on("click", function () {
          $("#whatsappSummaryModal").modal("hide");
      });
  }
  
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


  // Función para enviar el resumen de la campaña de WhatsApp
  function enviarResumenWhatsApp() {
      // Preparar los datos para enviar
	  var idCampaign = validateCookie();

      var formDataWhatsApp = {
          campaignId: idCampaign, // ID de la campaña
          formData: {
              cantidad: selectedOption2,
              mensaje: selectedOption1,
              tipoEnvio: tipoEnvio
          }
      };

      // Convertir los datos a JSON
      var jsonString = JSON.stringify(formDataWhatsApp);

      // Enviar la información mediante POST
      $.post("https://leadpatron.com/bix/deliveryManager?action=deliverManager", jsonString)
          .done(function (response) {
              console.log("Información enviada con éxito:", response);
              window.location.href = url; // Redirigir a la página de éxito
          })
          .fail(function (error) {
              console.error("Error al enviar la información:", error);
          });

      // Cerrar el modal de resumen de WhatsApp
      $("#whatsappSummaryModal").modal("hide");
  }
  
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
  // Manejar el botón de cancelar para reiniciar el proceso
  $(document).on("click", "#cancelBtn", function () {
      location.reload(); // Recargar la página para reiniciar el proceso
  });
});
