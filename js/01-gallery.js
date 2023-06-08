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

gallery.addEventListener('click', (event) => {
  event.preventDefault();
  const showImage = basicLightbox.create(`<img src="${event.target.dataset.source}">`)
  showImage.show();
  gallery.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      showImage.close()
    }
  })
} )

console.log(galleryItems);