import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
var lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250
});