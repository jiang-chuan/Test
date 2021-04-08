const api_url = "https://dummyapi.io/data/api/user?limit=10";

getapi(api_url);

async function getapi(url){
    const response = await fetch(url, {
        headers: new Headers(
            {
                'app-id':'5fa8501c7f0e61f9b4e9a23f'
            }
        )
    });

    var responseJson = await response.json();

    console.log(responseJson.data);

    showdata(responseJson);
}

function showdata(jsonData){
    let html = '';

    jsonData.data.forEach(element => {
        let htmlSegment = `<div class="user">
            <img src='${element.picture}'>
            <h2>${element.firstName} ${element.lastName}</h2>
            <div><a href="email:${element.email}">${element.email}</a></div>
            </div>`;

        html +=htmlSegment;
    });

    document.querySelector(".container").innerHTML = html;
}