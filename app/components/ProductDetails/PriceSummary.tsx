
interface PriceSummaryProps {
    lowestPrice: number;
    highestPrice: number;
    averagePrice: number;
    lowestMarket: string;
    highestMarket: string;
    unit: string;
}

export default function PriceSummary({
    lowestPrice,
    highestPrice,
    averagePrice,
    lowestMarket,
    highestMarket,
    unit,
}: PriceSummaryProps) {
    return (
        <section>
            <h2 className="mb-3 text-lg font-bold text-gray-900">
                দামের সারসংক্ষেপ
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {/* Lowest Price */}
                <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                    <p className="text-xs font-medium text-gray-500">
                        সর্বনিম্ন দাম
                    </p>

                    <p className="mt-2 text-xl font-bold text-emerald-600">
                        {lowestPrice.toLocaleString("bn-BD")} টাকা
                    </p>


                    <p className="mt-2 text-xs text-gray-500">
                        সবচেয়ে কম দামের বাজার:{" "}
                        <span className="font-semibold text-emerald-600">
                            {lowestMarket}
                        </span>
                    </p>
                </div>

                {/* Highest Price */}
                <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                    <p className="text-xs font-medium text-gray-500">
                        সর্বাধিক দাম
                    </p>

                    <p className="mt-2 text-xl font-bold text-red-500">
                        {highestPrice.toLocaleString("bn-BD")} টাকা
                    </p>


                    <p className="mt-2 text-xs text-gray-500">
                        সবচেয়ে বেশি দামের বাজার: {" "}
                        <span className="font-semibold text-red-500">
                            {highestMarket}
                        </span>
                    </p>
                </div>

                {/* Average Price */}
                <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                    <p className="text-xs font-medium text-gray-500">
                        গড় দাম
                    </p>

                    <p className="mt-2 text-xl font-bold text-emerald-600">
                        {averagePrice.toLocaleString("bn-BD", {
                            maximumFractionDigits: 2,
                        })} টাকা
                    </p>

                    <p className="mt-2 text-xs text-gray-400">
                        প্রতি {unit}-এর হিসাবে
                    </p>
                </div>
            </div>
        </section>
    );
}