module.exports = {
    "/node/": require('../node/sidebar'),
    "/web/":[
      ["", "前端"],
      {
        title: "css",
        name: "css",
        collabsable: false,
        children: [
          ["css/", "目录"],
          ['css/1', "css常考面试题"]
        ]
      }
    ]
  }
