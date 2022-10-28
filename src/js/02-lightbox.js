import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const renderElements = (galleryItems) => {
  let refsGallery = galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
    })
    .join("");
  gallery.insertAdjacentHTML("afterbegin", refsGallery);
};
renderElements(galleryItems);

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
