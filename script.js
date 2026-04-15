document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impedisce l'invio se ci sono errori

    const fields = [
        { id: 'nome', label: 'Nome' },
        { id: 'cognome', label: 'Cognome' },
        { id: 'dataNascita', label: 'Data di Nascita' },
        { id: 'luogoNascita', label: 'Luogo di Nascita' },
        { id: 'email', label: 'Email' },
        { id: 'emailConfirm', label: 'Conferma Email' },
        { id: 'password', label: 'Password' }
    ];

    const errorDisplay = document.getElementById('error-message');
    const successDisplay = document.getElementById('success-message');
    errorDisplay.textContent = "";
    successDisplay.textContent = "";

    // 1. Controllo campi vuoti
    for (let field of fields) {
        const val = document.getElementById(field.id).value.trim();
        if (!val) {
            errorDisplay.textContent = `Il campo ${field.label} è obbligatorio.`;
            return;
        }
    }

    // 2. Controllo uguaglianza email
    const email = document.getElementById('email').value;
    const emailConfirm = document.getElementById('emailConfirm').value;
    if (email !== emailConfirm) {
        errorDisplay.textContent = "Le due email inserite non corrispondono.";
        return;
    }

    // 3. Controllo Password con Regex
    const password = document.getElementById('password').value;
    // Regola: min 8 car, 1 maiusc, 1 minusc, 1 num, 1 speciale (,!£$&%§)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[,!£$&%§])[A-Za-z\d,!£$&%§]{8,}$/;

    if (!passwordRegex.test(password)) {
        errorDisplay.textContent = "La password non rispetta i requisiti di sicurezza.";
        return;
    }

    // Se tutto è corretto
    successDisplay.textContent = "Registrazione completata con successo!";
});