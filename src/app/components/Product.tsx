import { ProductType } from "../types/ProductType";
import  ProductImage  from "./ProductImage";

type ProdutProps = {
    product: ProductType
}

export default function Product({ product }: ProdutProps) {
    return (
        <div className="flex flex-col shadow-lg h-96 bg-slate-800 p-5 text-gray-300s">
            <div className="relative max-h-72 flex-1">IMG</div>
            <ProductImage product={product} fill />
            <div className="flex justify-between font-bold my-3">
               <p className="w-40 truncate">
                {product.title}
               </p>
               <p className="text-md text-teal-300">
                {product.price}
               </p>
            </div>
            <div className="rounded bg-teal-500 text-white px-3,5 py-2,5 text-sm text-center">Adicionar ao carrinho</div>
        </div>
    )
}