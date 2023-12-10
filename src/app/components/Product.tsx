import { ProductType } from "../types/ProductType";

type ProdutProps = {
    product: ProductType
}

export default function Product({ product }: ProdutProps) {
    return (
        <div className="flex flex-col">
            <div>{product.image}</div>
            <div>{product.title}</div>
            <div>Adicionar ao carrinho</div>
        </div>
    )
}