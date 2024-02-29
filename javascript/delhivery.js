let obj = {
  soup: {
    s1: { id: 1, name: "Veg clear soup", total: 0, price: 221 },
    s2: { id: 2, name: "Cream of corn soup", total: 0, price: 231 },
    s3: { id: 3, name: "Tom yum soup", total: 0, price: 251 },
    s4: { id: 4, name: "Lemon corriander soup", total: 0, price: 251 },
    s5: { id: 5, name: "Chicken shorba soup", total: 0, price: 291 },
    s6: { id: 6, name: "Cream of chicken soup", total: 0, price: 311 },
  },

  starters: {
    st1: { id: 7, name: "Dragon rolls", total: 0, price: 221 },
    st2: { id: 8, name: "Paneer pahadi kebab", total: 0, price: 261 },
    st3: { id: 9, name: "Nachos", total: 0, price: 291 },
    st4: { id: 10, name: "Tandoori flower", total: 0, price: 331 },
    st5: { id: 11, name: "Chicken tandoori", total: 0, price: 381 },
    st6: { id: 12, name: "Lamb chops", total: 0, price: 451 },
    st7: { id: 13, name: "Chicken corriander kebab", total: 0, price: 381 },
    st8: { id: 14, name: "Chicken laziz", total: 0, price: 381 },
  },

  maincourse: {
    mc1: { id: 15, name: "Panner Makhawala", total: 0, price: 311 },
    mc2: { id: 16, name: "Paneer mumtaz", total: 0, price: 311 },
    mc3: { id: 17, name: "Kashmiri Aloo", total: 0, price: 321 },
    mc4: { id: 18, name: "Methi matar", total: 0, price: 311 },
    mc5: { id: 19, name: "Paneer matar", total: 0, price: 311 },
    mc6: { id: 20, name: "Veg Maratha", total: 0, price: 311 },
    mc7: { id: 21, name: "Butter Chicken", total: 0, price: 411 },
    mc8: { id: 22, name: "Murg musalam", total: 0, price: 411 },
    mc9: { id: 23, name: "Murg adraki", total: 0, price: 411 },
    mc10: { id: 24, name: "Chicken tikka masala", total: 0, price: 411 },
  },

  pizza: {
    p1: { id: 25, name: "Primavera Pizza", total: 0, price: 411 },
    p2: { id: 26, name: "Caprese Pizza", total: 0, price: 411 },
    p3: { id: 27, name: "BBQ Chicken Pizza", total: 0, price: 511 },
    p4: { id: 28, name: "Moroccan Chicken Pizza", total: 0, price: 521 },
  },

  breads: {
    b1: { id: 29, name: "Butter roti", total: 0, price: 81 },
    b2: { id: 30, name: "Butter garlic naan", total: 0, price: 111 },
    b3: { id: 31, name: "Extra pav jodi", total: 0, price: 61 },
    b4: { id: 32, name: "Butter kulcha paratha", total: 0, price: 111 },
  },

  rice: {
    r1: { id: 33, name: "Ghee rice", total: 0, price: 181 },
    r2: { id: 34, name: "Jeera ghee rice", total: 0, price: 211 },
    r3: { id: 35, name: "Dum biryani veg", total: 0, price: 361 },
    r4: { id: 36, name: "Murga laziz biryani", total: 0, price: 411 },
    r5: { id: 37, name: "Lukhnowi biryani", total: 0, price: 411 },
  },

  beverage: {
    br1: { id: 38, name: "Chai", total: 0, price: 81 },
    br2: { id: 39, name: "Filter Coffee", total: 0, price: 111 },
    br3: { id: 40, name: "Hot chocolate", total: 0, price: 161 },
    br4: { id: 41, name: "Cold Coffee", total: 0, price: 211 },
    br5: { id: 42, name: "Ice-cream shake", total: 0, price: 221 },
  },

  desert: {
    d1: { id: 43, name: "Akrod halva with ice cream", total: 0, price: 281 },
    d2: { id: 44, name: "Tiramisu", total: 0, price: 311 },
    d3: { id: 45, name: "Chocolate cake", total: 0, price: 261 },
    d4: { id: 46, name: "Apple pie with ice cream", total: 0, price: 291 },
    d5: { id: 45, name: "Jalebi with rabdi", total: 0, price: 311 },
  },
};

let viewBtn = document.querySelector(".view-items");
const itemDetails = document.querySelector(".cart-container");
const viewList = document.querySelector(".toggle-switch");
const cart = document.querySelector(".added-item");
const closeDialog = document.querySelector(".exit");
const itemCont = document.querySelector(".category-item");
const amnt = document.querySelector(".pay");
const placeOrder = document.querySelector(".place-ord");
let itemsArray = [];

document.addEventListener("click", (e) => {
  const btn = e.target;

  if (btn.className === "addLabel") {
    btn.setAttribute("aria-display", "false");
    const quant = btn.nextElementSibling;
    quant.setAttribute("aria-display", "true");
  } else if (btn.className === "reduce") {
    let atriValue = btn.parentNode.getAttribute("id");
    let parent = btn.parentNode.getAttribute("data-type");

    let count = obj[parent][atriValue]["total"];

    if (count < 1) {
      btn.parentNode.setAttribute("aria-display", "false");
      btn.parentNode.previousElementSibling.setAttribute(
        "aria-display",
        "true"
      );
    } else {
      count--;

      obj[parent][atriValue]["total"] = count;
      btn.nextElementSibling.innerText = count;
      inCart(parent, atriValue, count);
    }
  } else if (btn.className === "increase") {
    let atriValue = btn.parentNode.getAttribute("id");
    let parent = btn.parentNode.getAttribute("data-type");

    let count = obj[parent][atriValue]["total"];
    count++;
    obj[parent][atriValue]["total"] = count;
    btn.previousElementSibling.innerText = count;
    if (obj[parent][atriValue]["total"] > 0) {
      inCart(parent, atriValue, count);
    }
  }
});

function inCart(parent, atri, count) {
  let sub = 0;
  if (itemsArray.includes(obj[parent][atri])) {
    obj[parent][atri]["total"] = count;
  } else {
    itemsArray.push(obj[parent][atri]);
  }
  itemsArray.forEach((item) => {
    sub += item.total * item.price;
  });
  amnt.innerHTML = "";
  amnt.innerHTML += `₹${sub}`;
}

function viewCart() {
  cart.innerHTML = "";
  itemsArray.forEach((item) => {
    if (item.total !== 0) {
      cart.innerHTML += `
      <div class="cAdd">
        <div class="inCart cart-item-text">${item.name}</div>
        <div class="inCart cart-total">${item.total}</div>
        <div class="inCart tol-price">₹${item.total * item.price}</div>
      </div>    
    `;
    }
  });
}

document.addEventListener("click", (e) => {
  let ele = e.target;
  if (ele.className === "toggle-switch toggle-title") {
    itemDetails.showModal();
    viewCart();
  } else if (ele.className === "exit") {
    itemDetails.close();
  }
});

document.addEventListener("click", (e) => {
  let ele = e.target;
  if (ele.className === "place-ord") {
    if (amnt.innerHTML !== "₹0") {
      alert("Order Placed Successfully");
      itemDetails.close();
      location.reload();
    } else {
      alert("Cart is empty!");
      itemDetails.close();
    }
  }
});
