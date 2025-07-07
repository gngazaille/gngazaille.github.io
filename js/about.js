// out of office img switcher
document.addEventListener('DOMContentLoaded', function () {
    const images = [
      'imgs/ofo.png',
      'imgs/ofo1.JPG',
      'imgs/ofo2.jpg',
      'imgs/ofo3.JPEG'
    ];

    const img = document.getElementById('ofo-img');
    let index = 0;

    function changeImage() {
      img.src = images[index];
      index = (index + 1) % images.length;
    }

    changeImage();
    setInterval(changeImage, 3000);
});