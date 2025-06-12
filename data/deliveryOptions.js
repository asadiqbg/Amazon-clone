 export const deliveryOptions = [{
  id: '1',
  deliveryDays: 7,
  priceCents: 0
},{
  id: '2',
  deliveryDays: 3,
  priceCents: 499
},
{
  id: '3',
  deliveryDays: 1,
  priceCents:999

}];

export function getDeliveryOption(deliveryOptionId){
  let deliveryOption;
  deliveryOptions.forEach((option)=>{
    if(option.id === deliveryOptionId){
      deliveryOption = option;
    }
  });
  return deliveryOption;
};

export function updateDeliveryOption(productId , deliveryOptionId){
let matchingItem;
cart.forEach((cartItem)=> {
  if (productId === cartItem.productId){
    matchingItem = cartItem;
  }
});


matchingItem.deliveryOptionId = deliveryOptionId;

saveToStorage();

}