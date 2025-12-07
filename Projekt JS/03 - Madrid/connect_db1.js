function connectDB1 (target) {
  target.addEventListener("click", function() {

    let name = target.querySelector("h3").textContent;
    console.log(`DB1 - connection. Clicked on: ${name}`);
  });
}