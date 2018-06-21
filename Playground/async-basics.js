console.log('Starting app');

setTimeout(() => {
    console.log('insaid callback');
}, 3000);

setTimeout(() => {
    console.log('woooooooooooo');
}, 0);

console.log('Finshing app');