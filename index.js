// template_pfw8cq7
// service_d5247qe
//public key RJnD9jDZgJFajRUzv

async function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList.add('modal__overlay--visible');

    await emailjs
        .sendForm(
            'service_d5247qe',
            'template_pfw8cq7',
            event.target,
            'RJnD9jDZgJFajRUzv'
        )
    try {
        loading.classList.remove('modal__overlay--visible');
        success.classList.add('modal__overlay--visible');
    } catch(error){
        loading.classList.remove('modal__overlay--visible');
        console.error('EmailJS error:', error);
        alert(
            "The email service is temporarily unavailable. Please contact me directly at alexbesharp@outlook.com"
        )
    }
}

// // for testing without sending an email using emailJS
//     try {
//         // Instead of sending the email, log the form data to the console
//         const formData = new FormData(event.target);
//         const data = Object.fromEntries(formData.entries());
        
//         console.log('Form Data:', data); // Log the form data for testing

//         loading.classList.remove('modal__overlay--visible');
//         success.classList.add('modal__overlay--visible');
//     } catch(error) {
//         loading.classList.remove('modal__overlay--visible');
//         console.error('EmailJS error:', error);
//         alert(
//             "The email service is temporarily unavailable. Please contact me directly at alexbesharp@outlook.com"
//         );
//     }
// }
