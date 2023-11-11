import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyB8pPuafxd1a33_hsWSLlhtr-pfuioUblI",
    authDomain: "frm-prb.firebaseapp.com",
    projectId: "frm-prb",
    storageBucket: "frm-prb.appspot.com",
    messagingSenderId: "981548376012",
    appId: "1:981548376012:web:4b432bc745ea77c76f4769"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app); // Obtén la instancia de Firestore
const formulario = document.getElementById("miFormulario");

//datos del formulario
const frmDni = document.getElementById("dni");
const frmNombre = document.getElementById("nombre");
const frmApellido = document.getElementById("apellido");
const frmFecha = document.getElementById("fecha");
const frmDireccion = document.getElementById("direccion");


formulario.addEventListener("submit", async function (event) {
    event.preventDefault();
    // Obtener los datos de los inputs
    const InputfrmDni = frmDni.value;
    const InputfrmNombre = frmNombre.value;
    const InputfrmApellido = frmApellido.value;
    const InputfrmFecha = frmFecha.value;
    const InputfrmDireccion = frmDireccion.value;

    try {
        await addDoc(collection(firestore, "DatosPrueba"), {
            dni: InputfrmDni,
            nombre: InputfrmNombre,
            Apellido: InputfrmApellido,
            fecha_naci: InputfrmFecha,
            direccion: InputfrmDireccion
        });
        Mensaje();
        limpiarInputs();
    } catch (error) {
        console.error("Error al agregar datos", error);
        MensajeError();
    }
});


const Mensaje = () => {
    Swal.fire({
        title: "Datos Guardados!",
        text: "Los datos se guardaron correctamente en la Base de Datos!",
        icon: "success"
    });
}

const MensajeError = () => {
    Swal.fire({
        title: "Oops..",
        text: "Algo salió mal, revisa los datos ingresados.",
        icon: "error"
    });
}
const limpiarInputs = ()=> {
    frmDni.value = "";
    frmNombre.value = "";
    frmApellido.value = "";
    frmFecha.value = "";
    frmDireccion.value = "";
}

/*
// Explicacion (X, Y, Z) 
X hace referencia al "id" (#) del input de entrada de datos
inputX hace referencia al elemento "input" + el atributo id que posee
Y hace referencia al nombre de campo (base de datos)
Z hace referencia al nombre de la colección (base de datos)
*/