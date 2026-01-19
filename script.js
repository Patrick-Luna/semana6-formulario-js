const form = document.getElementById('registroForm');
const btnEnviar = document.getElementById('btnEnviar');

const validar = () => {
    const values = {
        nombre: document.getElementById('nombre').value.length >= 3,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.getElementById('email').value),
        pass: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(document.getElementById('pass').value),
        confirm: document.getElementById('confirmPass').value === document.getElementById('pass').value && document.getElementById('confirmPass').value !== "",
        edad: parseInt(document.getElementById('edad').value) >= 18
    };

    // Aplicar estilos y mensajes
    actualizarCampo('nombre', values.nombre, "Mínimo 3 letras");
    actualizarCampo('email', values.email, "Correo no válido");
    actualizarCampo('pass', values.pass, "Usa 8+ caracteres, número y símbolo");
    actualizarCampo('confirmPass', values.confirm, "No coincide");
    actualizarCampo('edad', values.edad, "Debes ser mayor de 18");

    // Habilitar botón si todo es true
    btnEnviar.disabled = !Object.values(values).every(v => v === true);
};

function actualizarCampo(id, esValido, mensaje) {
    const el = document.getElementById(id);
    const errorSpan = document.getElementById('error' + id.charAt(0).toUpperCase() + id.slice(1));
    if (el.value === "") {
        el.className = "";
        if(errorSpan) errorSpan.innerText = "";
    } else {
        el.className = esValido ? 'valido' : 'invalido';
        if(errorSpan) errorSpan.innerText = esValido ? "" : mensaje;
    }
}

form.addEventListener('input', validar);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("¡Formulario validado con éxito!");
});