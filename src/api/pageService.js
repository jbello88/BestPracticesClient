const baseUrl = "http://localhost:4000/";

const pageService = {
  getAllPages: async () => {
    const pages = await fetch(baseUrl + "pages");
    return pages;
  },

  getPage: async (id) => {
    const page = await fetch(baseUrl + "pages/" + id);
    return page;
  },
};

export default pageService;
