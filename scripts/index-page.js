let commentSect = document.querySelector(".comments");
let title = document.createElement("h2");
title.classList.add("comments-title");
title.textContent = `Join The Conversation`;
commentSect.appendChild(title);

let form = document.createElement("form");
form.classList.add("comments-form");
commentSect.appendChild(form);

let avatar = document.createElement("img");
avatar.src = "../assets/images/Mohan-muruge.jpg";
avatar.alt = "avatar";
avatar.classList.add("comments-avatar");
form.appendChild(avatar);

let inputArea = document.createElement("section");
inputArea.classList.add("comments-input");
form.appendChild(inputArea);

let nameLabel = document.createElement("label");
nameLabel.classList.add("comments-text");
nameLabel.htmlFor = "name";
nameLabel.textContent = `NAME`;
inputArea.appendChild(nameLabel);

let nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.placeholder = "Enter your name";
nameInput.name = "name";
inputArea.appendChild(nameInput);

let commentLabel = document.createElement("label");
commentLabel.classList.add("comments-text");
commentLabel.htmlFor = "comment";
commentLabel.textContent = `COMMENT`;
inputArea.appendChild(commentLabel);

let textArea = document.createElement("textarea");
textArea.setAttribute("type", "text");
textArea.placeholder = "Add a new comment";
textArea.name = "comment";
inputArea.appendChild(textArea);

let submitBtn = document.createElement("button");
submitBtn.textContent = "COMMENT";
submitBtn.setAttribute("type", "submit");
inputArea.appendChild(submitBtn);

const txtA = `This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic workdeserves reverence. Let us appreciate this for what it is and what it contains.`;
const txtB = `I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.`;
const txtC = `I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.`;
let starterObjectA = {
    name:'Victor Pinto',
    comment:txtA,
    date:'11/02/2023'
};
let starterObjectB = {
    name:'Christina Cabrera',
    comment:txtB,
    date:'10/28/2023'
};
let starterObjectC = {
    name:'Isaac Tadesse',
    comment:txtC,
    date:'10/20/2023'
};
let commentsArray = [starterObjectA, starterObjectB, starterObjectC];
