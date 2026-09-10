# Guía de Revisión y Manual de Entrega — DAFCER Web
**Versión:** 1.0 (Primera Entrega / Instancia de Revisión Privada)  
**Destinatario:** Equipo Directivo y de Comunicación — DAFCER  
**Fecha:** Septiembre 2026  

---

## 🎯 1. Instrucciones de Acceso Privado (Modo Equipo)

Actualmente la plataforma cuenta con un sistema de **protección de pre-lanzamiento activo**, programado para el estreno público el **4 de octubre de 2026**.

Cualquier persona del público general o competidores que ingrese a la dirección web solo verá la pantalla de cuenta regresiva (*"Próximamente"*). Para que ustedes y su equipo puedan explorar, auditar y validar la web completa, se ha habilitado un **enlace de bypass exclusivo**:

> ### 🔗 Enlace de Acceso Privado:
> `https://tu-dominio-aqui.com/?preview=dafcer`  
> *(Reemplazar por la URL asignada en Netlify / Vercel o dominio propio)*

### ¿Cómo funciona el acceso?
1. **Activación automática:** Al hacer clic en el enlace con el parámetro `?preview=dafcer`, el navegador guardará una credencial segura en la memoria de su dispositivo (`localStorage`).
2. **Navegación libre:** A partir de ese momento, podrán cerrar la ventana, volver a entrar días después o navegar entre las diferentes páginas (`index.html`, `casa-futura.html`) sin necesidad de volver a ingresar ningún código.
3. **Para salir del modo equipo (opcional):** Si en algún momento desean comprobar cómo ve la web un visitante no autorizado, basta con ingresar a `https://tu-dominio-aqui.com/?preview=logout`.

---

## 🏛️ 2. Arquitectura de la Plataforma: ¿Qué contiene el sitio?

La web de DAFCER fue concebida como una **experiencia digital inmersiva de alta gama**, pensada para transmitir solidez, elegancia y liderazgo en el rubro constructivo de Neuquén y la Patagonia.

### A. Portada Cinemática Interactiva (Hero Canvas Sequence)
* Al ingresar, verán un preloader con el isotipo de DAFCER y una barra de carga sincronizada con 96 fotogramas de alta resolución.
* Al hacer scroll hacia abajo, la obra evoluciona visualmente en tiempo real: desde la estructura de hormigón en bruto hasta la vivienda de diseño totalmente finalizada.

### B. Portafolio Seleccionado & Modal Interactivo con Hotspots
* Se exhiben 4 obras emblemáticas de diferentes tipologías:
  1. **Las Gemas** (Residencial en Plottier): 175 m², estilo minimalista y doble altura.
  2. **Padel House Club** (Deportivo en Plottier): 1,200 m², estructura metálica y módulos panorámicos Blindex.
  3. **Spusa** (Remodelación Corporativa en Neuquén Capital): 500 m², pisos flotantes y cielo raso técnico.
  4. **Los Castaños** (Residencial en Neuquén): Terminaciones en Silestone Calacatta y aberturas de alta gama.
* **Innovación en Fichas Técnicas (Hotspots):** Al hacer clic en cualquier obra, se abre una galería en pantalla completa. Sobre las fotografías se despliegan **puntos interactivos (*hotspots*)** que, al posar el cursor o tocarlos en el celular, revelan las especificaciones técnicas de los materiales y terminaciones de lujo aplicadas.

### C. Showcase Audiovisual de Vanguardia
* Reproductor de video 16:9 integrado con recorrido 3D hiperrealista, botón magnético de reproducción y control visual depurado.

### D. Sección Nosotros y Metodología "Cómo Trabajamos"
* Transparencia de costos, certificación de avances de obra y dirección técnica personalizada.
* Testimonio destacado del proyecto Los Castaños y respaldo de más de 10 años de trayectoria.

### E. Landing Page Especializada: "Casa Futura" (`casa-futura.html`)
* Una página dedicada exclusivamente al nuevo modelo de vivienda unifamiliar en lote P.H.
* Incluye especificaciones de 66 m² cubiertos, 2 dormitorios, vistas volumétricas y **planos 3D axonométricos**.
* Cuenta con su propio formulario y llamado a la acción directo.

### F. Ventana Promocional Inteligente (Modal de Oportunidad)
* Un aviso elegante que emerge tras unos segundos de navegación informando la preventa en pozo de *Casa Futura*. 
* Respeta la experiencia de usuario: si el visitante lo cierra, no vuelve a ser invasivo durante la misma sesión de navegación.

---

## ⚡ 3. Estándares Técnicos y de Rendimiento Aplicados

Esta versión incorpora optimizaciones de ingeniería web de primer nivel internacional:
* **Formato WebP de última generación:** Toda la biblioteca visual del sitio (más de 120 archivos entre fotos y fotogramas) fue convertida a WebP, reduciendo el peso de la web en más de un **60% (ahorro de 48 MB)** sin perder resolución ni fidelidad de color.
* **Seguridad y privacidad (OWASP):** Implementación de cabeceras HTTP que protegen el sitio contra ataques de inyección, suplantación de identidad en iframes (*Clickjacking*) y garantizan navegación bajo HTTPS estricto.
* **Compatibilidad Móvil (Responsive):** Menú de navegación lateral adaptativo y controles táctiles optimizados para smartphones (iPhone y Android).
* **Previsualización en Redes Sociales (Open Graph):** Al compartir el enlace de la web por WhatsApp o LinkedIn, se desplegará automáticamente la ficha con el logotipo oficial, imagen de alta definición y descripción corporativa.

---

## 📋 4. Guía para la Instancia de Revisión (Feedback del Cliente)

El objetivo de esta entrega es que ustedes puedan navegar la plataforma con calma, evaluar la experiencia y transmitirnos sus observaciones para afinar los detalles finales antes de retirar el candado de pre-lanzamiento.

Les sugerimos poner especial atención en:

| Área a Revisar | Aspecto específico | Estado actual |
|---|---|---|
| **Textos y Datos Técnicos** | Superficie exacta del proyecto "Los Castaños". | Actualmente figura con el marcador provisional `--- m²` en el modal. |
| **Canal de Contacto** | Correo electrónico de destino para las consultas del formulario. | Listo para asociar a la casilla oficial de DAFCER. |
| **Contacto Inmediato** | Confirmar si desean incorporar un botón flotante de WhatsApp en la esquina inferior. | El enlace actual en el pie ya redirige al número oficial `+54 9 299 603-5875`. |
| **Redes Sociales** | Enlaces en el pie de página a Instagram, Facebook y WhatsApp. | Operativos y vinculados a los perfiles actuales de la empresa. |
| **Fotografías** | Selección de obras y perspectivas mostradas en la galería. | Aprobación de las imágenes exhibidas o reemplazo por nuevo material. |

---

> **Próximo Paso:** Una vez recibidas sus notas de revisión, implementaremos los ajustes solicitados y coordinaremos el momento indicado para desactivar el candado y realizar el lanzamiento público oficial de la web.
