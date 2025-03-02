const blogs = document.getElementById("blogs");

blogs.addEventListener("click", () => {
  window.location.href = "blog.html";
});

const backToDeskButton = document.getElementById("back-to-desk");

backToDeskButton.addEventListener("click", function () {
  window.location.href = "index.html";
});