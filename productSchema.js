import { timeStamp } from "console";
import mongoose, { model } from "mongoose";
import { type } from "os";


const ProductsDeails = new mongoose.Schema({

    name: {
        type: String
    },
    category: {
        type: String
    },

    model: {
        type: String
    },
    price: {
        type: String
    },
    description:
    {
        type: String
    },

    color: {
        type: String
    },
    os: {
        type: String
    },
},{
    timeStamp:true
})


export const ProductsSchema = mongoose.model("product",ProductsDeails)