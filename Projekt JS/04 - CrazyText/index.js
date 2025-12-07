function crazyText(el, colors, minFont, maxFont, fonts) {

    if (!Number.isInteger(minFont) || !Number.isInteger(maxFont) || minFont < 1 || maxFont < 1) {
        throw Error("minFont och maxFont måste vara positiva heltal");
    }
    if (minFont > maxFont) {
        throw Error("minFont får inte vara större än maxFont");
    }

    const words = el.textContent.split(" ");
    el.textContent = ""; 

    for (let word of words) {
        const span = document.createElement("span");

        span.textContent = word + " ";

        span.style.color = colors[Math.floor(Math.random() * colors.length)];

        span.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];

        const size = Math.floor(Math.random() * (maxFont - minFont + 1)) + minFont;
        span.style.fontSize = size + "px";

        el.appendChild(span);
    }
}

const el = document.querySelector("#text-container");

crazyText(
    el,
    ["yellow", "orange", "lightgreen", "lightblue", "cyan", "pink"],
    20,
    60,
    ["Verdana", "Georgia", "Arial", "Courier New", "Times New Roman"]
);