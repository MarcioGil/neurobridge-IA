import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';

// Carregar variáveis de ambiente
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/neurobridge-plus';

// Middlewares de segurança
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // máximo de 100 requisições por IP
  message: 'Muitas requisições deste IP, tente novamente mais tarde.',
});
app.use('/api/', limiter);

// Middlewares de parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Logging
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

// Health check
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
  });
});

// Rota raiz
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'NeuroBridge+ API',
    version: '1.0.0',
    description: 'API para plataforma de inclusão profissional e educacional',
    documentation: '/api/docs',
  });
});

// Rotas da API
app.use('/api/auth', (req: Request, res: Response) => {
  res.json({ message: 'Auth routes - Em desenvolvimento' });
});

app.use('/api/users', (req: Request, res: Response) => {
  res.json({ message: 'Users routes - Em desenvolvimento' });
});

app.use('/api/accessibility', (req: Request, res: Response) => {
  res.json({ message: 'Accessibility routes - Em desenvolvimento' });
});

app.use('/api/courses', (req: Request, res: Response) => {
  res.json({ message: 'Courses routes - Em desenvolvimento' });
});

app.use('/api/jobs', (req: Request, res: Response) => {
  res.json({ message: 'Jobs routes - Em desenvolvimento' });
});

app.use('/api/recommendations', (req: Request, res: Response) => {
  res.json({ message: 'Recommendations routes - Em desenvolvimento' });
});

// Rota 404
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: {
      code: 'NOT_FOUND',
      message: 'Rota não encontrada',
    },
  });
});

// Error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err);
  
  res.status(500).json({
    success: false,
    error: {
      code: 'INTERNAL_SERVER_ERROR',
      message: process.env.NODE_ENV === 'production' 
        ? 'Erro interno do servidor' 
        : err.message,
    },
  });
});

// Conectar ao MongoDB e iniciar servidor
const startServer = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Conectado ao MongoDB');

    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
      console.log(`📝 Ambiente: ${process.env.NODE_ENV || 'development'}`);
      console.log(`🌍 Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:3000'}`);
    });
  } catch (error) {
    console.error('❌ Erro ao conectar ao MongoDB:', error);
    process.exit(1);
  }
};

// Tratamento de sinais de encerramento
process.on('SIGTERM', async () => {
  console.log('SIGTERM recebido. Encerrando servidor...');
  await mongoose.connection.close();
  process.exit(0);
});

process.on('SIGINT', async () => {
  console.log('SIGINT recebido. Encerrando servidor...');
  await mongoose.connection.close();
  process.exit(0);
});

startServer();

export default app;

