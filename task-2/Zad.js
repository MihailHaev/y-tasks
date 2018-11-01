// Создаём функцию конструктор
function Ticker() {
  this._i = 0
};
// Создаём метод в конструкторе
Ticker.prototype = {
  tick: function() {
    console.log(this._i++);
  }
};
// Создаём объект
var ticker = new Ticker();

// setInterval(ticker.tick, 1000);
// Так вызов callback'a не сработает, так как контекстом вызова будет windows
// Чтоб это исправить, нужно просто привязать контекст в объекту ticker 

// Вызываем каждую секунду метод tick объекта ticker в контексте этого объекта
setInterval(ticker.tick.bind(ticker), 1000);