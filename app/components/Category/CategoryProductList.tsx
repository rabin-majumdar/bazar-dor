"use client";

import { useState } from "react";
import { Product } from "@/app/types/product";
import ProductCard from "../Product/ProductCard";
import SortDropdown from "./SortDropdown";

interface CategoryProductListProps {
    products: Product[];
}

export default function CategoryProductList({
    products,
}: CategoryProductListProps) {
    const [sortOption, setSortOption] = useState("default");

    const sortedProducts = [...products].sort((a, b) => {
        if (sortOption === "low-to-high") {
            return a.today - b.today;
        }

        if (sortOption === "high-to-low") {
            return b.today - a.today;
        }

        return 0;
    });

    return (
        <>
            <SortDropdown
                value={sortOption}
                onChange={setSortOption}
            />

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {sortedProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </>
    );
}