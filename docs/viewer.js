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

let apiUrl = 'https://gtatest.ddns.net:18080/data';

function updateApiUrl(newUrl) {
    apiUrl = newUrl || 'https://gtatest.ddns.net:18080/data';
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
    if (data.error) {
        container.innerHTML = `<p>Error: ${data.error}</p>`;
        return;
    }

    let tableHTML = `
        <table>
            <tr>
                <th>Citizen ID</th>
                <th>Name</th>
            </tr>
    `;

    data.forEach(player => {
        tableHTML += `
            <tr>
                <td>${player.citizenid}</td>
                <td>${player.name}</td>
            </tr>
        `;
    });

    tableHTML += '</table>';
    container.innerHTML = tableHTML;
}

document.getElementById('fetchDataBtn').addEventListener('click', fetchData);
