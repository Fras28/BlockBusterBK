import blockbuster from "./models/blockbuster.model";
import comments from "./models/coments.model";
import user from "./models/users.model";
import favMovies from "./models/favMovies";

const dbInit = () =>
  Promise.all([
    blockbuster.sync({ alter: true }),
    user.sync({ alter: true }),
    comments.sync({ alter: true }),
    favMovies.sync({ alter: true }),
  ])
    .then(async() => {
      await favMovies.sync({ alter: true });
    })
    .catch(() => {
      "error BDinit";
    });

export default dbInit;
