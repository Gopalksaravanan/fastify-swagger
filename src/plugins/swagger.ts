import fp from 'fastify-plugin';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';

export default fp(async (fastify) => {
  // Register the Swagger plugin to generate OpenAPI documentation
  fastify.register(fastifySwagger, {
    openapi: {
      info: {
        title: 'User Management API',
        description: 'API documentation for MongoDB CRUD',
        version: '1.0.0',
      },
      servers: [
        {
          url: 'http://localhost:3000', // Base URL for API requests
        },
      ],
    },
  });

  // Register the Swagger UI plugin to expose the documentation
  fastify.register(fastifySwaggerUi, {
    routePrefix: '/docs', // URL where Swagger UI is available
    uiConfig: {
      docExpansion: 'full', // Fully expanded documentation
      deepLinking: false,   // Disable deep linking
    },
  });
});
