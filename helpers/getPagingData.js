const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: tickets } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
  
    return { totalItems, tickets, totalPages, currentPage };
  };

module.exports = getPagingData