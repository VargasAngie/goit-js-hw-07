import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");

const instance = basicLightbox.create(
  `
    <img src="" width="800" height="600">
`
);
 const imagen = instance.element().querySelector("img");

const handleClick = (event) => {
  event.preventDefault();
  const url = event.target.dataset.source;
 
  imagen.src = url;
    instance.show();
    
    document.addEventListener("keydown", close);
};

gallery.addEventListener("click", handleClick);

function close(evt) {
    if (evt.key === "Escape" && instance.visible) {
        instance.close();
    }
}
