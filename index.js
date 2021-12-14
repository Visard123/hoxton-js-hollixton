const state = {
  store: [],
};

function getProdutsToStore() {
  fetch("   http://localhost:3000/store")
    .then((response) => response.json())
    .then((store) => {
      state.store = store;
      render();
    });
}
getProdutsToStore();

function renderTheHeader() {
  const headerOfPage = document.createElement("header");

  const titleOfPage = document.createElement("h1");
  titleOfPage.textContent = "HOLLIXTON";

  const gendersUlList = document.createElement("ul");
  gendersUlList.setAttribute("class", "genders-list");

  const girlsList = document.createElement("li");
  girlsList.textContent = "Girls";

  const guysList = document.createElement("li");
  guysList.textContent = "Guys";

  const saleList = document.createElement("li");
  saleList.textContent = "Sale";

  const emptyDiv = document.createElement("div");

  const rightElementsOfHeader = document.createElement("div");
  rightElementsOfHeader.setAttribute("class", "right-elements");

  const magnifyingGlass = document.createElement("img");
  magnifyingGlass.setAttribute("class", "magnifying-glass");
  magnifyingGlass.setAttribute("src", "images/foto.svg");
  magnifyingGlass.setAttribute("alt", "maginfyi");

  const signIn = document.createElement("img");
  signIn.setAttribute("class", "signin");
  signIn.setAttribute("src", "images/foto.svg");
  signIn.setAttribute("alt", "maginfyi");

  const bagImage = document.createElement("img");
  bagImage.setAttribute("class", "bag-image");
  bagImage.setAttribute("src", "images/foto.svg");
  bagImage.setAttribute("alt", "maginfyi");

  rightElementsOfHeader.append(magnifyingGlass, signIn, bagImage);

  gendersUlList.append(girlsList, guysList, saleList);
  headerOfPage.append(
    titleOfPage,
    gendersUlList,

    rightElementsOfHeader
  );

  document.body.append(headerOfPage);
}

function renderTheMain() {
  const mainElement = document.createElement("main");
  /*
<main>
    <h2>Home</h2>
    <ul class= products-list>
        <li >
            <img src="" alt="">
            <h3>Product Name </h3>
            <p>Price</p>
        </li>
    </ul>
</main>
*/

  const h2El = document.createElement("h2");
  h2El.textContent = "Home";

  const producstList = document.createElement("ul");
  producstList.setAttribute("class", "products-list");

  for (const product of state.store) {
    const productAttributeList = document.createElement("li");

    const imageOfProduct = document.createElement("img");
    imageOfProduct.setAttribute("src", product.image);
    imageOfProduct.setAttribute("alt", "");

    const productName = document.createElement("h3");
    productName.textContent = product.name;

    const productPrice = document.createElement("p");
    productPrice.textContent = product.price;

    productAttributeList.append(imageOfProduct, productName, productPrice);

    producstList.append(productAttributeList);
  }

  mainElement.append(h2El, producstList);

  document.body.append(mainElement);
}

function renderTheFooter() {
  /*
<footer>
  <h2>HOLLIXTON</h2>
  <div class=national-emblems>
    <img src="" alt="Uk flag" />
    <span>United Kingdom</span>
  </div>
</footer>
*/

  const footerElement = document.createElement("footer");
  const footerh2El = document.createElement("h2");
  footerh2El.textContent = "HOLLIXTON";

  const footerNationalEmblems = document.createElement("div");
  footerNationalEmblems.setAttribute("class", "national-emblems");

  const flagElement = document.createElement("img");
  flagElement.setAttribute("src", "");
  flagElement.setAttribute("alt", "");

  const unitedKingdom = document.createElement("span");
  unitedKingdom.textContent = "United Kingdom";
  footerNationalEmblems.append(flagElement, unitedKingdom);
  footerElement.append(footerh2El, footerNationalEmblems);

  document.body.append(footerElement);
}

function render() {
  document.body.innerHTML = "";
  renderTheHeader();
  renderTheMain();
  renderTheFooter();
}
