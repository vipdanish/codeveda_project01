fetch('http://localhost:5000/')
    .then(response => response.text())
    .then(data => document.getElementById('data').innerText = data)
    .catch(error => console.error('Error:', error));