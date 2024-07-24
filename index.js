import './env.js'
import express from 'express'
import ejs from 'ejs'
import path from 'path'
// import cookieParser from 'cookie-parser';
import expressLayouts from 'express-ejs-layouts'
import bodyParser from 'body-parser'
import ListRouter from './src/features/list/list.routes.js'
import UserRouter from './src/features/users/users.routes.js'
const app=express()
app.use(express.json());
app.use(express.static(path.join(path.resolve(),'public')));

console.log('pathis')
console.log(path.join(path.resolve(),'public'))

app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(expressLayouts);
// app.set('layout',path.join(path.resolve(),'public','layouts'))
app.set('views',path.join(path.resolve(),'/src','/views'));// src/views

// app.use(express.static(path.join(path.resolve(),'public')));
// app.set('style',path.join(path.resolve(),'src','public','style'));
app.use('/',UserRouter)
app.use('/list',ListRouter);
// app.use(express.static(path.join(path.resolve(),'public')));
export default app;
// res.render('hello', { name: 'Geeks' }); this should be at the end of the respective 
// controllers

/*
app.set('view engine','ejs');
app.use(expressEjsLayouts);//layout.ejs
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static("src/public"));
app.use(express.urlencoded({extended:true}));
app.set('views',path.join(path.resolve(),'src','views'));// src/views
*/

/*
export const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
var corsOptions={
     origin:'http://127.0.0.1:3000'
    }
app.use(cors(corsOptions));
app.use(loggerMiddleware);
app.use('/docs',swagger.serve,swagger.setup(apiDocs));
app.get('/', (req, res) => {
    return res.status(200).send('you are in the index page of the API');
});
app.use('/api/rate',RateRouter)
app.use('/api/users',UserRouter)
app.use('/api/products',jwtAuth, ProductRouter)
app.use('/api/cart',CartRouter);
app.use((req,res)=>{
    return res.status(404).send('API not found')
})
*/