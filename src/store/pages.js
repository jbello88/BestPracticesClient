import { action, thunk } from "easy-peasy";
import pageService from "../api/pageService";

const pages = {
  pages: [],
  cachedPages: new Map(),
  page: null,

  addLoadedPages: action((state, pages) => {
    state.pages.push(pages);
  }),

  setPage: action((state, page) => {
    if (!state.cachedPages.has(page.slug)) {
      state.cachedPages.set(page.slug, page);
    }
    state.page = page;
  }),

  loadPages: thunk(async (actions, payload) => {
    const pages = await pageService.getAllPages();
    actions.addLoadedPages(pages);
  }),

  loadPage: thunk(async (actions, slug, helpers) => {
    const localState = helpers.getState();
    if (this.cachedPages.has(slug)) {
      actions.setPage(localState.cachedPages.get(slug));
      return;
    }

    const id = localState.pages.filter((p) => p.slug === slug)[0]._id;
    const page = await pageService.getPage(id);
    actions.setPage(page);
  }),
};

export default pages;
