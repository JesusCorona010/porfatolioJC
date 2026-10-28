<div align="center">

# Jesús Corona — Portafolio profesional

**Desarrollador de software en formación · Ingeniería en Diseño de Software**

Sitio web personal donde presento quién soy, las tecnologías que uso, mis proyectos y cómo contactarme.

[![Demo en vivo](https://img.shields.io/badge/Demo-en%20vivo-e8283f?style=for-the-badge)](https://jesuscorona010.github.io/porfatolioJC/)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

---

## Vista previa

<!-- Toma una captura del sitio, guárdala como assets/preview.png y quedará aquí -->
![Vista previa del portafolio](./assets/preview.png)

---

## Sobre el proyecto

Este portafolio es una página de una sola vista (*single page*) construida desde cero con **HTML, CSS y JavaScript puro**, sin frameworks ni dependencias de compilación. El objetivo fue crear un sitio rápido, ligero y con una identidad visual propia: fondo oscuro, acentos en rojo y tipografía moderna.

### Secciones

| Sección | Contenido |
|---|---|
| **Inicio** | Presentación, rol actual, accesos rápidos y fotografía |
| **Sobre mí** | Perfil profesional, ubicación, enfoque y disponibilidad |
| **Skills** | Tecnologías agrupadas en Frontend, Backend, Bases de datos y Herramientas |
| **Proyectos** | Tarjetas con stack, descripción y enlaces a demo y repositorio |
| **Mi proceso** | Metodología de trabajo en 4 pasos: Entender, Diseñar, Desarrollar, Mejorar |
| **Educación** | Formación universitaria, cursos y certificaciones |
| **Contacto** | Medios de contacto directos y formulario |

---

## Características

- **Diseño responsive** adaptado a escritorio, tablet y móvil (breakpoints en 900px, 860px y 480px).
- **Menú hamburguesa** animado para móvil, con atributos `aria-expanded` para accesibilidad.
- **Fondo animado en canvas**: orbes con degradado radial que se mueven suavemente en la sección principal y se recalculan al cambiar el tamaño de la ventana.
- **Microinteracciones**: efectos *hover* con brillo en los íconos de skills, elevación de tarjetas de proyecto y transiciones en botones.
- **Formulario de contacto** con validación nativa de HTML5 y retroalimentación visual al enviar.
- **Navegación suave** entre secciones con `scroll-behavior: smooth`.
- **Sistema de diseño con variables CSS** (`--bg`, `--red`, `--text`, etc.) para cambiar la paleta desde un solo lugar.

---

## Tecnologías

| Herramienta | Uso |
|---|---|
| **HTML5** | Estructura semántica del sitio |
| **CSS3** | Estilos, Grid, Flexbox, variables y media queries |
| **JavaScript (Vanilla)** | Menú móvil, formulario y animación en `<canvas>` |
| **Font Awesome 6** | Íconos de tecnologías y redes (vía CDN) |
| **Google Fonts** | Tipografías *Space Grotesk* e *Inter* |
| **Git / GitHub** | Control de versiones y hosting |

---

## Estructura del proyecto

```
porfatolioJC/
├── index.html        # Estructura y estilos principales del sitio
├── code.js           # Menú móvil, formulario y animación de fondo
├── assets/
│   ├── foto.jpeg     # Fotografía de perfil
│   └── style.css     # Hoja de estilos
└── README.md
```

---

## Cómo ejecutarlo localmente

No necesita instalación ni dependencias.

```bash
# 1. Clona el repositorio
git clone https://github.com/JesusCorona010/porfatolioJC.git

# 2. Entra a la carpeta
cd porfatolioJC

# 3. Abre index.html en tu navegador
```

> **Tip:** si usas VS Code, la extensión **Live Server** recarga la página automáticamente cada vez que guardas cambios.

---

## Despliegue

El sitio puede publicarse gratis con **GitHub Pages**:

1. En el repositorio, ve a **Settings → Pages**.
2. En *Source*, selecciona la rama `main` y la carpeta `/ (root)`.
3. Guarda y en unos minutos estará disponible en `https://jesuscorona010.github.io/porfatolioJC/`.

---

## Próximas mejoras

- [ ] Conectar el formulario a un servicio de envío de correos (Formspree, EmailJS).
- [ ] Habilitar la descarga del CV en PDF.
- [ ] Agregar capturas reales y enlaces a cada proyecto.
- [ ] Enlazar los íconos de redes sociales del inicio.
- [ ] Modo claro / oscuro.

---

## Contacto

**Jesús Corona** · Puebla, México

- GitHub: [@JesusCorona010](https://github.com/JesusCorona010)
- LinkedIn: [linkedin.com/in/tuusuario](https://linkedin.com/in/tuusuario)
- Email: [jesus.corona@email.com](mailto:jesus.corona@email.com)

<div align="center">

---

Hecho con disciplina y código en México 🇲🇽

</div>
