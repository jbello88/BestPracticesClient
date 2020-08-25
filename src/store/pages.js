import { action, thunk } from "easy-peasy";
import pageService from "../api/pageService";

const pages = {
  pages: [],
  addLoadedPages: action((state, pages) => {
    state.pages.push(pages);
  }),

  loadPages: thunk(async (actions, payload) => {
    await pageService.getAllPages();
    actions.addLoadedPages(payload);
  }),
};

export default pages;
