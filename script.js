let HamBurgs = document.querySelectorAll(".HamBurgs");
let nav = document.querySelector("nav");
let Side_bar = document.querySelector("#Side-bar");
let createList = document.querySelector(".createList");
let inner_main = document.querySelector("#inner-main");
let nav_id = document.querySelector("#nav");
let filter_btn = document.querySelector("#filter-btn");
let filter_open = false;

// Create filter buttons
let list = document.createElement("div");
let l1 = document.createElement("h5");
let l2 = document.createElement("h5");
let l3 = document.createElement("h5");

list.classList.add("listStyle", "hide");
l1.innerText = "All";
l2.innerText = "Active";
l3.innerText = "Completed";
l1.classList.add("listHover");
l2.classList.add("listHover");
l3.classList.add("listHover");

filter_btn.after(list);
list.append(l1, l2, l3);

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
  let topic = document.createElement("input");
  let deletel = document.createElement("button");
  let no_of_list = 0;
  let items = [];

  topic_sec.classList.add("topic-div");
  topic.style.fontSize = "1vw";
  deletel.classList.add("delete-List");
  deletel.innerHTML = "&times";
  topic.placeholder = "Enter Your Topic Here";
  topic.classList.add("list-topic");
  createStart.classList.add("innerItem");
  createStart.innerText = "+ Add New List";

  topic_sec.append(topic, deletel);
  new_element.append(topic_sec, createStart);

  createStart.addEventListener("click", () => {
    if (no_of_list < 5) {
      let newItem = document.createElement("div");
      let checkbox = document.createElement("input");
      let item = document.createElement("input");
      let deletei = document.createElement("button");
      item.style.width = "7vw";

      checkbox.type = "checkbox";
      deletei.innerText = "Delete";
      item.placeholder = "Enter your list";
      newItem.classList.add("innerItem-list");
      checkbox.classList.add("list-checkbox");

      newItem.append(checkbox, item, deletei);
      createStart.before(newItem);
      no_of_list++;
      items.push(newItem);

      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          item.style.textDecoration = "line-through";
          newItem.classList.add("completed");
        } else {
          item.style.textDecoration = "none";
          newItem.classList.remove("completed");
        }
      });

      deletei.addEventListener("click", () => {
        newItem.remove();
        items = items.filter((i) => i !== newItem);
        no_of_list--;
      });
    } else {
      alert("No new item can be inserted on the particular List");
    }
  });

  deletel.addEventListener("click", () => {
    new_element.remove();
  });

  // **Filter logic**
  l1.addEventListener("click", () => {
    document.querySelectorAll(".innerItem-list").forEach((el) => {
      el.style.display = "flex"; // Ensure all list items are shown
    });
  });

  l2.addEventListener("click", () => {
    document.querySelectorAll(".innerItem-list").forEach((el) => {
      el.style.display = el.querySelector(".list-checkbox").checked
        ? "none"
        : "flex";
    });
  });

  l3.addEventListener("click", () => {
    document.querySelectorAll(".innerItem-list").forEach((el) => {
      el.style.display = el.querySelector(".list-checkbox").checked
        ? "flex"
        : "none";
    });
  });

  filter_btn.addEventListener("click", () => {
    list.classList.toggle("hide");
    filter_open = !filter_open;
  });
};
