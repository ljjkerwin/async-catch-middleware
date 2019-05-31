# A middleware for wrapping the other middleware to catch the error of the async function in expressjs


```
const asyncCatch = require('async-catch-middleware');

app.use(asyncCatch(async function () {

  // do something

  throw Error('some error');

  // then the error would be passed to the next() function in the middleware
}))

```