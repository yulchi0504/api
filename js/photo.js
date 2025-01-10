let userGet = document.querySelector(".photo-new");

function getXHR(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let res = xhr.response;
      let resJson = JSON.parse(res);
      callback?.(resJson);
    } else if (xhr.readyState === 4) {
      console.log(`Error: ${xhr.status}`);
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

function getDataUser(photo) {
  // Filtrlash: albumId 1 bo'lgan fotosuratlarni olish
  if (photo.albumId === 1) {
    return `
    <div class="photo-flex">
      <div class="photo-block">
        <div class="photo-card">
        <img src="${photo.url}" alt="No img" class="photo-image">
          <h3 class="photo-title">Title: ${photo.title}</h3>
        </div>
      </div>
      </div>
    `;
  }
  return "";

}


getXHR("https://jsonplaceholder.typicode.com/photos", (photos) => {
  let content = photos.map((photo) => getDataUser(photo)).join("");
  userGet.innerHTML = content;
});

// getXHR("https://jsonplaceholder.typicode.com/posts", (posts) => {
//   let content = posts.map((post) => getDataUser(post)).join("");
//   postGet.innerHTML = content;
// });