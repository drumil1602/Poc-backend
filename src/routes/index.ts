import express from 'express';
import imageRoutes from './imageRoutes.js'

const router = express.Router();

router.use('/images',imageRoutes);

export default router;
