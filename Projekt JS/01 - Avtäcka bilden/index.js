let image = document.getElementById("image");

for (let i = 0; i < 100; i++) {
  const tile = document.createElement('div');

  tile.addEventListener('mouseover', function () {
    tile.style.backgroundColor = 'transparent';
  });

  image.appendChild(tile);
}
