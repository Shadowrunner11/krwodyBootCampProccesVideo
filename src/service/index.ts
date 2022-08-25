import Express, {json} from 'express';
import morgan from 'morgan';
import miniApp from '../routes';


const server = Express();

export default server;

server.use(morgan('dev'));
server.use(json());

server.use('/api', miniApp);