const img = document.getElementById("img");
const error = document.getElementById("error");
const like_img = document.querySelector(".like_img");
const btnBlack = document.querySelector(".btnBlack");
const liked_img = JSON.parse(localStorage.getItem('likedImg'));

let intervalId;
function showDog() {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    axios.get("https://dog.ceo/api/breeds/image/random").then((res) => {
      const dog = res.data;
      img.src = dog.message;
      error.innerText = "";
      btnBlack.src = "img/like.png";
    });
  }, 5000);
}
function stopShowDog() {
  clearInterval(intervalId);
}

let likedImg = liked_img || [];
function addLiked() {
  const likeIt = img.src;
  if (!likedImg.includes(likeIt)) {
    likedImg.push(likeIt);
    console.log(likedImg);

    localStorage.setItem("likedImg", JSON.stringify(likedImg));
  } else {
    error.innerText = "You already clicked this photo";
  }
  changeLikeColor();
}

function changeLikeColor() {
  btnBlack.src = "img/favorite.png";
}

function goToLike() {
  window.location.href = "sevimli.html";
  showIt();
  stopShowDog()
}

showDog();
