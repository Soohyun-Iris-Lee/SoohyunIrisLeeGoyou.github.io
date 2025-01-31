const img = document.querySelector('img')
const button = document.querySelector('.create');
const prompt = document.querySelector('.prompt')
button.addEventListener('click', async()=> {

    const url = "http://localhost:3000/";
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({prompt: prompt.value+', in the style of TOK'}),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        img.src = data;
        return data;
      })
      .catch(error => console.error('Error fetching the cat image:', error));
})