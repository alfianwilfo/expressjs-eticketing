const UUID = require("uuid-int");

function generator(index = 0) {
  let id = Math.floor(Math.random() * 510);

  if (index) {
    id = index;
  }

  let generator = UUID(id);
  let uuid = generator.uuid();

  return uuid;
}

module.exports = {
  generator,
};
