document.addEventListener('DOMContentLoaded', function () {
    // get DOM
    const quantityInputs = document.querySelectorAll('.product-quantity');
    const removeButtons = document.querySelectorAll('.remove-button');
    const totalValue = document.getElementById('total-value');

    // update total when value change
    function updateTotal() {
        let totalPrice = 0;
        quantityInputs.forEach((input, index) => {
            const price = parseFloat(document.querySelectorAll('.product-prices')[index].textContent.slice(1));
            const quantity = parseInt(input.value);
            totalPrice += price * quantity;
        });
        totalValue.textContent = totalPrice.toFixed(2);
    }

    // event remove
    quantityInputs.forEach(input => {
        input.addEventListener('input', updateTotal);
    });

    // event delete 
    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const cartItem = button.parentElement;
            cartItem.remove();
            updateTotal();
        });
    });

    // update total when first load
    updateTotal();
});
