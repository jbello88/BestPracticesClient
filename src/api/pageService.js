const baseUrl = "http://localhost:4000/api/";

const pageService = {
  getAllPages: async () => {
    let pages = await fetch(baseUrl + "pages");
    pages = await pages.json();
    return pages;
  },

  getPage: async (id) => {
    let page = await fetch(baseUrl + "pages/" + id);
    page = await page.json();
    console.log("WWWWWWWWWWWWWWWWWWWWWWWW");
    console.log(page);
    return page;
  },
};

export default pageService;
