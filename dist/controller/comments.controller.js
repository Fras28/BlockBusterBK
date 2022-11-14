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
exports.deleteComments = exports.byIdCommentsUser = exports.byIdComments = exports.editComments = exports.addComment = exports.fullDBComments = void 0;
const coments_model_1 = __importDefault(require("../db/models/coments.model"));
const coments_service_1 = require("../services/coments.service");
const commentsService = new coments_service_1.CommentService(new coments_model_1.default());
//GET COMENTARIOS EN BD
const fullDBComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { id } = req.params;
        const commentFullData = req.body;
        const dbComments = yield coments_model_1.default.findAll();
        if (dbComments.length === 0) {
            yield commentsService.newComment(commentFullData);
            const dbComments = yield coments_model_1.default.findAll();
            return res.status(200).send(dbComments);
        }
        return res.status(200).send(dbComments);
    }
    catch (e) {
        return res.status(400).send("Comments not found in db!");
    }
});
exports.fullDBComments = fullDBComments;
//CREATE COMMENT
const addComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { id } = req.params;
        let xParamId = +id;
        const commentFullData = req.body;
        commentFullData.movieId = xParamId;
        let newComment = yield commentsService.newComment(commentFullData);
        return res.status(200).send(newComment);
    }
    catch (e) {
        return res.status(400).send("Something went with your comment!");
    }
});
exports.addComment = addComment;
//EDITA COMENTARIOS
const editComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { coment, id } = req.body;
    try {
        console.log(id, coment);
        const dbComment = yield commentsService.editComment(coment, id);
        return res.status(200).send(dbComment);
    }
    catch (e) {
        return res.status(400).send(e);
    }
});
exports.editComments = editComments;
//RELACIONAR COMENTARIOS A MOVIES ID
const byIdComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idMovie } = req.body;
    try {
        const comments = yield commentsService.byIdMovie(idMovie);
        if (comments.length > 0) {
            res.status(200).send(comments);
        }
        else {
            return res.status(400).send("This movie don't have any comments");
        }
    }
    catch (e) {
        return res.status(400).send(e);
    }
});
exports.byIdComments = byIdComments;
//RELACIONAR COMENTARIOS A USES POR ID
const byIdCommentsUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idUser } = req.body;
    try {
        const comments = yield commentsService.byIdUser(idUser);
        if (comments.length > 0) {
            res.status(200).send(comments);
        }
        else {
            res.status(400).send("This User don't have any comments");
        }
    }
    catch (e) {
        res.status(400).send(e);
    }
});
exports.byIdCommentsUser = byIdCommentsUser;
//BORRAR COMENTARIOS
const deleteComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const dbComment = yield commentsService.deletComment(id);
        if (dbComment) {
            return res.status(200).send(`The comment: ${id} delete`);
        }
        else {
            res.status(400).send('Comment not found');
        }
    }
    catch (e) {
        return res.status(400).send(e);
    }
});
exports.deleteComments = deleteComments;
