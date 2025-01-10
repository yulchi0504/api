let userGet = document.querySelector(".user");

function getXHR(url, calbak) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let res = xhr.response;
      let resJson = JSON.parse(res);
      calbak?.(resJson);
      //  userGet.innerHTML += `<p>${resJson.name}</p>`;
    } else if (xhr.readyState === 4) {
      console.log(xhr.status);
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

function getDataUser(user) {
  return `
  <div class="flex-card">
   <div class="card">
     <h2> Name:${user.name}</h2>
     <h3> Username:${user.username}</h3>
     <h3> Email:${user.email}</h3>
     <h3> Adress:${user.address.city}</h3>
    <div class="btn-tod-posts-photos">
      <button class="todos"><a href="./todos.html">Todos</a></button>
      <button class="photo"><a href="./photo.html">Photos</a></button>
      <button class="postss"><a href="./posts.html">Posts</a></button>
    </div>
   </div>
  </div>
   `;
}
getXHR("https://jsonplaceholder.typicode.com/users", (users) => {
  users.map((user) => {
    let dataa = getDataUser(user);
    userGet.innerHTML += dataa;
  });
});
