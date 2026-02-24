function Pagination({ links, meta, goToPage }: any) {
  const maxButtons = 5;
  const { current_page, last_page } = meta;

  let startPage = Math.max(current_page - Math.floor(maxButtons / 2), 1);
  let endPage = startPage + maxButtons - 1;

  if (endPage > last_page) {
    endPage = last_page;
    startPage = Math.max(endPage - maxButtons + 1, 1);
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center items-center gap-2 mt-10">
      <button
        disabled={!links.prev}
        onClick={() => goToPage(current_page - 1)}
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
      >
        Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          className={`px-3 py-1 rounded ${
            current_page === page ? "bg-primary text-white" : "bg-gray-200"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        disabled={!links.next}
        onClick={() => goToPage(current_page + 1)}
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;