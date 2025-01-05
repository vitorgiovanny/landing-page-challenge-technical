import {fetchJson} from './jsonReader.js';
var jsonData = [];
/*$(document).ready(function(){

});*/

function CreaterHtml(data){
    return  `
    <div class="post">
        <div class="headerPost">
            <div class="myChallenge">
                <h4 class="tiitleLink"><a href="./src/Pages/Posts.html?id=${data.Id}">${data.title}</a></h4>
                <span class="descriptionTitle">${data.description.substring(0, 100)}</span><br>
                <b>Tags: </b><span>${data.tags}</span><br>
                <div>${data.tagsDesafios}</d>
            </div>
        </div>
    </div>
    `;
}

async function loadJsonData(){
    jsonData = await fetchJson('/src/Config/data.json');   
}

document.addEventListener('DOMContentLoaded', async () => {
    //jsonData = await fetchJson('/src/Config/data.json');
    await loadJsonData();

    if (!jsonData) console.log('Erro ao carregar o JSON.');
    
    for (let index = 0; index < jsonData.length; index++) {
        
        const data = jsonData[index];
        const post = document.getElementById('post-data-json');
        console.log('Dados JSON carregados:', data);
        var modelPage = CreaterHtml(data);

        console.log(modelPage);
        post.innerHTML += modelPage;
        
    }


});

export default async function AddPage(id){
    console.log(id);
    await loadJsonData();

    //const model = jsonData.find(post => post.Id == id); // Busca pelo ID no array

    const page = document.getElementById('post-id-json');

        const model = jsonData.find(post => post.Id == id); //jsonData[id];
        console.log(model);
        console.log('ola mundo')
        var modelPage = 
        `
        <div class="post">
            <div class="headerPost">
                <div class="myChallenge">
                    <h1 class="tiitleLink">${model.title}</h1>
                    <p class="descriptionTitle">${model.description}</p><br>
                    <b>Tags: </b><span>${model.tags}</span>
                    <p><a href="${model.href}" style="
    background-color: #ccc;
    padding: 5px;
    border-radius: 15px;
">O Codigo</a></p>
                </div>
            </div>
        </div>
        `;
        page.innerHTML = modelPage;
}