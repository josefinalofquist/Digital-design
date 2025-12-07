const DM_ALL = document.querySelector("#recommendations-all ul");
const DM_FAVS = document.querySelector("#recommendations-favs ul");
const DM_N_FAVS = document.querySelector("#n-favs span");
const DM_RESET = document.getElementById("reset-favs");

function toggleFav(dmRecom) {

  let name = dmRecom.querySelector("h3").textContent;

  let recom = RECOMMENDATIONS.find(r => r.name === name);

  recom.fav = !recom.fav;

  if (recom.fav) {
    DM_FAVS.appendChild(dmRecom);
    DM_N_FAVS.textContent++;
  } else {
    DM_ALL.appendChild(dmRecom);
    DM_N_FAVS.textContent--;
  }
}

DM_RESET.addEventListener("click", () => {
  let allFavs = DM_FAVS.querySelectorAll(".recommendation");
  for (let fav of allFavs) {
    toggleFav(fav);
  }
});

for (let recom of RECOMMENDATIONS) {

  let div = document.createElement("div");
  div.classList.add("recommendation");

  div.innerHTML = `
    <button><img src="assets/heart.png"></button>
    <h3>${recom.name}</h3>
    <img class="place-image" src="images/${recom.image}">
    <p>${recom.text}</p>
  `;

  div.querySelector("button").addEventListener("click", () => {
    toggleFav(div);
  });

  if (recom.fav) {
    DM_FAVS.appendChild(div);
    DM_N_FAVS.textContent++;
  } else {
    DM_ALL.appendChild(div);
  }
}