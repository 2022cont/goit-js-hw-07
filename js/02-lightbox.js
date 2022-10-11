import { galleryItems } from './gallery-items.js';

const galleryFn = document.querySelector('.gallery');
const CardItems = creatGalleryCardItems(galleryItems);


galleryFn.insertAdjacentHTML('afterbegin', CardItems);

function creatGalleryCardItems(galleryItemCard) {

    const itemcard = galleryItemCard.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>`
    }).join('');
    return itemcard;
}



galleryFn.addEventListener('click', (event) => {
    const galleryItemImg = event.target.classList.contains('gallery__image');
    if (!galleryItemImg) {
        return;
    }
    event.preventDefault();
    const imgAlt = event.target.dataset.alt;
    const itemImg = galleryFn.children;
    console.log(imgAlt);

    new SimpleLightbox(itemImg);
    SimpleLightbox.open(itemImg);
})



