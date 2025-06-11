/**
 * SERVIDOR PRINCIPAL DEL BACKEND
 * Este es el archivo principal que inicia el servidor Express.js y configura todos los middlewares
 * y rutas necesarios para el sistema de autenticación JWT.
 */

// Importación de dependencias necesarias
const express = require('express');  // Framework web para Node.js
const cors = require('cors');        // Middleware para habilitar CORS (Cross-Origin Resource Sharing)
const { connectDB } = require('./config/database');  // Función para conectar a la base de datos
const authRoutes = require('./routes/auth');         // Rutas de autenticación

// Cargar variables de entorno desde el archivo .env
require('dotenv').config();

// Crear la aplicación Express
const app = express();
// Definir el puerto del servidor (5000 por defecto)
const PORT = process.env.PORT || 5000;

// Conectar a la base de datos PostgreSQL
connectDB();

/**
 * CONFIGURACIÓN DE MIDDLEWARES
 * Los middlewares se ejecutan en orden y procesan las peticiones antes de llegar a las rutas
 */

// Middleware de CORS - Permite que el frontend en localhost:3000 se comunique con el backend
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'], // URLs permitidas del React app
  credentials: true,                                         // Permitir cookies y headers de autenticación
  methods: ['GET', 'POST', 'PUT', 'DELETE'],               // Métodos HTTP permitidos
  allowedHeaders: ['Content-Type', 'Authorization']        // Headers permitidos
}));

// Middleware para parsear JSON en las peticiones
app.use(express.json());
// Middleware para parsear datos de formularios URL-encoded
app.use(express.urlencoded({ extended: true }));

/**
 * CONFIGURACIÓN DE RUTAS
 * Define los endpoints de la API
 */

// Rutas de autenticación - todas las rutas que empiecen con /api/auth
app.use('/api/auth', authRoutes);

/**
 * RUTA DE VERIFICACIÓN DE SALUD
 * Endpoint simple para verificar que la API está funcionando correctamente
 * GET /api/health
 */
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'JWT Auth API is running',
    timestamp: new Date().toISOString()
  });
});

/**
 * MANEJADOR DE RUTAS NO ENCONTRADAS (404)
 * Se ejecuta cuando alguien accede a una ruta que no existe
 */
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

/**
 * MANEJADOR GLOBAL DE ERRORES
 * Captura cualquier error no manejado en la aplicación
 */
app.use((error, req, res, next) => {
  console.error('Unhandled error:', error);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

/**
 * INICIO DEL SERVIDOR
 * Pone el servidor a escuchar en el puerto especificado
 */
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📱 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🔐 Auth endpoints: http://localhost:${PORT}/api/auth`);
});
