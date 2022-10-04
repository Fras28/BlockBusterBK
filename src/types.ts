
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
  name: string;
  lastname: string;
  nickname: string;
  picture: string;
  email: string;
  status: boolean;
  category: "admin";
};