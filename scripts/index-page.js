import { BandSiteApi } from "./band-site-api.js";

const apiKey = "77b54739-3df2-4aca-9c51-d7e6ea28be3f";
const bandSiteApi = new BandSiteApi(apiKey);

const commentSect = document.querySelector(".comments");
const title = document.createElement("h2");
title.classList.add("comments-title");
title.textContent = `Join The Conversation`;
commentSect.appendChild(title);

const form = document.createElement("form");
form.classList.add("comments-form");
commentSect.appendChild(form);

const avatar = document.createElement("img");
avatar.src = "../assets/images/Mohan-muruge.jpg";
avatar.alt = "avatar";
avatar.classList.add("comments-avatar");
form.appendChild(avatar);

const inputArea = document.createElement("section");
inputArea.classList.add("comments-input");
form.appendChild(inputArea);

const nameLabel = document.createElement("label");
nameLabel.classList.add("comments-text");
nameLabel.htmlFor = "name";
nameLabel.textContent = `NAME`;
inputArea.appendChild(nameLabel);

const nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("class", "comments-name");
nameInput.placeholder = "Enter your name";
nameInput.name = "name";
inputArea.appendChild(nameInput);

const commentLabel = document.createElement("label");
commentLabel.classList.add("comments-text");
commentLabel.htmlFor = "comment";
commentLabel.textContent = `COMMENT`;
inputArea.appendChild(commentLabel);

const textArea = document.createElement("textarea");
textArea.setAttribute("type", "text");
textArea.setAttribute("class", "comments-content");
textArea.placeholder = "Add a new comment";
textArea.name = "comment";
inputArea.appendChild(textArea);

const submitBtn = document.createElement("button");
submitBtn.textContent = "COMMENT";
submitBtn.setAttribute("type", "submit");
submitBtn.classList.add("comments-btn");
inputArea.appendChild(submitBtn);

const populateComments = (element) => {
  const user = document.createElement("div");
  user.classList.add("user-comments-user");

  const userAvatar = document.createElement("div");
  userAvatar.classList.add("user-comments-avatar");

  const userTextArea = document.createElement("div");
  userTextArea.classList.add("user-comments-text");

  const userName = document.createElement("h2");
  userName.classList.add("user-comments-name");

  const userDate = document.createElement("p");
  userDate.classList.add("user-comments-date");

  const userComment = document.createElement("p");
  userComment.classList.add("user-comments-comment");

  userName.textContent = element.name;
  userDate.textContent = element.timestamp;
  userComment.textContent = element.comment;

  userTextArea.appendChild(userName);
  userTextArea.appendChild(userDate);
  userTextArea.appendChild(userComment);
  user.appendChild(userAvatar);
  user.appendChild(userTextArea);

  userComments.appendChild(user);
};

const timeSinceComment = (timestamp) => {
  const date = new Date();
  const commentTime = new Date(timestamp);
  const timeDifference = date.getTime() - commentTime.getTime();

  const secs = Math.floor(timeDifference / 1000);
  if (secs < 60) {
    return `${secs}s ago`;
  } else if (secs < 3600) {
    const mins = Math.floor(secs / 60);
    return `${mins} mins ago`;
  } else if (secs < 86400) {
    const hrs = Math.floor(secs / 3600);
    return `${hrs} hours ago`;
  } else {
    const month = commentTime.getMonth() + 1;
    const day = commentTime.getDate();
    const year = commentTime.getFullYear();
    return `${month}/${day}/${year}`;
  }
};

const txtA = `This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic workdeserves reverence. const us appreciate this for what it is and what it contains.`;
const txtB = `I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.`;
const txtC = `I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.`;
const starterObjectA = {
  name: "Victor Pinto",
  comment: txtA,
  timestamp: "11/02/2023",
};
const starterObjectB = {
  name: "Christina Cabrera",
  comment: txtB,
  timestamp: "10/28/2023",
};
const starterObjectC = {
  name: "Isaac Tadesse",
  comment: txtC,
  timestamp: "10/20/2023",
};
let commentsArray = [starterObjectA, starterObjectB, starterObjectC];

const userComments = document.querySelector(".user-comments");

commentsArray.forEach((element) => {
  populateComments(element);
});

async function fetchUserComments() {
  try {
    const response = await bandSiteApi.getComments();
    return response;
  } catch (error) {
    console.error(`Error fetching user data ${error}`);
  }
}

async function postUserComment(comment) {
  try {
    await bandSiteApi.postComment(comment);
    return;
  } catch (error) {
    console.error(`Error posting user data ${error}`);
  }
}

async function handleSubmit(event) {
  event.preventDefault();
  const userName = nameInput.value;
  const userComment = textArea.value;
  if (userName === "" || userComment === "") {
    alert(`Username or comment not set. Please fill these fields.`);

    if (userName === "") {
      nameInput.setAttribute("class", "comments-name-error");
    } else {
      nameInput.classList.remove("comments-name-error");
    }
    if (userComment === "") {
      textArea.setAttribute("class", "comments-content-error");
    } else {
      textArea.classList.remove("comments-content-error");
    }
  } else {
    nameInput.classList.remove("comments-name-error");
    textArea.classList.remove("comments-content-error");
    const userInfo = {
      name: userName,
      comment: userComment,
    };
    await postUserComment(userInfo);
    commentsArray = await fetchUserComments();

    nameInput.value = "";
    textArea.value = "";
    userComments.innerHTML = "";
    commentsArray.forEach((element) => {
      const date = timeSinceComment(element.timestamp);
      element.timestamp = date;
      populateComments(element);
    });
  }
}

form.addEventListener("submit", handleSubmit);
