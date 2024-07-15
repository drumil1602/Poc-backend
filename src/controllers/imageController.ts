import { Request, Response } from 'express';
import expressAsyncHandler from 'express-async-handler';
import createHttpError from 'http-errors';
import imageModel from '../models/imageModel';

export const saveImgUrl = expressAsyncHandler(async (req: Request, res: Response) => {
    let { imageUrl, name, size } = req.body;
    name = name ?? "GFT BDF Arrow Bass Wood FT";
    size = size ?? { height: 660, width: 660 }
    const imgObj = new imageModel({ imageUrl, name, size });
    await imgObj.save();
    console.log(imgObj);
    res.status(201).json(imgObj);
});

export const getAllImgUrls = expressAsyncHandler(async (req: Request, res: Response) => {
    const imgUrls = await imageModel.find({});
    console.log(imgUrls);
    res.status(200).json(imgUrls);
});

export const getImgUrlById = expressAsyncHandler(async (req: Request, res: Response) => {
    const imgId = req.params.id;
    const imgUrl = await imageModel.findById(imgId);
    res.status(200).json(imgUrl);
});