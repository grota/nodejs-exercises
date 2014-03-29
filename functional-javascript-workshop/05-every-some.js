module.exports = function (valid_users) {
  return function (check_against) {
    return check_against.every(function (check_against_val) {
       return valid_users.some(function (valid_user_val) {
         return valid_user_val.id == check_against_val.id;
       });
    });
  };
}
