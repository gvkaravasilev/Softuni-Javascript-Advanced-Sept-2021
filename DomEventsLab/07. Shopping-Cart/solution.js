function solve() {
   const products = Array.from(document.getElementsByClassName('product'));

   let buttons = Array.from(document.getElementsByClassName('add-product'));
   let textArea = document.querySelector('textarea');
   let namesSet = new Set();

   let totalPrice = 0;

   for(let button of buttons) {
      button.addEventListener('click', onClick);
   }

   let checkoutButton = document.querySelector('.checkout');

   checkoutButton.addEventListener('click', onCheckout);

   function onClick(ev){

      let parentNode = ev.target.parentNode.parentNode;
      let productName = parentNode.querySelector('.product-title').textContent;
      let productPrice = Number(parentNode.querySelector('.product-line-price').textContent);

      textArea.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
      namesSet.add(productName);
      totalPrice += productPrice;
   }

   function onCheckout(ev){
      Array.from(namesSet);
      let checkOutString = `You bought ${new Array(Array.from(namesSet).join(", "))} for ${totalPrice.toFixed(2)}.`;
      textArea.textContent += checkOutString;
      buttons.forEach(b => b.disabled = true);
      checkoutButton.disabled = true;
   }


}