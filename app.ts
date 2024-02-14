import express from 'express';
import cors from 'cors';
import contactRoutes from './routes/contactRoutes';

const app = express();
const PORT = 3000;

const allowedOrigins = ['http://localhost:4200', 'https://contact-2b213.web.app']; // Agrega aquí el origen permitido

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

app.use('/api/contact', contactRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
