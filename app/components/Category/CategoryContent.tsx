"use client";

import { useState } from "react";
import { Product } from "@/app/types/product";
import SortDropdown from "./SortDropdown";
import ProductCard from "../Product/ProductCard";

interface CategoryContentProps {
    products: Product[];
}

export default function CategoryContent({
    products,
}: CategoryContentProps) {
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
            <div className="mb-6 rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                <SortDropdown
                    value={sortOption}
                    onChange={setSortOption}
                />
            </div>

            <p className="mb-6 text-sm text-gray-500">
                মোট{" "}
                <span className="font-bold text-[#05893E]">
                    {sortedProducts.length}
                </span>{" "}
                টি পণ্য দেখানো হচ্ছে
            </p>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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