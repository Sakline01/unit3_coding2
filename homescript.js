function getresult() {
    let ser=document.getElementById("search").value;
    fetch(`https://api.github.com/search/users?q=${ser}`)
    .then(res=>res.json())
    .then(data=>{console.log(data);showdata(data.items)})
}
const showdata=data=>{
for (let i = 0; i < 10; i++) {
    const element = data[i];
    DOM(element);
    
}
}
function DOM(data) {
    let result=document.getElementById("result");
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=data.avatar_url;
    let p=document.createElement("p");
    p.textContent=`id: ${data.id}`;
    div.className="card";
    div.append(img,p);
result.append(div);
}

/**avatar_url: "https://avatars.githubusercontent.com/u/144048?v=4"
events_url: "https://api.github.com/users/saku/events{/privacy}"
followers_url: "https://api.github.com/users/saku/followers"
following_url: "https://api.github.com/users/saku/following{/other_user}"
gists_url: "https://api.github.com/users/saku/gists{/gist_id}"
gravatar_id: ""
html_url: "https://github.com/saku"
id: 144048
login: "saku"
node_id: "MDQ6VXNlcjE0NDA0OA=="
organizations_url: "https://api.github.com/users/saku/orgs"
received_events_url: "https://api.github.com/users/saku/received_events"
repos_url: "https://api.github.com/users/saku/repos"
score: 1
site_admin: false
starred_url: "https://api.github.com/users/saku/starred{/owner}{/repo}"
subscriptions_url: "https://api.github.com/users/saku/subscriptions"
type: "User"
url: "https://api.github.com/users/saku" */