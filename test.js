const API = "https://jsonplaceholder.typicode.com";

document.addEventListener('DOMContentLoaded', function() {
  getData();
});

function getData() {
axios.get(`${API}/posts`)
  .then(response => {
    const resultElement = document.getElementById('result');
    const posts = response.data;
    const titles = posts.map(post => post.title);
    titles.forEach(title => {
      const titleElement = document.createElement('p');
      titleElement.textContent = title;
      resultElement.appendChild(titleElement);
    });
  })
  .catch(error => {
    console.log(error);
  });
}