// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!

const keypress = require('keypress');

// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.

const keyboard = {
  w: () => console.log('w'),
  s: () => console.log('s'),
  a: (game) => game.hero.moveLeft(),
  d: (game) => game.hero.moveRight(),
  r: (game) => {
    game.hero.boomerang.skin = '🌀';
    game.hero.attack();
  },
};
// Какая-то функция.

function runInteractiveConsole(game) {
  keypress(process.stdin);
  process.stdin.on('keypress', (ch, key) => {
    if (key) {
      if (key.name in keyboard) {
        keyboard[key.name](game);
      }
      // Прерывание программы.
      if (key.ctrl && key.name === 'c') {
        process.exit();
      }
    }
  });
  process.stdin.setRawMode(true);
}

// Давай попробуем запустить этот скрипт!

// runInteractiveConsole();

module.exports = runInteractiveConsole;
