

const apiUrl = 'https://api.github.com/users/Quondoee';


fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
       
        document.getElementById('profile-pic').src = data.avatar_url;
        document.getElementById('username').textContent = data.login;
        document.getElementById('profile-link').href = data.html_url;
    })
    .catch(error => console.error('Error fetching data:', error));
