import express from 'express'
import routes from './routes'
import mongoose from 'mongoose'

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-wtgxs.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json());
app.use(routes);


app.listen(3333);