import express from 'express';
import { getAllImgUrls, saveImgUrl } from '../controllers/imageController';

const router = express.Router();

router.post('/',
    saveImgUrl
);

router.get('/',
    getAllImgUrls
);

export default router;