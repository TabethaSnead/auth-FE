const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const email = formData.get('email');
    const password = formData.get('password');

    const userData = {
        email,
        password,
    };

    console.log(userData);

    const res = await fetch('http://localhost:7890/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
    });
    const json = await res.json();
});
