const { getAsync } = require("./");

async function getAddedTodos() {
  return parseInt(await getAsync("added_todos")) || 0;
}

module.exports = {
  getAddedTodos,
};
