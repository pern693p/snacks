function get(){
    fetch("https://frontend2019-b484.restdb.io/rest/snacks", {
        method: "get", 
        headers: {
            "Content-Type": "application/json; charset=uft-8", 
            "x-apikey": "5d88745bfd86cb75861e25fd", 
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


            document.querySelector("#app").appendChild(copy); 


        })
    })
}

get(); 