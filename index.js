function get(){
    fetch("https://frontend2019-b484.restdb.io/rest/snacks", {
        method: "get", 
        headers: {
            "Content-Type": "application/json; charset=uft-8", 
            "x-apikey": "5d8895e0fd86cb75861e2639", 
            "cache-control": "no-cache"
        }
    })

    .then(e => e.json())
    .then(snacks => {
        snacks.forEach(snack => {
            const template = document.querySelector("template").content; 
            const copy = template.cloneNode(true); 

            copy.querySelector("h1").textContent = snack.name; 
            copy.querySelector("h2").textContent = snack.taste; 
            copy.querySelector("p").textContent = snack.price; 
            copy.querySelector(".rating").textContent = snack.rating; 


            document.querySelector("#app").prepend(copy); 


        })
    })
}

get(); 

function post() {
    const data = {
        name: "chocolate",
        taste: "sweet",
        price: 25,
        rating: 6
    };
const postData = JSON.stringify(data); 

fetch("https://frontend2019-b484.restdb.io/rest/snacks", {
    method: "post",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "x-apikey": "5d8895e0fd86cb75861e2639",
    "cache-control": "no-cache"
  },
  body: postData       
})

        .then(res => res.json())
        .then(data => {
            console.log(data); 

            addSnacktoTheDOM(data); 
})

}

function addSnacktoTheDOM(snack){


    const template = document.querySelector("template").content; 
    const copy = template.cloneNode(true); 
    copy.querySelector("h1").textContent = snack.name;
    copy.querySelector("h2").textContent = snack.taste;  
    copy.querySelector("p").textContent = snack.price;  
    copy.querySelector(".rating").textContent = snack.rating;    
} 


document.querySelector("button").addEventListener("click", e => {
    post(); 
})



