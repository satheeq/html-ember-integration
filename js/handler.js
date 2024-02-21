function start() {
    console.log('starting the app');
    // compare();
}

function compare() {
    console.log('starting to compare');

    let time1 = Date.now();
    let time2 = Date.now() + 100;
    console.log('time', time1, time2);

    setInterval(() => {
        if (1000 < 5000) {
            console.log('success');
        }
    }, 10);
}