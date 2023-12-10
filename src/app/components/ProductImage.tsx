"use client"
import { useState } from "react"
import Image from "next/image"
import { ProductType } from "../types/ProductType"
import { type } from "os"

type ProductImageProps = {
    product: ProductType
    fill?: boolean
}

export default function ProductImage({product, fill}: ProductImageProps) {
    const [loaded, setLoaded] = useState(true)
    return fill ? (
        <Image
            src={product.image}
            fill
            alt = {product.title}
            className={`object-cover ${
                loaded ? 'scale-110 blur-1xl grayscale' 
                : 'grayscale blur-0'
            }`}
            onLoadingComplete={() => setLoaded(false)}
        />
    ) : (
        <Image
        src={product.image}
        width={400}
        height={700}
        alt = {product.title}
        className={`object-cover ${
            loaded ? 'scale-110 blur-1xl grayscale' 
            : 'grayscale blur-0'
        }`}
        onLoadingComplete={() => setLoaded(false)}
    /> 
    )


} 