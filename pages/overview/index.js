let items = document.querySelectorAll(".item");
items.forEach((item) => {
  item.onclick = () => {
    items.forEach((item) => {
      item.classList.remove("item_active");
    });
    item.classList.add("item_active");
    if(item.innerHTML.includes("Transictions")) {
        window.location.href = "/pages/transictions/"
    };
  };
});
