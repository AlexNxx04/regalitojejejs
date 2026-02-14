// ============================================
// CONFIGURACIÓN IMPORTANTE
// ============================================

// CAMBIA ESTA FECHA a cuando se conocieron o empezaron su relación
// Formato: año, mes (0=enero, 11=diciembre), día, hora, minuto, segundo
const fechaEspecial = new Date(2025, 2, 30, 0, 0, 0); // Ejemplo: 30 de marzo 2025

// ============================================
// SISTEMA DE OPTIMIZACIÓN DE RENDIMIENTO
// ============================================
const rendimiento = {
    // Estado de animaciones activas
    animacionesActivas: new Map(),
    
    // Observador de intersección para detectar secciones visibles
    crearObserverSeccion(callback) {
        return new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const seccionId = entry.target.dataset.seccionId || entry.target.className;
                if (entry.isIntersecting) {
                    // Sección visible - reanudar animaciones
                    this.reanudarAnimaciones(seccionId);
                    if (callback) callback(seccionId, true);
                } else {
                    // Sección no visible - pausar animaciones
                    this.pausarAnimaciones(seccionId);
                    if (callback) callback(seccionId, false);
                }
            });
        }, {
            threshold: 0.1, // 10% visible para activar
            rootMargin: '50px' // Margen para anticipar carga
        });
    },
    
    // Pausar animaciones de una sección
    pausarAnimaciones(seccionId) {
        this.animacionesActivas.forEach((animacion, id) => {
            if (id.includes(seccionId) || id === 'global') {
                if (animacion.intervalId) {
                    clearInterval(animacion.intervalId);
                    animacion.pausada = true;
                }
                if (animacion.requestId) {
                    cancelAnimationFrame(animacion.requestId);
                    animacion.pausada = true;
                }
            }
        });
        
        // Pausar animaciones CSS
        document.querySelectorAll(`[data-seccion="${seccionId}"]`).forEach(el => {
            el.style.animationPlayState = 'paused';
        });
        
        console.log(`🔴 Animaciones pausadas para: ${seccionId}`);
    },
    
    // Reanudar animaciones de una sección
    reanudarAnimaciones(seccionId) {
        this.animacionesActivas.forEach((animacion, id) => {
            if (id.includes(seccionId) || id === 'global') {
                if (animacion.pausada) {
                    if (animacion.reanudar) {
                        animacion.reanudar();
                    }
                    animacion.pausada = false;
                }
            }
        });
        
        // Reanudar animaciones CSS
        document.querySelectorAll(`[data-seccion="${seccionId}"]`).forEach(el => {
            el.style.animationPlayState = 'running';
        });
        
        console.log(`🟢 Animaciones reanudadas para: ${seccionId}`);
    },
    
    // Registrar animación
    registrarAnimacion(id, animacion) {
        this.animacionesActivas.set(id, animacion);
    },
    
    // Optimizar según dispositivo
    esDispositivoLento() {
        return window.innerWidth <= 768 || 
               navigator.hardwareConcurrency <= 2 || 
               /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
};

// ============================================
// MANEJO DE ERRORES PARA MULTIMEDIA
// ============================================
function setupMediaErrorHandling() {
    // Manejar errores en audios
    document.querySelectorAll('audio').forEach(audio => {
        audio.addEventListener('error', function() {
            console.warn('Error cargando audio:', this.src);
            this.style.display = 'none';
            const errorMsg = document.createElement('div');
            errorMsg.className = 'media-error';
            errorMsg.textContent = '🎵 No se pudo cargar el audio';
            this.parentNode.insertBefore(errorMsg, this);
        });
    });

    // Manejar errores en videos
    document.querySelectorAll('video').forEach(video => {
        video.addEventListener('error', function() {
            console.warn('Error cargando video:', this.src);
            this.style.display = 'none';
            const errorMsg = document.createElement('div');
            errorMsg.className = 'media-error';
            errorMsg.textContent = '🎥 No se pudo cargar el video';
            this.parentNode.insertBefore(errorMsg, this);
        });
    });

    // Manejar errores en imágenes
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            console.warn('Error cargando imagen:', this.src);
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik03NSA3NUgxMjVWMTI1SDc1Vjc1WiIgZmlsbD0iI0Q5RDlEOSIvPgo8cGF0aCBkPSJNOTAgMTBIMTgwVjE4MEg5MFYxMFoiIGZpbGw9IiNEMUQxRDEiLz4KPHAgaWQ9ImltYWdlLWVycm9yIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB5PSIxMDAiIHg9IjEwMCI+SW1hZ2VuIG5vIGRpc3BvbmlibGU8L3A+Cjwvc3ZnPg==';
        });
    });
}

// ============================================
// FUNCIÓN COMENZAR EXPERIENCIA
// ============================================
function comenzarExperiencia() {
    // Smooth scroll a la siguiente sección
    setTimeout(() => {
        const targetSection = document.getElementById('contador');
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    }, 300);
}



// ============================================
// CORAZONES FLOTANTES DE FONDO (OPTIMIZADO)
// ============================================
function crearCorazones() {
    const container = document.querySelector('.hearts-container');
    if (!container) return;
    
    const animacionCorazones = {
        intervalId: null,
        pausada: false,
        reanudar: function() {
            if (!this.pausada) return;
            this.intervalId = setInterval(() => {
                if (this.pausada) return;
                
                // Reducir frecuencia en dispositivos lentos
                const delay = rendimiento.esDispositivoLento() ? 2000 : 800;
                const maxCorazones = rendimiento.esDispositivoLento() ? 3 : 5;
                
                if (container.children.length >= maxCorazones) return;
                
                const corazon = document.createElement('div');
                corazon.classList.add('corazon');
                corazon.textContent = '❤️';
                corazon.style.left = Math.random() * 100 + '%';
                corazon.style.animationDuration = (Math.random() * 3 + 5) + 's';
                corazon.style.fontSize = (Math.random() * 15 + 15) + 'px';
                corazon.dataset.seccion = 'global'; // Para control de rendimiento
                
                container.appendChild(corazon);
                
                setTimeout(() => {
                    corazon.remove();
                }, 8000);
            }, rendimiento.esDispositivoLento() ? 2000 : 800);
        }
    };
    
    // Registrar animación
    rendimiento.registrarAnimacion('corazones-flotantes', animacionCorazones);
    
    // Iniciar animación
    animacionCorazones.reanudar();
}

// ============================================
// CONTADOR DE TIEMPO JUNTOS CON EFECTO (OPTIMIZADO)
// ============================================
function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - fechaEspecial;
    
    const segundos = Math.floor(diferencia / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    
    // Solo animar si la sección del contador es visible
    const seccionContador = document.querySelector('.contador');
    const isVisible = seccionContador && seccionContador.getBoundingClientRect().top < window.innerHeight;
    
    if (isVisible) {
        animarNumero('dias', dias);
        animarNumero('horas', horas % 24);
        animarNumero('minutos', minutos % 60);
        animarNumero('segundos', segundos % 60);
    } else {
        // Actualizar sin animación si no es visible
        document.getElementById('dias').textContent = dias;
        document.getElementById('horas').textContent = horas % 24;
        document.getElementById('minutos').textContent = minutos % 60;
        document.getElementById('segundos').textContent = segundos % 60;
    }
}

function animarNumero(elementId, nuevoValor) {
    const elemento = document.getElementById(elementId);
    if (!elemento) return;
    
    const valorActual = parseInt(elemento.textContent) || 0;
    
    // Reducir animaciones en dispositivos lentos
    if (!rendimiento.esDispositivoLento() && valorActual !== nuevoValor) {
        elemento.style.transform = 'scale(1.2)';
        setTimeout(() => {
            elemento.textContent = nuevoValor;
            elemento.style.transform = 'scale(1)';
        }, 150);
    } else {
        elemento.textContent = nuevoValor;
    }
}

// ============================================
// SCROLL SUAVE A SECCIONES
// ============================================
function scrollToSection(selector) {
    const elemento = document.querySelector(selector);
    if (elemento) {
        if (selector === '.contador') {
            desbloquearContenido();
            
            // Iniciar música de fondo inmediatamente al hacer clic en comenzar
            if (musicaFondo && musicaFondo.paused) {
                musicaFondo.play().then(() => {
                    musicaActivaSiempre = true;
                    console.log('🎵 Música de fondo iniciada por clic en Comenzar');
                }).catch(error => {
                    console.warn('⚠️ Error al iniciar música por Comenzar:', error);
                });
            }
            
            setTimeout(() => {
                elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        } else {
            elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

// ============================================
// DESBLOQUEAR TODO EL CONTENIDO
// ============================================
function desbloquearContenido() {
    console.log('Desbloqueando contenido general...');
    const secciones = document.querySelectorAll('section:not(.portada):not(.final)');
    
    secciones.forEach((seccion, index) => {
        setTimeout(() => {
            seccion.classList.add('contenido-desbloqueado');
            console.log('Sección desbloqueada:', seccion.className);
        }, index * 50);
    });
}

// ============================================
// ANIMACIÓN AL HACER SCROLL
// ============================================
function animarAlScroll() {
    const elementos = document.querySelectorAll('.evento, .razon-card, .cancion-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });
    
    elementos.forEach(elemento => {
        observer.observe(elemento);
    });
}

// ============================================
// CARRUSEL DE FOTOS
// ============================================
let indiceCarruselActual = 0;

function moverCarrusel(direccion) {
    const items = document.querySelectorAll('.carrusel-item');
    const indicadores = document.querySelectorAll('.indicador');
    
    items[indiceCarruselActual].classList.remove('active');
    indicadores[indiceCarruselActual].classList.remove('active');
    
    indiceCarruselActual += direccion;
    
    if (indiceCarruselActual >= items.length) {
        indiceCarruselActual = 0;
    } else if (indiceCarruselActual < 0) {
        indiceCarruselActual = items.length - 1;
    }
    
    items[indiceCarruselActual].classList.add('active');
    indicadores[indiceCarruselActual].classList.add('active');
}

function irAFoto(indice) {
    const items = document.querySelectorAll('.carrusel-item');
    const indicadores = document.querySelectorAll('.indicador');
    
    items[indiceCarruselActual].classList.remove('active');
    indicadores[indiceCarruselActual].classList.remove('active');
    
    indiceCarruselActual = indice;
    
    items[indiceCarruselActual].classList.add('active');
    indicadores[indiceCarruselActual].classList.add('active');
}

function autoAvanzarCarrusel() {
    setInterval(() => {
        moverCarrusel(1);
    }, 6500);
}

// ============================================
// VISUALIZADOR DE AUDIO
// ============================================
function controlarReproductoresAudio() {
    const audios = document.querySelectorAll('audio');
    
    audios.forEach((audio, index) => {
        const visualizerId = audio.getAttribute('data-visualizer');
        const visualizer = document.getElementById(visualizerId);
        
        // Función para activar el visualizer
        const activarVisualizer = () => {
            if (visualizer) {
                visualizer.classList.add('playing');
            }
        };
        
        // Función para desactivar el visualizer
        const desactivarVisualizer = () => {
            if (visualizer) {
                visualizer.classList.remove('playing');
            }
        };
        
        // Eventos para desktop
        audio.addEventListener('play', activarVisualizer);
        audio.addEventListener('pause', desactivarVisualizer);
        audio.addEventListener('ended', desactivarVisualizer);
        
        // Eventos específicos para móvil (touch)
        audio.addEventListener('touchstart', function() {
            if (audio.paused) {
                audio.play().then(activarVisualizer).catch(console.warn);
            } else {
                audio.pause();
            }
        }, { passive: true });
        
        // Verificar estado inicial
        if (!audio.paused) {
            activarVisualizer();
        }
    });
    
    console.log(`Se configuraron ${audios.length} reproductores de audio`);
}

// ============================================
// CARTA INTERACTIVA - ABRIR SOBRE
// ============================================
let sobreAbierto = false;

function abrirSobre() {
    const sobre = document.querySelector('.sobre');
    const boton = document.querySelector('.btn-sobre');
    
    if (!sobre || !boton) {
        console.log('Elementos del sobre no encontrados');
        return;
    }
    
    if (!sobreAbierto) {
        sobre.classList.add('abierto');
        boton.textContent = 'Cerrar carta 💌';
        sobreAbierto = true;
    } else {
        sobre.classList.remove('abierto');
        boton.textContent = 'Abrir carta 💌';
        sobreAbierto = false;
    }
}

// Asegurar que la función esté disponible globalmente
window.abrirSobre = abrirSobre;

// ============================================
// BOTÓN INTERACTIVO - PREGUNTA
// ============================================
function respuestaSi() {
    const respuesta = document.getElementById('respuesta');
    const btnNo = document.getElementById('btnNo');
    const btnSi = document.querySelector('.btn-si');
    const seccionFinal = document.querySelector('.final');
    
    console.log('Botón SÍ presionado');
    console.log('Sección final encontrada:', seccionFinal);
    
    btnNo.style.opacity = '0';
    btnNo.style.transform = 'scale(0.5)';
    
    setTimeout(() => {
        btnNo.style.display = 'none';
    }, 300);
    
    btnSi.style.opacity = '0.5';
    btnSi.style.pointerEvents = 'none';
    
    respuesta.innerHTML = `
        <div style="font-size: 48px; margin-bottom: 20px;">🎉 ❤️ 🎊</div>
        <p style="font-size: 28px; color: #d6336c; animation: pulsoSuave 1s infinite;">
            ¡Sabía que dirías que sí! 💕
        </p>
        <p style="margin-top: 20px; font-size: 20px;">
            ¡Eres la mejor mi pequeña SIREY! Te amo mucho ❤️
        </p>
        <p style="margin-top: 30px; font-size: 18px; color: #8b4565;">
            Preparando algo especial para ti... ✨
        </p>
    `;
    
    crearConfeti();
    
    // Hacer scroll al mensaje inmediatamente después de mostrarlo
    setTimeout(() => {
        respuesta.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
    
    // Esperar 2 segundos para que el mensaje se vea completamente
    setTimeout(() => {
        console.log('Desbloqueando sección final...');
        if (seccionFinal) {
            seccionFinal.classList.remove('contenido-desbloqueado');
            seccionFinal.classList.add('desbloqueado');
            console.log('Clase desbloqueado agregada');
            console.log('Clases actuales:', seccionFinal.classList);
            
            console.log('Sección final desbloqueada correctamente');
            
            // Iniciar fuegos artificiales inmediatamente
            iniciarFuegosArtificiales();
            
            // Hacer scroll a la sección final con el GIF inmediatamente
            setTimeout(() => {
                console.log('Haciendo scroll a sección final con GIF');
                seccionFinal.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // Forzar estilos nuevamente después del scroll
                setTimeout(() => {
                    seccionFinal.style.background = '#0a0e27';
                    seccionFinal.style.backgroundImage = 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #2d1b69 100%)';
                    console.log('🔥 Estilo reaplicado después del scroll');
                }, 100);
            }, 300); // Reducido a 300ms para máxima rapidez
        } else {
            console.error('¡No se encontró la sección final!');
        }
    }, 8000); // Tiempo aumentado para poder leer bien los mensajes
}

function moverBotonNo() {
    const btnNo = document.getElementById('btnNo');
    const contenedor = document.querySelector('.botones-container');

    contenedor.style.position = 'relative';
    btnNo.style.position = 'absolute';

    const maxX = contenedor.clientWidth - btnNo.offsetWidth;
    const maxY = contenedor.clientHeight - btnNo.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';
}

// ============================================
// EFECTO CONFETI
// ============================================
function crearConfeti() {
    const colores = ['#ff6b9d', '#c2185b', '#ffd6e8', '#ff1744', '#f50057'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confeti = document.createElement('div');
            confeti.style.position = 'fixed';
            confeti.style.width = '10px';
            confeti.style.height = '10px';
            confeti.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
            confeti.style.left = Math.random() * window.innerWidth + 'px';
            confeti.style.top = '-10px';
            confeti.style.borderRadius = '50%';
            confeti.style.zIndex = '9999';
            confeti.style.pointerEvents = 'none';
            
            document.body.appendChild(confeti);
            
            const caida = confeti.animate([
                { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ], {
                duration: Math.random() * 2000 + 2000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            caida.onfinish = () => confeti.remove();
        }, i * 30);
    }
}

// ============================================
// FUEGOS ARTIFICIALES PARA SECCIÓN FINAL
// ============================================
function iniciarFuegosArtificiales() {
    const canvas = document.getElementById('fireworks-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particulas = [];
    const colores = ['#ff6b9d', '#c2185b', '#ffd6e8', '#ff1744', '#f50057', '#fff'];
    
    class Particula {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.velocidadX = (Math.random() - 0.5) * 8;
            this.velocidadY = (Math.random() - 0.5) * 8;
            this.radio = Math.random() * 3 + 2;
            this.alpha = 1;
            this.decay = Math.random() * 0.015 + 0.015;
        }
        
        dibujar() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radio, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.restore();
        }
        
        actualizar() {
            this.velocidadY += 0.1;
            this.x += this.velocidadX;
            this.y += this.velocidadY;
            this.alpha -= this.decay;
        }
    }
    
    function crearFuegoArtificial(x, y) {
        const color = colores[Math.floor(Math.random() * colores.length)];
        const cantidadParticulas = 50;
        
        for (let i = 0; i < cantidadParticulas; i++) {
            particulas.push(new Particula(x, y, color));
        }
    }
    
    function animar() {
        ctx.fillStyle = 'rgba(255, 227, 237, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        particulas.forEach((particula, index) => {
            particula.dibujar();
            particula.actualizar();
            
            if (particula.alpha <= 0) {
                particulas.splice(index, 1);
            }
        });
        
        requestAnimationFrame(animar);
    }
    
    // Crear fuegos artificiales aleatorios
    setInterval(() => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height * 0.7;
        crearFuegoArtificial(x, y);
    }, 1000);
    
    animar();
    
    // Redimensionar canvas
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ============================================
// LAZY LOADING PARA IMÁGENES Y VIDEOS
// ============================================
function setupLazyLoading() {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.onload = () => {
                        img.classList.add('loaded');
                    };
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    // Observar todas las imágenes con data-src
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// PANTALLA DE CARGA
// ============================================
function ocultarPantallaCarga() {
    const pantallaCarga = document.getElementById('pantalla-carga');
    if (pantallaCarga) {
        setTimeout(() => {
            pantallaCarga.classList.add('oculta');
            setTimeout(() => {
                pantallaCarga.style.display = 'none';
            }, 1000);
        }, 1500);
    }
}

// ============================================
// DETECTAR Y OPTIMIZAR PARA MÓVIL
// ============================================
function optimizarParaMovil() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        // Reducir frecuencia de animaciones en móvil
        document.body.classList.add('mobile-optimized');
        
        // Reducir cantidad de corazones flotantes
        const corazonesInterval = setInterval(() => {
            const container = document.querySelector('.hearts-container');
            if (container && container.children.length > 3) {
                clearInterval(corazonesInterval);
                return;
            }
        }, 1000);
        
        // Prevenir zoom en inputs
        document.addEventListener('touchstart', function(e) {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                e.target.style.fontSize = '16px';
            }
        });
    }
}

// ============================================
// INICIALIZAR SISTEMA DE OPTIMIZACIÓN
// ============================================
function inicializarOptimizacionRendimiento() {
    console.log('🚀 Inicializando sistema de optimización de rendimiento...');
    
    // Crear observer para secciones principales
    const observerSecciones = rendimiento.crearObserverSeccion();
    
    // Observar todas las secciones principales
    document.querySelectorAll('section').forEach(seccion => {
        const seccionId = seccion.className.replace(/\s+/g, '-');
        seccion.dataset.seccionId = seccionId;
        observerSecciones.observe(seccion);
    });
    
    // Pausar todas las animaciones al cambiar de pestaña
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            // Pestaña no visible - pausar todo
            rendimiento.pausarAnimaciones('global');
            console.log('🔴 Pestaña oculta - todas las animaciones pausadas');
        } else {
            // Pestaña visible - reanudar solo sección visible
            const seccionVisible = document.querySelector('section:not([style*="display: none"])');
            if (seccionVisible) {
                rendimiento.reanudarAnimaciones(seccionVisible.dataset.seccionId);
            }
            console.log('🟢 Pestaña visible - animaciones reanudadas');
        }
    });
    
    // Optimizar según dispositivo
    if (rendimiento.esDispositivoLento()) {
        console.log('📱 Dispositivo lento detectado - aplicando optimizaciones');
        document.body.classList.add('dispositivo-lento');
    }
}

// ============================================
// INICIALIZAR TODO AL CARGAR LA PÁGINA
// ============================================
window.addEventListener('load', () => {
    // Inicializar sistema de optimización primero
    inicializarOptimizacionRendimiento();
    
    // Optimizar para móvil primero
    optimizarParaMovil();
    
    // Ocultar pantalla de carga después de cargar
    ocultarPantallaCarga();
    
    // Configurar lazy loading
    setupLazyLoading();
    
    crearCorazones();
    actualizarContador();
    animarAlScroll();
    autoAvanzarCarrusel();
    controlarReproductoresAudio();
    
    // Configurar observer para cielo estrellado
    configurarObserverCieloEstrellado();
    setTimeout(crearLuciernagas, 1000);
    actualizarLibro();
    setTimeout(crearMariposasJardin, 1000);
    setupMediaErrorHandling();
    
    // Tarjetas flip - agregar clase al hacer clic
    document.querySelectorAll('.flip-card').forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });
    
    // Inicializar calendario
    actualizarCalendario();
    setInterval(actualizarCalendario, 60000); // Actualizar cada minuto
    
    // Actualizar contador con optimización - solo cuando la sección sea visible
    let intervaloContador = null;
    const seccionContador = document.querySelector('.contador');
    
    const controlActualizacionContador = () => {
        if (!seccionContador) return;
        
        const rect = seccionContador.getBoundingClientRect();
        const esVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (esVisible && !intervaloContador && animacionContadorActiva) {
            intervaloContador = setInterval(actualizarContador, rendimiento.esDispositivoLento() ? 2000 : 1000);
            actualizarContador();
        } else if ((!esVisible || !animacionContadorActiva) && intervaloContador) {
            clearInterval(intervaloContador);
            intervaloContador = null;
        }
    };
    
    controlActualizacionContador();
    window.addEventListener('scroll', controlActualizacionContador, { passive: true });
    

    
    // 🔥 VERIFICACIÓN CONSTANTE DE ESTILOS DE SECCIÓN FINAL
    setInterval(function() {
        const seccionFinal = document.querySelector('.final');
        if (seccionFinal) {
            const computedStyle = window.getComputedStyle(seccionFinal);
            const bgColor = computedStyle.backgroundColor;
            const bgImage = computedStyle.backgroundImage;
            
            // Si el fondo no es oscuro, forzarlo
            if (!bgColor.includes('10, 14, 39') && !bgColor.includes('0, 0, 0')) {
                console.log('⚠️ Detectado fondo claro en sección final - Corrigiendo...');
                seccionFinal.style.background = '#0a0e27';
                seccionFinal.style.backgroundImage = 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #2d1b69 100%)';
                seccionFinal.style.backgroundColor = '#0a0e27';
            }
            
            // Verificar contenedor de audio
            const audioContainer = document.querySelector('.audio-personalizado-container');
            if (audioContainer) {
                const audioStyle = window.getComputedStyle(audioContainer);
                if (audioStyle.backdropFilter !== 'none' && audioStyle.backdropFilter !== '') {
                    console.log('⚠️ Detectado backdrop-filter en audio - Removiendo...');
                    audioContainer.style.background = 'transparent';
                    audioContainer.style.backdropFilter = 'none';
                    audioContainer.style.webkitBackdropFilter = 'none';
                }
            }
        }
    }, 2000); // Verificar cada 2 segundos
});

// ============================================
// EFECTOS ADICIONALES
// ============================================

// Cambiar el título de la página periódicamente
const titulos = [
    'Para Ti 💖',
    'Te Amo 💕',
    'Eres Especial ✨',
    'Mi Amor ❤️'
];

let indiceTitulo = 0;
setInterval(() => {
    indiceTitulo = (indiceTitulo + 1) % titulos.length;
    document.title = titulos[indiceTitulo];
}, 3000);

/* ============================================
   FUNCIONALIDADES PARA NUEVAS SECCIONES
   ============================================ */

// ============================================
// OBSERVER PARA CIELO ESTRELLADO
// ============================================
let cieloEstrelladoIniciado = false;

function configurarObserverCieloEstrellado() {
    const seccionCielo = document.querySelector('.cielo-estrellado');
    
    if (!seccionCielo) {
        console.error('❌ No se encontró la sección del cielo estrellado');
        return;
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !cieloEstrelladoIniciado) {
                console.log('🌌 Iniciando cielo estrellado al entrar en la sección');
                iniciarCieloEstrellado();
                cieloEstrelladoIniciado = true;
                observer.disconnect(); // Dejar de observar después de iniciar
            }
        });
    }, {
        threshold: 0.3 // 30% de la sección visible para activar
    });
    
    observer.observe(seccionCielo);
    console.log('👁️ Observer configurado para cielo estrellado');
}

// ============================================
// CIELO ESTRELLADO CON NOMBRE (OPTIMIZADO)
// ============================================
function iniciarCieloEstrellado() {
    const canvas = document.getElementById('starry-sky');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const estrellas = [];
    let tiempo = 0;
    let animationId = null;
    let pausada = false;
    
    // Reducir cantidad de estrellas en dispositivos lentos
    const cantidadEstrellas = rendimiento.esDispositivoLento() ? 50 : 150;
    
    // Crear estrellas iniciales
    for (let i = 0; i < cantidadEstrellas; i++) {
        estrellas.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radio: Math.random() * 2,
            brillo: Math.random(),
            velocidadBrillo: Math.random() * 0.02
        });
    }
    
    // Registrar animación para control de rendimiento
    const animacionCielo = {
        requestId: null,
        pausada: false,
        reanudar: function() {
            if (!this.pausada) return;
            this.pausada = false;
            animar();
        }
    };
    
    rendimiento.registrarAnimacion('cielo-estrellado', animacionCielo);
    
    // Función mejorada para generar texto más legible
    function generarCoordenadasTexto(texto, y, escala = 1) {
        const coords = [];
        const anchoLetra = 60 * escala;
        const altoLetra = 80 * escala;
        const anchoTotal = texto.length * anchoLetra;
        const inicioX = (canvas.width - anchoTotal) / 2;
        
        const letrasPixeles = {
            'S': [[1,0],[2,0],[3,0],[4,0],[0,1],[0,2],[1,2],[2,2],[3,2],[4,2],[4,3],[4,4],[0,4],[1,4],[2,4],[3,4]],
            'I': [[1,0],[2,0],[3,0],[2,1],[2,2],[2,3],[1,4],[2,4],[3,4]],
            'R': [[0,0],[1,0],[2,0],[3,0],[0,1],[4,1],[0,2],[1,2],[2,2],[3,2],[0,3],[2,3],[0,4],[3,4]],
            'E': [[0,0],[1,0],[2,0],[3,0],[4,0],[0,1],[0,2],[1,2],[2,2],[3,2],[0,3],[0,4],[1,4],[2,4],[3,4],[4,4]],
            'Y': [[0,0],[4,0],[1,1],[3,1],[2,2],[2,3],[2,4]],
            'T': [[0,0],[1,0],[2,0],[3,0],[4,0],[2,1],[2,2],[2,3],[2,4]],
            'A': [[2,0],[1,1],[3,1],[0,2],[4,2],[0,3],[1,3],[2,3],[3,3],[4,3],[0,4],[4,4]],
            'M': [[0,0],[4,0],[0,1],[1,1],[3,1],[4,1],[0,2],[2,2],[4,2],[0,3],[4,3],[0,4],[4,4]],
            'O': [[1,0],[2,0],[3,0],[0,1],[4,1],[0,2],[4,2],[0,3],[4,3],[1,4],[2,4],[3,4]],
            ' ': []
        };
        
        for (let i = 0; i < texto.length; i++) {
            const letra = texto[i].toUpperCase();
            const pixeles = letrasPixeles[letra] || [];
            const baseX = inicioX + (i * anchoLetra);
            
            pixeles.forEach(([px, py]) => {
                // Crear menos puntos para mayor sutileza y mejor rendimiento
                for (let dx = 0; dx < 2; dx++) {
                    for (let dy = 0; dy < 2; dy++) {
                        coords.push({
                            x: baseX + (px * 8 * escala) + (dx * 4),
                            y: y + (py * 10 * escala) + (dy * 4)
                        });
                    }
                }
            });
        }
        
        return coords;
    }
    

    
    // Coordenadas responsivas para móvil y web
    const esMovil = window.innerWidth <= 768;
    const escalaNombre = esMovil ? 0.6 : 0.8;
    const escalaTeAmo = esMovil ? 0.7 : 1.0;
    
    const posYNombre = esMovil ? canvas.height * 0.42 : canvas.height * 0.3;
    const posYTeAmo = esMovil ? canvas.height * 0.75 : canvas.height * 0.7;
    
    const coordenadasNombre = generarCoordenadasTexto("SIREY", posYNombre, escalaNombre);
    const coordenadasTeAmo = generarCoordenadasTexto("TE AMO", posYTeAmo, escalaTeAmo);
    
    function animar() {
        if (animacionCielo.pausada) return;
        
        // Reducir frecuencia de actualización en dispositivos lentos
        if (rendimiento.esDispositivoLento() && Math.random() > 0.5) {
            animacionCielo.requestId = requestAnimationFrame(animar);
            return;
        }
        
        // Fondo más oscuro para mejor contraste
        ctx.fillStyle = 'rgba(10, 14, 39, 0.15)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Verificar si debemos pausar el canvas
        if (!cieloEstrelladoActivo) {
            animacionCielo.requestId = requestAnimationFrame(animar);
            return;
        }
        
        // Velocidad más fluida
        tiempo += rendimiento.esDispositivoLento() ? 0.015 : 0.025;
        
        // Dibujar estrellas de fondo
        estrellas.forEach(estrella => {
            estrella.brillo += estrella.velocidadBrillo;
            if (estrella.brillo > 1 || estrella.brillo < 0) {
                estrella.velocidadBrillo *= -1;
            }
            
            ctx.beginPath();
            ctx.arc(estrella.x, estrella.y, estrella.radio, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${estrella.brillo * 0.5})`;
            ctx.fill();
        });
        
        // Animación fluida de las letras - solo si la sección está visible
        if (!cieloEstrelladoActivo) {
            animacionCielo.requestId = requestAnimationFrame(animar);
            return;
        }
        
        const faseMovimiento = Math.sin(tiempo * 0.5) * 3;
        
        // Las letras aparecen con efecto de entrada progresiva
        let progresoNombre = 1;
        let progresoTeAmo = 1;
        
        // Si es la primera vez que se muestra, hacer efecto de entrada
        if (tiempo < 2) {
            if (tiempo < 1) {
                progresoNombre = tiempo;
                progresoTeAmo = 0;
            } else {
                progresoNombre = 1;
                progresoTeAmo = tiempo - 1;
            }
        }
        
        dibujarFormacion(coordenadasNombre, progresoNombre, '#ff4477', esMovil ? 2.5 : 3.5, faseMovimiento);
        dibujarFormacion(coordenadasTeAmo, progresoTeAmo, '#ff6688', esMovil ? 2.5 : 3.5, faseMovimiento);
        
        animacionCielo.requestId = requestAnimationFrame(animar);
    }
    
    function dibujarFormacion(coordenadas, progreso, color, tamano = 2, offsetY = 0) {
        const numPuntos = Math.floor(coordenadas.length * progreso);
        
        // Optimizar en dispositivos lentos
        const step = rendimiento.esDispositivoLento() ? 2 : 1;
        
        // Color más fuerte y menos opaco
        const colorFuerte = color;
        
        // Efecto de pulso muy suave
        const pulso = 1;
        
        for (let i = 0; i < numPuntos; i += step) {
            const punto = coordenadas[i];
            
            // Efecto principal - color más fuerte, menos brillo
            ctx.beginPath();
            ctx.arc(punto.x, punto.y + offsetY, tamano, 0, Math.PI * 2);
            ctx.fillStyle = colorFuerte;
            ctx.shadowBlur = 3;
            ctx.shadowColor = colorFuerte;
            ctx.fill();
            
            // Brillo interno sutil
            ctx.beginPath();
            ctx.arc(punto.x, punto.y + offsetY, tamano * 0.6, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 200, 220, 0.5)';
            ctx.shadowBlur = 1;
            ctx.fill();
            
            ctx.shadowBlur = 0;
        }
    }
    
    animar();
    animacionCielo.requestId = animationId;
    
    // Redimensionar canvas y recalcular coordenadas
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Recalcular coordenadas para la nueva resolución
        const esMovil = window.innerWidth <= 768;
        const escalaNombre = esMovil ? 0.6 : 0.8;
        const escalaTeAmo = esMovil ? 0.7 : 1.0;
        
        const posYNombre = esMovil ? canvas.height * 0.42 : canvas.height * 0.3;
        const posYTeAmo = esMovil ? canvas.height * 0.75 : canvas.height * 0.7;
        
        coordenadasNombre.length = 0;
        coordenadasTeAmo.length = 0;
        
        coordenadasNombre.push(...generarCoordenadasTexto("SIREY", posYNombre, escalaNombre));
        coordenadasTeAmo.push(...generarCoordenadasTexto("TE AMO", posYTeAmo, escalaTeAmo));
    });
}

// Luciérnagas (OPTIMIZADO)
function crearLuciernagas() {
    const container = document.getElementById('fireflies');
    if (!container) return;
    
    // Reducir cantidad en dispositivos lentos
    const cantidad = rendimiento.esDispositivoLento() ? 5 : 15;
    
    const animacionLuciernagas = {
        pausada: false,
        reanudar: function() {
            if (this.pausada) return;
            
            for (let i = 0; i < cantidad; i++) {
                setTimeout(() => {
                    if (this.pausada) return;
                    
                    const luciernaga = document.createElement('div');
                    luciernaga.classList.add('firefly');
                    luciernaga.style.left = Math.random() * 100 + '%';
                    luciernaga.style.top = Math.random() * 100 + '%';
                    luciernaga.style.setProperty('--tx', (Math.random() * 200 - 100) + 'px');
                    luciernaga.style.setProperty('--ty', (Math.random() * 200 - 100) + 'px');
                    luciernaga.style.animationDelay = Math.random() * 2 + 's';
                    luciernaga.dataset.seccion = 'cielo-estrellado';
                    container.appendChild(luciernaga);
                }, i * 300);
            }
        }
    };
    
    rendimiento.registrarAnimacion('luciernagas', animacionLuciernagas);
    animacionLuciernagas.reanudar();
}

// ============================================
// LIBRO DE AVENTURAS
// ============================================
let paginaActualLibro = 1;
const totalPaginasLibro = 15; // Actualizado a 15 páginas

function cambiarPagina(direccion) {
    const paginaAnterior = paginaActualLibro;
    paginaActualLibro += direccion;
    
    if (paginaActualLibro < 1) paginaActualLibro = 1;
    if (paginaActualLibro > totalPaginasLibro) paginaActualLibro = totalPaginasLibro;
    
    if (paginaAnterior !== paginaActualLibro) {
        actualizarLibro();
    }
}

function actualizarLibro() {
    const paginas = document.querySelectorAll('.pagina');
    const numeroPagina = document.getElementById('pagina-actual');
    const btnAnterior = document.getElementById('btn-anterior');
    const btnSiguiente = document.getElementById('btn-siguiente');
    
    paginas.forEach((pagina, index) => {
        if (index + 1 === paginaActualLibro) {
            pagina.classList.add('pagina-activa');
        } else {
            pagina.classList.remove('pagina-activa');
        }
    });
    
    numeroPagina.textContent = `${paginaActualLibro} / ${totalPaginasLibro}`;
    
    btnAnterior.disabled = paginaActualLibro === 1;
    btnSiguiente.disabled = paginaActualLibro === totalPaginasLibro;
}

// ============================================
// PROMESAS ILUMINADAS
// ============================================
function encenderVela(numero) {
    const vela = document.getElementById(`vela-${numero}`);
    if (vela && !vela.classList.contains('encendida')) {
        vela.classList.add('encendida');
        
        // Crear partículas de luz
        crearParticulasLuz(vela);
    }
}

function crearParticulasLuz(elemento) {
    const colores = ['#ffeb3b', '#ffc107', '#ff9800'];
    
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const particula = document.createElement('div');
            particula.style.position = 'absolute';
            particula.style.width = '6px';
            particula.style.height = '6px';
            particula.style.borderRadius = '50%';
            particula.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
            particula.style.pointerEvents = 'none';
            particula.style.left = '50%';
            particula.style.top = '20px';
            particula.style.zIndex = '1000';
            
            elemento.appendChild(particula);
            
            const angulo = (Math.random() * Math.PI * 2);
            const distancia = Math.random() * 50 + 30;
            const destinoX = Math.cos(angulo) * distancia;
            const destinoY = Math.sin(angulo) * distancia - 50;
            
            const animacion = particula.animate([
                { transform: 'translate(-50%, 0) scale(1)', opacity: 1 },
                { transform: `translate(calc(-50% + ${destinoX}px), ${destinoY}px) scale(0)`, opacity: 0 }
            ], {
                duration: 1000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            animacion.onfinish = () => particula.remove();
        }, i * 50);
    }
}

// ============================================
// JARDÍN DE PEONÍAS
// ============================================
function florecerPeonia(numero) {
    const peonia = document.getElementById(`peonia-${numero}`);
    if (peonia && !peonia.classList.contains('florecida')) {
        peonia.classList.add('florecida');
    }
}

// Crear mariposas en el jardín (OPTIMIZADO)
function crearMariposasJardin() {
    const container = document.getElementById('mariposas-jardin');
    if (!container) return;
    
    // Reducir cantidad en dispositivos lentos
    const cantidad = rendimiento.esDispositivoLento() ? 2 : 5;
    
    const animacionMariposas = {
        pausada: false,
        reanudar: function() {
            if (this.pausada) return;
            
            for (let i = 0; i < cantidad; i++) {
                const mariposa = document.createElement('div');
                mariposa.classList.add('mariposa');
                mariposa.style.left = Math.random() * 100 + '%';
                mariposa.style.top = Math.random() * 100 + '%';
                mariposa.style.animationDelay = Math.random() * 5 + 's';
                mariposa.style.animationDuration = (Math.random() * 10 + 10) + 's';
                mariposa.dataset.seccion = 'jardin';
                container.appendChild(mariposa);
            }
        }
    };
    
    rendimiento.registrarAnimacion('mariposas-jardin', animacionMariposas);
    animacionMariposas.reanudar();
}

// ============================================
// CALENDARIO DE AMOR
// ============================================
function actualizarCalendario() {
    const ahora = new Date();
    const anioActual = ahora.getFullYear();
    const mesActual = ahora.getMonth();
    const diaActual = ahora.getDate();
    
    // Función para comparar solo día y mes (sin hora)
    const esHoy = (mes, dia) => mes === mesActual && dia === diaActual;
    const yaPaso = (mes, dia) => {
        if (mes < mesActual) return true;
        if (mes > mesActual) return false;
        return dia < diaActual;
    };
    
    // Cumpleaños de ella (27 de agosto)
    let cumpleElla = new Date(anioActual, 7, 27);
    if (yaPaso(7, 27)) {
        cumpleElla = new Date(anioActual + 1, 7, 27);
    }
    actualizarContadorFecha('dias-cumple-ella', cumpleElla);
    
    // Aniversario mensual (día 30 de cada mes)
    let aniversarioMes = new Date(anioActual, mesActual, 30);
    // Manejar meses que no tienen día 30
    if (aniversarioMes.getMonth() !== mesActual) {
        aniversarioMes = new Date(anioActual, mesActual + 1, 0);
    }
    if (aniversarioMes <= ahora) {
        if (aniversarioMes.getMonth() === 11) {
            aniversarioMes = new Date(anioActual + 1, 0, 30);
        } else {
            aniversarioMes.setMonth(aniversarioMes.getMonth() + 1);
        }
    }
    actualizarContadorFecha('dias-aniversario-mes', aniversarioMes);
    
    // Calcular meses juntos desde 30 marzo 2025
    const fechaInicio = new Date(2025, 2, 30);
    const mesesJuntos = Math.floor((ahora - fechaInicio) / (1000 * 60 * 60 * 24 * 30.44));
    const elementoMeses = document.getElementById('meses-totales');
    if (elementoMeses) {
        elementoMeses.textContent = `¡Ya tenemos ${mesesJuntos} meses juntos! 💕`;
    }
    
    // Aniversario anual (30 marzo 2026)
    const aniversarioAno = new Date(2026, 2, 30);
    actualizarContadorFecha('dias-aniversario-ano', aniversarioAno);
    
    // San Valentín (14 febrero)
    let sanValentin = new Date(anioActual, 1, 14);
    if (yaPaso(1, 14)) {
        sanValentin = new Date(anioActual + 1, 1, 14);
    }
    actualizarContadorFecha('dias-san-valentin', sanValentin);
    
    // Navidad (25 diciembre)
    let navidad = new Date(anioActual, 11, 25);
    if (yaPaso(11, 25)) {
        navidad = new Date(anioActual + 1, 11, 25);
    }
    actualizarContadorFecha('dias-navidad', navidad);
}

function actualizarContadorFecha(elementoId, fechaObjetivo, forzarEsHoy = false) {
    const ahora = new Date();
    const elemento = document.getElementById(elementoId);
    
    if (!elemento) return;
    
    // Reset estilos
    elemento.style.color = '';
    elemento.style.fontWeight = '';
    elemento.style.fontSize = '';
    
    // Comparar solo día y mes
    const esHoy = fechaObjetivo.getDate() === ahora.getDate() && 
                  fechaObjetivo.getMonth() === ahora.getMonth() &&
                  fechaObjetivo.getFullYear() === ahora.getFullYear();
    
    if (forzarEsHoy || esHoy) {
        elemento.textContent = '¡Es hoy! 🎉';
        elemento.style.color = '#ff1744';
        elemento.style.fontWeight = 'bold';
        elemento.style.fontSize = '20px';
        return;
    }
    
    const diferencia = fechaObjetivo - ahora;
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    
    if (dias === 1) {
        elemento.textContent = '¡Mañana! 💖';
    } else if (dias <= 0) {
        // Ya pasó la fecha - debería已经把年份加1了，不会到这里
        elemento.textContent = '¡Es hoy! 🎉';
        elemento.style.color = '#ff1744';
        elemento.style.fontWeight = 'bold';
    } else {
        elemento.textContent = `Faltan ${dias} días`;
    }
}



// ============================================
// VIDEO CON VISTA PREVIA Y BOTÓN PLAY
// ============================================
function reproducirVideo() {
    const video = document.getElementById('video-nuestro');
    const overlay = document.getElementById('video-overlay');
    
    if (video && overlay) {
        // Establecer volumen alto para el video
        video.volume = 1.0;
        
        // Ocultar el overlay
        overlay.style.display = 'none';
        
        // Agregar controles al video
        video.controls = true;
        
        // Reproducir el video
        video.play();
        
        // Cuando el video se pause o termine, volver a mostrar el overlay
        video.addEventListener('pause', () => {
            if (video.currentTime < video.duration) {
                overlay.style.display = 'flex';
                video.controls = false;
            }
        });
        
        video.addEventListener('ended', () => {
            overlay.style.display = 'flex';
            video.controls = false;
        });
    }
}

// Las funciones de inicialización se movieron al evento load principal


// ============================================
// NUEVAS FUNCIONALIDADES AGREGADAS
// ============================================

// ============================================
// SISTEMA DE CONTROL DE MÚSICA ROBUSTO
// ============================================

// Variables globales para controlar el estado
let musicaFondo = null;
let seccionMusica = null;
let audiosCanciones = [];
let audioPersonalizado = null;
let btnAudioPersonalizado = null;
let musicaActivaSiempre = true;
let musicaPausadaPorSeccion = false;
let enSeccionMusica = false;
let audioPersonalizadoActivo = false;

// Función para verificar si existe el archivo de audio personalizado
function verificarAudioPersonalizado() {
    const audioPersonalizado = document.getElementById('audio-personalizado');
    const btnAudioPersonalizado = document.getElementById('btn-audio-personalizado');
    const contenedorAudio = document.querySelector('.audio-personalizado-container');
    
    if (!audioPersonalizado || !btnAudioPersonalizado || !contenedorAudio) {
        console.log('🎤 No se encontraron elementos de audio personalizado');
        return false;
    }
    
    // Simplemente mostrar el botón y manejar errores al reproducir
    console.log('✅ Botón de audio personalizado visible por defecto');
    return true;
}

// Inicializar sistema de música cuando el DOM esté listo
function inicializarSistemaMusica() {
    musicaFondo = document.getElementById('background-music');
    seccionMusica = document.querySelector('.musica');
    audiosCanciones = document.querySelectorAll('.musica audio');
    audioPersonalizado = document.getElementById('audio-personalizado');
    btnAudioPersonalizado = document.getElementById('btn-audio-personalizado');
    
    if (!musicaFondo || !seccionMusica) {
        console.error('❌ No se encontraron elementos de música principales');
        return;
    }
    
    console.log('✅ Sistema de música inicializado');
    console.log('🎵 Audio de fondo encontrado:', musicaFondo);
    console.log('🎶 Sección música encontrada:', seccionMusica);
    console.log('🎼 Canciones encontradas:', audiosCanciones.length);
    
    // Verificar si existe el audio personalizado
    const audioPersonalizadoExiste = verificarAudioPersonalizado();
    
    // Iniciar música de fondo
    iniciarMusicaFondo();
    
    // Configurar observer para sección de música
    configurarObserverMusica();
    
    // Configurar eventos de canciones
    configurarEventosCanciones();
    
    // Configurar control de scroll
    configurarControlScroll();
    
    // Configurar control de video
    configurarControlVideo();
    
    // Configurar control de audio personalizado siempre
    if (audioPersonalizado && btnAudioPersonalizado) {
        console.log('🎤 Configurando audio personalizado');
        configurarAudioPersonalizado();
    } else {
        console.log('🎤 No se encontraron elementos de audio personalizado');
    }
}

// Función para iniciar música de fondo
function iniciarMusicaFondo() {
    // Establecer volumen bajo desde el inicio
    musicaFondo.volume = 0.20;
    console.log('🔊 Volumen de música de fondo establecido al 15%');
    
    const intentarReproducir = () => {
        musicaFondo.play().then(() => {
            musicaActivaSiempre = true;
            console.log('✅ Música de fondo iniciada correctamente');
        }).catch(error => {
            console.warn('⚠️ Error al iniciar música de fondo:', error);
            
            // Si falla, esperar interacción del usuario
            document.body.addEventListener('click', function reproducirConClick() {
                musicaFondo.play().then(() => {
                    musicaActivaSiempre = true;
                    console.log('✅ Música de fondo iniciada por interacción del usuario');
                }).catch(err => {
                    console.error('❌ No se pudo iniciar música ni con interacción:', err);
                });
                document.body.removeEventListener('click', reproducirConClick);
            }, { once: true });
        });
    };
    
    // Esperar un poco antes de intentar reproducir
    setTimeout(intentarReproducir, 1000);
}

// Configurar IntersectionObserver para sección de música
function configurarObserverMusica() {
    const observerMusica = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Entramos a la sección de música
                enSeccionMusica = true;
                console.log('🎵 Entrando a sección de música');
                
                // Pausar música de fondo inmediatamente
                if (!musicaFondo.paused) {
                    musicaFondo.pause();
                    musicaPausadaPorSeccion = true;
                    console.log('⏸️ Música de fondo PAUSADA por sección de música');
                }
            } else {
                // Salimos de la sección de música
                enSeccionMusica = false;
                console.log('🚪 Saliendo de sección de música');
                
                // Detener todas las canciones que estén reproduciéndose
                audiosCanciones.forEach((audio, index) => {
                    if (!audio.paused && !audio.ended) {
                        audio.pause();
                        audio.currentTime = 0; // Reiniciar la canción
                        console.log(`⏹️ Canción ${index + 1} detenida al salir de sección`);
                    }
                });
                
                // Reanudar música de fondo después de detener las canciones
                setTimeout(() => {
                    if (musicaActivaSiempre && musicaPausadaPorSeccion && musicaFondo.paused) {
                        musicaFondo.play().then(() => {
                            musicaPausadaPorSeccion = false;
                            console.log('▶️ Música de fondo REANUDADA');
                        }).catch(err => {
                            console.warn('⚠️ No se pudo reanudar música de fondo:', err);
                        });
                    }
                }, 300);
            }
        });
    }, {
        threshold: 0.3 // 30% de la sección visible para activar
    });
    
    observerMusica.observe(seccionMusica);
    console.log('👁️ Observer configurado para sección de música');
}

// Configurar eventos para las canciones individuales
function configurarEventosCanciones() {
    audiosCanciones.forEach((audio, index) => {
        console.log(`🎵 Configurando canción ${index + 1}`);
        
        // Establecer volumen bajo para todas las canciones
        audio.volume = 0.15;
        console.log(`🔊 Volumen de canción ${index + 1} establecido al 10%`);
        
        audio.addEventListener('play', () => {
            console.log(`▶️ Canción ${index + 1} iniciada`);
            
            // Pausar audio personalizado si está activo
            if (audioPersonalizado && audioPersonalizadoActivo) {
                audioPersonalizado.pause();
                console.log('⏸️ Audio personalizado pausado por canción');
            }
            
            // Pausar música de fondo si está reproduciéndose
            if (!musicaFondo.paused) {
                musicaFondo.pause();
                console.log('⏸️ Música de fondo pausada por canción activa');
            }
            
            // Pausar otras canciones
            audiosCanciones.forEach((otroAudio, otroIndex) => {
                if (otroIndex !== index && !otroAudio.paused) {
                    otroAudio.pause();
                    console.log(`⏸️ Canción ${otroIndex + 1} pausada`);
                }
            });
        });
        
        audio.addEventListener('ended', () => {
            console.log(`🏁 Canción ${index + 1} terminada`);
            
            // Reanudar música de fondo solo si no estamos en la sección de música y no hay audio personalizado activo
            setTimeout(() => {
                if (!enSeccionMusica && !audioPersonalizadoActivo && musicaActivaSiempre && musicaFondo.paused) {
                    musicaFondo.play().then(() => {
                        console.log('▶️ Música de fondo reanudada después de canción terminada');
                    }).catch(err => {
                        console.warn('⚠️ Error al reanudar música:', err);
                    });
                }
            }, 500);
        });
        
        audio.addEventListener('pause', () => {
            // Solo reanudar música si no estamos en la sección, no hay audio personalizado activo, y no hay otras canciones activas
            setTimeout(() => {
                if (!enSeccionMusica && !audioPersonalizadoActivo) {
                    const hayOtraCancion = Array.from(audiosCanciones).some((a, i) => 
                        i !== index && !a.paused && !a.ended
                    );
                    
                    if (!hayOtraCancion && musicaActivaSiempre && musicaFondo.paused) {
                        musicaFondo.play().then(() => {
                            console.log('▶️ Música de fondo reanudada después de pausar canción');
                        }).catch(err => {
                            console.warn('⚠️ Error al reanudar música:', err);
                        });
                    }
                }
            }, 500);
        });
    });
}

// Configurar control de scroll especial para sección de música
function configurarControlScroll() {
    let esScrollManual = false;
    
    // Función para verificar si estamos en la sección de música
    function verificarPosicionMusica() {
        if (!seccionMusica) return;
        
        const rect = seccionMusica.getBoundingClientRect();
        const enVista = rect.top < window.innerHeight && rect.bottom > 0;
        const mayormenteVisible = rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5;
        
        if (mayormenteVisible && !enSeccionMusica) {
            // Entramos a la sección de música
            enSeccionMusica = true;
            console.log('🎵 Scroll detectó entrada a sección de música');
            
            if (!musicaFondo.paused) {
                musicaFondo.pause();
                musicaPausadaPorSeccion = true;
                console.log('⏸️ Música de fondo pausada por scroll');
            }
        } else if (!enVista && enSeccionMusica) {
            // Salimos completamente de la sección de música
            enSeccionMusica = false;
            console.log('🚪 Scroll detectó salida de sección de música');
            
            // Detener todas las canciones activas
            audiosCanciones.forEach((audio, index) => {
                if (!audio.paused && !audio.ended) {
                    audio.pause();
                    audio.currentTime = 0; // Reiniciar la canción
                    console.log(`⏹️ Canción ${index + 1} detenida por scroll`);
                }
            });
            
            // Reanudar música de fondo después de detener las canciones
            setTimeout(() => {
                if (musicaPausadaPorSeccion && musicaActivaSiempre && musicaFondo.paused) {
                    musicaFondo.play().then(() => {
                        musicaPausadaPorSeccion = false;
                        console.log('▶️ Música de fondo reanudada por scroll');
                    }).catch(err => {
                        console.warn('⚠️ Error al reanudar música por scroll:', err);
                    });
                }
            }, 300);
        }
    }
    
    // Verificar posición al hacer scroll
    window.addEventListener('scroll', () => {
        if (!esScrollManual) {
            verificarPosicionMusica();
        }
    }, { passive: true });
    
    console.log('🎮 Control de scroll configurado');
}

// ============================================
// CONTROL DE AUDIO PERSONALIZADO
// ============================================
function configurarAudioPersonalizado() {
    console.log('🎤 Configurando audio personalizado...');
    
    // Mostrar siempre el botón y el contenedor
    const contenedorAudio = document.querySelector('.audio-personalizado-container');
    if (contenedorAudio) {
        contenedorAudio.style.display = 'flex';
        contenedorAudio.style.opacity = '1';
        console.log('✅ Botón de audio personalizado visible');
    }
    
    // Eventos del audio personalizado
    audioPersonalizado.addEventListener('canplaythrough', () => {
        console.log('✅ Audio personalizado listo para reproducir');
        btnAudioPersonalizado.disabled = false;
        btnAudioPersonalizado.querySelector('.texto-boton').textContent = 'Escucha mi voz para ti 💕';
    });
    
    audioPersonalizado.addEventListener('play', () => {
        console.log('🎤 Audio personalizado iniciado');
        audioPersonalizadoActivo = true;
        
        // Establecer volumen alto para el audio personalizado
        audioPersonalizado.volume = 1.0;
        console.log('🔊 Volumen de audio personalizado establecido al 100%');
        
        // Pausar música de fondo si está reproduciéndose
        if (!musicaFondo.paused) {
            musicaFondo.pause();
            musicaPausadaPorSeccion = false;
            console.log('⏸️ Música de fondo pausada por audio personalizado');
        }
        
        // Pausar todas las canciones si alguna está activa
        audiosCanciones.forEach((audio, index) => {
            if (!audio.paused) {
                audio.pause();
                console.log(`⏸️ Canción ${index + 1} pausada por audio personalizado`);
            }
        });
        
        // Actualizar apariencia del botón
        btnAudioPersonalizado.classList.add('reproduciendo');
        btnAudioPersonalizado.querySelector('.texto-boton').textContent = 'Reproduciendo mi mensaje... 💕';
    });
    
    audioPersonalizado.addEventListener('ended', () => {
        console.log('🏁 Audio personalizado terminado');
        finalizarAudioPersonalizado();
    });
    
    audioPersonalizado.addEventListener('pause', () => {
        if (audioPersonalizado.currentTime > 0 && audioPersonalizado.currentTime < audioPersonalizado.duration) {
            console.log('⏸️ Audio personalizado pausado manualmente');
            finalizarAudioPersonalizado();
        }
    });
    
    // Manejar errores
    audioPersonalizado.addEventListener('error', (e) => {
        console.error('❌ Error en audio personalizado:', e);
        console.log('💡 Asegúrate de tener el archivo "tu_audio.mp3" en la carpeta principal');
        
        // Mostrar mensaje de error en el botón
        if (btnAudioPersonalizado) {
            btnAudioPersonalizado.querySelector('.texto-boton').textContent = 'Error al cargar audio ❌';
            btnAudioPersonalizado.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
            btnAudioPersonalizado.disabled = true;
        }
    });
    
    // Intentar cargar el audio para verificar si está disponible
    audioPersonalizado.load();
    
    console.log('✅ Audio personalizado configurado correctamente');
}

function finalizarAudioPersonalizado() {
    audioPersonalizadoActivo = false;
    
    // Restaurar apariencia del botón con un pequeño retraso
    setTimeout(() => {
        btnAudioPersonalizado.classList.remove('reproduciendo');
        btnAudioPersonalizado.querySelector('.texto-boton').textContent = 'Escucha mi voz para ti 💕';
    }, 1000); // Mantener el texto "Reproduciendo" por 1 segundo más
    
    // Reanudar música de fondo si es apropiado
    setTimeout(() => {
        if (musicaActivaSiempre && musicaFondo.paused && !enSeccionMusica) {
            // Verificar que no haya canciones activas
            const hayCancionActiva = Array.from(audiosCanciones).some(audio => 
                !audio.paused && !audio.ended
            );
            
            if (!hayCancionActiva) {
                // Asegurar que el volumen de fondo esté al 15% antes de reanudar
                musicaFondo.volume = 0.20;
                musicaFondo.play().then(() => {
                    console.log('▶️ Música de fondo reanudada al 15% después de audio personalizado');
                }).catch(err => {
                    console.warn('⚠️ Error al reanudar música de fondo:', err);
                });
            }
        }
    }, 500);
}

// Función pública para reproducir audio personalizado
function reproducirAudioPersonalizado() {
    if (!audioPersonalizado || !btnAudioPersonalizado) {
        console.error('❌ Audio personalizado no encontrado');
        return;
    }
    
    if (btnAudioPersonalizado.disabled) {
        console.log('⚠️ Botón deshabilitado, no se puede reproducir');
        return;
    }
    
    if (audioPersonalizadoActivo) {
        // Si está reproduciendo, pausar
        audioPersonalizado.pause();
        console.log('⏸️ Audio personalizado pausado manualmente');
    } else {
        // Si no está reproduciendo, iniciar
        audioPersonalizado.play().then(() => {
            console.log('▶️ Audio personalizado iniciado exitosamente');
        }).catch(err => {
            console.error('❌ Error al reproducir audio personalizado:', err);
            
            // Mostrar mensaje de error
            btnAudioPersonalizado.querySelector('.texto-boton').textContent = 'Error al reproducir ❌';
            setTimeout(() => {
                if (!btnAudioPersonalizado.classList.contains('reproduciendo')) {
                    btnAudioPersonalizado.querySelector('.texto-boton').textContent = 'Escucha mi voz para ti 💕';
                }
            }, 3000);
        });
    }
}

// Inicializar el sistema cuando todo esté cargado
window.addEventListener('DOMContentLoaded', inicializarSistemaMusica);

// ============================================
// CARRUSEL DE MOMENTOS DEL DÍA
// ============================================
function actualizarMomentoDia() {
    const ahora = new Date();
    const hora = ahora.getHours();
    const minutos = ahora.getMinutes();
    const horaFormateada = hora > 12 ? hora - 12 : hora;
    const ampm = hora >= 12 ? ' pm' : ' am';
    const horaCompleta = `${horaFormateada}:${minutos.toString().padStart(2, '0')}${ampm}`;
    
    const iconoElemento = document.getElementById('momento-icono');
    const tituloElemento = document.getElementById('momento-titulo');
    const mensajeElemento = document.getElementById('momento-mensaje');
    
    if (!iconoElemento || !tituloElemento || !mensajeElemento) return;
    
    let momento = {};
    
    if (hora >= 0 && hora < 12) {
        // Mañana
        momento = {
            icono: '🌅',
            titulo: 'Good Morning jeje mi Amor',
            mensaje: `Hoy es un nuevo día son las ${horaCompleta} espero que estés teniendo un día maravilloso. 💕`
        };
    } else if (hora >= 12 && hora < 19) {
        // Tarde
        momento = {
            icono: '☀️',
            titulo: 'Buenas tardes, mi Linda Quiteñita',
            mensaje: `Ya es tarde, son las ${horaCompleta} y sigues ocupando espacio en mi corazón desde que levanto hasta el momento de hoy. 💖`
        };
    } else {
        // Noche
        momento = {
            icono: '🌙',
            titulo: 'Muy buenas noches mi Preciosa',
            mensaje: `Buenas noches amorcito de mi vida son las ${horaCompleta} y siempre estás en mis pensamientos.. Dulces sueños. 🌟`
        };
    }
    
    iconoElemento.textContent = momento.icono;
    tituloElemento.textContent = momento.titulo;
    mensajeElemento.textContent = momento.mensaje;
}

// Actualizar al cargar y cada hora
actualizarMomentoDia();
setInterval(actualizarMomentoDia, 3600000); // Cada hora

// ============================================
// ANIMACIÓN CUANDO TODAS LAS VELAS ESTÁN ENCENDIDAS
// ============================================
function verificarTodasVelasEncendidas() {
    const velas = document.querySelectorAll('.vela');
    let todasEncendidas = true;
    
    velas.forEach(vela => {
        if (!vela.classList.contains('encendida')) {
            todasEncendidas = false;
        }
    });
    
    if (todasEncendidas) {
        const seccionVelas = document.querySelector('.promesas');
        if (seccionVelas) {
            seccionVelas.classList.add('todas-encendidas');
            
            // Crear efecto especial de fuegos artificiales pequeños
            crearFuegosArtificialesVelas();
        }
    }
}

function crearFuegosArtificialesVelas() {
    const container = document.querySelector('.velas-container');
    if (!container) return;
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const particula = document.createElement('div');
            particula.style.position = 'absolute';
            particula.style.width = '8px';
            particula.style.height = '8px';
            particula.style.borderRadius = '50%';
            particula.style.backgroundColor = ['#ffeb3b', '#ffc107', '#ff6b9d', '#ff1744'][Math.floor(Math.random() * 4)];
            particula.style.left = Math.random() * 100 + '%';
            particula.style.top = '50%';
            particula.style.pointerEvents = 'none';
            particula.style.zIndex = '1000';
            
            container.appendChild(particula);
            
            const angulo = Math.random() * Math.PI * 2;
            const distancia = Math.random() * 200 + 100;
            const destinoX = Math.cos(angulo) * distancia;
            const destinoY = Math.sin(angulo) * distancia;
            
            const animacion = particula.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { transform: `translate(${destinoX}px, ${destinoY}px) scale(0)`, opacity: 0 }
            ], {
                duration: 1500,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            animacion.onfinish = () => particula.remove();
        }, i * 50);
    }
}

// Modificar la función original de encender vela
const encenderVelaOriginal = window.encenderVela;
window.encenderVela = function(numero) {
    const vela = document.getElementById(`vela-${numero}`);
    if (vela && !vela.classList.contains('encendida')) {
        vela.classList.add('encendida');
        crearParticulasLuz(vela);
        
        // Verificar si todas están encendidas
        setTimeout(verificarTodasVelasEncendidas, 500);
    }
};

// ============================================
// CONTROL DE MÚSICA CON VIDEO (integrado al nuevo sistema)
// ============================================

// Esta función se llama desde el sistema principal de música
function configurarControlVideo() {
    const videoNuestro = document.getElementById('video-nuestro');
    
    if (videoNuestro && musicaFondo) {
        // Pausar música y audio personalizado cuando el video empieza
        videoNuestro.addEventListener('play', () => {
            // Pausar audio personalizado si está activo
            if (audioPersonalizado && audioPersonalizadoActivo) {
                audioPersonalizado.pause();
                console.log('⏸️ Audio personalizado pausado por video');
            }
            
            // Pausar música de fondo si está reproduciéndose
            if (!musicaFondo.paused) {
                musicaFondo.pause();
                console.log('🎥 Música de fondo pausada por video');
            }
        });
        
        // Reanudar música cuando el video termina
        videoNuestro.addEventListener('ended', () => {
            setTimeout(() => {
                if (musicaActivaSiempre && musicaFondo.paused && !enSeccionMusica && !audioPersonalizadoActivo) {
                    const hayCancionActiva = Array.from(audiosCanciones).some(audio => 
                        !audio.paused && !audio.ended
                    );
                    
                    if (!hayCancionActiva) {
                        musicaFondo.play().then(() => {
                            console.log('▶️ Música de fondo reanudada después de video terminado');
                        }).catch(err => {
                            console.warn('⚠️ Error al reanudar música después de video:', err);
                        });
                    }
                }
            }, 500);
        });
        
        // Reanudar música cuando el video se pausa
        videoNuestro.addEventListener('pause', () => {
            if (videoNuestro.currentTime < videoNuestro.duration) { // Si no terminó el video
                setTimeout(() => {
                    if (musicaActivaSiempre && musicaFondo.paused && !enSeccionMusica && !audioPersonalizadoActivo) {
                        const hayCancionActiva = Array.from(audiosCanciones).some(audio => 
                            !audio.paused && !audio.ended
                        );
                        
                        if (!hayCancionActiva) {
                            musicaFondo.play().then(() => {
                                console.log('▶️ Música de fondo reanudada después de pausar video');
                            }).catch(err => {
                                console.warn('⚠️ Error al reanudar música después de video:', err);
                            });
                        }
                    }
                }, 500);
            }
        });
        
        console.log('🎥 Control de video configurado');
    }
}

// ============================================
// SISTEMA DE PAUSA/REANUDACIÓN DE ANIMACIONES POR SECCIÓN
// ============================================

let animacionesPausadas = false;
let cieloEstrelladoActivo = true;
let animacionContadorActiva = false;

function iniciarControlAnimacionesSecciones() {
    const esMovil = window.innerWidth <= 768;
    const esDispLento = rendimiento.esDispositivoLento();
    
    // Elementos que deben pausarse cuando no están visibles
    const selectoresAnimados = [
        '.corazon', '.firefly', '.mariposa', '.petalo', 
        '.bar', '.llama', '.flame', '.polaroid', '.peonia',
        '.titulo-principal', '.flecha-animada', '.numero'
    ];
    
    // Sistema simplificado - solo pausar cuando la pestaña no está visible
    function pausarAnimaciones() {
        if (animacionesPausadas) return;
        animacionesPausadas = true;
        
        document.querySelectorAll(selectoresAnimados.join(', ')).forEach(el => {
            el.style.animationPlayState = 'paused';
        });
        
        cieloEstrelladoActivo = false;
        animacionContadorActiva = false;
    }
    
    function reanudarAnimaciones() {
        if (!animacionesPausadas) return;
        animacionesPausadas = false;
        
        document.querySelectorAll(selectoresAnimados.join(', ')).forEach(el => {
            el.style.animationPlayState = 'running';
        });
        
        cieloEstrelladoActivo = true;
        animacionContadorActiva = true;
    }
    
    // Usar IntersectionObserver - funciona en web y móvil
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.15) {
                // La sección está visible - reanudar animaciones
                const selectores = selectoresAnimados.join(', ');
                entry.target.querySelectorAll(selectores).forEach(el => {
                    el.style.animationPlayState = 'running';
                });
                
                // Si es la sección del contador, activar el intervalo
                if (entry.target.classList.contains('contador')) {
                    animacionContadorActiva = true;
                }
                
                // Si es la sección del cielo estrellado, activar el canvas
                if (entry.target.classList.contains('cielo-estrellado')) {
                    cieloEstrelladoActivo = true;
                }
            } else {
                // La sección no está visible - pausar animaciones
                const selectores = selectoresAnimados.join(', ');
                entry.target.querySelectorAll(selectores).forEach(el => {
                    el.style.animationPlayState = 'paused';
                });
                
                // Desactivar contador si la sección no está visible
                if (entry.target.classList.contains('contador')) {
                    animacionContadorActiva = false;
                }
                
                // Desactivar cielo estrellado
                if (entry.target.classList.contains('cielo-estrellado')) {
                    cieloEstrelladoActivo = false;
                }
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '-50px'
    });
    
    // Observar todas las secciones
    document.querySelectorAll('section').forEach(seccion => {
        observer.observe(seccion);
    });
    
    // Pausar animaciones globales cuando la pestaña no está activa
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            pausarAnimaciones();
        } else {
            reanudarAnimaciones();
        }
    });
    
    // Pausar animaciones durante scroll para mejorar rendimiento
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        document.body.classList.add('scrolling');
        
        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            document.body.classList.remove('scrolling');
        }, 150);
    }, { passive: true });
    
    // Aplicar optimizaciones adicionales para móvil
    if (esMovil || esDispLento) {
        document.body.classList.add('dispositivo-lento');
    }
    
    console.log('✅ Sistema de control de animaciones por sección activado');
}

// Iniciar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciarControlAnimacionesSecciones);
} else {
    iniciarControlAnimacionesSecciones();
}