
let cart = [];
let cartPanel = document.getElementById("cartPanel");

function addToCart(name, price) {
    cart.push({ name, price });
    updateCartUI();

    cartPanel.classList.remove("translate-x-full");
}

function updateCartUI() {
    let cartHTML = "";
    let total = 0;

    cart.forEach(item => {
        cartHTML += `
                    <div class="p-3 bg-gray-100 rounded-lg flex justify-between">
                        <p>${item.name}</p>
                        <p>₹${item.price}</p>
                    </div>
                `;
        total += item.price;
    });

    document.getElementById("cartItems").innerHTML = cartHTML;
    document.getElementById("totalPrice").innerText = total;
}

function closeCart() {
    cartPanel.classList.add("translate-x-full");
}
