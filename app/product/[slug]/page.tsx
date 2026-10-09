import { notFound } from "next/navigation";
import { getProducts } from "@/app/services/productService";
import ProductBreadcrumb from "@/app/components/ProductDetails/ProductBreadcrumb";
import ProductHeader from "@/app/components/ProductDetails/ProductHeader";
import PriceSummary from "@/app/components/ProductDetails/PriceSummary";
import MarketPriceTable from "@/app/components/ProductDetails/MarketPriceTable";
import { getProductPriceSummary } from "@/app/utils/productPriceUtils";

interface ProductDetailsPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProductDetailsPage({
    params,
}: ProductDetailsPageProps) {
    const { slug } = await params;

    const products = await getProducts();

    const product = products.find(
        (product) => product.slug === slug
    );

    if (!product) {
        notFound();
    }

    const {
        lowestPrice,
        highestPrice,
        averagePrice,
        lowestMarket,
        highestMarket,
    } = getProductPriceSummary(product.markets);

    return (
        <main className="min-h-screen bg-[#f3faf6] px-4 py-6">
            <div className="mx-auto container">

                {/* Breadcrumb */}
                <ProductBreadcrumb
                    category={product.category}
                    categoryNameBn={product.categoryNameBn}
                    productNameBn={product.nameBn}
                />

                {/* Product Header Card */}
                <ProductHeader product={product} />

                <div className="mt-6 space-y-6 rounded-xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
                    {/* Price Summary */}

                    <PriceSummary
                        lowestPrice={lowestPrice}
                        highestPrice={highestPrice}
                        averagePrice={averagePrice}
                        lowestMarket={lowestMarket}
                        highestMarket={highestMarket}
                        unit={product.unit}
                    />

                    {/* Market-wise Prices */}
                    <MarketPriceTable markets={product.markets} />
                </div>

            </div>
        </main>
    );
}