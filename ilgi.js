const url = 'https://online-movie-database.p.rapidapi.com/auto-complete?q=king';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd86e9a0d04msh27c90e7b668e624p139dddjsnfea649d6c73c',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch(url, options)
  .then(response => response.json())
  .then(data => {
    const list = data.d;

    list.map((item) => {
      const name = item.l;
      const poster = item.i.imageUrl;
      const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`;
      document.querySelector('.movies').innerHTML += movie;
    });
  })
  .catch(err => {
    console.error(err);
  });

	
	
/*try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}*/