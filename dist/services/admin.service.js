"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const blockbuster_model_1 = __importDefault(require("../db/models/blockbuster.model"));
const users_model_1 = __importDefault(require("../db/models/users.model"));
const coments_model_1 = __importDefault(require("../db/models/coments.model"));
class AdminService {
    constructor(UserModel) {
        this.UserModel = UserModel;
    }
    bannUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let userX = yield users_model_1.default.update({ status: false }, { where: { id } });
            return userX;
        });
    }
    unnBanUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let userX = yield users_model_1.default.update({ status: true }, { where: { id } });
            return userX;
        });
    }
    addMovie(movie) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(movie);
            const findInDb = blockbuster_model_1.default.findOne({ where: { name: movie.name } });
            if (!findInDb) {
                return yield blockbuster_model_1.default.create(movie, { validate: true });
            }
            throw Error;
        });
    }
    statusMovie(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const movieInfo = yield blockbuster_model_1.default.findAll({ where: { id } });
            if (movieInfo[0].status === true) {
                const byeMovie = yield blockbuster_model_1.default.update({ status: false }, { where: { id } });
                return !!byeMovie;
            }
            else {
                const byeMovie = yield blockbuster_model_1.default.update({ status: true }, { where: { id } });
                return !!byeMovie;
            }
        });
    }
    defineAdmin(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let userX = yield users_model_1.default.update({ category: "admin" }, { where: { id } });
            return userX;
        });
    }
    editeName(id, string) {
        return __awaiter(this, void 0, void 0, function* () {
            let editName = yield blockbuster_model_1.default.update({ name: string }, { where: { id } });
            return editName;
        });
    }
    editeYear(id, string) {
        return __awaiter(this, void 0, void 0, function* () {
            let editName = yield blockbuster_model_1.default.update({ year: string }, { where: { id } });
            return editName;
        });
    }
    editePoster(id, string) {
        return __awaiter(this, void 0, void 0, function* () {
            let editName = yield blockbuster_model_1.default.update({ poster: string }, { where: { id } });
            return editName;
        });
    }
    editeGenre(id, string) {
        return __awaiter(this, void 0, void 0, function* () {
            let editName = yield blockbuster_model_1.default.update({ genre: string }, { where: { id } });
            return editName;
        });
    }
    editeCountry(id, string) {
        return __awaiter(this, void 0, void 0, function* () {
            let editName = yield blockbuster_model_1.default.update({ country: string }, { where: { id } });
            return editName;
        });
    }
    editeRated(id, string) {
        return __awaiter(this, void 0, void 0, function* () {
            let editName = yield blockbuster_model_1.default.update({ rated: string }, { where: { id } });
            return editName;
        });
    }
    editeReleased(id, string) {
        return __awaiter(this, void 0, void 0, function* () {
            let editName = yield blockbuster_model_1.default.update({ released: string }, { where: { id } });
            return editName;
        });
    }
    editeRuntime(id, string) {
        return __awaiter(this, void 0, void 0, function* () {
            let editName = yield blockbuster_model_1.default.update({ runtime: string }, { where: { id } });
            return editName;
        });
    }
    editeDirector(id, string) {
        return __awaiter(this, void 0, void 0, function* () {
            let editName = yield blockbuster_model_1.default.update({ director: string }, { where: { id } });
            return editName;
        });
    }
    editeActors(id, string) {
        return __awaiter(this, void 0, void 0, function* () {
            let editName = yield blockbuster_model_1.default.update({ actors: string }, { where: { id } });
            return editName;
        });
    }
    editePlot(id, string) {
        return __awaiter(this, void 0, void 0, function* () {
            let editName = yield blockbuster_model_1.default.update({ plot: string }, { where: { id } });
            return editName;
        });
    }
    editeLanguage(id, string) {
        return __awaiter(this, void 0, void 0, function* () {
            let editName = yield blockbuster_model_1.default.update({ language: string }, { where: { id } });
            return editName;
        });
    }
    editeimdbVotes(id, string) {
        return __awaiter(this, void 0, void 0, function* () {
            let editName = yield blockbuster_model_1.default.update({ imdbVotes: string }, { where: { id } });
            return editName;
        });
    }
    editeimdbRating(id, string) {
        return __awaiter(this, void 0, void 0, function* () {
            let editName = yield blockbuster_model_1.default.update({ imdbRating: string }, { where: { id } });
            return editName;
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            let emailUser = yield users_model_1.default.findOne({ where: { email } });
            return emailUser;
        });
    }
    allUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            let arrUsers = yield users_model_1.default.findAll();
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
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let idUser = yield users_model_1.default.findOne({ where: { id } });
            return idUser;
        });
    }
    bannComment(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            let bann = yield coments_model_1.default.update({ status: false }, { where: { idUser } });
            return bann;
        });
    }
}
exports.AdminService = AdminService;
