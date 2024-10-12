let twitch = window.Twitch.ext;

twitch.onAuthorized(function(auth) {
    console.log(auth.token);
    // 初期化処理
    loadConfig();
});

function loadConfig() {
    twitch.configuration.onChanged(() => {
        if (twitch.configuration.broadcaster) {
            const config = JSON.parse(twitch.configuration.broadcaster.content);
            document.getElementById('apiUrl').value = config.apiUrl || 'https://gtatest.ddns.net:18080/data';
        }
    });
}

document.getElementById('configForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const apiUrl = document.getElementById('apiUrl').value;
    const config = {
        apiUrl: apiUrl
    };
    twitch.configuration.set('broadcaster', '1', JSON.stringify(config));
    alert('設定が保存されました');
});
