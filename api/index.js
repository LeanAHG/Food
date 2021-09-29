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
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console

    // let glutenFree = DietaType.findOrCreate({
    //   where:{
    //     category: 'Gluten free'
    //   }
    // })

    // let dairyFree = DietaType.findOrCreate({
    //   where:{
    //     category: 'Dairy free'
    //   } 
    // })

    // let lov = DietaType.findOrCreate({
    //   where:{
    //     category: 'Lacto ovo vegetarian'
    //   } 
    // })

    // let vegan = DietaType.findOrCreate({
    //   where:{
    //     category: 'Vegan'
    //   }  
    // })

    // let vegetarian = DietaType.findOrCreate({
    //   where:{
    //     category: 'Vegetarian'
    //   }
    // })

    // let primal = DietaType.findOrCreate({
    //   where:{
    //     category: 'Primal'
    //   }
    // })

    // let paleolithic = DietaType.findOrCreate({
    //   where:{
    //     category: 'Paleolithic'
    //   } 
    // })

    // let pescatarian = DietaType.findOrCreate({
    //   where:{
    //     category: 'Pescatarian'
    //   } 
    // })

    // let ketogenic = DietaType.findOrCreate({
    //   where:{
    //     category: 'Ketogenic'
    //   }  
    // })

    // let whole = DietaType.findOrCreate({
    //   where:{
    //     category: 'Whole 30'
    //   }  
    // })

    // Promise.all([glutenFree, dairyFree, lov, vegan, vegetarian, primal, paleolithic, pescatarian, ketogenic, whole])
    //   .then(res => {
    //     console.log('Categorias precargadas')
    //   });
  });
});
