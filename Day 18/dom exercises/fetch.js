const root = document.querySelector(".root");
const getbutton = document.querySelector(".getImage");

function createItem(item) {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = item.thumbnailUrl;

  const title = document.createElement("h3");
  title.innerHTML = item.title;

  card.appendChild(img);
  card.appendChild(title);
  root.appendChild(card);
}

function displayImages(items) {
  items.forEach((item) => {
    console.log(item);
    createItem(item);
  });
}

getbutton.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then((res) => {
      return res.json();
    })
    .then((items) => {
      displayImages(items);
    });
});
