export let cart = [{
  productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2,
  deliveryOptionId: '1'
},{
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1,
  deliveryOptionId: '2'

}];

export function addToCart(productId){
      let matchingItem;

    cart.forEach((cartItem)=>{
      if(productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });

    if(matchingItem){
      matchingItem.quantity += 1;
    } else {
       cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: '1'
    });
    }
}

export function removeFromCart(productId){
  const newCart = [];

  cart.forEach((cartItem)=>{
    //the result of this loop is that it will contain all the cart item except the one we want to remove i.e productId so it will check through the cart array and if the items in not equal(!==) to the one we want to remove it will push them to new array
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });

  cart = newCart;
}