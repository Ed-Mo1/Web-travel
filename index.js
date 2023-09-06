const header = document.querySelector("header");

const homeSection = document.querySelector("section.home");

header.innerHTML = `
<div class="container">
<a href="#" class="logo">QWE<span>Ry</span></a>
<ul class="navbar">
  <li><a href="#">home</a></li>
  <li><a href="#">information</a></li>
  <li><a href="#">about us</a></li>
  <li><a href="#">culture</a></li>
  <li><a href="#">contact us</a></li>
</ul>
<div class="h-right">
  <a href="#">follow us</a>
  <a href="#"><i class="bx bxl-instagram"></i></a>
  <a href="#"><i class="bx bxl-twitter"></i></a>
  <a href="#"><i class="bx bxl-facebook-square"></i></a>
  <div class="bx bx-menu" id="menu-icon"></div>
</div>
</div>
`;

homeSection.innerHTML = `
<div class="container">
<div class="home-text">
  <h5>let's</h5>
  <h1>planning your<br/>own travel</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ex
    numquam fugit doloribus vero <br/>quis sunt eius! Cum, ea ratione,
    facere sunt vero repellat odio fugit corrupti dicta, similique
    dolorem!
  </p>
  <a href="#" class="btn">book a trip</a>
</div>
</div>
`;

let feutureImages = [
  "img/nap1.jpg",
  "img/nap2.jpg",
  "img/nap3.jpg",
  "img/nap4.jpg",
];

(function () {
  for (let image of feutureImages) {
    let row = document.createElement("div");
    row.className = "row";
    row.innerHTML = `
    <div class="row-img">
    <img src="${image}" />
    </div>
     <h4>ski tours</h4>
    `;
    document.querySelector(".feuture-content").append(row);
  }
})();
const navIcon = document.getElementById("menu-icon");

window.onscroll = () => {
  header.classList.toggle("sticky", window.scrollY > 60);
};

navIcon.addEventListener("click", () => {
  document.querySelector("header .navbar").classList.toggle("open");
  console.log("dfdf");
});
