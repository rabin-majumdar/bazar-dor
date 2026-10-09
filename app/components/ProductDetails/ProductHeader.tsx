
import { Product } from "@/app/types/product";

interface ProductHeaderProps {
    product: Product;
}

export default function ProductHeader({
    product,
}: ProductHeaderProps) {
    return (
        <div className="flex flex-col justify-between gap-5 rounded-xl border border-gray-100 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:p-6">
            <div className="flex min-w-0 items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#f3faf6] text-3xl">
                    {product.image}
                </div>

                <div className="min-w-0">
                    <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
                        {product.nameBn}
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        প্রতি {product.unit} · {product.categoryNameBn}
                    </p>

                    <p className="mt-2 text-xs leading-5 text-gray-600">
                        গতকালের তুলনায় আজ দাম{" "}
                        {product.change.dir === "up"
                            ? "বেড়েছে"
                            : product.change.dir === "down"
                                ? "কমেছে"
                                : "অপরিবর্তিত"}

                        {product.change.dir !== "flat" && (
                            <>
                                {" "}—{" "}
                                {Math.abs(
                                    product.today - product.yesterday
                                ).toLocaleString("bn-BD")}{" "}
                                টাকা
                            </>
                        )}
                    </p>
                </div>
            </div>

            {/* Today's Price */}
            <div className="flex shrink-0 flex-row items-center justify-between gap-4 rounded-xl bg-[#f3faf6] px-5 py-3 sm:flex-col sm:items-center sm:justify-center sm:gap-1 sm:px-7 sm:py-4">
                <div>
                    <p className="text-xs text-gray-500">
                        আজকের দাম
                    </p>

                    <div className="flex items-baseline gap-2">
                        <p className="text-2xl font-bold text-gray-900">
                            {product.today.toLocaleString("bn-BD")}
                        </p>

                        <p className="text-xs text-gray-500">
                            টাকা / {product.unit}
                        </p>
                    </div>
                </div>

                <span
                    className={`text-xs font-bold ${product.change.dir === "up"
                        ? "text-red-500"
                        : product.change.dir === "down"
                            ? "text-green-600"
                            : "text-gray-500"
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
        </div>
    );
}