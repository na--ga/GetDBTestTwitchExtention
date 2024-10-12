let twitch = window.Twitch.ext;

twitch.onAuthorized(function(auth) {
    console.log(auth.token);
    // 初期化処理
});

twitch.configuration.onChanged(() => {
    if (twitch.configuration.broadcaster) {
        const config = JSON.parse(twitch.configuration.broadcaster.content);
        updateOptions(config.options);
    }
});

function updateOptions(options) {
    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';
    options.forEach(option => {
        const div = document.createElement('div');
        div.textContent = option;
        container.appendChild(div);
    });
}

document.getElementById('changeColorBtn').addEventListener('click', function() {
    const colors = ['#6441a5', '#9146ff', '#000000', '#ff0000', '#00ff00', '#0000ff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
