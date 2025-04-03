
export default {
  basePath: 'C:/Program Files/Git/todo-list',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
