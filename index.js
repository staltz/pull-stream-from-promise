module.exports = function fromPromise(promise) {
  var sent = false;
  return function readable(end, cb) {
    if (end) return cb(end);
    promise.then(function(result) {
      if (sent) return cb(true);
      cb(null, result);
      sent = true;
    }, cb);
  };
};
