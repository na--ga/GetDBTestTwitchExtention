twitch.configuration.onChanged(() => {
    if (twitch.configuration.broadcaster) {
        const config = JSON.parse(twitch.configuration.broadcaster.content);
        updateOptions(config.options);
    }
});

function updateOptions(options) {
    // ここでビューアーのUIを更新
    console.log('新しいオプション:', options);
}