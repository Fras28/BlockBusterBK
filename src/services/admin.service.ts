import Blockbuster from "../db/models/blockbuster.model";
import Users from "../db/models/users.model";
import Comments from "../db/models/coments.model";
import favMovies from "../db/models/favMovies";

export type Movie = {
  id: number;
  name: string;
  year: string;
  genre: string;
  poster: string;
  country: string;
  rated: string;
  released: string;
  runtime: string;
  director: string;
  actors: string;
  plot: string;
  language: string;
  imdbVotes: string;
  imdbRating: string;
  status: boolean;
};

export type Adm = "admin";

export type User = {
  id?: number;
  name: string;
  lastname: string;
  nickname: string;
  date?: string;
  picture: string;
  email: string;
  status: boolean;
  category: Adm;
};

export type Comment = {
  id?: number;
  movieId: number;
  idUser: number;
  name: string;
  coment: string;
  picture: string;
  status: boolean;
};

export class AdminService {
  constructor(private UserModel: Users) {}

  async bannUser(id: number) {
    let userX = await Users.update({ status: false }, { where: { id } });
    return userX;
  }

  async unnBanUser(id: number) {
    let userX = await Users.update({ status: true }, { where: { id } });
    return userX;
  }

  async addMovie(movie: Movie) {
    console.log(movie);
    const findInDb = Blockbuster.findOne({ where: { name: movie.name } });
    if (!findInDb) {
      return await Blockbuster.create(movie, { validate: true });
    }
    throw Error;
  }

  async statusMovie(id: number) {
    const movieInfo: Movie[] = await Blockbuster.findAll({ where: { id } });
    if (movieInfo[0].status === true) {
      const byeMovie = await Blockbuster.update(
        { status: false },
        { where: { id } }
      );
      return !!byeMovie;
    } else {
      const byeMovie = await Blockbuster.update(
        { status: true },
        { where: { id } }
      );
      return !!byeMovie;
    }
  }

  async defineAdmin(id: number) {
    let userX = await Users.update({ category: "admin" }, { where: { id } });
    return userX;
  }

  async editeName(id: number, string: string) {
    let editName = await Blockbuster.update(
      { name: string },
      { where: { id } }
    );
    return editName;
  }

  async editeYear(id: number, string: string) {
    let editName = await Blockbuster.update(
      { year: string },
      { where: { id } }
    );
    return editName;
  }

  async editePoster(id: number, string: string) {
    let editName = await Blockbuster.update(
      { poster: string },
      { where: { id } }
    );
    return editName;
  }

  async editeGenre(id: number, string: string) {
    let editName = await Blockbuster.update(
      { genre: string },
      { where: { id } }
    );
    return editName;
  }

  async editeCountry(id: number, string: string) {
    let editName = await Blockbuster.update(
      { country: string },
      { where: { id } }
    );
    return editName;
  }

  async editeRated(id: number, string: string) {
    let editName = await Blockbuster.update(
      { rated: string },
      { where: { id } }
    );
    return editName;
  }

  async editeReleased(id: number, string: string) {
    let editName = await Blockbuster.update(
      { released: string },
      { where: { id } }
    );
    return editName;
  }

  async editeRuntime(id: number, string: string) {
    let editName = await Blockbuster.update(
      { runtime: string },
      { where: { id } }
    );
    return editName;
  }

  async editeDirector(id: number, string: string) {
    let editName = await Blockbuster.update(
      { director: string },
      { where: { id } }
    );
    return editName;
  }

  async editeActors(id: number, string: string) {
    let editName = await Blockbuster.update(
      { actors: string },
      { where: { id } }
    );
    return editName;
  }

  async editePlot(id: number, string: string) {
    let editName = await Blockbuster.update(
      { plot: string },
      { where: { id } }
    );
    return editName;
  }

  async editeLanguage(id: number, string: string) {
    let editName = await Blockbuster.update(
      { language: string },
      { where: { id } }
    );
    return editName;
  }

  async editeimdbVotes(id: number, string: string) {
    let editName = await Blockbuster.update(
      { imdbVotes: string },
      { where: { id } }
    );
    return editName;
  }

  async editeimdbRating(id: number, string: string) {
    let editName = await Blockbuster.update(
      { imdbRating: string },
      { where: { id } }
    );
    return editName;
  }

  async getUserByEmail(email: string) {
    let emailUser = await Users.findOne({ where: { email } });
    return emailUser;
  }

  async allUsers() {
    let arrUsers = await Users.findAll();
    arrUsers.sort((a, b) => {
      if (a.nickname < b.nickname) {
        return 1;
      }
      if (b.nickname < a.nickname) {
        return -1;
      }
      return 0;
    });
    return arrUsers;
  }

  async getUserById(id: number) {
    let idUser = await Users.findOne({ where: { id } });
    return idUser;
  }

  async bannComment(idUser: number) {
    let bann = await Comments.update({ status: false }, { where: { idUser } });
    return bann;
  }
}
