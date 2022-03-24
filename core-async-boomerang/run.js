// Основной файл.
// Запускает игру.
const Hero = require('./src/game-models/Hero');
const keyboard = require('./src/keyboard');
const Game = require('./src/Game');

// Инициализация игры с настройками.
const game = new Game({
  trackLength: 50,
});


// Запуск игры.
game.play();

keyboard(game.hero.moveLeft, game.hero.moveRight);
