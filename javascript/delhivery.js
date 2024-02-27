let obj = {
  soup: {
    s1: { id: 1, name: "Veg clear soup", total: 0 },
    s2: { id: 2, name: "Cream of corn soup", total: 0 },
    s3: { id: 3, name: "Tom yum soup", total: 0 },
    s4: { id: 4, name: "Lemon corriander soup", total: 0 },
    s5: { id: 5, name: "Chicken shorba soup", total: 0 },
    s6: { id: 6, name: "Cream of chicken soup", total: 0 },
  },

  starters: {
    st1: { id: 7, name: "Dragon rolls", total: 0 },
    st2: { id: 8, name: "Paneer pahadi kebab", total: 0 },
    st3: { id: 9, name: "Nachos", total: 0 },
    st4: { id: 10, name: "Tandoori flower", total: 0 },
    st5: { id: 11, name: "Chicken tandoori", total: 0 },
    st6: { id: 12, name: "Lamb chops", total: 0 },
    st7: { id: 13, name: "Chicken corriander kebab", total: 0 },
    st8: { id: 14, name: "Chicken laziz", total: 0 },
  },

  maincourse: {
    mc1: { id: 15, name: "Panner Makhawala", total: 0 },
    mc2: { id: 16, name: "Paneer mumtaz", total: 0 },
    mc3: { id: 17, name: "Kashmiri Aloo", total: 0 },
    mc4: { id: 18, name: "Methi matar", total: 0 },
    mc5: { id: 19, name: "Paneer matar", total: 0 },
    mc6: { id: 20, name: "Veg Maratha", total: 0 },
    mc7: { id: 21, name: "Butter Chicken", total: 0 },
    mc8: { id: 22, name: "Murg musalam", total: 0 },
    mc9: { id: 23, name: "Murg adraki", total: 0 },
    mc10: { id: 24, name: "Chicken tikka masala", total: 0 },
  },

  pizza: {
    p1: { id: 25, name: "Primavera Pizza", total: 0 },
    p2: { id: 26, name: "Caprese Pizza", total: 0 },
    p3: { id: 27, name: "BBQ Chicken Pizza", total: 0 },
    p4: { id: 28, name: "Moroccan Chicken Pizza", total: 0 },
  },

  breads: {
    b1: { id: 29, name: "Butter roti", total: 0 },
    b2: { id: 30, name: "Butter garlic naan", total: 0 },
    b3: { id: 31, name: "Extra pav jodi", total: 0 },
    b4: { id: 32, name: "Butter kulcha paratha", total: 0 },
  },

  rice: {
    r1: { id: 33, name: "Ghee rice", total: 0 },
    r2: { id: 34, name: "Jeera ghee rice", total: 0 },
    r3: { id: 35, name: "Dum biryani veg", total: 0 },
    r4: { id: 36, name: "Murga laziz biryani", total: 0 },
    r5: { id: 37, name: "Lukhnowi biryani", total: 0 },
  },

  beverage: {
    br1: { id: 38, name: "Chai", total: 0 },
    br2: { id: 39, name: "Filter Coffee", total: 0 },
    br3: { id: 40, name: "Hot chocolate", total: 0 },
    br4: { id: 41, name: "Cold Coffee", total: 0 },
    br5: { id: 42, name: "Ice-cream shake", total: 0 },
  },

  desert: {
    d1: { id: 43, name: "Akrod halva with ice cream", total: 0 },
    d2: { id: 44, name: "Tiramisu", total: 0 },
    d3: { id: 45, name: "Chocolate cake", total: 0 },
    d4: { id: 46, name: "Apple pie with ice cream", total: 0 },
    d5: { id: 45, name: "Jalebi with rabdi", total: 0 },
  },
};

let itemDetails = document.querySelector(".cart-container");
let viewBtn = document.querySelector(".view-items");
let cart = document.querySelector(".added-item");
let itemCont = document.querySelector(".category-item");
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
      inCart(parent, atriValue, count);

      obj[parent][atriValue]["total"] = count;
      btn.nextElementSibling.innerText = count;
    }
  } else if (btn.className === "increase") {
    let atriValue = btn.parentNode.getAttribute("id");
    let parent = btn.parentNode.getAttribute("data-type");

    let count = obj[parent][atriValue]["total"];
    count++;
    obj[parent][atriValue]["total"] = count;
    btn.previousElementSibling.innerText = count;
    if (obj[parent][atriValue]["total"] > 0) {
      itemDetails.setAttribute("aria-display", "true");
      inCart(parent, atriValue, count);
    }
  }
});

function inCart(parent, atri, count) {
  let cartItem;
  if (itemsArray.includes(obj[parent][atri])) {
    cartItem = itemsArray.find((item) => item.id === obj[parent][atri]["id"]);
    cartItem["total"] = count;
  } else {
    itemsArray.push(obj[parent][atri]);
  }
  viewCart();
  console.log(itemsArray);
}

function viewCart() {
  cart.setAttribute("aria-display", "true");
  cart.innerHTML = "";
  itemsArray.forEach((item) => {
    cart.innerHTML += `
      <div class="category-item">
            <div class="item-details">
                <span class="item-text">${item.name}</span>
                <br>
                <div class="total">${item.total}</div>
            </div>
        </div>
      </div>
    `;
  });
}
