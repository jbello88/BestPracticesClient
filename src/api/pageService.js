const baseUrl = "http://localhost:4000/";

const pageService = {
  getAllPages: async () => {
    const pages = await fetch(baseUrl + "pages");
    return pages;
  },
};

export default pageService;
