import { Product } from "@/app/types/product";
import { productSectionConfig } from "@/app/config/productSection";
import ProductCard from "./ProductCard";

interface ProductSectionProps {
    type: "rising" | "falling" | "all";
    products: Product[];
}

export default function ProductSection({
    type,
    products,
}: ProductSectionProps) {

    const section = productSectionConfig[type];

    return (
        <section className="container mx-auto px-4 py-12">
            <div className="mb-8">

                <div className="flex items-center gap-2">
                    {type === "rising" && (
                        <span className="text-red-600">▲</span>
                    )}

                    {type === "falling" && (
                        <span className="text-green-600">▼</span>
                    )}

                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        {section.title}
                    </h2>
                </div>

                {type === "all" && (
                    <p className="mt-2 text-sm text-gray-500">
                        মোট{" "}
                        <span className="font-bold text-[#05893E]">
                            {products.length}
                        </span>{" "}
                        টি পণ্য দেখানো হচ্ছে
                    </p>
                )}
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </section>
    );
}