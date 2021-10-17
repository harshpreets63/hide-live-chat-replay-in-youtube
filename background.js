function hideChatReplay() {
    if (document.location.pathname === '/watch') {
        console.log('%c hide-live-chat-replay-in-youtube: start removing', 'color: green;');

        const element = document.querySelector(
            'div#show-hide-button ytd-toggle-button-renderer a tp-yt-paper-button yt-formatted-string',
        );

        console.log(element);

        if (element && element.innerText === 'HIDE CHAT REPLAY') {
            element.click();
        }

        console.log('%c hide-live-chat-replay-in-youtube: finish removing', 'color: green;');
    }
}

window.onload = () => {
    hideChatReplay();

    const intervalID = setInterval(() => hideChatReplay(), 1000);

    console.log(`%c hide-live-chat-replay-in-youtube: intervalID = ${intervalID}`, 'color: green;');
};
