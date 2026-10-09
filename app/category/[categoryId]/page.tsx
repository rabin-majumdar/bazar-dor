import { getProducts } from "@/app/services/productService";
import { getCategories } from "@/app/services/categoryService";
import CategoryContent from "@/app/components/Category/CategoryContent";
import { notFound } from "next/navigation";

interface CategoryPageProps {
    params: Promise<{
        categoryId: string;
    }>;
}

export default async function CategoryPage({
    params,
}: CategoryPageProps) {
    const { categoryId } = await params;

    const products = await getProducts();
    const categories = await getCategories();

    const categoryProducts = products.filter(
        (product) => product.category === categoryId
    );

    const category = categories.find(
        (category) => category.slug === categoryId
    );

    if (!category) {
        notFound();
    }

    return (
        <main className="container mx-auto px-4 py-12">
            <div className="mb-6 rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                    <span className="text-3xl">
                        {category?.icon}
                    </span>

                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            {category?.nameBn}
                        </h1>

                        <p className="mt-1 text-sm text-gray-500">
                            {categoryProducts.length} টি পণ্যের আজকের দাম ও পরিবর্তন
                        </p>
                    </div>
                </div>
            </div>

            <CategoryContent products={categoryProducts} />
        </main>
    );
}