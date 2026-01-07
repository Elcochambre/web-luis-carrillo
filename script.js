// 1. FORMULARIO DE CONTACTO
const $form = document.querySelector('.formulario-contacto');

if ($form) { // Añadimos verificación para evitar errores si no existe en la página
    $form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData($form);
        const response = await fetch('https://formspree.io/f/maqwaonz', {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            $form.reset();
            alert('¡Mensaje enviado con éxito! Muchas gracias por tu interés. Me pondré en contacto contigo más rápido que las balas!.');
        } else {
            alert('Un resplandor y hace PUUUMM!! Y digo, ay! ya está aquí la guerra....Hubo un error al enviar.');
        }
    });
}

// 2. MODO NOCHE
const btnBN = document.getElementById('toggle-bn');
if (btnBN) {
    const iconoBtn = btnBN.querySelector('.icono-btn');
    btnBN.addEventListener('click', () => {
        document.body.classList.toggle('modo-contraste');
        if (document.body.classList.contains('modo-contraste')) {
            iconoBtn.textContent = '🌈';
        } else {
            iconoBtn.textContent = '🌙';
        }
    });
}

// 3. VARIANTES ALEATORIAS 
const variantes = [
    {
        foto: "fotos/foto1.jpg", 
        prompt: "Studio portrait of a man with a blonde hair streak, wearing a vibrant rainbow faux fur jacket with a fluffy hood, neutral grey background, high detail, sharp focus"
    },
    {
        foto: "fotos/foto2.jpg", 
        prompt: "Extreme close-up underwater portrait of a bearded man, sunlight caustics reflecting on skin, many tiny air bubbles, crystal clear blue water, hyper-realistic."
    },
    {
        foto: "fotos/foto3.jpg", 
        prompt: "Moody indoor portrait of a man in a grey sweater holding a steaming cup of coffee, soft window light, bookshelf background, warm cinematic tones, 8k resolution."
    },
    {
        foto: "fotos/foto4.jpg", 
        prompt: "Cinematic portrait of a bearded man holding a burning flower, bright orange flame illuminating his face, dark moody background, high contrast, 8k resolution."
    },
    {
        foto: "fotos/foto5.jpg", 
        prompt: "Creative portrait of a man seen through broken mirror shards, small green leaves scattered on glass, dramatic shadows, moody lighting, artistic composition, 8k."
    }, // <-- Coma añadida aquí
    {
        foto: "fotos/foto6.jpg", 
        prompt: "Full body shot of a man in a Blue Power Ranger cosplay suit, holding a helmet, standing in an abandoned industrial warehouse, gritty cinematic lighting, 8k." 
    } ,
    {
        foto: "fotos/foto7.jpg", 
        prompt: "Cinematic portrait of a bearded man in a dark overcoat, dramatic side lighting (chiaroscuro) against a slatted wood window, moody and realistic style." 
    } ,
        {
        foto: "fotos/foto8.jpg", 
        prompt: "Surreal portrait of a bearded man surrounded by vintage red telephones hanging from cables, solid red background, studio lighting, conceptual modern style." 
    } ,
   {
        foto: "fotos/foto9.jpg", 
        prompt: "Dramatic portrait, bearded man, dark background. A single horizontal red laser beam crosses over his left eye. Teal/cyan rim lighting, moody atmosphere." 
    } ,
    {
        foto: "fotos/foto10.jpg", 
        prompt: "High-contrast B&W portrait, bearded man looking up. Round mirrored sunglasses reflecting a city skyline. Black background, clean white t-shirt." 
    } ,
        {
        foto: "fotos/foto11.jpg", 
        prompt: "Surreal B&W photo, man's head inside a white birdcage. A black bowler hat sits on top of the cage. He wears a heavy patterned coat. Minimalist background." 
    },   /*
        {
        foto: "fotos/foto6.jpg", 
        prompt: "" 
    } */
];

function inicializarPerfilAleatorio() {
    const indiceAleatorio = Math.floor(Math.random() * variantes.length);
    const seleccion = variantes[indiceAleatorio];

    const imagenElemento = document.getElementById('foto-perfil-azar');
    const textoElemento = document.getElementById('prompt-texto');

    if (imagenElemento && textoElemento) {
        imagenElemento.src = seleccion.foto;
        textoElemento.innerText = seleccion.prompt;
    }
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', inicializarPerfilAleatorio);

//Hamburguesa
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.onclick = (e) => {
            e.preventDefault();
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('open');
        };
    }
});

// Botón de subir con scroll
document.getElementById('btn-subir').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Esta es la clave para la suavidad
    });
});

// 5. APARECER/OCULTAR BOTÓN DE SUBIR SEGÚN EL SCROLL
const btnSubir = document.getElementById('btn-subir');

window.addEventListener('scroll', () => {
    // Si el scroll vertical es mayor a 300px, añadimos la clase 'mostrar'
    if (window.scrollY > 300) {
        btnSubir.classList.add('mostrar');
    } else {
        // Si volvemos arriba, la quitamos para que desaparezca
        btnSubir.classList.remove('mostrar');
    }
});

window.onscroll = () => {
    const btn = document.getElementById('btn-subir');
    if (window.scrollY > 300) {
        btn.classList.add('mostrar');
    } else {
        btn.classList.remove('mostrar');
    }
};

// BARRA DE PROGRESO DE LECTURA
window.addEventListener('scroll', () => {
    const progressBar = document.getElementById('progress-bar');
    const windowScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (windowScroll / height) * 100;
    
    if (progressBar) {
        progressBar.style.width = scrolled + "%";
    }
});

// EFECTO APARICIÓN SUAVE EN CASCADA
function revelarColores() {
    const items = document.querySelectorAll('.referencia-item');
    const triggerBottom = window.innerHeight * 0.9;

    items.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < triggerBottom) {
            setTimeout(() => {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            }, index * 100); // 100ms de retraso entre cada uno
        }
    });
}
window.addEventListener('scroll', revelarColores);

const menuBtn = document.getElementById('menu-movil-btn');
const navLinks = document.querySelector('.nav-links');
const allLinks = document.querySelectorAll('.nav-links a');

// Abrir/Cerrar menú
menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
});

// Cerrar al hacer clic en un enlace y scroll suave
allLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Cerramos el popup
        navLinks.classList.remove('active');

        // Scroll suave manual (por si el CSS falla)
        window.scrollTo({
            top: targetSection.offsetTop - 20,
            behavior: 'smooth'
        });
    });
});

// Cerrar si tocas fuera del menú
document.addEventListener('click', () => {
    navLinks.classList.remove('active');
});

window.addEventListener('scroll', function() {
    const btnSubir = document.getElementById('btn-subir');
    
    // Si bajamos más de 300px, aparece la flecha
    if (window.scrollY > 300) {
        btnSubir.classList.add('mostrar');
    } else {
        btnSubir.classList.remove('mostrar');
    }
});

const linksMenu = document.querySelectorAll('.nav-links a');

linksMenu.forEach(link => {
    link.addEventListener('click', function() {
        // Quitamos la clase activa de todos los demás
        linksMenu.forEach(l => l.classList.remove('active-link'));
        
        // Añadimos la clase al que acabamos de pulsar
        this.classList.add('active-link');
        
        // El resto de tu lógica para cerrar el menú...
        setTimeout(() => {
            navLinks.classList.remove('active');
        }, 300); // Pequeño retraso para que se vea el color antes de cerrar
    });
});

// Bloquear el menú contextual (clic derecho)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
}, false);

// Bloquear atajos de teclado comunes para copiar (Ctrl+C, Ctrl+U, Ctrl+S)
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 'c' || e.key === 'u' || e.key === 's' || e.key === 'p')) {
        e.preventDefault();
        return false;
    }
});

// --- LÓGICA DEL ACORDEÓN DE FORMACIÓN ---
const acordeones = document.querySelectorAll('.acordeon-header');

acordeones.forEach(acordeon => {
    acordeon.addEventListener('click', () => {
        
        // 1. Alternar la clase 'activo' para girar la flecha
        acordeon.classList.toggle('activo');
        
        // 2. Controlar la altura del contenido (abrir/cerrar)
        const contenido = acordeon.nextElementSibling;
        
        if (acordeon.classList.contains('activo')) {
            // Si abrimos, calculamos la altura real del contenido
            contenido.style.maxHeight = contenido.scrollHeight + "px";
        } else {
            // Si cerramos, altura a 0
            contenido.style.maxHeight = 0;
        }
    });
});