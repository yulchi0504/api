let userGet = document.querySelector(".todos-js");

function getXHR(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let res = xhr.response;
      let resJson = JSON.parse(res);
      callback?.(resJson);
    } else if (xhr.readyState === 4) {
      console.log(xhr.status);
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

function getDataUser(todo) {
  if (todo.userId === 1) {
    return `
      <div class="todos-block">
        <div class="todos-card">
          <h2 class="todos-title">Title: ${todo.title}</h2>
          <p class="todos-status">Completed: <span> ${
            todo.completed ? "✅" : "❌"
          }</span></p>
        </div>
      </div>
    `;
  }
  return "";
}

getXHR("https://jsonplaceholder.typicode.com/todos", (todos) => {
  let content = todos.map((todo) => getDataUser(todo)).join("");
  userGet.innerHTML = content;
});
