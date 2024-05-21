$(document).ready(function() {
    // Funcionalidad para el botón de WhatsApp
    $('#whatsappBtn').click(function() {
        mostrarPregunta('#step1');
    });

    // Lógica de los pasos del formulario
    $(document).on('click', '#nextStep', function() {
        var currentStep = $(this).parent().attr('id');
        switch (currentStep) {
            case 'step1':
                var answer1 = $('#question1').val();
                if (answer1) {
                    ocultarPregunta('#step1');
                    mostrarPregunta('#step2');
                } else {
                    alert('Por favor, responde la pregunta 1.');
                }
                break;
            case 'step2':
                var answer2 = $('#question2').val();
                if (answer2) {
                    ocultarPregunta('#step2');
                    mostrarPregunta('#step3');
                } else {
                    alert('Por favor, responde la pregunta 2.');
                }
                break;
            case 'step3':
                var answer3 = $('#question3').val();
                if (answer3) {
                    $('#formContainer').html(`
                        <div id="summary" class="question-container">
                            <h4>Resumen:</h4>
                            <p>Pregunta 1: ${$('#question1').val()}</p>
                            <p>Pregunta 2: ${$('#question2').val()}</p>
                            <p>Pregunta 3: ${$('#question3').val()}</p>
                            <button class="btn btn-primary" id="submitForm">Finalizar</button>
                            <button class="btn btn-primary" id="prevStep">Atrás</button>
                            <button class="btn btn-danger" id="cancel">Cancelar</button>
                        </div>
                    `);
                    ocultarPregunta('#step3');
                } else {
                    alert('Por favor, responde la pregunta 3.');
                }
                break;
        }
    });

    // Volver al paso anterior
    $(document).on('click', '#prevStep', function() {
        var currentStep = $(this).parent().attr('id');
        switch (currentStep) {
            case 'step2':
                ocultarPregunta('#step2');
                mostrarPregunta('#step1');
                break;
            case 'step3':
                ocultarPregunta('#step3');
                mostrarPregunta('#step2');
                break;
            case 'summary':
                ocultarPregunta('#summary');
                mostrarPregunta('#step3');
                break;
        }
    });

    // Finalizar el formulario y enviar
    $(document).on('click', '#submitForm', function() {
        // Aquí puedes implementar la lógica para enviar el formulario
        alert('Formulario de WhatsApp enviado correctamente.');
    });

    // Cancelar y volver al inicio
    $(document).on('click', '#cancel', function() {
        $('#formContainer').html('');
    });

    // Función para mostrar una pregunta
    function mostrarPregunta(stepId) {
        $('.question-container').hide(); // Oculta todas las preguntas antes de mostrar una nueva
        $(stepId).show();
    }

    // Función para ocultar una pregunta
    function ocultarPregunta(stepId) {
        $(stepId).hide();
    }
});
