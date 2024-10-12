function saveConfig() {
    const config = {
        options: ['オプション1', 'オプション2', 'オプション3'] // 例として
    };
    twitch.configuration.set('broadcaster', '1', JSON.stringify(config));
}