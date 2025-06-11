# DOCUMENTACIÓN DEL PACKAGE.JSON - BACKEND
## Configuración del Servidor Node.js para Autenticación JWT

**Archivo:** `backend/package.json`  
**Propósito:** Configuración de dependencias y scripts del servidor backend

### INFORMACIÓN DEL PROYECTO

#### IDENTIFICACIÓN
- **`name`**: Nombre único del paquete npm
- **`version`**: Versión semántica del proyecto (Major.Minor.Patch)
- **`description`**: Descripción breve de la funcionalidad
- **`main`**: Punto de entrada principal de la aplicación

#### SCRIPTS DE EJECUCIÓN
- **`start`**: Ejecuta el servidor en modo producción
  - Comando: `npm start`
  - Uso: Para despliegue en producción
- **`dev`**: Ejecuta el servidor en modo desarrollo con hot reload
  - Comando: `npm run dev`
  - Uso: Durante el desarrollo (reinicia automáticamente al detectar cambios)

### DEPENDENCIAS DE PRODUCCIÓN

#### FRAMEWORK WEB
- **`express`** (^4.18.2): Framework web minimalista y flexible para Node.js
  - Manejo de rutas HTTP
  - Middleware de aplicación
  - Gestión de requests y responses

#### SEGURIDAD Y AUTENTICACIÓN
- **`bcryptjs`** (^2.4.3): Librería para hashear contraseñas
  - Implementa el algoritmo bcrypt
  - Protección contra ataques de fuerza bruta
  - Salt automático para mayor seguridad

- **`jsonwebtoken`** (^9.0.2): Implementación de JSON Web Tokens
  - Generación de tokens JWT
  - Verificación y decodificación de tokens
  - Configuración de expiración

#### BASE DE DATOS
- **`pg`** (^8.11.3): Cliente PostgreSQL para Node.js
  - Conexión a base de datos PostgreSQL
  - Ejecución de queries SQL
  - Pool de conexiones para optimización

#### CONFIGURACIÓN Y MIDDLEWARE
- **`cors`** (^2.8.5): Middleware para Cross-Origin Resource Sharing
  - Permite requests desde el frontend (puerto 3000)
  - Configuración de políticas de CORS
  - Seguridad en comunicación cross-origin

- **`dotenv`** (^16.3.1): Carga variables de entorno desde archivo .env
  - Gestión segura de configuraciones sensibles
  - Separación de configuración por entorno
  - Protección de credenciales

- **`express-validator`** (^7.0.1): Middleware de validación para Express
  - Validación de datos de entrada
  - Sanitización de inputs
  - Manejo de errores de validación

### DEPENDENCIAS DE DESARROLLO

- **`nodemon`** (^3.0.1): Monitor de archivos para desarrollo
  - Reinicio automático del servidor al detectar cambios
  - Mejora la productividad en desarrollo
  - Solo se usa en entorno de desarrollo

### METADATOS DEL PROYECTO

#### PALABRAS CLAVE
- `jwt`: Tecnología de autenticación utilizada
- `authentication`: Funcionalidad principal
- `node.js`: Runtime de JavaScript
- `express`: Framework web
- `postgresql`: Base de datos

#### INFORMACIÓN ADICIONAL
- **`author`**: Información del desarrollador
- **`license`**: Licencia MIT (código abierto)

### COMANDOS ÚTILES

```bash
# Instalar todas las dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Ejecutar en modo producción
npm start

# Instalar nueva dependencia
npm install [package-name]

# Actualizar dependencias
npm update
```

### VERSIONADO SEMÁNTICO

El proyecto usa versionado semántico (SemVer):
- **Major** (1.x.x): Cambios incompatibles con versiones anteriores
- **Minor** (x.1.x): Nueva funcionalidad compatible
- **Patch** (x.x.1): Correcciones de bugs

### SEGURIDAD DE DEPENDENCIAS

Para mantener la seguridad:
```bash
# Auditar vulnerabilidades
npm audit

# Corregir vulnerabilidades automáticamente
npm audit fix

# Verificar dependencias desactualizadas
npm outdated
```
