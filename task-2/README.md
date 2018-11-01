<code>setInterval(ticker.tick, 1000);</code><br>
Так вызов callback'a не сработает, так как контекстом вызова будет windows<br>
И интерпритатор будет искать _i в windows<br>
Чтоб это исправить, нужно просто привязать контекст в объекту ticker<br>
<code>setInterval(ticker.tick.bind(ticker), 1000);</code><br>
