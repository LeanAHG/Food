//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, DietaType } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console

    var glutenFree = DietaType.create({
      category: 'Gluten free'
    })

    var dairyFree = DietaType.create({
      category: 'Dairy free'
    })

    var lov = DietaType.create({
      category: 'Lacto ovo vegetarian'
    })

    var vegan = DietaType.create({
      category: 'Vegan'
    })

    var vegetarian = DietaType.create({
      category: 'Vegetarian'
    })

    var primal = DietaType.create({
      category: 'Primal'
    })

    var paleolithic = DietaType.create({
      category: 'Paleolithic'
    })

    var pescatarian = DietaType.create({
      category: 'Pescatarian'
    })

    var fodmap = DietaType.create({
      category: 'Fodmap friendly'
    })

    Promise.all([glutenFree, dairyFree, lov, vegan, vegetarian, primal, paleolithic, pescatarian, fodmap])
      .then(res => {
        console.log('Categorias precargadas')
      });
  });
});
