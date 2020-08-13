
let cosmonaut = document.querySelector("#cosmonaut");
let rocket = document.querySelector("#rocket");
let logo = document.querySelector("#logo");
let startUrlPeople = "https://swapi.dev/api/people/?page=1";
let startUrlShips = "https://swapi.dev/api/starships/?page=1";
let tableBody = document.querySelector("#tablebody");
let tableHead = document.querySelector("#tablehead");
let nextPageShips = null;
let nextPagePeople = null;
let search = document.querySelector("#search");
let btnSearch = document.querySelector("#btnsearch");
let loader = document.querySelector("#loader");
let searchInfo = document.querySelector("#searchinfo");
let nextDiv = document.querySelector(".next");
let previousDiv = document.querySelector(".previous");
let pagesShips = [];
let pagesPeople = [];
let indexPageShips = 0;
let indexPagePeople = 0;
let finalLengthShips = 0;
let finalLengthPeople = 0;
let lastPageShips = false;
let lastPagePeople = false;
let sortedShips = false;
let sortedPeople = false;
loader.style.visibility = "hidden";

cosmonaut.addEventListener("click", showFirstPeople);
rocket.addEventListener("click", showFirstShips);
btnSearch.addEventListener("click", searchBase);
logo.addEventListener("click", clearPage);


function clearPage() {
    loader.style.visibility = "hidden";
    nextDiv.innerHTML = ``;
    previousDiv.innerHTML = ``;
    searchInfo.innerHTML = ``;
    search.value = ``;
    tableHead.innerHTML = ``;
    tableBody.innerHTML = ``;
}


async function searchBase() {
    loader.style.visibility = "visible";
    searchInfo.innerHTML = ``;
    let data = await fetch(`https://swapi.dev/api/people/?search=${search.value}`);
    let resolvedData = await data.json();
    loader.style.visibility = "hidden";
    if (resolvedData.results.length > 0) {
    for (let subj of resolvedData.results)
    searchInfo.innerHTML += `<li style="color: yellow"> ${subj.name}, ${subj.height}cm, ${subj.mass}kg, ${subj.gender},
    born in${subj.birth_year}, ${subj.films.length} films appearances </li>`;
    } else { 
        searchInfo.innerHTML = `<p style="color: yellow"> Nothing found. Try again! </p>`
    }
}


async function fetchPeople(url) {
    let data = await fetch(url);
    let resolvedData = await data.json();
        pagesPeople.push(resolvedData.results);
        indexPagePeople ++;
        nextPagePeople = resolvedData.next;
        if (nextPagePeople === null) {
            lastPagePeople = true;
            finalLengthPeople = pagesPeople.length;
        }
        loader.style.visibility = "hidden";
        showPeople(resolvedData.results);
}

function showFirstPeople() {
    tableHead.innerHTML = ``;
    tableBody.innerHTML = ``;
    nextDiv.innerHTML = ``;
    previousDiv.innerHTML = ``;
    searchInfo.innerHTML = ``;
    search.value = ``;
    lastPagePeople = false;
    if (pagesPeople.length === 0) {
        loader.style.visibility = "visible";
        fetchPeople(startUrlPeople);
        } else {
            if (indexPagePeople === finalLengthPeople) {
            lastPagePeople = true;
            }
            showPeople(pagesPeople[indexPagePeople-1]);   
        }
}

function showNextPeople() {
    searchInfo.innerHTML = ``;
    search.value = ``;
    if (pagesPeople[indexPagePeople]) {
        indexPagePeople ++;
        if (indexPagePeople === finalLengthPeople) {
        lastPagePeople = true;
        }
    showPeople(pagesPeople[indexPagePeople-1]);
    } else {
    loader.style.visibility = "visible";
    fetchPeople(nextPagePeople);
    }
}

function showPreviousPeople() {
    searchInfo.innerHTML = ``;
    search.value = ``;
    lastPagePeople = false;
    indexPagePeople --;
    showPeople(pagesPeople[indexPagePeople-1]);
}


async function fetchShips(url) {
    let data = await fetch(url);
    let resolvedData = await data.json();
        pagesShips.push(resolvedData.results);
        indexPageShips ++
        nextPageShips = resolvedData.next;
        if (nextPageShips === null) {
            lastPageShips = true;
            finalLengthShips = pagesShips.length;
        }
        loader.style.visibility = "hidden";
        showShips(resolvedData.results);
}

function showFirstShips() {
    tableHead.innerHTML = ``;
    tableBody.innerHTML = ``;
    nextDiv.innerHTML = ``;
    previousDiv.innerHTML = ``;
    searchInfo.innerHTML = ``;
    search.value = ``;
    lastPageShips = false;
    if (pagesShips.length === 0) {
    loader.style.visibility = "visible";
    fetchShips(startUrlShips);
    } else {
        if (indexPageShips === finalLengthShips) {
        lastPageShips = true;
        }
        showShips(pagesShips[indexPageShips-1]);   
    }
}

function showNextShips() {
    searchInfo.innerHTML = ``;
    search.value = ``;
    if (pagesShips[indexPageShips]) {
        indexPageShips ++;
        if (indexPageShips === finalLengthShips) {
        lastPageShips = true;
        }
    showShips(pagesShips[indexPageShips-1]);
    } else {
    loader.style.visibility = "visible";
    fetchShips(nextPageShips);
    }
    sortedShips = false;
}

function showPreviousShips() {
    searchInfo.innerHTML = ``;
    search.value = ``;
    lastPageShips = false;
    indexPageShips --;
    showShips(pagesShips[indexPageShips-1]);
    sortedShips = false;
}


function showPeople(res) {
    if (res) {
    tableHead.innerHTML = ``;
    tableBody.innerHTML = ``;
    nextDiv.innerHTML = ``;
    previousDiv.innerHTML = ``;
    tableHead.innerHTML = `<tr>
    <th class="namePeople"> Name </th>
    <th> Height (cm) </th>
    <th> Mass (kg) </th>
    <th> Gender </th>
    <th> Birth Year </th>
    <th> Appearances </th>
    <th> Del </th>
    </tr>`
    for (let subj of res) {
        tableBody.innerHTML += `<tr>
        <td> ${subj.name} </td>
        <td> ${subj.height} </td>
        <td> ${subj.mass} </td>
        <td> ${subj.gender} </td>
        <td> ${subj.birth_year} </td>
        <td> ${subj.films.length} </td>
        <td class="removeRow"> X </td>
        </tr>`
    } 
    document.querySelector(".namePeople").addEventListener("click", function(){
        let newRes = [...res];
        if (sortedPeople === false) {
            sortedPeople = true;
        let sortedData = newRes.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0)); 
            showPeople(sortedData); 
        } else {
            sortedPeople = false;
            let sortedData = newRes.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? -1 : ((b.name.toLowerCase() > a.name).toLowerCase() ? 1 : 0)); 
            showPeople(sortedData);
        }
})
    if (indexPagePeople > 1 && lastPagePeople === false) {
    nextDiv.innerHTML = `<button id="btnnextpeople"> Page ${indexPagePeople+1} </button>`;
    previousDiv.innerHTML = `<button id="btnpreviouspeople"> Page ${indexPagePeople-1} </button>`;
    document.querySelector("#btnnextpeople").addEventListener("click", showNextPeople);
    document.querySelector("#btnpreviouspeople").addEventListener("click", showPreviousPeople);
    } if (indexPagePeople === 1) {
        nextDiv.innerHTML = `<button id="btnnextpeople"> Page ${indexPagePeople+1} </button>`;
        previousDiv.innerHTML = ``;
    document.querySelector("#btnnextpeople").addEventListener("click", showNextPeople);
    } if (lastPagePeople === true) {
        previousDiv.innerHTML = `<button id="btnpreviouspeople">  Page ${indexPagePeople-1} </button>`;
        nextDiv.innerHTML = ``;
    document.querySelector("#btnpreviouspeople").addEventListener("click", showPreviousPeople);
    }
}
}

function showShips(res) {
    if (res) {
    helper = 1;
    tableHead.innerHTML = ``;
    tableBody.innerHTML = ``;
    nextDiv.innerHTML = ``;
    previousDiv.innerHTML = ``;
    tableHead.innerHTML = `<tr>
    <th class="nameShips"> Name </th>
    <th class="mode"> Model </th>
    <th class="manufacturer"> Manufecturer </th>
    <th class="cost"> Cost </th>
    <th class="capacity"> People Capacity </th>
    <th class="classShip"> Class </th>
    <th> Del </th>
    </tr>`
    for (let subj of res) {
        tableBody.innerHTML += `<tr id="${helper}">
        <td> ${subj.name} </td>
        <td> ${subj.model} </td>
        <td> ${subj.manufacturer} </td>
        <td> ${subj.cost_in_credits} </td>
        <td> ${subj.passengers} </td>
        <td> ${subj.starship_class} </td>
        <td class="removeRow"> X </td>
        </tr>`
        helper++;
}
    document.querySelector(".nameShips").addEventListener("click", function(){
        let newRes = [...res];
        if (sortedShips === false) {
            sortedShips = true;
        let sortedData = newRes.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0)); 
            showShips(sortedData); 
        } else {
            sortedShips = false;
            let sortedData = newRes.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? -1 : ((b.name.toLowerCase() > a.name).toLowerCase() ? 1 : 0)); 
            showShips(sortedData);
        }
})
    if (indexPageShips > 1 && lastPageShips === false) {
    nextDiv.innerHTML = `<button id="btnnextships"> Page ${indexPageShips+1} </button>`;
    previousDiv.innerHTML = `<button id="btnpreviousships"> Page ${indexPageShips-1} </button>`;
    document.querySelector("#btnnextships").addEventListener("click", showNextShips);
    document.querySelector("#btnpreviousships").addEventListener("click", showPreviousShips);
    } if (indexPageShips === 1) {
    nextDiv.innerHTML = `<button id="btnnextships"> Page ${indexPageShips+1} </button>`;
    previousDiv.innerHTML = ``;
    document.querySelector("#btnnextships").addEventListener("click", showNextShips);
    } if (lastPageShips === true) {
    previousDiv.innerHTML = `<button id="btnpreviousships"> Page ${indexPageShips-1} </button>`;
    nextDiv.innerHTML = ``;
    document.querySelector("#btnpreviousships").addEventListener("click", showPreviousShips);
    }
}
}


    document.addEventListener("click", function(){
        if (event.target.className === "removeRow") {
        event.target.parentElement.remove();
        }
    });

