import products from "./models/products.model";
import comments from "./models/coments.model";
import user from "./models/users.model";
import favProducts from "./models/favProducts";

const dbInit = () =>
  Promise.all([
    products.sync({ alter: true }),
    user.sync({ alter: true }),
    comments.sync({ alter: true }),
    favProducts.sync({ alter: true }),
  ])
    .then(async() => {
      await favProducts.sync({ alter: true });
    })
    .catch(() => {
      "error BDinit";
    });

export default dbInit;
