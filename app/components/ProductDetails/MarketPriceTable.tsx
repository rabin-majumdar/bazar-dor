
import { Product } from "@/app/types/product";

interface MarketPriceTableProps {
    markets: Product["markets"];
}

export default function MarketPriceTable({
    markets,
}: MarketPriceTableProps) {
    return (
        <section>
            <h2 className="mb-3 text-lg font-bold text-gray-900">
                বাজারভিত্তিক আজকের দাম
            </h2>

            <div className="overflow-hidden rounded-xl border border-gray-100">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-162.5 text-sm">
                        <thead className="bg-gray-50 text-gray-600">
                            <tr>
                                <th className="px-5 py-3 text-left font-medium">
                                    বাজার
                                </th>
                                <th className="px-5 py-3 text-left font-medium">
                                    বিভাগ
                                </th>
                                <th className="px-5 py-3 text-right font-medium">
                                    সর্বনিম্ন
                                </th>
                                <th className="px-5 py-3 text-right font-medium">
                                    সর্বাধিক
                                </th>
                                <th className="px-5 py-3 text-right font-medium">
                                    গড়
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-100">
                            {markets.length > 0 ? (
                                markets.map((market, index) => (
                                    <tr
                                        key={`${market.market}-${index}`}
                                        className="transition-colors hover:bg-gray-50"
                                    >
                                        <td className="px-5 py-4 font-medium text-gray-900">
                                            {market.market}
                                        </td>

                                        <td className="px-5 py-4 text-gray-600">
                                            {market.division}
                                        </td>

                                        <td className="px-5 py-4 text-right text-emerald-600">
                                            {market.min.toLocaleString("bn-BD")} টাকা
                                        </td>

                                        <td className="px-5 py-4 text-right text-red-500">
                                            {market.max.toLocaleString("bn-BD")} টাকা
                                        </td>

                                        <td className="px-5 py-4 text-right text-gray-700">
                                            {((market.min + market.max) / 2).toLocaleString(
                                                "bn-BD",
                                                {
                                                    maximumFractionDigits: 2,
                                                }
                                            )} টাকা
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={5}
                                        className="px-5 py-8 text-center text-sm text-gray-500"
                                    >
                                        এই পণ্যের বাজারভিত্তিক দাম পাওয়া যায়নি।
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}