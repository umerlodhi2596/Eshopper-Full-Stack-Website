import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import databaseConnection from './config/db.js'
import productRoutes from './routes/products.routes.js'
import userRoutes from './routes/user.routes.js'
import categoryRoutes from './routes/category.routes.js'
import { errorHandler } from './middleware/errorHandler.js'
import cors from 'cors'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { v2 as cloudinary } from 'cloudinary'
import { createAdmin } from './createAdmin.js'
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const corsOptions = {
  origin: ['https://eshopper-frontend.onrender.com', 'https://eshopper-admin-panel.onrender.com' ],
  credentials: true,
}

app.use(cors(corsOptions));
app.get('/', (req, res) => {
  res.json({message: "Welcome form server"})
})


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY
})



databaseConnection();
createAdmin();
app.use(cookieParser());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}))
app.use(productRoutes);
app.use(userRoutes);
app.use(categoryRoutes);

app.use(express.static(path.join(__dirname, 'eshopper-frontend/build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'eshopper-frontend/build', 'index.html'));
});

// Serve admin panel
app.use('/admin', express.static(path.join(__dirname, 'eshopper-admin-panel/build')));
app.get('/admin/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'eshopper-admin-panel/build', 'index.html'));
});

app.use(errorHandler);

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})