const sobres = [
    {
        emoji: '😢',
        etiqueta: 'Abre esto cuando estés triste',
        mensaje: 'Oye, mi vida, yo también te extraño. Y no importa si hace rato que hablamos o si pasaron horas, yo siempre voy a extrañarte porque eres demasiado importante para mí.\n\n¿Te acuerdas de las veces que nos reímos por nada? Yo también las guardo en mi shungo. Son recuerdos que nunca se me borran.\n\nMe agrada saber que me extrañas, porque eso significa que me quieres tanto como yo a ti, y eso está bien.\n\nSé que a veces quisieras que estuviéramos juntos todo el día, pero ya tendremos esos días, te lo prometo. Por ahora, piensa en algo bonito, piensa en alguna de nuestras locuras, y no te pongas tan triste que me vas a poner triste a mi también.'
    },
    {
        emoji: '😊',
        etiqueta: 'Abre esto cuando estés feliz',
        mensaje: '¿Sabes qué fue lo que más me enamoró de ti? Tu dedo del medio jeje, tus ojos chinitos. Y lo ultimo, tu carita hermosa.\n\nMe gusta verte así, con esa cara de felicidad, porque tu alegría se me pega y de repente yo también soy el hombre más feliz del mundo.\n\nMe encanta saber que estás leyendo esto, porque eso quiere decir que estás bien, y si tú estás bien, yo también lo estoy.\n\nNo sé qué es lo que te tiene tan contenta, pero dime para seguir hacerte feliz toda la vida. En serio, todo lo que te haga sonreír, yo lo hago.\n\nEres mi complemento perfecto, mi mundo entero. No te olvides de eso nunca, porque yo nunca me voy a olvidar de lo mucho que te amo.'
    },
    {
        emoji: '😴',
        etiqueta: 'Abre esto cuando estés aburrida',
        mensaje: '¿Aburrida otra vez? Ay, mi amor, lamento no estar ahí contigo para hacerte cosquillas, abrazarte o simplemente estar juntos sin hacer nada.\n\nPero te voy a decir algo: no te quedes ahí parada. Pon una canción que te guste, mira nuestras fotos, o escribime que yo te entretengo con mis chistes malos.\n\nLa vida es muy corta para desperdiciarla con aburrimiento. Sal, camina, busca algo que te saque una sonrisa, que yo lo que más quiero es verte sonreír.\n\nY cuando estés mejor, yo voy a ir a verte, como siempre hago, porque a tu lado es donde quiero estar. Te espero con los brazos abiertos y un café en la mano.'
    },
    {
        emoji: '😤',
        etiqueta: 'Abre esto cuando estés enojada',
        mensaje: 'Mi amor, sé que estás molesta y lamento que estés así. Esa cara no te queda nada bien.\n\nTal vez fue algo que dije, un compartido de TikTok, una nota en Instagram, o algo que mencioné sin darme cuenta. Si fui yo el que te hizo enojar, te pido perdón de corazón. Sé que a veces no mido las cosas que digo, y no lo hago con intención de hacerte mal.\n\nHablemos, explicame qué pasó y voy a tratar de no volver a hacerlo. Soy humano y equivoco, pero quiero aprender para no fallarte otra vez.\n\nNo quiero que sigas así, quiero verte contenta y tranquila como siempre. Yo siempre voy a estar aquí, defendiéndote de lo que sea, porque tú eres lo más importante que tengo.'
    },
    {
        emoji: '😒',
        etiqueta: 'Abre esto cuando estés celosa',
        mensaje: 'TE AMO.\n\nEstaba por dejar esta carta con solo esas tres palabras, pero mejor te explico.\n\nNo tienes nada de qué estar celosa. Tú eres la única que quiero en mi vida, la única que me ha hecho sentir todo esto. No hay nadie más.\n\nTe lo digo un millón de veces y lo voy a seguir diciendo: para mí eres la mujer más hermosa del mundo, y lo sabes.\n\nEstaría loco si quisiera estar con otra persona, porque nadie me hace sentir como tú. Osea no seas cojuda jsjs.\n\nTú decidiste quedarte conmigo, y eso para mí vale más que todo. No voy a arruinar lo que tenemos, porque lo nuestro es para siempre.'
    },
    {
        emoji: '🥺',
        etiqueta: 'Abre esto cuando te sientas sola',
        mensaje: 'Para un segundo y piensa en todas las personas que te quieren: tus amigos, tu familia, yo.\n\n¿Ves? No estás sola, ni de cerca. A veces el estrés nos hace pensar cosas que no son, pero la realidad es que hay gente que te quiere y te apoya, y yo soy uno de ellos.\n\nTe mando un abrazo enorme desde aquí, cierra los ojos un momento y siéntelo. Y si no lo sientes, dime que voy a ir a verte y te lo doy multiplicado por diez, que por abrazos no me guardo nada.\n\nEres una persona increíble, única, y me saqué la lotería teniéndote a mi lado. Siempre voy a estar contigo, ya sea de lejos o de cerca, pero siempre.'
    },
    {
        emoji: '🌧️',
        etiqueta: 'Abre esto cuando tengas un mal día',
        mensaje: 'Tranquila, mi vida, solo es un mal día. Mañana va a ser mejor, te lo prometo.\n\nTodos tenemos días así, donde nada sale bien, donde todo se siente pesado. Tal vez peleaste con alguien, o algo te salió mal, o simplemente estás cansada. Pero no te preocupes, porque esto pasa.\n\nPon una música que te guste, mira una peli, o escribime que yo te ayudo a sacar esa cara de tristeza.\n\nSea lo que sea que esté pasando, yo voy a estar ahí contigo. Y mañana al despertar, todo va a ser distinto, puede que sea uno de los mejores días de tu vida.\n\nÁnimo, mi amor, que yo creo en ti y sé que puedes con todo.'
    },
    {
        emoji: '💔',
        etiqueta: 'Abre esto cuando estés decepcionada',
        mensaje: 'Las decepciones duelen, lo sé. Te hacen abrir los ojos aunque no quieras.\n\nTal vez esperabas algo de alguien que no cumplió, o te prometieron algo y no lo hicieron. Eso duele, lo sé. Pero acuerdate que no todas las personas son iguales. Hay algunas que te dan todo sin pedir nada a cambio, como yo.\n\nNo quiero que estés mal, demuestra lo fuerte que eres, porque lo eres, aunque a veces no lo sientas. Las decepciones vienen de las personas que más quieres, y por eso duelen tanto.\n\nRespira, tómate tu tiempo, y cuando estés lista, yo voy a estar aquí. No necesitas resolver todo ahora, solo necesitas saber que te amo y que esto va a pasar.\n\n¡Te amo!'
    },
    {
        emoji: '🌙',
        etiqueta: 'Abre esto cuando estés a punto de dormir',
        mensaje: 'Mi amor, no sé a qué hora vas a leer esto, pero espero que estés bien.\n\nQuiero que te acuestes tranquila, sabiendo que te amo y que mañana va a ser un día bonito.\n\nEstoy feliz de estar en tu vida, y todos los días le doy gracias al destino por haberte conocido. Eres la mejor persona que he conocido, y te adoro con todo, con tus defectos y con tus virtudes.\n\nLo único que te pido es que jamás cambies, porque me encantas tal cual como eres.\n\nDescansa mucho, mi muñequita. Que la luna te cuide y que tus sueños sean bonitos. Hasta mañana, mi cielo.'
    },
    {
        emoji: '💖',
        etiqueta: 'Abre para saber lo mucho que te amo',
        especial: true,
        textoEspecial: 'Sirey, mi amor, la dueña de mi corazón: este es mi mensaje para ti, con todo lo que siento dentro. Desde que llegaste a mi vida, todo tiene sentido. Tu risa, tus ojos, tu forma de ser… todo en ti me enamora cada día más. Quise que escucharas mi voz para que sientas, aunque sea un poquito, cuánto te amo. No importa cuántos años pasen: siempre serás mi única elegida. Te amo hoy, mañana y siempre, mi Sirey. 💖'
    }
];

const btnEntrar = document.getElementById('btn-entrar');
const musicaFondo = document.getElementById('musica-fondo');
const grid = document.getElementById('sobres-grid');

const enIframe = window.self !== window.top;

const modal = document.getElementById('modal-carta');
const modalEmoji = document.getElementById('modal-emoji');
const modalEtiqueta = document.getElementById('modal-etiqueta');
const modalTexto = document.getElementById('modal-texto');

const modalEspecial = document.getElementById('modal-especial');
const audioAmor = document.getElementById('audio-amor');
const btnAudioAmor = document.getElementById('btn-audio-amor');

function reproducirMusica() {
    if (enIframe) {
        window.parent.postMessage('activar-musica', '*');
        return;
    }
    if (musicaFondo.paused) {
        musicaFondo.volume = 0.2;
        musicaFondo.play().catch(() => {});
    }
}

btnEntrar.addEventListener('click', () => {
    reproducirMusica();
    const seccionSobres = document.getElementById('sobres');
    seccionSobres.classList.remove('oculta');
    setTimeout(() => {
        seccionSobres.scrollIntoView({ behavior: 'smooth' });
    }, 100);
});

const btnVolver = document.getElementById('btn-volver');
if (btnVolver) {
    btnVolver.addEventListener('click', (e) => {
        if (enIframe) {
            e.preventDefault();
            window.parent.postMessage('cerrar-regalo2', '*');
        }
    });
}

function crearSobres() {
    sobres.forEach((sobre, indice) => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'sobre-card' + (sobre.especial ? ' especial' : '');
        tarjeta.innerHTML =
            '<div class="sobre"><div class="sobre-emoji">' + sobre.emoji + '</div></div>' +
            '<div class="sobre-etiqueta">' + sobre.etiqueta + '</div>';
        tarjeta.addEventListener('click', () => {
            if (sobre.especial) {
                abrirEspecial();
            } else {
                abrirCarta(indice);
            }
        });
        grid.appendChild(tarjeta);
    });
}

function abrirCarta(indice) {
    const sobre = sobres[indice];
    modalEmoji.textContent = sobre.emoji;
    modalEtiqueta.textContent = sobre.etiqueta;
    modalTexto.textContent = sobre.mensaje;
    modal.classList.add('visible');
}

function cerrarCarta() {
    modal.classList.remove('visible');
    document.querySelectorAll('.sobre-card.abierto').forEach(t => t.classList.remove('abierto'));
}

function abrirEspecial() {
    audioAmor.pause();
    modalEspecial.classList.add('visible');
}

function cerrarEspecial() {
    audioAmor.pause();
    btnAudioAmor.classList.remove('activo');
    btnAudioAmor.textContent = '🎙️';
    modalEspecial.classList.remove('visible');
}

function pausarFondo() {
    if (enIframe) {
        window.parent.postMessage('pausar-musica', '*');
    } else {
        musicaFondo.pause();
    }
}

function reanudarFondo() {
    if (enIframe) {
        window.parent.postMessage('reanudar-musica', '*');
    } else {
        musicaFondo.volume = 0.2;
        musicaFondo.play().catch(() => {});
    }
}

btnAudioAmor.addEventListener('click', () => {
    if (audioAmor.paused) {
        pausarFondo();
        audioAmor.play().catch((e) => {
            console.log('Error audio:', e);
        });
    } else {
        audioAmor.pause();
        audioAmor.currentTime = 0;
        reanudarFondo();
    }
});

audioAmor.addEventListener('ended', () => {
    reanudarFondo();
});

document.getElementById('modal-cerrar').addEventListener('click', cerrarCarta);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        cerrarCarta();
    }
});

document.getElementById('modal-especial-cerrar').addEventListener('click', cerrarEspecial);
modalEspecial.addEventListener('click', (e) => {
    if (e.target === modalEspecial) {
        cerrarEspecial();
    }
});

function crearCorazones() {
    const contenedor = document.getElementById('corazones-flotantes');
    const emojis = ['💕', '💖', '💗', '✨', '🌹'];
    for (let i = 0; i < 18; i++) {
        const corazon = document.createElement('span');
        corazon.className = 'corazon-animado';
        corazon.textContent = emojis[i % emojis.length];
        corazon.style.left = Math.random() * 100 + '%';
        corazon.style.fontSize = 20 + Math.random() * 30 + 'px';
        corazon.style.animationDuration = 8 + Math.random() * 10 + 's';
        corazon.style.animationDelay = Math.random() * 8 + 's';
        contenedor.appendChild(corazon);
    }
}

function crearGaleria() {
    const sobreEspecial = sobres.find(s => s.especial);
    document.getElementById('texto-especial').textContent = sobreEspecial.textoEspecial;
    const galeria = document.getElementById('galeria-amor');
    for (let i = 1; i <= 4; i++) {
        const img = document.createElement('img');
        img.src = 'fotos/foto' + i + '.jpg';
        img.alt = 'Un recuerdo nuestro';
        img.loading = 'lazy';
        galeria.appendChild(img);
    }
}

crearCorazones();
crearSobres();
crearGaleria();

// Lightbox fotos
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCerrar = document.getElementById('lightbox-cerrar');

document.getElementById('galeria-amor').addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        lightboxImg.src = e.target.src;
        lightboxImg.alt = e.target.alt;
        lightbox.classList.add('visible');
    }
});

lightboxCerrar.addEventListener('click', () => {
    lightbox.classList.remove('visible');
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('visible');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('visible')) {
        lightbox.classList.remove('visible');
    }
});
