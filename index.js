import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Database connected successfully');
    
    
    app.listen(process.env.PORT , () => {
      console.log('Server is running fine');
    });
  })
  .catch((err) => {
    console.log('Error connecting to the database:', err.message);
  });


app.get('/', (req, res) => {
  res.send('This is my homepage');
});

app.get('/about', (req, res) => {
  res.send('This is my About page, here you will find about me');
});
