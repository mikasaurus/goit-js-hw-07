import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const pictures = galleryItems.map((img) =>
    `<a class="gallery__item" href="${img.original}">
  <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
</a>`).join('');

gallery.insertAdjacentHTML('beforeend', pictures);

const lightbox = new SimpleLightbox('.gallery a', {captionsData:'alt', captionDelay:250});

console.log(galleryItems);
