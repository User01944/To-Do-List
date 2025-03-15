let HamBurgs = document.querySelectorAll(".HamBurgs");
let nav = document.querySelector("nav");
let Side_bar = document.querySelector("#Side-bar");
let createList = document.querySelector(".createList");
let inner_main = document.querySelector("#inner-main");
let nav_id = document.querySelector("#nav");

let open = true;
HamBurgs.forEach((HamBurg) => {
  HamBurg.addEventListener("click", () => {
    if (open) {
      nav.style.left = "10.5vw";
      nav_id.style.left = "10.5vw";
      Side_bar.style.left = "0";
      inner_main.style.left = "15vw";
      inner_main.style.top = "7vw";
      inner_main.style.width = "85vw";
      open = false;
    } else {
      nav.style.left = "0";
      nav_id.style.left = "-4vw";
      Side_bar.style.left = "-15vw";
      inner_main.style.left = "1vw";
      inner_main.style.top = "7vw";
      inner_main.style.width = "95vw";
      open = true;
    }
  });
});
document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key.toLowerCase() === "b") {
    if (open) {
      nav.style.left = "10.5vw";
      Side_bar.style.left = "0";
      inner_main.style.left = "15vw";
      inner_main.style.top = "7vw";
      inner_main.style.width = "85vw";
      open = false;
    } else {
      nav.style.left = "0";
      Side_bar.style.left = "-15vw";
      inner_main.style.left = "1vw";
      inner_main.style.width = "95vw";
      open = true;
    }
  }
});
document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key.toLowerCase() === "c") {
    let new_element = document.createElement("div");
    new_element.classList.add("innerList");
    inner_main.append(new_element);
    createItem(new_element);
  }
});
createList.addEventListener("click", () => {
  let new_element = document.createElement("div");
  new_element.classList.add("innerList");
  inner_main.append(new_element);
  createItem(new_element);
});
let createItem = (new_element) => {
  let createStart = document.createElement("div");
  let topic_sec = document.createElement("div");
  topic_sec.classList.add("topic-div");
  let topic = document.createElement("input");
  topic.style.fontSize = "1vw";
  let deletel = document.createElement("button");
  deletel.classList.add("delete-List");
  deletel.innerHTML = "&times";
  let no_of_list = 0;
  topic.placeholder = "Enter Your Topic Here";
  topic.classList.add("list-topic");
  createStart.classList.add("innerItem");
  createStart.innerText = "+ Add New List";
  topic_sec.append(topic);
  topic_sec.append(deletel);
  new_element.append(topic_sec);
  new_element.append(createStart);
  createStart.addEventListener("click", () => {
    if (no_of_list < 5) {
      let newItem = document.createElement("div");
      let checkbox = document.createElement("input");
      let item = document.createElement("input");
      let deletei = document.createElement("button");
      checkbox.type = "checkbox";
      deletei.innerText = "Delete";
      item.placeholder = "Enter your list";
      item.style.width = "6vw";
      checkbox.style.height = "2vw";
      item.style.height = "2vw";
      item.style.fontSize = "1.2vw";
      deletei.style.fontSize = "1vw";
      deletei.style.height = "2vw";
      deletei.style.width = "3.5vw";
      newItem.classList.add("innerItem-list");
      newItem.append(checkbox);
      newItem.append(item);
      newItem.append(deletei);
      createStart.before(newItem);
      no_of_list++;
      checkbox.addEventListener("click", () => {
        if (checkbox.checked === true) {
          item.style.textDecoration = "line-through";
        } else {
          item.style.textDecoration = "none";
        }
      });
      deletei.addEventListener("click", () => {
        newItem.remove();
        no_of_list--;
      });
    } else {
      alert("No new item can be inserted on the particular List");
    }
  });
  deletel.addEventListener("click", () => {
    new_element.remove();
  });
};
