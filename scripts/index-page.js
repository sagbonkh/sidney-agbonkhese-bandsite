let comments_sect = document.querySelector(".comments");
let title = document.createElement("h2");
title.classList.add("comments-title");
title.textContent = `Join The Conversation`;
comments_sect.appendChild(title);

let form = document.createElement("form");
form.classList.add("comments-form");
comments_sect.appendChild(form);

let avatar = document.createElement("img");
avatar.src = "../assets/images/Mohan-muruge.jpg";
avatar.alt = "avatar";
avatar.classList.add("comments-avatar");
form.appendChild(avatar);

let input_area = document.createElement("section");
input_area.classList.add("comments-input");
form.appendChild(input_area);

let name_label = document.createElement("label");
name_label.classList.add("comments-text");
name_label.htmlFor = "name";
name_label.textContent = `NAME`;
input_area.appendChild(name_label);

let name_input = document.createElement("input");
name_input.setAttribute("type","text");
name_input.placeholder= "Enter your name";
input_area.appendChild(name_input);