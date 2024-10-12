let twitch = window.Twitch.ext;

twitch.onAuthorized(function(auth) {
    console.log(auth.token);
    // 初期化処理
    fetchData();
});

twitch.configuration.onChanged(() => {
    if (twitch.configuration.broadcaster) {
        const config = JSON.parse(twitch.configuration.broadcaster.content);
        updateApiUrl(config.apiUrl);
    }
});

let apiUrl = 'https://httpbin.org/json';

function updateApiUrl(newUrl) {
    apiUrl = newUrl || 'https://httpbin.org/json';
    fetchData();
}

function fetchData() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('Error:', error);
            displayData({ error: 'Failed to fetch data' });
        });
}

function displayData(data) {
    const container = document.getElementById('dataContainer');
    container.innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
}

document.getElementById('fetchDataBtn').addEventListener('click', fetchData);
