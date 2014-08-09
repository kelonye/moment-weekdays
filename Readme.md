Install
---

Node

    $ npm install moment
    $ npm install kelonye/moment-weekdays

Browser

    $ component install component/moment
    $ component install kelonye/moment-weekdays

Use
---

```javascript

var moment = require('moment');
var plugin = require('moment-weekdays');

// apply

plugin(moment);

moment().weekdays('Monday').add(1); // next Monday
moment().weekdays('Friday').subtract(2);// 2 Fridays before
moment().weekdays('Thurday', 3); // 3 Thursdays from now
moment().weekdays(4, -3); // 3 Thursdays before

```

Test
---

Node

    $ make

Browser

    $ make test-component

Licence
---

MIT