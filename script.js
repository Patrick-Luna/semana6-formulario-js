const form = document.getElementById('registroForm');
const btnEnviar = document.getElementById('btnEnviar');

const validarCampo = (id, regex, errorMsg) => {
    const input = document.getElementById(id);
    const errorSpan = document.getElementById('error' + id.charAt(0).toUpperCase() + id.slice(1));
    let esValido = false;

    if (id === 'confirmPass') {
        const pass = document.getElementById('pass').value;
        esValido = input.value === pass && input.value !== "";
    } else if (id === 'edad') {
        esValido = parseInt(input.value) >= 18;
    } else if (id === 'nombre') {
        esValido = input.value.trim().length >= 3;
    } else {
        esValido = regex.test(input.value);
    }

    if (input.value === "") {
        input.className = "";
        errorSpan.textContent = "";
    } else {
        input.className = esValido ? 'valido' : 'invalido';
        errorSpan.textContent = esValido ? "" : errorMsg;
    }
    return esValido;
};

const validarFormulario = () => {
    const vNombre = validarCampo('nombre', null, "Mínimo 3 caracteres");
    const vEmail = validarCampo('email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email no válido");
    const vPass = validarCampo('pass', /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/, "8+ caracteres, número y símbolo");
    const vConfirm = validarCampo('confirmPass', null, "Las contraseñas no coinciden");
    const vEdad = validarCampo('edad', null, "Debes ser mayor de 18");

    btnEnviar.disabled = !(vNombre && vEmail && vPass && vConfirm && vEdad);
};

form.addEventListener('input', validarFormulario);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("¡Registro completado con éxito! 🚀");
});