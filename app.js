let button = document.querySelector(".btn");
let main = document.querySelector(".main-container");
// console.log(main)
button.addEventListener("click", () => {
  main.style.visibility = "visible";
});

let cross = document.querySelector(".crossbtn");
cross.addEventListener("click", () => {
  main.style.visibility = "hidden";
});



let btn = document.getElementById("submitbtn");
btn.addEventListener("click", (event) => {
  add(event);
});

let filterbtn = document.getElementById("filter");
filterbtn.addEventListener("change", filterData);
let sortbtn = document.getElementById("sort");
sortbtn.addEventListener("click", sortme);
const data = [];

let main1 = document.getElementById("main");

function add(event) {
  event.preventDefault();
  let name = document.getElementById("movie-name").value;
  let link = document.getElementById("poster-image-link").value;
  let category = document.getElementById("select").value;
  let trailerLink = document.querySelector("#trailer-link").value;
  let actor = document.querySelector("#actor-name").value;
  let director = document.querySelector("#director-name").value;
  let rating = document.getElementById("imdb-rating").value;

  let object = {
    head1: name,
    imgLink: link,
    head2: category,
    trailer: trailerLink,
    actor:actor,
    director:director,
    rating: rating,
  };
  data.push(object);
  showData(data);
}

function filterData() {
  let val = filterbtn.value;
  let filteredData = data.filter((d) => {
    return d.head2 === val;
  });
  showData(filteredData);
}
function sortme() {
  let sortedData = data.sort((a, b) => {
    return a.rating - b.rating;
  });
  console.log(sortedData);
  showData(sortedData);
  
}
//console.log("main1")
function showData(array) {
  console.log(array);
  main1.innerHTML = null;
  array.map((d) => {
    console.log("d", d);
    let div = document.createElement("div");

    let movieName = document.createElement("h1");
    let img = document.createElement("img");
    let category = document.createElement("h2");
    let trailer = document.createElement("a");
    let actor = document.createElement("h2");
    let director = document.createElement("h2");
    let rating = document.createElement("h3");
    
    movieName.textContent = d.head1;

    img.setAttribute("src", d.imgLink); 
    img.style.width="200px";
    img.style.height="200px";

    category.textContent = d.head2;

    trailer.setAttribute("href",d.trailer) ;
    trailer.textContent=d.trailer;
    trailer.innerText="Play";
    trailer.setAttribute("target","_blank");

    actor.textContent = d.actor;

    director.textContent = d.director;

    rating.textContent = d.rating;
    
    div.append(movieName,img,category,trailer,actor,director, rating);
    main1.append(div);



  });

}
