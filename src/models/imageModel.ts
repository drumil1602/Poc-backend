import mongoose, { Schema } from 'mongoose';
// import { IJwtTokenModel } from '../types.js';

const imageSchema: Schema = new Schema({
    imageUrl: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    size: {
        height: {
            type: Number,
            required: true
        },
        width: {
            type: Number,
            required: true
        }
    }
});

const imageModel = mongoose.model('image', imageSchema);

export default imageModel;
