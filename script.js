async function fetchData(url) {
    let response = await fetch(url);
    let json = await response.json();
    return json;
}


fetchData('https://jsonplaceholder.typicode.com/users/')
    .then((json) => {
        let info = document.getElementById("user");
        for (let i = 0; i < 4; i++) {
            let div = document.createElement("div");
            div.className = "card";
            div.innerHTML = `<p><strong>Name:</strong> ${json[i].name}</p>
                             <p><strong>Email:</strong> ${json[i].email}</p>
                             <p><strong>Phone:</strong> ${json[i].phone}</p>`;
            info.appendChild(div);
        }
    });


fetchData('https://jsonplaceholder.typicode.com/comments/')
    .then((json) => {
        let info = document.getElementById("comments");
        for (let i = 0; i < 4; i++) {
            let div = document.createElement("div");
            div.className = "card";
            div.innerHTML = `<p><strong>Name:</strong> ${json[i].name}</p>
                             <p><strong>Email:</strong> ${json[i].email}</p>
                             <p><strong>Comment:</strong> ${json[i].body}</p>`;
            info.appendChild(div);
        }
    });


fetchData('https://jsonplaceholder.typicode.com/photos/')
    .then((json) => {
        let info = document.getElementById("photos");
        for (let i = 0; i < 4; i++) {
            let div = document.createElement("div");
            div.className = "card";
            div.innerHTML = `<img src="${json[i].thumbnailUrl}" alt="Photo" style="width:100%; border-radius:8px;"> 
                             <p>${json[i].title}</p>`;
            info.appendChild(div);
        }
    });


fetchData('https://jsonplaceholder.typicode.com/albums/')
    .then((json) => {
        let info = document.getElementById("albums");
        for (let i = 0; i < 4; i++) {
            let div = document.createElement("div");
            div.className = "card";
            div.innerHTML = `<p><strong>Title:</strong> ${json[i].title}</p>`;
            info.appendChild(div);
        }
    });
