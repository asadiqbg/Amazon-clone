function Cart(){
  const cart = {
  cartItems: undefined,

  loadFromStorage(){
    this.cartItems = JSON.parse(localStorage.getItem('cart-oop')); 
  if(!this.cartItems){
    this.cartItems = 
      [{
        productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
      },{
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '2'

      }];}
  },

  saveToStorage(){
  localStorage.setItem('cart-oop',JSON.stringify(this.cartItems));
  },

  addToCart(productId){
      let matchingItem;

    this.cartItems.forEach((cartItem)=>{
      if(productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });

    if(matchingItem){
      matchingItem.quantity += 1;
    } else {
       this.cartItems.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: '1'
    });
    }
    this.saveToStorage();
  },

  removeFromCart(productId){
  const newCart = [];

  this.cartItems.forEach((cartItem)=>{
    //the result of this loop is that it will contain all the cart item except the one we want to remove i.e productId so it will check through the cart array and if the items in not equal(!==) to the one we want to remove it will push them to new array
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });

  this.cartItems = newCart;

  this.saveToStorage();
  }
}
return cart;
}

const cart = Cart();
cart.loadFromStorage();

// Example usage:
cart.addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
console.log(cart.cartItems);


