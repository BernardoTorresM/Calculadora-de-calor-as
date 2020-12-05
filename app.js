// VERIFICAR FORMULARIO
const form = document.querySelector('form');
const btnCalcular = document.getElementById('btn-calcular');

let edad = 0, estatura =0, peso = 0, act = 0;

const guardarDatosForm = () => {
    genero = form.genero.value;
    edad = parseInt(form.edad.value);
    estatura = parseInt(form.estatura.value);
    peso = parseFloat(form.peso.value);
    act = parseInt(form.actividad.value);
}

const esNumPositivo = num => (num >= 0);

const verifForm = () => {
    // verificar que edad, estatura y peso sean números positivos
    if(!esNumPositivo(edad) || !esNumPositivo(estatura) || !esNumPositivo(peso))
        return false;
    
    // verificar que la edad esté en un rango de 0 a 120 años
    if(!(edad <= 120))
        return false;

    // verificar que la estatura esté en un rango de 20 a 250cms
    if(!(estatura >= 20) || !(estatura <= 250))
        return false;

    // verificar que el peso esté en un rango de 0.25 a 600kgs
    if(!(peso >= 0.25) || !(peso <= 600))
        return false;

    // si todas las anteriores condiciones (verificaciones) son verdaderas, entonces los válores son validos
    return true;
}

// CALCULAR
const calcularCal = tmb => {
    switch (act) {
        case 1:
            return tmb * 1.2;

        case 2:
            return tmb * 1.375;
    
        case 3:
            return tmb * 1.55;
    
        case 4:
            return tmb * 1.725;
    
        case 5:
            return tmb * 1.9;
    
        default:
            return 0;
    }
}

const calcularCalorias = () => (genero = "hombre") ?
        (calcularCal(10 * peso) + (6.25 * estatura) - (5 * edad) + 5)
        : 
        (calcularCal(10 * peso) + (6.25 * estatura) - (5 * edad) - 161);

// UI
let respuestas = document.getElementById('calorias');

const mostrarCalorias = calorias => alert(`Calorías necesarias:> ${calorias}`);

btnCalcular.addEventListener('click', () => { 
    guardarDatosForm();
    if(verifForm() == false)
        alert("Llene el formulario con datos válidos");
    else
        mostrarCalorias(Math.round(calcularCalorias()));
})