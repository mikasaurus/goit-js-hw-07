import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

galleryItems.forEach(img => {
  gallery.insertAdjacentHTML(
    'beforeend',
    `<div class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</div>`
  );
});

let lightboxImage;

const showImage = event => {
  if (event.target.nodeName !== "IMG") {
    return;
  } else {
    event.preventDefault();
    lightboxImage = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
    lightboxImage.show();
  }
};

const closeImage = event => {
  if (event.key === "Escape") {
    lightboxImage.close();
  }
};

gallery.addEventListener("click", showImage);
document.addEventListener("keydown", closeImage);