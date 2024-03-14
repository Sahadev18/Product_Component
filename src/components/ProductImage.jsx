function ProductImage() {
  return (
    <div>
      <img
        src="/image-product-desktop.jpg"
        alt=""
        className="w-72 rounded-l-xl max-[575px]:hidden"
      />
      <img
        src="/image-product-mobile.jpg"
        alt=""
        className="w-72 rounded-t-xl hidden max-[575px]:block max-[575px]:w-full"
      />
    </div>
  );
}

export default ProductImage;
