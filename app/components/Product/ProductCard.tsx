import { Product } from "@/app/types/product";
import Link from "next/link";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (

        <Link href={`/product/${product.slug}`}>
            <article className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

                <div className="flex items-start gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#05893E]/10 text-2xl">
                        {product.image}
                    </div>

                    <div>
                        <h3 className="text-base font-semibold text-gray-900">
                            {product.nameBn}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                            প্রতি {product.unit}
                        </p>
                    </div>
                </div>

                <div className="mt-5 flex items-end justify-between">
                    <div>
                        <p className="text-xs text-gray-500">আজকের দাম</p>
                        <p className="mt-1 text-2xl font-bold text-gray-900">
                            {product.today}
                            <span className="ml-1 text-sm font-medium text-gray-500">
                                টাকা
                            </span>
                        </p>
                    </div>

                    <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${product.change.dir === "up"
                            ? "bg-green-100 text-green-700"
                            : product.change.dir === "down"
                                ? "bg-red-100 text-red-700"
                                : "bg-gray-100 text-gray-600"
                            }`}
                    >
                        {product.change.dir === "up"
                            ? "▲"
                            : product.change.dir === "down"
                                ? "▼"
                                : "—"}{" "}
                        {Math.abs(product.change.pct)}%
                    </span>
                </div>
            </article>
        </Link>
    );
}