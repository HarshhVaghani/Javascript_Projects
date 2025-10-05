// Reset the Bill Function

function resetInvoice() {
  document.getElementById("invoicebody").innerHTML = "";
  document.getElementById("subtotal").textContent = "0.00";
  document.getElementById("totalDiscount").textContent = "0.00";
  document.getElementById("tax").textContent = "0.00";
  document.getElementById("grandTotal").textContent = "0.00";

  document.getElementById("itemName").value = "";
  document.getElementById("itemQty").value = "";
  document.getElementById("itemPrice").value = "";
  document.getElementById("itemDiscount").value = "";
}


// Download Invoice Function

function downloadInvoice() {
  const element = document.querySelector(".max-w-5xl"); // selects the full invoice box

  const options = {
    margin: 0.5,
    filename: 'invoice.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  html2pdf().set(options).from(element).save();
}

