import Hero from "./components/Hero/Hero";
import ProductSection from "./components/Product/ProductSection";
import { getProducts } from "./services/productService";
import { getRisingProducts, getFallingProducts } from "./utils/productUtils";

export default async function Home() {
  const products = await getProducts();

  const risingProducts = getRisingProducts(products);
  const fallingProducts = getFallingProducts(products);

  return (
    <main>
      <Hero />

      <ProductSection
        type="rising"
        products={risingProducts}
      />

      <ProductSection
        type="falling"
        products={fallingProducts}
      />

      <div id="সব-পণ্য" className="scroll-mt-32">
        <ProductSection
          type="all"
          products={products}
        />
      </div>
    </main>
  );
};