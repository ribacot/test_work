const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

// add this script
(() => {
  const images = document.querySelectorAll('.gallery-link');
  images.forEach(el => {
    const img = el.querySelector('href');
    el.href = img.src   ;
  });
})();
