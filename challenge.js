let timer = '';
document.addEventListener("DOMContentLoaded", function(){
  timer = setInterval(incrementTimeByOne, 1000);
  document.querySelector("#\\-").addEventListener("click", function(){decrementTimeByOne();});
  document.querySelector("#\\+").addEventListener("click", function(){incrementTimeByOne();});
  document.querySelector("#\\<3").addEventListener("click", function(){addLike();});
  document.querySelector("#pause").addEventListener("click", function(){pauseTimer();});
  document.querySelector("#submit").addEventListener("click", function(){addNewComment();});
  // let formElement = document.querySelector("form");
  // formElement.addEventListener('submit', addNewComment);
});

const incrementTimeByOne = () => (document.querySelector('#counter').innerText = parseInt(document.querySelector('#counter').innerText) + 1);

const decrementTimeByOne = () => (document.querySelector('#counter').innerText = parseInt(document.querySelector('#counter').innerText) - 1);

function pauseTimer(){
  console.log("timer value: " + timer);
  if (timer == true){
    clearInterval(timer);
    timer = null;
  } else {
    timer = setInterval(incrementTimeByOne, 1000);
  };
};

function timerValue(){return document.querySelector('#counter').innerText;};

function addLike(){
  if (document.getElementById(timerValue()) === null){ //create new list item and populate with 1 like and current timer value
    let li = document.createElement('li');
    li.id = timerValue();
    document.querySelector(".likes").appendChild(li);
    li.innerHTML = `${timerValue()} has been liked <span>1</span> times`;
  } else { //append last list item and update with n+1 likes
    let numberOfLikes = parseInt(document.getElementById(timerValue()).querySelector("span").innerText) + 1;
    document.getElementById(timerValue()).querySelector("span").innerText = numberOfLikes;
  };
};

function addNewComment(){
  event.preventDefault();
  let p = document.createElement('p');
  let val = document.getElementById("comment-form-field").value;
  document.querySelector("#list.comments").appendChild(p);
  p.innerText = val;
  document.getElementById("comment-form-field").value = '';
};
