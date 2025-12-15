const products = [
    { id: 1, name: "Luxury Smart Watch", price: 8999, desc: "Premium stainless steel smart watch", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30" },
    { id: 2, name: "Wireless Noise-Canceling Headphones", price: 12999, desc: "Studio-grade sound quality", img: "https://images.unsplash.com/photo-1693841114567-0565c3f64edf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8V2lyZWxlc3MlMjBOb2lzZS1DYW5jZWxpbmclMjBIZWFkcGhvbmVzfGVufDB8fDB8fHww" },
    { id: 3, name: "Leather Business Backpack", price: 7499, desc: "Genuine leather executive backpack", img: "https://plus.unsplash.com/premium_photo-1664353833832-b03ab1a002b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fExlYXRoZXIlMjBCdXNpbmVzcyUyMEJhY2twYWNrfGVufDB8fDB8fHww" },
    { id: 4, name: "Premium Laptop Sleeve", price: 3499, desc: "Minimal leather laptop sleeve", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
    { id: 5, name: "Portable Bluetooth Speaker", price: 5999, desc: "Deep bass premium speaker", img: "https://images.unsplash.com/photo-1643901102317-b430b45e4cce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UG9ydGFibGUlMjBCbHVldG9vdGglMjBTcGVha2VyfGVufDB8fDB8fHww" },
    { id: 6, name: "Ergonomic Wireless Mouse", price: 2999, desc: "Precision productivity mouse", img: "https://images.unsplash.com/photo-1739742473235-34a7bd9b8f87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RXJnb25vbWljJTIwV2lyZWxlc3MlMjBNb3VzZXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 7, name: "Mechanical Keyboard Pro", price: 6999, desc: "Aluminum body mechanical keyboard", img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3" },
    { id: 8, name: "Luxury Sunglasses", price: 4999, desc: "Polarized UV protection sunglasses", img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083" },
    { id: 9, name: "Designer Travel Backpack", price: 8999, desc: "Premium travel & office backpack", img: "https://images.unsplash.com/photo-1528921581519-52b9d779df2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGVzaWduZXIlMjBUcmF2ZWwlMjBCYWNrcGFja3xlbnwwfHwwfHx8MA%3D%3D" },
    { id: 10, name: "Professional DSLR Camera", price: 64999, desc: "High-performance photography camera", img: "https://images.unsplash.com/photo-1593449650811-f44191dc0420?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UHJvZmVzc2lvbmFsJTIwRFNMUiUyMENhbWVyYXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 11, name: "Camera Tripod Carbon", price: 8999, desc: "Carbon fiber professional tripod", img: "https://plus.unsplash.com/premium_photo-1721133227473-55856ce60871?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2FtZXJhJTIwVHJpcG9kfGVufDB8fDB8fHww" },
    { id: 12, name: "Flagship Smartphone", price: 74999, desc: "Premium glass & metal smartphone", img: "https://images.unsplash.com/photo-1737717926727-53005fb57e33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEZsYWdzaGlwJTIwcGhvbmVzfGVufDB8fDB8fHww" },
    { id: 13, name: "Premium Tablet Pro", price: 58999, desc: "High-resolution display tablet", img: "https://images.unsplash.com/photo-1631342617268-61f3b16d2e6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UHJlbWl1bSUyMFRhYmxldCUyMFByb3xlbnwwfHwwfHx8MA%3D%3D" },
    { id: 14, name: "Minimal Desk Lamp", price: 3499, desc: "Modern LED desk lighting", img: "https://images.unsplash.com/photo-1579326882518-21eaa7893b02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWluaW1hbCUyMERlc2slMjBMYW1wfGVufDB8fDB8fHww" },
    { id: 15, name: "Ergonomic Executive Chair", price: 24999, desc: "Luxury office seating", img: "https://images.unsplash.com/photo-1688578735427-994ecdea3ea4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEVyZ29ub21pYyUyMEV4ZWN1dGl2ZSUyMENoYWlyfGVufDB8fDB8fHww" },
];

let cart = [];
let modalProduct = {};

const productDiv = document.getElementById("products");

products.forEach(p => {
    productDiv.innerHTML += `
            <div class="bg-white p-4 rounded-xl shadow">
                <img src="${p.img}" onclick="openModal(${p.id})"
                    class="h-48 w-full object-cover rounded-lg cursor-pointer">
                <h3 class="font-semibold mt-3">${p.name}</h3>
                <p class="text-sm text-gray-500">${p.desc}</p>
                <div class="flex justify-between items-center mt-3">
                    <span class="font-bold text-purple-600">₹${p.price}</span>
                    <button onclick="addToCart(${p.id})"
                        class="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-3 py-1 rounded">
                        Add
                    </button>
                </div>
            </div>`;
});

function toggleCart() {
    document.getElementById("cart").classList.toggle("translate-x-full");
}

function addToCart(id) {
    const p = products.find(x => x.id === id);
    const item = cart.find(i => i.id === id);

    if (item) item.qty++;
    else cart.push({ ...p, qty: 1 });

    updateCart();
    document.getElementById("cart").classList.remove("translate-x-full");
}

function updateCart() {
    const cartItems = document.getElementById("cartItems");
    let total = 0, count = 0;
    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = `
                    <p class="text-center text-gray-500 mt-10">
                        🛒 Your cart is empty
                    </p>`;
        document.getElementById("total").innerText = "₹0";
        document.getElementById("cartCount").innerText = "0";
        return;
    }

    cart.forEach(item => {
        total += item.price * item.qty;
        count += item.qty;

        cartItems.innerHTML += `
                <div class="flex gap-3 items-center">
                    <img src="${item.img}" class="h-12 w-12 rounded object-cover">
                    <div class="flex-1">
                        <p class="font-semibold">${item.name}</p>
                        <div class="flex items-center gap-2 mt-1">
                            <button onclick="changeQty(${item.id},-1)" class="px-2 bg-gray-200 rounded">−</button>
                            <span class="font-semibold">${item.qty}</span>
                            <button onclick="changeQty(${item.id},1)" class="px-2 bg-gray-200 rounded">+</button>
                        </div>
                    </div>
                    <p class="font-semibold text-purple-600">₹${item.price * item.qty}</p>
                </div>`;
    });

    document.getElementById("total").innerText = "₹" + total;
    document.getElementById("cartCount").innerText = count;
}

function changeQty(id, change) {
    const index = cart.findIndex(i => i.id === id);
    if (index === -1) return;

    cart[index].qty += change;
    if (cart[index].qty < 1) cart.splice(index, 1);

    updateCart();
}

function openModal(id) {
    modalProduct = products.find(p => p.id === id);
    modalImg.src = modalProduct.img;
    modalName.innerText = modalProduct.name;
    modalDesc.innerText = modalProduct.desc;
    modalPrice.innerText = "₹" + modalProduct.price;
    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

function closeModal() {
    modal.classList.add("hidden");
}

function addModalToCart() {
    addToCart(modalProduct.id);
    closeModal();
}

// INITIAL EMPTY CART DISPLAY
updateCart();