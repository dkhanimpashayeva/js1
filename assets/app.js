////////////////////////////////////////
//ctagories
let ul = document.querySelector("#catagories-list");
fetch("https://fakestoreapi.com/products/categories")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      let li = document.createElement("li");
      li.innerText = `${element}`;
      ul.appendChild(li);
    });
  });
//////////products
var count = 0;

let count_num = document.querySelector(".count_num");
let countUp = document.querySelector(".count-up-icon");
let countDown = document.querySelector(".count-down-icon");
countUp.addEventListener("cilck", () => {
  count++;
  count_num.innerHTML = count;
});
countDown.addEventListener("cilck", () => {
  count--;
  count_num.innerHTML = count;
});

/////////////////////////////
//GO TO TOP
let goTo = document.querySelector(".go-to_top");
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY >= 300) {
    goTo.style.display = "block";
  } else {
    goTo.style.display = "none";
  }
});
goTo.addEventListener("click", () => {
  window.scrollTo({
    top: 50,
    left: 0,
    behavior: "smooth",
  });
});
/////////////////////
document.querySelector(".search-modal").addEventListener("click", () => {
  document.querySelector(".modal").style.display = "block";
});

///////////////////////
