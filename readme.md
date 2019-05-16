# pull-stream-from-promise

> Converts a promise to a pull-stream

```bash
npm install --save pull-stream-from-promise
```

## Usage

```js
var pull = require('pull-stream')
var fromPromise = require('pull-stream-from-promise')

var source = fromPromise(Promise.resolve(42))

pull(
  source,
  pull.drain(x => {
    console.log(x) // 42
  })
)
```

## License

[MIT](https://tldrlegal.com/license/mit-license)

