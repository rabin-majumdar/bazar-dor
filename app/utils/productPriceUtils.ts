import { Product } from "@/app/types/product";


interface ProductPriceSummary {
    lowestPrice: number;
    highestPrice: number;
    averagePrice: number;
    lowestMarket: string;
    highestMarket: string;
}

export function getProductPriceSummary(
    markets: Product["markets"]
): ProductPriceSummary {
    if (markets.length === 0) {
        return {
            lowestPrice: 0,
            highestPrice: 0,
            averagePrice: 0,
            lowestMarket: "তথ্য পাওয়া যায়নি",
            highestMarket: "তথ্য পাওয়া যায়নি",
        };
    }

    const lowestPrice = Math.min(
        ...markets.map((market) => market.min)
    );

    const highestPrice = Math.max(
        ...markets.map((market) => market.max)
    );

    const averagePrice =
        markets.reduce(
            (total, market) =>
                total + (market.min + market.max) / 2,
            0
        ) / markets.length;

    const lowestMarket = markets.reduce(
        (lowest, market) =>
            market.min < lowest.min ? market : lowest
    ).market;

    const highestMarket = markets.reduce(
        (highest, market) =>
            market.max > highest.max ? market : highest
    ).market;

    return {
        lowestPrice,
        highestPrice,
        averagePrice,
        lowestMarket,
        highestMarket,
    };
}