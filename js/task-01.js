"use strict";
let ref = {
    listEl: document.querySelector("#categories"),
    itemEl: document.querySelectorAll(".item"),
    };

console.log(`Number of categories: ${ref.itemEl.length}
 `);

ref.itemEl.forEach(e => {
    console.log(`Category: ${e.firstElementChild.textContent} `);
    console.log(`Elements: ${e.lastElementChild.childElementCount}
     `);
});

