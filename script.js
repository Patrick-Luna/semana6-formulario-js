const form = document.getElementById('registroForm');
const btnEnviar = document.getElementById('btnEnviar');

const validar = () => {
    const campos = {
        nombre: document.getElementById('nombre').value.trim().length >= 3,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.getElementById('email').value),
        pass: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(document.getElementById('pass').value),
        confirm: document.getElementById('confirmPass').value === document.getElementById('pass').value && document.getElementById('confirmPass').value !== "",
        edad: parseInt(document.getElementById('edad').value) >= 18
    };

    actualizarEstilo('nombre', campos.nombre, "Mínimo 3 letras");
    actualizarEstilo('email', campos.email, "Email inválido");
    actualizarEstilo('pass', campos.pass, "Insegura (8+ carac, nº y símbolo)");
    actualizarEstilo('confirmPass', campos.confirm, "No coincide");
    actualizarEstilo('edad', campos.edad, "Mayoría de edad requerida");

    btnEnviar.disabled = !Object.values(campos).every(v => v === true);
};

function actualizarEstilo(id, esValido, mensaje) {
    const input = document.getElementById(id);
    const error = document.getElementById('error' + id.charAt(0).toUpperCase() + id.slice(1));
    
    if (input.value === "") {
        input.className = "";
        error.textContent = "";
    } else {
        input.className = esValido ? "valido" : "invalido";
        error.textContent = esValido ? "" : mensaje;
    }
}

form.addEventListener('input', validar);