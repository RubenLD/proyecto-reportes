import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(
    cors({
        origin: '*'
    })
);

app.use(bodyParser.urlencoded({extend: true}));
app.use(express.json({limit: '20mb'}));

app.get('/', (req, res) => {
    res.send('Server Running...');
});

export default app;
