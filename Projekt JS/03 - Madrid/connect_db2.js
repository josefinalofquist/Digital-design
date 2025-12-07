function connectDB2(target, data) {
  target.addEventListener("click", function () {
    console.log(
      `DB2: Storing click on id=${data.id}, name="${data.name}", category="${data.category}"`
    );
  });
}