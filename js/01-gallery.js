import { galleryItems } from './gallery-items.js';


const galleryFn = document.querySelector('.gallery');
const CardItems = creatGalleryCardItems(galleryItems);

galleryFn.insertAdjacentHTML('afterbegin', CardItems);

function creatGalleryCardItems(galleryItemCard) {

    const itemcard = galleryItemCard.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
        />
        </a>
    </div>`
    }).join('');
    return itemcard;
}

galleryFn.addEventListener('click', onGalleryFnClick);


function onGalleryFnClick(event) {
    const galleryItemImg = event.target.classList.contains('gallery__image');
    if (!galleryItemImg) {
        return;
    }
    event.preventDefault();

    const imgUrl = event.target.dataset.source;
    onOpenModal(imgUrl);

}

function onOpenModal(imgUrl) {
    const instance = basicLightbox.create(`
    <img src=${imgUrl}>`);
    instance.show();

    galleryFn.addEventListener('keydown', (event) => {
               if (event.key === 'Escape') {
              instance.close()
     }
    
});
  
}





