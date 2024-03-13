import ProductImage from "./components/ProductImage";
import ProductDetails from "./components/ProductDetails";

function Product() {
  return (
    <div
      id="main"
      className="bg-white shadow-xl flex rounded-xl font-montserrat max-[575px]:flex-col max-[575px]:w-full"
    >
      <ProductImage />
      <ProductDetails />
    </div>
  );
}

export default Product;
