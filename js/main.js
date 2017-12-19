/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var resourceCache = {};
var loading = [];
var readyCallbacks = [];

var resources = {

    // Load an image url or an array of image urls
    load: function load(urlOrArr) {
        if (urlOrArr instanceof Array) {
            urlOrArr.forEach(function (url) {
                resources._load(url);
            });
        } else {
            _load(urlOrArr);
        }
    },

    _load: function _load(url) {
        if (resourceCache[url]) {
            return resourceCache[url];
        } else {
            var sound = void 0;
            var img = void 0;
            if (url.search('mp3') !== -1) {
                sound = new Audio();
            } else {
                img = new Image();
            }
            // let img = new Image();
            if (img) {
                img.onload = function () {
                    resourceCache[url] = img;

                    if (resources.isReady()) {
                        readyCallbacks.forEach(function (func) {
                            func();
                        });
                    }
                };
            }
            if (sound) {
                sound.oncanplaythrough = function () {
                    resourceCache[url] = sound;

                    if (resources.isReady()) {
                        readyCallbacks.forEach(function (func) {
                            func();
                        });
                    }
                };
            }
            resourceCache[url] = false;
            if (img) img.src = url;
            if (sound) sound.src = url;
        }
    },

    get: function get(url) {
        return resourceCache[url];
    },

    isReady: function isReady() {
        var ready = true;
        for (var k in resourceCache) {
            if (resourceCache.hasOwnProperty(k) && !resourceCache[k]) {
                ready = false;
            }
        }
        return ready;
    },

    onReady: function onReady(func) {
        readyCallbacks.push(func);
    }

};

exports.resources = resources;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Entity = function Entity(pos, sprite, speed, dir) {
    _classCallCheck(this, Entity);

    this.pos = pos;
    this.sprite = sprite;
    this.speed = speed || 0;
    this.dir = dir || null;
};

exports.default = Entity;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var pressedKeys = {};

var setKey = function setKey(event, status) {
    var code = event.keyCode;
    var key = void 0;

    switch (code) {
        case 32:
            key = 'SPACE';
            break;
        case 37:
            key = 'LEFT';
            break;
        case 38:
            key = 'UP';
            break;
        case 39:
            key = 'RIGHT';
            break;
        case 40:
            key = 'DOWN';
            break;
        default:
            // Convert ASCII codes to letters
            key = String.fromCharCode(code);
        // console.log(key);
    }

    pressedKeys[key] = status;
};

document.addEventListener('keydown', function (e) {
    setKey(e, true);
});

document.addEventListener('keyup', function (e) {
    setKey(e, false);
});

window.addEventListener('blur', function () {
    pressedKeys = {};
});

var isDown = function isDown(key) {
    return pressedKeys[key.toUpperCase()];
};

exports.isDown = isDown;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

var _Sprite = __webpack_require__(5);

var _Sprite2 = _interopRequireDefault(_Sprite);

var _Entity = __webpack_require__(1);

var _Entity2 = _interopRequireDefault(_Entity);

var _Character = __webpack_require__(6);

var _Character2 = _interopRequireDefault(_Character);

var _Sound = __webpack_require__(7);

var _Sound2 = _interopRequireDefault(_Sound);

var _input = __webpack_require__(2);

var _resources = __webpack_require__(0);

var _utils = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext("2d");
canvas.width = 2100;
canvas.height = 1300;
var WIDTH = canvas.width;
var HEIGHT = canvas.height;

var lastTime = void 0;

var enemies = [];
var explosions = [];

var bullet_type_1 = new _Sprite2.default('img/sheet.png', [848, 480], [10, 57]);
var bullet_type_2 = new _Sprite2.default('img/sheet.png', [848, 364], [10, 57]);
var bullet_type_3 = new _Sprite2.default('img/sheet.png', [808, 300], [26, 26]);

var enemi_type_1 = new _Sprite2.default('img/sheet.png', [347, 151], [96, 82]);
var enemi_type_2 = new _Sprite2.default('img/sheet.png', [328, 452], [96, 96]);
var enemi_type_3 = new _Sprite2.default('img/sheet.png', [430, 385], [86, 82]);
var enemi_type_4 = new _Sprite2.default('img/death_star.png', [0, 0], [300, 300]);

var background = new _Sprite2.default('img/starBackground.png', [0, 0], [254, 254], 1, [0, 1]);
var hero = new _Sprite2.default('img/sheet.png', [211, 942], [98, 90], 16, [0, 1]);

var explosion = new _Sprite2.default('img/explosions.png', [0, 0], [256, 200], 16, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, true);

var life = new _Sprite2.default('img/sheet.png', [848, 480], [10, 57]);

var gameTime = 0;
var isGameOver = void 0;
var isWin = false;

var score = 0;
var scoreEl = document.getElementById('score');
var heroLifeEl = document.getElementById('hero_life');
var bossProgress = document.querySelector('.boss_life');
var bossLifeProgress = document.querySelector('.progress');
var volume = 1;
var isboss = false;

var playerSpeed = 200;
var playerLife = 5;

var enemyLive = 1;

var bossSpeed = 150;
var bossLife = 20;
var bossScore = 25000;

var bulletSpeed = 800;

var game_background = new _Entity2.default([0, 0], background);
var player_life = new _Entity2.default([0, 0], life);
var player = new _Character2.default([0, 0], hero, playerSpeed, null, playerLife);
var boss = new _Character2.default([WIDTH / 2, HEIGHT / 5], enemi_type_4, bossSpeed, 'boss', bossLife);

// Sounds
var marchingSound = void 0;
var laserSound = void 0;
var exploSound = void 0;
var maingSound = void 0;

var loadSounds = function loadSounds() {
    marchingSound = new _Sound2.default('sound/dart_veyder.mp3', 0.1 * volume, true);
    laserSound = new _Sound2.default('sound/laser.mp3', 0.05 * volume);
    exploSound = new _Sound2.default('sound/explosion.mp3', 0.1 * volume);
    maingSound = new _Sound2.default('sound/unknown planet.mp3', 0.1 * volume, true);
};

// The main game loop
var main = function main() {
    var now = Date.now();
    var dt = (now - lastTime) / 1000.0;

    update(dt);
    render();

    lastTime = now;
    (0, _utils.animFrame)(main);
};

var init = function init() {
    document.getElementById('play-again').addEventListener('click', function () {
        reset();
    });

    heroLifeEl.innerHTML = '<img class="ships">'.repeat(player.life);
    loadSounds();
    reset();
    lastTime = Date.now();
    main();
};

_resources.resources.load(['img/sheet.png', 'img/starBackground.png', 'img/explosions.png', 'img/death_star.png', 'sound/dart_veyder.mp3', 'sound/laser.mp3', 'sound/explosion.mp3', 'sound/unknown planet.mp3']);

var start = function start() {

    document.querySelector('.preloader').classList.add('done');
    document.querySelector('#playButton').addEventListener('click', function () {
        document.querySelector('.preview').style.display = 'none';
        document.querySelector('canvas').style.display = 'block';
        init();
    });
};

_resources.resources.onReady(start);

var update = function update(dt) {
    gameTime += dt;

    handleInput(dt);
    updateEntities(dt);

    if (Math.random() < 1 - Math.pow(.9997, gameTime) && !isboss) {
        if (score >= bossScore) {
            enemies.length = 0;
            enemies.push(boss);
            isboss = !isboss;
            maingSound.stop();
            marchingSound.play();
            bossProgress.style.display = 'block';
        }
        if (enemies.length % 10 || !enemies.length) {
            enemies.push(new _Character2.default([Math.random() * (canvas.width - 39), 0], enemi_type_1, (0, _utils.randomSpeed)(50, 300), 'ship', enemyLive));
        } else if (enemies.length % 20) {
            enemies.push(new _Character2.default([Math.random() * (canvas.width - 39), 0], enemi_type_2, (0, _utils.randomSpeed)(50, 300), 'stone', enemyLive));
        } else {
            enemies.push(new _Character2.default([Math.random() * (canvas.width - 39), 0], enemi_type_3, (0, _utils.randomSpeed)(50, 300), 'fighter', enemyLive));
        }
    }

    checkCollisions();

    scoreEl.innerHTML = 'Score:<br>' + score;

    if (isboss) {
        bossLifeProgress.style.width = 500 * boss.life / bossLife + 'px';
    }
};

var handleInput = function handleInput(dt) {

    player.handleInput(dt);

    if ((0, _input.isDown)('9')) {
        score = 24900;
    }

    if ((0, _input.isDown)('SPACE') && !isGameOver && Date.now() - player.lastFire > 500) {

        var x = player.pos[0] + player.sprite.size[0] / 2 - 5;
        var y = player.pos[1] - player.sprite.size[1] / 2;
        var left_x = x - player.sprite.size[0] / 2;
        var left_y = y + player.sprite.size[1] / 4;
        var right_x = x + player.sprite.size[0] / 2;
        var right_y = y + player.sprite.size[1] / 4;

        player.bullets.push(new _Entity2.default([x, y], bullet_type_1, bulletSpeed, 'forward'));
        player.bullets.push(new _Entity2.default([left_x, left_y], bullet_type_2, bulletSpeed, 'left'));
        player.bullets.push(new _Entity2.default([right_x, right_y], bullet_type_2, bulletSpeed, 'right'));
        laserSound.replay();
        player.lastFire = Date.now();
    }

    if (isboss) {

        for (var i = 0; i < enemies.length; i++) {
            if (enemies[i].dir === 'boss') {
                enemies[i].autopilot(dt, WIDTH, HEIGHT);
            }

            if (!isGameOver && Date.now() - enemies[i].lastFire > 2000) {
                var _x = enemies[i].pos[0] + enemies[i].sprite.size[0] / 2;
                var _y = enemies[i].pos[1] + enemies[i].sprite.size[1];

                enemies[i].bullets.push(new _Entity2.default([_x, _y], bullet_type_3, bulletSpeed, 'boss'));

                enemies[i].lastFire = Date.now();
            }
        }
    }
};

var updateEntities = function updateEntities(dt) {

    game_background.sprite.background_update(score, bossScore);
    player.update_bullets(WIDTH, HEIGHT, dt, bulletSpeed);

    for (var i = 0; i < enemies.length; i++) {

        if (enemies[i].dir !== 'boss') {
            enemies[i].pos[1] += dt * enemies[i].speed;
        }

        if (enemies[i].dir === 'fighter') {
            enemies[i].pos[0] > player.pos[0] ? enemies[i].speed * enemies[i].pos[0]-- : enemies[i].speed * enemies[i].pos[0]++;
        }
        if (enemies[i].dir === 'stone') {
            enemies[i].pos[0] -= dt * enemies[i].speed;
        }

        if (enemies[i].pos[0] + enemies[i].sprite.size[0] < 0) {
            enemies.splice(i, 1);
            i--;
        }

        if (!isWin) {
            enemies[i].update_bullets(WIDTH, HEIGHT, dt, bulletSpeed, player);
        }
    }

    for (var _i = 0; _i < explosions.length; _i++) {
        explosions[_i].sprite.update(dt);

        if (explosions[_i].sprite.done) {
            explosions.splice(_i, 1);
            _i--;
        }
    }
};

// Collisions

var checkCollisions = function checkCollisions() {

    player.checkBounds(WIDTH, HEIGHT);

    for (var i = 0; i < enemies.length; i++) {
        var pos = enemies[i].pos;
        var size = enemies[i].sprite.size;

        if (enemies[i].dir === 'boss') {
            for (var j = 0; j < enemies[i].bullets.length; j++) {
                var _pos = enemies[i].bullets[j].pos;
                var _size = enemies[i].bullets[j].sprite.size;

                if ((0, _utils.boxCollides)(_pos, _size, player.pos, player.sprite.size) && player.visible) {
                    gameOver();
                }
            }
        }

        for (var _j = 0; _j < player.bullets.length; _j++) {
            var pos2 = player.bullets[_j].pos;
            var size2 = player.bullets[_j].sprite.size;

            if ((0, _utils.boxCollides)(pos, size, pos2, size2) && enemies[i].visible) {

                if (enemies[i].dir !== 'boss') {
                    if (enemies[i].dir !== 'stone') {
                        enemies.splice(i, 1);
                        i--;
                    }
                } else {
                    win();
                }

                score += 100;

                // explosions.push(new Entity(pos, explosion));
                explosions.push({
                    pos: pos,
                    sprite: new _Sprite2.default('img/explosions.png', [0, 0], [256, 200], 16, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, true)
                });
                exploSound.replay();

                // Remove the bullet and stop this iteration
                player.bullets.splice(_j, 1);
                break;
            }
        }

        if ((0, _utils.boxCollides)(pos, size, player.pos, player.sprite.size) && player.visible) {
            gameOver();
        }
    }
};

// Draw everything
var render = function render() {

    game_background.sprite.background_render(ctx, WIDTH, HEIGHT);

    if (!isGameOver) {
        renderEntity(player);
        renderEntities(player.bullets);
    }

    if (isboss) {
        // renderEntity(boss);
        renderEntities(boss.bullets);
    }

    if (!isWin) {
        renderEntities(enemies);
        renderEntities(explosions);
    }
    renderEntities(player_life);
};

var renderEntities = function renderEntities(list) {
    for (var i = 0; i < list.length; i++) {
        renderEntity(list[i]);
    }
};

var renderEntity = function renderEntity(entity) {
    ctx.save();
    ctx.translate(entity.pos[0], entity.pos[1]);
    entity.sprite.render(ctx);
    ctx.restore();
};

// Game over
var gameOver = function gameOver() {

    if (player.damage()) {
        document.getElementById('game-over').style.display = 'block';
        document.getElementById('game-over-overlay').style.display = 'block';
        document.querySelector('.gameInfo').innerHTML = 'GAME OVER';
        isGameOver = true;
    }
    heroLifeEl.innerHTML = '<div class="ships"></div>'.repeat(player.life);
};

var win = function win() {

    if (boss.damage()) {
        document.getElementById('game-over').style.display = 'block';
        document.getElementById('game-over-overlay').style.display = 'block';
        document.querySelector('.gameInfo').innerHTML = 'YOU WON';
        marchingSound.stop();
        isWin = true;
        enemies = [];
    }
};

// Reset game to original state
var reset = function reset() {
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('game-over-overlay').style.display = 'none';
    isGameOver = false;
    isboss = false;
    isWin = false;
    gameTime = 0;
    score = 0;

    enemies = [];
    maingSound.replay();

    player = new _Character2.default([0, 0], hero, playerSpeed, null, playerLife);
    boss = new _Character2.default([WIDTH / 2, HEIGHT / 5], enemi_type_4, bossSpeed, 'boss', bossLife);

    bossLifeProgress.style.width = 500 + 'px';
    bossProgress.style.display = 'none';

    heroLifeEl.innerHTML = '<div class="ships"></div>'.repeat(player.life);

    player.pos = [WIDTH / 2 - player.sprite.size[0], HEIGHT - player.sprite.size[1]];
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _resources = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sprite = function () {
    function Sprite(url, pos, size, speed, frames, dir, once) {
        _classCallCheck(this, Sprite);

        this.pos = pos;
        this.size = size;
        this.speed = typeof speed === 'number' ? speed : 0;
        this.frames = frames;
        this._index = 0;
        this.url = url;
        this.dir = dir || 'horizontal';
        this.once = once;
    }

    _createClass(Sprite, [{
        key: 'update',
        value: function update(dt) {
            this._index += this.speed * dt;
        }
    }, {
        key: 'render',
        value: function render(ctx) {
            var frame = void 0;

            if (this.speed > 0) {
                var max = this.frames.length;
                var idx = Math.floor(this._index);
                frame = this.frames[idx % max];

                if (this.once && idx >= max) {
                    this.done = true;
                    return;
                }
            } else {
                frame = 0;
            }

            var x = this.pos[0];
            var y = this.pos[1];

            if (this.dir == 'vertical') {
                y += frame * this.size[1];
            } else {
                x += frame * this.size[0];
            }

            ctx.drawImage(_resources.resources.get(this.url), x, y, this.size[0], this.size[1], 0, 0, this.size[0], this.size[1]);
        }
    }, {
        key: 'background_render',
        value: function background_render(ctx, WIDTH, HEIGHT) {
            var widthCount = WIDTH / this.size[1] + 1;
            for (var j = 0; j < widthCount; j++) {
                for (var i = 0; i < WIDTH / this.size[0] + 1; i++) {
                    ctx.drawImage(_resources.resources.get(this.url), this.pos[1] + j * this.size[1] - this.size[1], this.pos[0] + i * this.size[0] - this.size[0]);
                }
            }
        }
    }, {
        key: 'background_update',
        value: function background_update(score, bossScore) {
            if (score < bossScore) {
                this.pos[0] += this.speed * score / 1000 + 1;
            } else {
                this.pos[0] += this.speed;
            }
            if (this.pos[0] > this.size[1]) {
                this.pos[0] = 0;
            }
        }
    }]);

    return Sprite;
}();

exports.default = Sprite;
;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _input = __webpack_require__(2);

var _Entity2 = __webpack_require__(1);

var _Entity3 = _interopRequireDefault(_Entity2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Character = function (_Entity) {
    _inherits(Character, _Entity);

    function Character(pos, sprite, speed, dir, life) {
        _classCallCheck(this, Character);

        var _this = _possibleConstructorReturn(this, (Character.__proto__ || Object.getPrototypeOf(Character)).call(this, pos, sprite, speed, dir));

        _this.life = life || 1;
        _this.lastFire = Date.now();
        _this.border = false;
        _this.bullets = [];
        _this.visible = true;
        // this.size = this.sprite.size;
        return _this;
    }

    _createClass(Character, [{
        key: 'autopilot',
        value: function autopilot(dt, WIDTH, HEIGHT) {

            if (this.pos[0] < this.sprite.size[0] / 2 || this.pos[0] > WIDTH - this.sprite.size[0] * 1.5) {

                this.border = !this.border;
            };

            this.border ? this.pos[0] += this.speed * dt : this.pos[0] -= this.speed * dt;
        }
    }, {
        key: 'handleInput',
        value: function handleInput(dt) {

            if ((0, _input.isDown)('DOWN') || (0, _input.isDown)('s')) {
                this.pos[1] += this.speed * dt;
            }

            if ((0, _input.isDown)('UP') || (0, _input.isDown)('w')) {
                this.pos[1] -= this.speed * dt;
            }

            if ((0, _input.isDown)('LEFT') || (0, _input.isDown)('a')) {
                this.pos[0] -= this.speed * dt;
            }

            if ((0, _input.isDown)('RIGHT') || (0, _input.isDown)('d')) {
                this.pos[0] += this.speed * dt;
            }
        }
    }, {
        key: 'checkBounds',
        value: function checkBounds(WIDTH, HEIGHT) {

            if (this.pos[0] < 0) {
                this.pos[0] = 0;
            } else if (this.pos[0] > WIDTH - this.sprite.size[0]) {
                this.pos[0] = WIDTH - this.sprite.size[0];
            }

            if (this.pos[1] < 0) {
                this.pos[1] = 0;
            } else if (this.pos[1] > HEIGHT - this.sprite.size[1]) {
                this.pos[1] = HEIGHT - this.sprite.size[1];
            }
        }
    }, {
        key: 'update_bullets',
        value: function update_bullets(WIDTH, HEIGHT, dt, bulletSpeed, player) {

            for (var i = 0; i < this.bullets.length; i++) {
                var bullet = this.bullets[i];

                if (player) {
                    this.pos[0] > player.pos[0] ? bullet.pos[0] -= bulletSpeed * dt : bullet.pos[0] += bulletSpeed * dt;
                    bullet.pos[1] += bulletSpeed * dt * 2;
                } else {
                    bullet.pos[1] -= bulletSpeed * dt;
                }

                // Remove the bullet if it goes offscreen
                if (bullet.pos[1] < 0 || bullet.pos[1] > HEIGHT || bullet.pos[0] > WIDTH) {
                    this.bullets.splice(i, 1);
                    i--;
                }
            }
        }
    }, {
        key: 'damage',
        value: function damage() {

            var that = this;
            var temp = this.sprite.size;
            this.life--;
            this.visible = false;

            setTimeout(function () {
                that.visible = true;
            }, 3000);

            var _loop = function _loop(i) {
                setTimeout(function () {
                    that.sprite.size = [0, 0];
                    setTimeout(function () {
                        that.sprite.size = temp;
                    }, 100 * i);
                }, 100 * i);
            };

            for (var i = 0; i < 20; i++) {
                _loop(i);
            }

            return this.life === 0;
        }
    }]);

    return Character;
}(_Entity3.default);

exports.default = Character;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _resources = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sound = function () {
    function Sound(url, volume, loop) {
        _classCallCheck(this, Sound);

        this.audio = document.createElement('audio');
        this.source = document.createElement('source');
        this.source.src = url;
        this.audio.loop = loop || false;
        this.audio.volume = volume;
        this.audio.appendChild(this.source);
    }

    _createClass(Sound, [{
        key: 'play',
        value: function play() {
            this.audio.play();
        }
    }, {
        key: 'pause',
        value: function pause() {
            this.audio.pause();
        }
    }, {
        key: 'stop',
        value: function stop() {
            this.audio.pause();
            this.audio.currentTime = 0;
        }
    }, {
        key: 'replay',
        value: function replay() {
            this.stop();
            this.play();
        }
    }]);

    return Sound;
}();

exports.default = Sound;
;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var collides = function collides(x, y, r, b, x2, y2, r2, b2) {
    return !(r <= x2 || x > r2 || b <= y2 || y > b2);
};

var boxCollides = function boxCollides(pos, size, pos2, size2) {
    return collides(pos[0], pos[1], pos[0] + size[0], pos[1] + size[1], pos2[0], pos2[1], pos2[0] + size2[0], pos2[1] + size2[1]);
};

var animFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        setTimeout(callback, 1000 / 60);
    };
}();

var randomSpeed = function randomSpeed(min, max) {
    return Math.random() * (max - min) + min;
};

exports.collides = collides;
exports.boxCollides = boxCollides;
exports.animFrame = animFrame;
exports.randomSpeed = randomSpeed;

/***/ })
/******/ ]);