document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();//Evita que el formulario se envie automaticamente

    const usuario = document.getElementById('usuario').value;
    const pass = document.getElementById('pass').value;

    if (usuario === 'admin' && pass === '12345') {
        window.location.href = '../private/dashboard.html';
    } else {
        document.getElementById('mensajeLogin').textContent = 'Usuario o contrasena incorrectos';
    }
})