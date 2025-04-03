
export default {
  basePath: 'https://Max-M1.github.io/todo-list',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
