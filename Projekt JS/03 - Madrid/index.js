const list = document.querySelector("#recommendations_list");

function createRecommendation(item) {
    const div = document.createElement("div");
    div.classList.add("recommendation");

    const img = document.createElement("img");
    img.src = "images/" + item.image;
    img.alt = item.name;
    div.appendChild(img);

    const title = document.createElement("h3");
    title.textContent = item.name;
    div.appendChild(title);

    const text = document.createElement("p");
    text.textContent = item.text;
    div.appendChild(text);

    return div;
}
function getRandomThree(arr) {
    let copy = [...arr];                
    let selected = [];

    for (let i = 0; i < 3; i++) {
        let index = Math.floor(Math.random() * copy.length);
        selected.push(copy[index]);
        copy.splice(index, 1); 
    }

    return selected;
}

function displayRecommendations() {
    list.innerHTML = "";  

    const randomThree = getRandomThree(RECOMMENDATIONS);

    randomThree.forEach(item => {
        const block = createRecommendation(item);
        list.appendChild(block);
    });
}

displayRecommendations();