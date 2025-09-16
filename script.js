// Populate product select in form dynamically
const select = document.querySelector("select[name='product']");
for(let i=1; i<=20; i++){
  const option = document.createElement("option");
  option.value = "Flavour " + i;
  option.textContent = "Flavour " + i;
  select.appendChild(option);
}

// WhatsApp Order Integration
document.getElementById("orderForm").addEventListener("submit", function(e){
  e.preventDefault();
  const name = this.name.value;
  const phone = this.phone.value;
  const product = this.product.value;

  const url = `https://wa.me/923000242426?text=📦*New Order*%0A👤 Name: ${name}%0A📞 Phone: ${phone}%0A🛒 Product: ${product}`;
  window.open(url,"_blank");
});

