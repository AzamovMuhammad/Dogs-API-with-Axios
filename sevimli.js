const liked_img = JSON.parse(localStorage.getItem("likedImg"));
const gallery = document.querySelector(".gallery");
const redLike = document.querySelector(".redLike");

function showImgs() {
  gallery.innerHTML = " ";
  liked_img.map((rasm, index) => {
    gallery.innerHTML += `
        <div class="imgDiv" id="imgDiv-${index}">
            <img src="${rasm}" alt="rasm" class="like_img">
            <div onclick="deleteImg(${index})" class="redLike"></div>
        </div>
        `;
  });
}
function deleteImg(index) {
  // Massivdan elementni o‘chiramiz
  liked_img.splice(index, 1);

  // Yangilangan ma'lumotni localStorage'ga saqlaymiz
  localStorage.setItem("likedImg", JSON.stringify(liked_img));

  showImgs();
}

function backToImagesPage() {
  window.location.href = "index.html";
}

showImgs();
