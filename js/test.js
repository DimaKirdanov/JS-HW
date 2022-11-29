function run(horse) {
  return new Promise((resolve) => {
    const time = getRandomTime(1000, 1500);
    setTimeout(() => {
      resolve({horse, time});
    }, time);
  })
}
run('Манго').then(x => console.log(x));
function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}