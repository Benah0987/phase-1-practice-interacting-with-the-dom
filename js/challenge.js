window.addEventListener("DOMContentLoaded", ()=>{
    const count = document.getElementById("counter");
    const minus = document.getElementById("minus");
    const plus = document.getElementById("plus");
    const heart = document.getElementById("heart");
    const pause = document.getElementById("pause");
    const likes = document.querySelector(".likes");
    const form = document.getElementById("comment-form");
    const commentList = document.getElementById("list");
    const input = document.getElementById("comment-input");

    let timer = setInterval(() => {
      count.innerText = parseInt(count.innerText)+1;
    }, 1000);


    minus.addEventListener("click", () => {
      count.innerText = parseInt(count.innerText) - 1;
    });

    plus.addEventListener("click", () => {
      count.innerText = parseInt(count.innerText) + 1;
    });

    pause.addEventListener("click", () => {
      if (pause.innerText === "pause") {
        clearInterval(timer);
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
        pause.innerText = "resume";
      } else {
        timer = setInterval(() => {
          count.innerText = parseInt(count.innerText) + 1;
        }, 1000);
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
        pause.innerText = "pause";
      }
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const comment = input.value.trim();
      if (comment !== "") {
        const li = document.createElement("li");
        li.textContent = comment;
        commentList.appendChild(li);
        input.value = "";
      }
    });

    heart.addEventListener("click", () => {
      const currentCount = parseInt(count.innerText);
      const existingLike = document.querySelector(`.likes li[data-count="${currentCount}"]`);
      if (existingLike) {
        const likeCount = parseInt(existingLike.dataset.likes) + 1;
        existingLike.dataset.likes = likeCount;
        existingLike.textContent = `${currentCount} has been liked ${likeCount} times`;
      } else {
        const li = document.createElement("li");
        li.dataset.count = currentCount;
        li.dataset.likes = "1";
        li.textContent = `${currentCount} has been liked 1 time`;
        likes.appendChild(li);
      }
    });

  });