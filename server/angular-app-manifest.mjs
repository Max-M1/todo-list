
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/todo-list/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/todo-list"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 522, hash: 'f496ed4c938b145d27cc56618b6fd0c965974a4a1d743de715b1497cd2f3b515', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1035, hash: '9d2baf52d1d6737da5daa5bf9aca3366430fee546962da4144ea0b4bf9001375', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
