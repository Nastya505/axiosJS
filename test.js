const API = "https://jsonplaceholder.typicode.com";

document.addEventListener('DOMContentLoaded', function() {
  getData();
});

 async function getData() {
    try{
    const response = await  axios.get(`${API}/posts`);
    const resultElement = document.getElementById('result');
    const posts = response.data;
    const titles = posts.map(post => post.title);
    titles.forEach(title => {
      const titleElement = document.createElement('p');
      titleElement.textContent = title;
      resultElement.appendChild(titleElement);
    });
    }
    catch(error ) {
    console.log(error);
    };
}


const postData = {
  title: 'Название поста',
  body: 'Текст поста',
  userId: 1
};
async function createPost(){
    try{
        const response = axios.post(`${API}/posts`, postData);
        console.log(response.data);
    }
    catch(error){
        console.log(error);
    }
}
