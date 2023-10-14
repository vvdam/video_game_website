
let page = document.querySelector('.page')
let result

fetch('https://api.rawg.io/api/games?key=7c52816cd5364d64abce2ea208717ef8')
    .then(response => response.json())
    .then(img => {
        let result = img.results
        console.log(result)
        result.forEach(element => {
            const div = document.createElement("div")
            div.classList.add("div")
            const span= document.createElement("p")
            span.classList.add("txt")
            //const spann= document.createElement("p")
            //spann.classList.add("txt2")
            const img = document.createElement("img")
            img.classList.add("imgg")
            span.innerText = element.name
            img.src = element.background_image
            //spann.innerText=element.platforms.name
            div.appendChild(img)
            div.appendChild(span)
            //div.appendChild(spann)
            page.appendChild(div)
        });
    })


//function blink() {
//    let txt = document.getElementById('titre');
//    setInterval(function() {
//    txt.style.display = (txt.style.display == 'none' ? '' : 'none');
//}, 500);

// for (let pas = 0; pas < 21; pas++) {
    
//     fetch('https://api.rawg.io/api/games?key=7c52816cd5364d64abce2ea208717ef8') 
//     .then(response => response.json())
    
//     .then(data =>{
        
//         document.getElementById(`lop${pas}`).src=data.results[pas].background_image}) 
//     .catch(error => console.error(error)) 


// }

// for (let pas = 0; pas < 21; pas++) {
    
//     fetch('https://api.rawg.io/api/platformes?key=7c52816cd5364d64abce2ea208717ef8') 
//     .then(response => response.json())
    
//     .then(data =>{
        
//         document.getElementById(`name${pas}`).innerText=data.results[pas].name}) 
//     .catch(error => console.error(error)) 


// }



// console.log(b)
