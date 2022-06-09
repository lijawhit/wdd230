//get all images with data-src attribute
let imagesToLoad = document.querySelectorAll('img[data-src]');

//optional parameters being set for the intersectionalObserver
const imgOptions = {
    threshold: 0,
    rootMarging: "0px 0px 0px 0px"
};

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

//first check to see if IntersectionObserver is supported
if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    }, imgOptions);
//loop throught each img an check status and load if necessary
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });

  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }