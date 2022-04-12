// Get localStorage data
const getData = (key) => {
    let cart = {};
    const storedCart = localStorage.getItem(key);
    if(storedCart) {
        cart = JSON.parse(storedCart);
    } else {
        cart = {}
    }
    return cart;
}

// use local storage to manage cart data
const addToDb = (id) => {
    let cart = getData('cart');

    // handle quantity to local storage cart
    const quantity = cart[id];
    if(quantity) {
        cart[id] = cart[id] + 1;
    } else {
        cart[id] = 1;
    }
    const storeCart = JSON.stringify(cart);
    localStorage.setItem('cart', storeCart);
}



const removeFromDb = id =>{
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () =>{
    // localStorage.removeItem('cart');
    const cartString = localStorage.getItem('cart');
    let cart = JSON.parse(cartString);
    if(cart) {
        cart = {};
        const newCart = JSON.stringify(cart);
        localStorage.setItem('cart', newCart);
    }
}

export {
    addToDb, 
    removeFromDb,
    deleteShoppingCart,
    getData,
}