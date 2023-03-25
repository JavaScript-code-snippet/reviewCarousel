const randomNextButton = document.querySelector('#toggleButton')
const ramdomimg = document.querySelector('.randomimg')

const images = ['leview1.png', 'leview2.png', 'leview3.png', 'leview4.png', 'leview5.png']



randomNextButton.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomReviewSrc = `img/${images[randomIndex]}`;
  ramdomimg.style.opacity = 0;
  //"opacity" 속성을 0으로 설정하여 현재 이미지를 투명하게 만든다.
  setTimeout(() => {
    ramdomimg.src = randomReviewSrc;
    ramdomimg.style.opacity = 1;
    //"opacity" 속성을 1로 설정하여 새로운 이미지를 불투명하게 만든다.
  }, 500);
  //500밀리초 후에 다음 동작을 수행
});



