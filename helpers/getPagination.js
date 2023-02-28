const getPagination = (page, size) => {
  console.log(page, size, "sini");
    const limit = size ? +size : 10;
    const offset = page ? page * limit : 0;
    return { limit, offset };
  };
module.exports = getPagination