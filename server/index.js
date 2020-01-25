const express = require('express');
const mongoose = require('mongoose');
const app = express();
const AppRoutes = require('./routes/app-routes.module');

app.use(express.json());
app.use('/api', AppRoutes);
mongoose.connect(
    'mongodb+srv://cluster0-ydusu.mongodb.net/test?retryWrites=true&w=majority',{
        dbName: 'user',
        user: 'myadmin',
        pass: 'P@$$w0rd',
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
    console.log('The mongoose database is connected');
})

app.get('/', (req, res) => {
    res.send('Hello World!')
  });
  
  app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
  });