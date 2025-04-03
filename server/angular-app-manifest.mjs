
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Max-M1.github.io/todo-list/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/todo-list"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 526, hash: '64c9d499b4ec2b719e2111b577c2db6981f6e8ca8e10f60aac45bab5180e4164', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1039, hash: '86908234aa4a2cbf96553a40f5199f493fa5040867c4213a7326ce402f1f32b2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6144, hash: '4b7bf9273a9a22cbbeddd7683a04185e6a7aa65e69054928deae3246375bfaba', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
