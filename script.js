function getComp() {
  const comp = Math.random();


  if (comp < 0.34) return 'gajah';

  if (comp >= 0.34 && comp < 0.67) return 'orang';

  return 'semut';
}

function getHasil(comp, player) {

  if (player == comp) return 'seri';
  if (player == 'gajah') return (comp == 'orang') ? 'Menang' : 'Kalah';
  if (player == 'orang') return (comp == 'semut') ? 'Menang' : 'Kalah';
  if (player == 'semut') return (comp == 'orang') ? 'Kalah' : 'Menang';

}

function putar() {
  const imgComp = document.querySelector('.img-computer');
  const gambar = ['gajah', 'semut', 'orang'];
  let i = 0;
  const waktuMulai = new Date().getTime();

  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComp.setAttribute('src', 'img/' + gambar[i++] + '.png');

    if (i == gambar.length) i = 0;


  }, 100)

}






const pilihan = document.querySelectorAll('li img');

pilihan.forEach(function (e) {
  e.addEventListener('click', function () {
    const pilComp = getComp();

    const pilPlayer = e.className;
    const hasil = getHasil(pilComp, pilPlayer);

    putar();

    setTimeout(() => {
      const imgComp = document.querySelector('.img-computer');
      imgComp.setAttribute('src', 'img/' + pilComp + '.png');

      const info = document.querySelector('.info');
      info.innerHTML = hasil;


    }, 1000);
  });



});








// const pGajah = document.querySelector('.gajah');
// const pOrang = document.querySelector('.orang');
// const pSemut = document.querySelector('.semut');





// pGajah.addEventListener('click', function () {
//   const pilComp = getComp();

//   const pilPlayer = pGajah.className;
//   const hasil = getHasil(pilComp, pilPlayer);

//   const imgComp = document.querySelector('.img-computer');
//   imgComp.setAttribute('src', 'img/' + pilComp + '.png');

//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;
// });

// pOrang.addEventListener('click', function () {
//   const pilComp = getComp();

//   const pilPlayer = pOrang.className;
//   const hasil = getHasil(pilComp, pilPlayer);

//   const imgComp = document.querySelector('.img-computer');
//   imgComp.setAttribute('src', 'img/' + pilComp + '.png');

//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;
// });

// pSemut.addEventListener('click', function () {
//   const pilComp = getComp();

//   const pilPlayer = pSemut.className;
//   const hasil = getHasil(pilComp, pilPlayer);

//   const imgComp = document.querySelector('.img-computer');
//   imgComp.setAttribute('src', 'img/' + pilComp + '.png');

//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;
// });

