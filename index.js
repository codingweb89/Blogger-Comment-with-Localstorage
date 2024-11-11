const USERID = {
  name: null,
  message: null,
  date: null,
};

const userComment = document.querySelector(".usercomment");
const publishBtn = document.querySelector("#publish");
const comments = document.querySelector(".comments");
const userName = document.querySelector(".user");

userComment.addEventListener("input", (e) => {
  if (!userComment.value) {
    publishBtn.setAttribute("disabled", "disabled");
    publishBtn.classList.remove("abled");
  } else {
    publishBtn.removeAttribute("disabled");
    publishBtn.classList.add("abled");
  }
});

function addPost() {
  if (!userComment.value) return;
  USERID.name = userName.value;

  USERID.message = userComment.value;
  USERID.date = new Date().toLocaleString();
  let published = `<div class="parents">
            <img src="./img/user.png">
            <div>
                <h4>${USERID.name}</h4>
                <p>${USERID.message}</p>
                <div class="engagements"><img src="./img/like.png" id="like"><img src="./img/share.png" alt=""></div>
                <span class="date">${USERID.date}</span>
            </div>    
        </div>`;

  comments.innerHTML += published;
  localStorage.setItem("comment", comments.innerHTML);
  userComment.value = "";
  publishBtn.classList.remove("abled");

  //Updates the comment count
  let commentsNum = document.querySelectorAll(".parents").length;
  document.getElementById("comment").textContent = commentsNum;
}

publishBtn.addEventListener("click", addPost);

window.addEventListener("DOMContentLoaded", (e) => {
  comments.innerHTML = localStorage.getItem("comment");

  //Updates the comment count
  let commentsNum = document.querySelectorAll(".parents").length;
  document.getElementById("comment").textContent = commentsNum;
});
