const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listOfImagesEl = document.querySelector(".gallery");

const makePicturesGaleryOptions = images.map((e) => `<li><img src=${e.url} alt=${e.alt} width=1200px ></img></li>`).join("");
console.log(makePicturesGaleryOptions);

listOfImagesEl.insertAdjacentHTML('beforeend',
  makePicturesGaleryOptions);

listOfImagesEl.style.display = "flex";
listOfImagesEl.style.flexWrap = 'wrap';
listOfImagesEl.style.justifyContent = 'center';
listOfImagesEl.style.listStyle = "none";

