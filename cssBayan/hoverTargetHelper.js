let main = document.querySelector('main');


window.addEventListener("mouseover", event => {
    if (event.target === main) return
    console.log("Mouse in");
    console.log(event.target);

  });

window.addEventListener("mouseout", event => {
    if (event.target === main) return
    console.log("Mouse out");
    console.log(event.target);
  });