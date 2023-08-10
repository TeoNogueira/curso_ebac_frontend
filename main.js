
document.addEventListener('DOMContentLoaded', function() {
    
    const name = document.querySelector('#name');
    const ava = document.querySelector('#avatar');
    const username = document.querySelector('#username');
    const rep = document.querySelector('#repos');
    const link = document.querySelector('#link');
    const following = document.querySelector('#following');
    const followers = document.querySelector('#followers');


const executeFetch = () => {

    fetch('https://api.github.com/users/teonogueira')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            name.innerText = json.name;
            ava.src = json.avatar_url;
            username.innerText = json.login;
            link.href = json.html_url;
            rep.innerText = json.public_repos;
            following.innerText = json.following;
            followers.innerText = json.followers;
        
            
        })

    }
    executeFetch()

})





