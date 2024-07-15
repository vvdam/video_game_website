let page = document.querySelector(".page");
let result;
let pages = 1;
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

resultashow();

next.addEventListener("click", function (e) {
    pages++;
    resultashow();
    console.log(pages);
});
prev.addEventListener("click", function (e) {
    if (pages > 1) {
        pages--;
        resultashow();
    }
});

function resultashow() {
    fetch(
        `https://api.rawg.io/api/games?key=7c52816cd5364d64abce2ea208717ef8&page_size=100&page=${pages}`
    )
        .then((response) => response.json())
        .then((img) => {
            let result = img.results;
            console.log(result);

            // Effacer le contenu précédent
            page.innerHTML = "";

            result.forEach((element) => {
                const div = document.createElement("div");
                div.classList.add("div");
                const span = document.createElement("p");
                span.classList.add("txt");
                const image = document.createElement("img");
                image.classList.add("imgg");
                span.innerText = element.name;
                image.src = element.background_image;
                div.appendChild(image);
                div.appendChild(span);
                page.appendChild(div);
            });
        })
        .catch((error) => console.error("Error:", error));
}
