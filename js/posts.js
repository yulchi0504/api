let postGet = document.querySelector(".posts-name");

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

function getDataUser(post) {
  if (post.userId === 1) {
    return `
      <div class="posts-block">
        <div class="posts-card">
          <h2 class="posts-title">Title: ${post.title}</h2>
          <p class="posts-status">Body:${post.body}</p>
         <button class="posts-btn-albums"><a class="commentts" href="#">Comments</a></button>   
        </div>
      </div>
    `;
  }
  return "";
}

getXHR("https://jsonplaceholder.typicode.com/posts", (posts) => {
  let content = posts.map((post) => getDataUser(post)).join("");
  postGet.innerHTML = content;
});
