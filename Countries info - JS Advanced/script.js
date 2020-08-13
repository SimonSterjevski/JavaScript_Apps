let url = "https://restcountries.eu/rest/v2/name/";
let searchInput = document.querySelector(".search");
let btnSearch = document.querySelector(".btnsearch");
let table = document.querySelector(".table");
let loader = document.querySelector(".loader");
loader.style.visibility = "hidden";

btnSearch.addEventListener("click", showCountries);

async function showCountries() {
    loader.style.visibility = "visible";
    let realUrl;
    if(searchInput.value) {
        realUrl = url+searchInput.value;
    } else {
        realUrl = "https://restcountries.eu/rest/v2/all"
    }
   let data = await fetch(realUrl);
   let realData = await data.json();
   showTable(realData, table, searchInput.value);
//    console.log(realData);
//    console.log(searchInput.value);
}

function showTable(data, div, input) {
    loader.style.visibility = "hidden"
    if (data.message === "Not Found") {
        div.innerHTML = `<p> There are no countries that match search criteria </p>`
    } else {
        div.innerHTML = `<tr>
        <th> Flag </th>
        <th class="name"> Name <span class="nameasc"> &#8659 </span> <span class="namedes"> &#8657</span> </th>
        <th class="population"> Population <span class="popasc"> &#8659 </span> <span class="popdes"> &#8657 </span> </th>
        <th> Capital </th>
        <th class="area"> Area <span class="areaasc"> &#8659 </span> <span class="areades"> &#8657 </span> </th>
        <th> Language </th>
        <th> Currency </th>
        </tr>`;
        for (let i = 0; i < data.length; i++) {
            if (data[i].name.toLowerCase().includes(input.toLowerCase())) {
                if (data[i].name === "Macedonia (the former Yugoslav Republic of)") {
                    data[i].name = "Macedonia";
                }
                let languages = data[i].languages.map(lang => {
                    return lang.name;
                });
                let currencies = data[i].currencies.map(cur => {
                    return cur.name;
                });
                div.innerHTML += `<tr>
            <td><img src=${data[i].flag}></td>
            <td>${data[i].name}</td>
            <td>${data[i].population}</td>
            <td>${data[i].capital}</td>
            <td>${data[i].area}</td>
            <td>${languages.toString().replace(/,/g, ", ")}</td>
            <td>${currencies.toString().replace(/,/g, ", ")}</td>
            </tr>`;
                }      
        }

        document.querySelector(".nameasc").addEventListener("click", function(){
            let sortedData = data.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0)); 
                showTable(sortedData, table, searchInput.value); 
            }) 
    
        document.querySelector(".namedes").addEventListener("click", function(){
            let sortedData = data.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? -1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? 1 : 0)); 
                showTable(sortedData, table, searchInput.value);
            })

        document.querySelector(".popdes").addEventListener("click", function(){
            let sortedData = data.sort((a,b) => (a.population > b.population) ? 1 : ((b.population > a.population) ? -1 : 0)); 
                showTable(sortedData, table, searchInput.value); 
            }) 
        
        document.querySelector(".popasc").addEventListener("click", function(){
            let sortedData = data.sort((a,b) => (a.population > b.population) ? -1 : ((b.population > a.population) ? 1 : 0)); 
                showTable(sortedData, table, searchInput.value);
            })

        document.querySelector(".areades").addEventListener("click", function(){
            let sortedData = data.sort((a,b) => (a.area > b.area) ? 1 : ((b.area > a.area) ? -1 : 0)); 
                showTable(sortedData, table, searchInput.value); 
            }) 
            
        document.querySelector(".areaasc").addEventListener("click", function(){
            let sortedData = data.sort((a,b) => (a.area > b.area) ? -1 : ((b.area > a.area) ? 1 : 0)); 
                showTable(sortedData, table, searchInput.value);
            })
        }
    }


   



