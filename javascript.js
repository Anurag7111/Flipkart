function myFunction() {
  console.log("hi");
  let URL =
    "//api.themoviedb.org/3/movie/popular?api_key=350fa5c5150c60043f08dcdb4c9ce767&language=en-US&page=1";
  // this.httpGet(URL);
  const fetchPromise = fetch(URL);
  fetchPromise.then((response) => response.json())
  .then(data => obj = data)
  .then(() =>{
    const allMovies = obj.results;
    console.log(allMovies)
  })
}