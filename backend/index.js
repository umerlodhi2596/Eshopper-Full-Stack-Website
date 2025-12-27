import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import databaseConnection from './config/db.js'
import productRoutes from './routes/products.routes.js'
import userRoutes from './routes/user.routes.js'
import categoryRoutes from './routes/category.routes.js'
import cors from 'cors'
import { v2 as cloudinary } from 'cloudinary'
import { createAdmin } from './createAdmin.js'
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const corsOptions = {
  origin: ['http://localhost:5173', 'http://localhost:5174' ],
  credentials: true,
}


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY
})

databaseConnection();
createAdmin();
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}))
app.use(productRoutes);
app.use(userRoutes);
app.use(categoryRoutes);

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})