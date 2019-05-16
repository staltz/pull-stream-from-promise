var pull = require('pull-stream');
var test = require('tape');
var fromPromise = require('./index');

test('convert a resolving promise to pull stream', function(t) {
  t.plan(1);
  var ps = fromPromise(Promise.resolve(42));
  pull(
    ps,
    pull.drain(
      x => {
        t.equals(x, 42);
      },
      () => {
        t.end();
      },
    ),
  );
});

test('convert a rejecting promise to pull stream', function(t) {
  t.plan(1);
  var ps = fromPromise(Promise.reject(new Error('bad')));
  pull(
    ps,
    pull.drain(
      () => {
        t.fail('should not drain');
      },
      err => {
        t.equals(err.message, 'bad');
        t.end();
      },
    ),
  );
});
