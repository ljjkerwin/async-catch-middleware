# A middleware for wrapping the other middleware to catch the error of the async function


```
const catch = require('async-catch-middleware');

app.use(catch(async function () {

  // do something

  throw Error('some error');

  // then the error would be passed to the next() function in the middleware
}))

```