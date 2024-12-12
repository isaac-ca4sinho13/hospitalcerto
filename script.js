// Simulando um banco de dados de usuários
const users = [
    { email: 'paciente@hospital.com', password: '1234', role: 'paciente' },
    { email: 'medico@hospital.com', password: '1234', role: 'medico' },
    { email: 'admin@hospital.com', password: '1234', role: 'admin' }
];

function loginUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Redireciona de acordo com o tipo de usuário
        if (user.role === 'paciente') {
            window.location.href = 'dashboard_paciente.html';
        } else if (user.role === 'medico') {
            window.location.href = 'dashboard_medico.html';
        } else if (user.role === 'admin') {
            window.location.href = 'dashboard_admin.html';
        }
    } else {
        alert('Email ou senha incorretos.');
    }

    return false; // Evita o envio do formulário para o servidor
}
