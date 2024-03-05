const radiologiaArray = [
    { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA' },
    { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE' },
    { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE' },
    { hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA' },
    { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA' }
];

const traumatologiaArray = [
    { hora: '8:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA' },
    { hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE' },
    { hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE' }
];

const dentalArray = [
    { hora: '8:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA' },
    { hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA' },
    { hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA' },
    { hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE' }
];

// RADIOLOGIA 1
// console.log(radiologiaArray[0])
// console.log(radiologiaArray[radiologiaArray.length - 1].paciente)

const radiologiahtml = document.getElementById("radiologiahtml")
// alternativa con "#" const radiologiahtml = document.querySelector("#radiologiahtml")

radiologiahtml.textContent = `Primera atención: ${radiologiaArray[0].paciente} - ${radiologiaArray[0].prevision} | Última atención: ${radiologiaArray[radiologiaArray.length - 1].paciente} - ${radiologiaArray[radiologiaArray.length - 1].prevision}`

// recorrer el arreglo (for of, forEach(no es infinito), for)
// reciben una funcion de callback: pasar una funcion como parametro
// las funciones de flecha no se utilizan como metodos(accion) como el(this(cuidado!))
// item o x(nombre inventado) es cada elemento que se recorre

// radiologiaArray.forEach((item, index, array) => {
//     console.log(item, index, array)
// })

const table1Radiologia = document.getElementById('table1Radiologia')
table1Radiologia.innerHTML = ""
radiologiaArray.forEach((item) => {
    console.log(item)

    table1Radiologia.innerHTML += `
    <tr>
    <td scope="row">${item.hora}</td>
    <td>${item.especialista}</td>
    <td>${item.paciente}</td>
    <td>${item.rut}</td>
    <td>${item.prevision}</td>
    </tr>
    `
})

// TRAUMATOLOGIA 2
// console.log(traumatologiaArray[0])
// console.log(traumatologiaArray[traumatologiaArray.length - 1].paciente)

const traumatologiahtml = document.getElementById("traumatologiahtml")


traumatologiahtml.textContent = `Primera atención: ${traumatologiaArray[0].paciente} - ${traumatologiaArray[0].prevision} | Última atención: ${traumatologiaArray[traumatologiaArray.length - 1].paciente} - ${traumatologiaArray[traumatologiaArray.length - 1].prevision}`


const table2Traumatologia = document.getElementById('table2Traumatologia')
table2Traumatologia.innerHTML = ""
traumatologiaArray.forEach((item) => {
    console.log(item)

    table2Traumatologia.innerHTML += `
    <tr>
    <td scope="row">${item.hora}</td>
    <td>${item.especialista}</td>
    <td>${item.paciente}</td>
    <td>${item.rut}</td>
    <td>${item.prevision}</td>
    </tr>
    `
})

// DENTAL 3
// console.log(dentalArray[0])
// console.log(dentalArray[dentalArray.length - 1].paciente)

const dentalhtml = document.getElementById("dentalhtml")


dentalhtml.textContent = `Primera atención: ${dentalArray[0].paciente} - ${dentalArray[0].prevision} | Última atención: ${dentalArray[dentalArray.length - 1].paciente} - ${dentalArray[dentalArray.length - 1].prevision}`


const table3Dental = document.getElementById('table3Dental')
table3Dental.innerHTML = ""
dentalArray.forEach((item) => {
    console.log(item)

    table3Dental.innerHTML += `
    <tr>
    <td scope="row">${item.hora}</td>
    <td>${item.especialista}</td>
    <td>${item.paciente}</td>
    <td>${item.rut}</td>
    <td>${item.prevision}</td>
    </tr>
    `
})