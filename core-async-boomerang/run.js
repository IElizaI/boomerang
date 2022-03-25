// Основной файл.
// Запускает игру.
const keyboard = require('./src/keyboard');
const Game = require('./src/Game');

// Инициализация игры с настройками.
const game = new Game({
  trackLength: 50,
});

// Запуск игры.
game.play();

keyboard(game.hero);
