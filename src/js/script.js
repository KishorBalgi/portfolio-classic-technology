// Glass Card tile animation:
if (window.innerWidth > 768) {
  VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
    max: 15,
    speed: 1000,
    transition: true,
    glare: true,
    reverse: true,
  });

  VanillaTilt.init(document.querySelectorAll(".blog-card"), {
    max: 10,
    speed: 1000,
    transition: true,
    glare: true,
    reverse: true,
  });
}
