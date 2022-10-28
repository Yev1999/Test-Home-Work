import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const renderElements = (galleryItems) => {
  let refsGallery = galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
  gallery.insertAdjacentHTML("afterbegin", refsGallery);
};

const onGalleryClick = (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const img = e.target;
  const imgURL = img.dataset.source;
  const instance = basicLightbox.create(`<img src="${imgURL}" />`);
  instance.show();
};

renderElements(galleryItems);
gallery.addEventListener("click", onGalleryClick);
