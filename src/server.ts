import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path'; 
import mainRoutes from './routes/index';


dotenv.config();


const server = express();

server.set('views engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.set('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

//Rotas
server.use(mainRoutes);

server.use((req:Request, res:Response)=>{
    res.status(404).send('Página não encontrada!');
});


server.listen(process.env.PORT);