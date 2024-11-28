import fastify from 'fastify';
import userRoutes from './routes/userRoutes';
import dbConnector from './plugins/mongodb';
import swagger from './plugins/swagger';

const app = fastify({ logger: true });

app.register(dbConnector); // MongoDB Connection
app.register(swagger); // Swagger Setup
app.register(userRoutes); // User Routes

const start = async () => {
  try {
    await app.listen({ port: 3000 });
    console.log('Server running at http://localhost:3000');
    console.log('Swagger available at http://localhost:3000/docs');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
