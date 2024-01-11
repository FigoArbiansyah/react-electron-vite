export const getSavedProducts = () => {
  const savedProducts = localStorage.getItem("saved_products");
  return JSON.parse(savedProducts);
};

export const setSavedProducts = (product, callback) => {
  let savedProducts = getSavedProducts() || [];
  if (!savedProducts?.find((_product) => _product?.id == product?.id)) {
    savedProducts?.push(product);
    callback("Product is saved!");
  } else {
    const filteredProduct = savedProducts?.filter(
      (_product) => _product?.id != product.id
    );
    savedProducts = filteredProduct;
    callback("Product is discarded!");
  }
  localStorage.setItem("saved_products", JSON.stringify(savedProducts));
};
