import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /**@type {import('./models/Account.js').Account} */
  account: {},

  /**@type {import('./models/Profile.js').Profile} */
  activeProfile: {},

  /**@type {import('./models/Blog.js').Blog[]} */
  blogs: [],

  /**@type {import('./models/Blog.js').Blog} */
  activeBlog: null,
})
