import readlineSync from 'readline-sync';

function sayGreatings() {
  console.log('Добро пожаловать в игру "Кто хочет стать миллионером?"');
  const name = readlineSync.question('Введите ваше имя: ');
  console.log(`Привет, ${name}!`);
}

export default sayGreatings;