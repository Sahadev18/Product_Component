function ProductDetails() {
  return (
    <div
      id="content"
      className="w-72 p-6 flex flex-col gap-5 max-[575px]:w-full"
    >
      <h1 className="text-xs text-slate-500 font-medium">P E R F U M E</h1>
      <h2 className="text-4xl leading-9 font-bold font-fraunces">
        Gabrielle Essence Eau De Perfum
      </h2>
      <p className="text-sm leading-6 text-slate-500 font-medium">
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </p>
      <div id="price" className="flex gap-5 items-center">
        <span
          id="final"
          className="text-emerald-700 text-3xl font-bold font-fraunces"
        >
          $149.99
        </span>
        <span
          id="actual"
          className="line-through text-sm text-slate-500 font-medium"
        >
          $169.99
        </span>
      </div>
      <button className="bg-emerald-700 flex items-center justify-center gap-2 rounded-md p-3">
        <img src="src/assets/icon-cart.svg" alt="" />
        <p className="text-white text-sm font-bold">Add to Cart</p>
      </button>
    </div>
  );
}

export default ProductDetails;
