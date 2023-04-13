import { getShoppingCart } from "../utilities/localStorage";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();
    const storedCart = getShoppingCart();

    const savedCart = [];

    for (const id in storedCart) {
        const addedProduct = products.find(pd => pd.id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

    return savedCart;
}

export default cartProductsLoader;