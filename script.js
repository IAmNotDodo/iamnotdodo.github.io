const wrapper = document.querySelector(".wrapper");

const question = document.querySelector(".question");

const gif = document.querySelector(".gif");

const yesBtn = document.querySelector(".yes-btn");

const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {

question.innerHTML = "xixixiixixi i lop yuu bbiii";

gif.src =

"https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp"; });

noBtn.addEventListener("click", () => {
  
question.innerHTML = "me krai";

gif.src =

"https://media.tenor.com/jXoTW09cWO0AAAAC/peach-cat-crying.gif"; });

const maxX = window.innerWidth - noBtnRect.width;

const maxY = window.innerHeight - noBtnRect.height;

const randomX = Math.floor(Math.random() * maxX);

const randomY = Math.floor(Math.random() * maxY);

noBtn.style.left = randomX + "px";

noBtn.style.top = randomY + "px"; });
