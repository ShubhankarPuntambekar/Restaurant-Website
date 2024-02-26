let obj = {
  soup: {
    s1: { id: "veg", name: "Veg clear soup", total: 1 },
    s2: { id: "veg", name: "Cream of corn soup", total: 1 },
    s3: { id: "veg", name: "Tom yum soup", total: 1 },
    s4: { id: "veg", name: "Lemon corriander soup", total: 1 },
    s5: { id: "nveg", name: "Chicken shorba soup", total: 1 },
    s6: { id: "nveg", name: "Cream of chicken soup", total: 1 },
  },

  starters: {
    st1: { id: "veg", name: "Dragon rolls", total: 1 },
    st2: { id: "veg", name: "Paneer pahadi kebab", total: 1 },
    st3: { id: "veg", name: "Nachos", total: 1 },
    st4: { id: "veg", name: "Tandoori flower", total: 1 },
    st5: { id: "nveg", name: "Chicken tandoori", total: 1 },
    st6: { id: "nveg", name: "Lamb chops", total: 1 },
    st7: { id: "nveg", name: "Chicken corriander kebab", total: 1 },
    st8: { id: "nveg", name: "Chicken laziz", total: 1 },
  },

  maincourse: {
    mc1: { id: "veg", name: "Panner Makhawala", total: 1 },
    mc2: { id: "veg", name: "Paneer mumtaz", total: 1 },
    mc3: { id: "veg", name: "Kashmiri Aloo", total: 1 },
    mc4: { id: "veg", name: "Methi matar", total: 1 },
    mc5: { id: "veg", name: "Paneer matar", total: 1 },
    mc6: { id: "veg", name: "Veg Maratha", total: 1 },
    mc7: { id: "veg", name: "Butter Chicken", total: 1 },
    mc8: { id: "veg", name: "Murg musalam", total: 1 },
    mc9: { id: "veg", name: "Murg adraki", total: 1 },
    mc10: { id: "veg", name: "Chicken tikka masala", total: 1 },
  },

  pizza: {
    p1: { id: "veg", name: "Primavera Pizza", total: 1 },
    p2: { id: "veg", name: "Caprese Pizza", total: 1 },
    p3: { id: "nveg", name: "BBQ Chicken Pizza", total: 1 },
    p4: { id: "nveg", name: "Moroccan Chicken Pizza", total: 1 },
  },

  breads: {
    b1: { id: "veg", name: "Butter roti", total: 1 },
    b2: { id: "veg", name: "Butter garlic naan", total: 1 },
    b3: { id: "veg", name: "Extra pav jodi", total: 1 },
    b4: { id: "veg", name: "Butter kulcha paratha", total: 1 },
  },

  rice: {
    r1: { id: "veg", name: "Ghee rice", total: 1 },
    r2: { id: "veg", name: "Jeera ghee rice", total: 1 },
    r3: { id: "veg", name: "Dum biryani veg", total: 1 },
    r4: { id: "nveg", name: "Murga laziz biryani", total: 1 },
    r5: { id: "nveg", name: "Lukhnowi biryani", total: 1 },
  },

  beverage: {
    br1: { id: "veg", name: "Chai", total: 1 },
    br2: { id: "veg", name: "Filter Coffee", total: 1 },
    br3: { id: "veg", name: "Hot chocolate", total: 1 },
    br4: { id: "veg", name: "Cold Coffee", total: 1 },
    br5: { id: "veg", name: "Ice-cream shake", total: 1 },
  },

  desert: {
    d1: { id: "veg", name: "Akrod halva with ice cream", total: 1 },
    d2: { id: "veg", name: "Tiramisu", total: 1 },
    d3: { id: "veg", name: "Chocolate cake", total: 1 },
    d4: { id: "veg", name: "Apple pie with ice cream", total: 1 },
    d5: { id: "veg", name: "Jalebi with rabdi", total: 1 },
  },
};

let itemDetails = document.querySelector(".cart-container");

document.addEventListener("click", (e) => {
  const btn = e.target;

  if (btn.className === "addLabel") {
    btn.setAttribute("aria-display", "false");
    const quant = btn.nextElementSibling;
    quant.setAttribute("aria-display", "true");
    itemDetails.setAttribute("aria-display", "true");
  } else if (btn.className === "reduce") {
    let atriValue = btn.parentNode.getAttribute("id");
    let parent = btn.parentNode.getAttribute("data-type");

    let count = obj[parent][atriValue]["total"];

    if (count <= 1) {
      btn.parentNode.setAttribute("aria-display", "false");
      btn.parentNode.previousElementSibling.setAttribute(
        "aria-display",
        "true"
      );
    } else {
      count--;

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
  }
});
