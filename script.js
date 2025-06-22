const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-box input");
const cardWrapper = document.querySelector(".content-main__list");

const cardArray = [
  {
    id: 0,
    title: "Электросамокат",
    price: 10980,
    adress: "Казань, р-н Ново-Савиновский",
    date: "10 июля 11:39",
    img: "./images/card-image-0.jpg",
  },
  {
    id: 1,
    title: "Пвх материал 2й сорт",
    price: 170,
    adress: "Казань, р-н Ново-Савиновский",
    date: "10 июля 11:39",
    img: "./images/card-image-1.jpg",
  },
  {
    id: 2,
    title: "Двухсторонняя ветровка для мальчика",
    price: 2110,
    adress: "Казань, р-н Ново-Савиновский",
    date: "10 июля 11:39",
    img: "./images/card-image-2.jpg",
  },
  {
    id: 3,
    title: "Пеленальная доска на комод",
    price: 200,
    adress: "Казань, р-н Ново-Савиновский",
    date: "10 июля 11:39",
    img: "./images/card-image-3.jpg",
  },
  {
    id: 4,
    title: "Участок 8 сот. (ИЖС)",
    price: 101980,
    adress: "Казань, р-н Ново-Савиновский",
    date: "10 июля 11:39",
    img: "./images/card-image-4.jpg",
  },
  {
    id: 5,
    title: "Ford Fusion, 2007",
    price: 304000,
    adress: "Казань, р-н Ново-Савиновский",
    date: "10 июля 11:39",
    img: "./images/card-image-5.jpg",
  },
];

const render = (cardList) => {
  cardWrapper.innerHTML = "";
  cardList.forEach((item, index) => {
    cardWrapper.insertAdjacentHTML(
      "beforeend",
      `
        <a href="/product.html" class="content-main__list-item">
            <div class="content-main__list-item--image">
            <img src="${item.img}" alt="card-image" />
            </div>

            <h5 class="content-main__list-item--title">${item.title}</h5>

            <strong class="content-main__list-item--price">${item.price} ₽</strong>

            <div class="content-main__list-item--desc-box">
            <span class="content-main__list-item--desc">${item.adress}</span>
            <span class="content-main__list-item--desc">${item.date}</span>
            </div>
        </a>
        `
    );
  });
};

const filteredArray = (array, value) => {
  console.log(array);
  console.log(value);

  if (!value) {
    return array;
  }

  return array.filter((item) => item.title.includes(value));
};

render(cardArray);

searchBtn.addEventListener("click", () => {
  render(filteredArray(cardArray, searchInput.value));
});
