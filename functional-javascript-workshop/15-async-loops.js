module.exports = loadUsers

function loadUsers(userIds, load, done_cb) {
  var users = [];
  var done=0;
  userIds.forEach(function (id, idx) {
    load(id, function(user) {
      users[idx] = user;
      done++;
      if (done == userIds.length) { return done_cb(users) }
    });
  });
}
