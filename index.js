let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    
    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList.add("dark-theme");
    }
    else {
        document.body.classList.remove("dark-theme");
    }
}


// template_pfw8cq7
// service_d5247qe
//public key RJnD9jDZgJFajRUzv

async function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList.add("modal__overlay--visible");

    await emailjs
        .sendForm(
            "service_d5247qe",
            "template_pfw8cq7",
            event.target,
            "RJnD9jDZgJFajRUzv"
        )
    try {
        loading.classList.remove("modal__overlay--visible");
        success.classList.add("modal__overlay--visible");
    } catch(error){
        loading.classList.remove("modal__overlay--visible");
        console.error("EmailJS error:", error);
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
        
//         console.log("Form Data:", data); // Log the form data for testing

//         loading.classList.remove("modal__overlay--visible");
//         success.classList.add("modal__overlay--visible");
//     } catch(error) {
//         loading.classList.remove("modal__overlay--visible");
//         console.error("EmailJS error:", error);
//         alert(
//             "The email service is temporarily unavailable. Please contact me directly at alexbesharp@outlook.com"
//         );
//     }
// }


function toggleModal() {
    if (isModalOpen) {
        isModalOpen = !isModalOpen;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = !isModalOpen;
    document.body.classList.add("modal--open");
    
}