import { FastifyRequest, FastifyReply } from "fastify";
import User,{IUser} from "../models/userModel";


export async function createUser(request:FastifyRequest<{Body:IUser}>, reply:FastifyReply){
    try{
        const newUser = new User(request.body);
        await newUser.save();
        reply.code(201).send(newUser)
    }catch (error){
        reply.code(500).send(error);
    }
} 

export async function getAllUsers(request:FastifyRequest,reply:FastifyReply){
    const users = await User.find();
    reply.send(users);
}

export async function updateUser(request: FastifyRequest<{ Params: { id: string }; Body: Partial<IUser> }>, reply: FastifyReply) {
    const user = await User.findByIdAndUpdate(request.params.id, request.body, { new: true });
    if (!user) {
      reply.code(404).send({ message: 'User not found' });
    } else {
      reply.send(user);
    }
  }
  
  export async function deleteUser(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
    const user = await User.findByIdAndDelete(request.params.id);
    if (!user) {
      reply.code(404).send({ message: 'User not found' });
    } else {
      reply.code(204).send();
    }
  }