import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

import { getProducts } from "@/app/services/productService";
import { Product } from "@/app/types/product";

export default async function PriceTicker() {
    const products: Product[] = await getProducts();

    return (
        <div className="border-b border-gray-200 bg-white">
            <div className="overflow-hidden px-4">
                <MarqueeText direction="right" duration={20}>
                    {products.map((product) => (
                        <span
                            key={product.id}
                            className="mx-6 inline-flex items-center gap-2 py-2 text-sm"
                        >
                            <span>{product.categoryIcon}</span>

                            <span className="font-medium text-gray-800">
                                {product.nameBn}
                            </span>

                            <span className="text-gray-600">
                                {product.today} টাকা/{product.unit}
                            </span>

                            <span
                                className={
                                    product.change.dir === "up"
                                        ? "font-semibold text-green-600"
                                        : product.change.dir === "down"
                                            ? "font-semibold text-red-600"
                                            : "font-semibold text-gray-500"
                                }
                            >
                                {product.change.dir === "up"
                                    ? "▲"
                                    : product.change.dir === "down"
                                        ? "▼"
                                        : "—"}{" "}
                                {Math.abs(product.change.pct)}%
                            </span>
                        </span>
                    ))}
                </MarqueeText>
            </div>
        </div>
    );
}