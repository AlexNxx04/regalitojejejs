# 💕 Página de San Valentín para Mi Amor

---

## 💌 Para quién es esta página

**Creado para:** Mi amada Sirey Toapanta ❤️  
**Creado por:** Alexander Agualongo  
**Fecha:** 02 de Enero de 2026

---

## 🚀 CÓMO EMPEZAR

Antes de personalize cualquier cosa, sigue estos pasos:

1. **Descarga** todos los archivos de la carpeta
2. **No borres** ninguna carpeta (fotos, musica, videos, imagenes)
3. **No cambies** los nombres de las carpetas
4. **Sí puedes cambiar** los nombres de los archivos (foto1.jpg, cancion1.mp3, etc.)
5. **Siempre guarda** una copia de respaldo antes de cambiar algo

---

## 🎯 Guía Completa para Personalizar

### 1️⃣ CAMBIAR EL NOMBRE Y TÍTULO

Abre **index.html** y busca estos textos para cambiarlos:

| Texto original | Dónde está |
|--------------|------------|
| "Para Ti, Mi Sirey Toapanta💖" | Título de la página (arriba del todo) |
| "Para la pequeñita que cautivó mi corazón" | En la portada |
| "Alexander Agualongo" | Al final de la carta |

**Cómo buscar en index.html:**
- Presiona Ctrl + F (o Cmd + F en Mac)
- Escribe el texto que buscas
- Cambia solo el texto, NO las etiquetas HTML

---

### 2️⃣ CAMBIAR LA FECHA DE INICIO DE LA RELACIÓN

Abre **script.js** y busca esta línea (está al principio):
```javascript
const fechaEspecial = new Date(2025, 2, 30, 0, 0, 0);
```

**Cómo cambiar la fecha:**
- **2025** = año (4 dígitos)
- **2** = mes (0=enero, 1=febrero, 2=marzo, 3=abril...)
- **30** = día

**Ejemplo:** Si su relación es el 14 de febrero de 2025:
```javascript
const fechaEspecial = new Date(2025, 1, 14, 0, 0, 0);
```

---

### 3️⃣ CAMBIAR LAS FOTOS

**Ubicación:** Carpeta **fotos/**

Tienes 7 espacios para fotos:
- foto1.jpg → foto7.jpg

**Qué hacer:**
1. Entra a la carpeta **fotos/**
2. Borra las fotos actuales
3. Pon tus propias fotos
4. **Importante:** Las nuevas fotos deben llamarse igual (foto1.jpg, foto2.jpg...)

**Consejos para las fotos:**
- Usa formato **.jpg** o **.png**
- Que no pesen más de 2MB cada una
- Mejor si son fotos de ustedes dos

---

### 4️⃣ CAMBIAR LA MÚSICA

#### A) Música de fondo (la que suena cuando entra a la página)

**Ubicación:** Carpeta **musica/**  
**Archivo:** fondo.mp3

**Qué hacer:**
1. Consigue tu canción de fondo
2. Guárdala como fondo.mp3
3. Reemplaza la actual

#### B) Playlist de canciones (las 6 canciones con reproductor)

**Archivos en carpeta musica/:**
- cancion1.mp3
- cancion2.mp3
- cancion3.mp3
- cancion4.mp3
- cancion5.mp3
- cancion6.mp3

**Para cambiar los TÍTULOS que aparecen en la página:**

Abre **index.html** y busca:
```html
<div class="nombre-cancion">Alma, Corazón y Vida – Los Panchos</div>
```

Cambia solo el texto entre las etiquetas, por ejemplo:
```html
<div class="nombre-cancion">Mi canción favorita – Artista</div>
```

**Para cambiar los MENSAJES de cada canción:**

Busca en index.html:
```html
<h3>Lo que soy cuando estoy contigo.</h3>
<p class="descripcion-cancion">Me recuerda que contigo no entrego partes...</p>
```

Cambia los textos a tu gusto.

---

### 5️⃣ CAMBIAR EL VIDEO

**Ubicación:** Carpeta **videos/**  
**Archivo:** momento-juntos.mp3

**Qué hacer:**
1. Consigue tu video
2. Guárdalo como momento-juntos.mp4
3. Reemplaza el archivo actual

---

### 6️⃣ GRABAR TU VOZ (Opcional)

¿Quieres que ella escuche tu voz?

1. **Graba** un mensaje de voz (puede ser un "Feliz San Valentín" o una carta)
2. **Guarda** el archivo como **tu_audio.mp3**
3. **Ponlo** en la carpeta principal (donde está index.html)
4. **Listo!** Aparecerá automáticamente un botón para escuchar tu voz

---

### 7️⃣ CAMBIAR LOS TEXTOS DE LA HISTORIA

Abre **index.html** y busca estos textos para cambiarlos:

#### La Carta de Amor (dentro del sobre)
Busca este texto:
```html
<p>Mi muñequita preciosa,</p>
<p>Aunque la distancia nos tenga separados...</p>
```
Cambia todo el mensaje por tu propia carta de amor.

#### El Libro de Nuestra Historia
Busca las páginas del libro (tienen títulos como "EL PRIMER DÍA", "LAS PRIMERAS CONVERSACIONES", etc.)

Cambia los textos contando TU historia de amor.

#### Las Promesas
Busca:
```html
<p>Prometo elegirnos cada día, incluso cuando el camino se complique.💕</p>
```
Cambia las 6 promesas por las tuyas.

#### Las Razones por las que te elijo
Busca:
```html
<p>Te elijo porque incluso loca eres mi calma.</p>
```
Cambia las 9 razones por las tuyas.

---

### 8️⃣ CAMBIAR FECHAS DEL CALENDARIO

En **index.html** busca estas fechas para cambiarlas:

| Qué es | Dónde está |
|--------|------------|
| Cumpleaños de ella | 27 de Agosto |
| Aniversario mensual | Cada día 30 |
| Primer año juntos | 30 de Marzo, 2026 |
| San Valentín | 14 de Febrero |
| Navidad | 25 de Diciembre |

---

### 9️⃣ CAMBIAR EL NOMBRE DEL JARDÍN DE FLORES

En **index.html** busca:
```html
<h2>🌸 JARDÍN DE FLORECITAS QUE TE GUSTAN 🌸</h2>
```
Cambia "florecitas que te gustan" por lo que tú quieras.

---

## 📱 Funciona en Celular?

**SÍ!** La página está diseñada para funcionar perfectamente en:
- ✅ iPhone
- ✅ Android
- ✅ Tablets
- ✅ Computadoras

---

## 🚀 CÓMO PUBLICARLA

### Opción 1: Por WhatsApp (Lo más fácil)
1. Comprime toda la carpeta en un archivo ZIP
2. Envía el ZIP a tu pareja por WhatsApp
3. Dile que:
   - Descargue el archivo
   - Lo descomprima
   - Abra el archivo index.html

### Opción 2: Subir a Internet (Gratis y rápido)

**Con Netlify (Recomendado):**
1. Entra a **netlify.com**
2. Arrastra tu carpeta completa
3. ¡Listo! Te dan un enlace para compartir

**Con GitHub Pages:**
1. Sube los archivos a GitHub
2. Ve a Settings → Pages
3. Activa GitHub Pages
4. Comparte el enlace

---

## ✅ CHECKLIST ANTES DE ENVIAR

Antes de enviar la página a tu pareja, verifica:

- [ ] ¿Cambiaste el nombre de ella?
- [ ] ¿Pusiste la fecha correcta de inicio?
- [ ] ¿Pusiste fotos de ustedes dos?
- [ ] ¿Pusiste canciones que ella liking?
- [ ] ¿Escribiste tu carta de amor?
- [ ] ¿Pusiste las promesas?
- [ ] ¿Pusiste las razones por las que la quieres?
- [ ] ¿Probaste que todo funcione?
- [ ] ¿Probaste en celular?

---

## 💡 CONSEJOS IMPORTANTES

### Para las fotos:
- Usa fotos donde salgan los dos
- Que sean momentos felices
- No pongas fotos muy pesadas

### Para la música:
- Elige canciones que tengan significado para ustedes
- Que sean canciones que ella liking
- La música de fondo no debe ser muy larga

### Para la carta:
- Escribe desde el corazón
- No copies de internet, sé tú mismo
- Incluye recuerdos especiales

### Para el video:
- Puede ser un video corto (máximo 1-2 minutos)
- Que sea de ustedes dos

---

## ❓ PREGUNTAS FRECUENTES

**¿Qué pasa si me equivoco al cambiar algo?**
- No te preocupes, siempre puedes volver a empezar
- Guarda una copia de los archivos originales

**Necesito saber programar para usar esto?**
- ¡NO! Solo necesitas saber usar un ordenador básico
- Sigue las instrucciones de arriba

**Puedo cambiar los colores?**
- Sí, pero eso ya es más avanzado
- Mejor solo cambia los textos primero

---

## 💕 Crédito

Página creada con todo mi amor para **Sirey Toapanta** por **Alexander Agualongo**.

**Fecha de creación:** 14 de Febrero de 2026

Si te gusta esta página y quieres hacer una igual para tu pareja, ¡adelante! 💕

---

## 📝 Notas del Creador

Esta página fue diseñada originalmente para mi amor Sirey. Cada detalle, cada animación, cada texto fue pensado con ella en mente.

Si quieres personalizarla, solo sigue los pasos de arriba. ¡Espero que tu pareja la enjoye tanto como yo enjoyí creándola! ❤️

---

*Hecho con ❤️ para el amor de mi vida*
*No necesitas saber programar, solo necesitas amor*
*¡Feliz San Valentín! 💕*
