import { FastifyInstance } from "fastify";
import { getAllUsers,createUser,updateUser,deleteUser } from "../controllers/userController";
import { userSchema } from "../models/userModel";

export default async function userRoutes(fastify:FastifyInstance){
fastify.get('/users',getAllUsers);
fastify.post('/users', {
    schema: {
      body: {
        type: 'object',
        required: ['name', 'email', 'age'], // Specify the required fields
        properties: {
          name: { type: 'string' },
          email: { type: 'string', format: 'email' },
          age: { type: 'number' },
        },
      },
      response: {
        201: {
          description: "User Created Successfully",
          type: 'object',
          properties: {
            message: { type: 'string' },
            data: { type: 'object' },
          },
        },
      },
    },
  }, createUser);
fastify.put('/users/:id',updateUser);
fastify.delete('/users/:id',deleteUser);
}