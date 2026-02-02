# Sistema de Gestión Universitario

Este es un sistema integral de gestión universitaria basado en Node.js y Express, diseñado para facilitar la administración completa de las operaciones académicas de una institución educativa, abarcando desde la gestión de estudiantes, profesores y cursos.

## ✨ Funcionalidades Principales

El sistema cuenta con una arquitectura modular que permite gestionar diferentes áreas de la institución académica:

- **👨‍🎓 Gestión de Estudiantes:**
  - CRUD completo para estudiantes (Crear, Leer, Actualizar, Eliminar).
  - Carga de imágenes de perfil para cada estudiante.
  - Registro de información académica y datos de contacto.
  - Búsqueda y filtrado rápido de estudiantes.

- **👨‍🏫 Gestión de Profesores:**
  - CRUD completo para profesores.
  - Carga de imágenes de perfil.
  - Asignación de cursos y áreas académicas.
  - Almacenamiento de información de contacto y especialización.

- **📚 Gestión de Cursos:**
  - CRUD completo para cursos.
  - Carga de imágenes y materiales del curso.
  - Asociación de profesores a cursos.
  - Control de estudiantes matriculados por curso.
  - Información de horarios y créditos académicos.

- **🖼️ Interfaz Intuitiva:**
  - Diseño responsive compatible con dispositivos móviles.
  - Navegación clara y organizada por módulos.
  - Componentes interactivos para mejor experiencia del usuario.

## 🚀 Tecnologías Utilizadas

El proyecto está construido con las siguientes tecnologías:

- **Backend:**
  - **Node.js** - Runtime de JavaScript en servidor.
  - **Express.js** - Framework web rápido y minimalista para Node.js.
  - **Mongoose** - ODM para MongoDB, facilita la interacción con la base de datos.
  - **Babel** - Transpilador para usar características modernas de JavaScript (ES6+).
  - Arquitectura MVC (Modelo-Vista-Controlador) para la organización del código.

- **Frontend:**
  - **HTML5** y **CSS3** para estructura y estilos.
  - **JavaScript** (ES6+) para interactividad y dinamismo.
  - **Handlebars (.hbs)** - Motor de plantillas para renderizar vistas.
  - **Bootstrap** - Framework CSS para diseño responsive.
  - **jQuery** - Librería para manipulación del DOM y peticiones AJAX.

- **Base de Datos:**
  - **MongoDB** - Base de datos NoSQL flexible y escalable.

- **Gestión de Archivos:**
  - **Multer** - Middleware para manejo de cargas de archivos (imágenes de perfil).

- **Desarrollo:**
  - **Nodemon** - Herramienta para reiniciar automáticamente el servidor durante el desarrollo.
  - **Morgan** - Logger HTTP para rastrear requests y responses.
  - **Dotenv** - Gestión de variables de entorno.

## 🏛️ Modelo de Datos

El sistema implementa las siguientes entidades principales con sus relaciones:

- **Estudiantes**: Contiene información personal, académica y de contacto.
- **Profesores**: Almacena datos profesionales y especialización académica.
- **Cursos**: Información de cursos, incluyendo horarios y profesor asignado.

## 🔧 Instalación

Para ejecutar este proyecto en un entorno local, sigue estos pasos:

1. **Requisitos Previos:**
   - Tener instalado [Node.js](https://nodejs.org/) (versión 14 o superior).
   - Tener instalado [MongoDB](https://www.mongodb.com/try/download/community) o acceso a una instancia remota de MongoDB.
   - Un editor de código como [Visual Studio Code](https://code.visualstudio.com/).

2. **Clonar el Repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/GestorUniversidad.git
   cd GestorUniversidad
   ```

3. **Instalar Dependencias:**
   ```bash
   npm install
   ```

4. **Configuración de Variables de Entorno:**
   - Crea un archivo `.env` en la raíz del proyecto.
   - Agrega las siguientes variables:
   ```env
   MONGODB_URI=mongodb://localhost:27017/universidad
   PORT=3000
   NODE_ENV=development
   ```

5. **Asegurar que MongoDB está en Ejecución:**
   - Si usas MongoDB local, asegúrate de que el servicio está activo.
   - Si usas MongoDB Atlas (en la nube), actualiza `MONGODB_URI` con tu cadena de conexión.

6. **Ejecutar en Modo Desarrollo:**
   ```bash
   npm run dev
   ```

7. **Acceder a la Aplicación:**
   - Abre tu navegador y accede a `http://localhost:3000`.

## 🔌 Endpoints Principales

El sistema expone los siguientes endpoints API:

### Estudiantes
- `GET /estudiantes` - Listar todos los estudiantes.
- `GET /estudiantes/:id` - Obtener detalles de un estudiante.
- `POST /estudiantes` - Crear nuevo estudiante.
- `PUT /estudiantes/:id` - Actualizar estudiante.
- `DELETE /estudiantes/:id` - Eliminar estudiante.

### Profesores
- `GET /profesores` - Listar todos los profesores.
- `GET /profesores/:id` - Obtener detalles de un profesor.
- `POST /profesores` - Crear nuevo profesor.
- `PUT /profesores/:id` - Actualizar profesor.
- `DELETE /profesores/:id` - Eliminar profesor.

### Cursos
- `GET /cursos` - Listar todos los cursos.
- `GET /cursos/:id` - Obtener detalles de un curso.
- `POST /cursos` - Crear nuevo curso.
- `PUT /cursos/:id` - Actualizar curso.
- `DELETE /cursos/:id` - Eliminar curso.

## 📦 Dependencias Principales

- **express**: Framework web.
- **mongoose**: Modelado de datos MongoDB.
- **express-handlebars**: Motor de plantillas.
- **multer**: Manejo de carga de archivos.
- **dotenv**: Gestión de variables de entorno.
- **babel**: Transpilación de ES6+.

## 🚀 Scripts Disponibles

- `npm run dev` - Ejecuta la aplicación en modo desarrollo con nodemon.
- `npm test` - Ejecuta las pruebas (actualmente no configuradas).
