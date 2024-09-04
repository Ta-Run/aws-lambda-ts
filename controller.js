
import ProductsSchema from './productSchema.js'

const postProductDeatails =async (body)=>{
    const data = await ProductsSchema.create(body)

    data.save()
}

export {postProductDeatails}