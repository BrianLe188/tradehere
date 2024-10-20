import { ProductSquare } from "@/components/product";
import { products } from "@/constants/products";

export default function Attractive() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
      {products.map((pro) => (
        <ProductSquare key={pro.id} data={pro} />
      ))}
    </div>
  );
}
