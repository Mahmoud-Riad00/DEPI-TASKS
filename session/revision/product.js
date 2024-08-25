let container = document.querySelector(".container");

async function getData() {
  let response = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );
  response.map((product) => {
    container.innerHTML+= `
            <div class="card">
            <img src='${product.image}'/>
            <p>${product.title}<p>

            <p>${product.price}<p>
            </div>
            
            `;
  });
}
getData();
