const Boomerang = require('./Boomerang');

// Наш герой.
class Hero {
  constructor(position = 0) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position = position;
    this.boomerang = new Boomerang(this.position + 1, ' ');
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack(positionEnemy) {
    // Атакуем.
    this.boomerang.fly(positionEnemy);
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
