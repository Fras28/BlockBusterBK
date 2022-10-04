import { Request, Response, Router } from "express";
import comments from "../db/models/coments.model";
import { CommentService } from "../services/coments.service";
import { Comment } from "../services/coments.service";

const commentsService = new CommentService(new comments());

//GET COMENTARIOS EN BD
export const fullDBComments = async (req: Request, res: Response) => {
  try {
    let { id } = req.params;
    const commentFullData: Comment = req.body;
    const dbComments = await comments.findAll();
    if (dbComments.length === 0) {
      await commentsService.newComment(commentFullData);
      const dbComments = await comments.findAll();
      return res.status(200).send(dbComments);
    }
    return res.status(200).send(dbComments);
  } catch (e) {
    return res.status(400).send("Comments not found in db!");
  }
};

//CREATE COMMENT
export const addComment = async (req: Request, res: Response) => {
  try {
    let { id } = req.params;
    let xParamId = +id;
    const commentFullData: Comment = req.body;
    commentFullData.movieId = xParamId;
    let newComment = await commentsService.newComment(commentFullData);
    return res.status(200).send(newComment);
  } catch (e) {
    return res.status(400).send("Something went with your comment!");
  }
}

 //EDITA COMENTARIOS
export const editComments = async (req: Request, res: Response) => {
  const { coment, id } = req.body;
  try {
    console.log(id,coment)
    const dbComment = await commentsService.editComment(coment, id);
    return res.status(200).send(dbComment);
  } catch (e) {
    return res.status(400).send(e);
  }
};

//RELACIONAR COMENTARIOS A MOVIES ID
export const byIdComments = async (req: Request, res: Response) =>{
  const {idMovie} = req.body;
  try{
    const comments = await commentsService.byIdMovie(idMovie);
    if(comments.length > 0) {
      res.status(200).send(comments);
    }else{
      return res.status(400).send("This movie don't have any comments");
    }
  }catch(e){
    return res.status(400).send(e);
  }
}

//RELACIONAR COMENTARIOS A USES POR ID
export const byIdCommentsUser = async (req: Request, res: Response) => {
  const {idUser} = req.body;
  try{
    const comments = await commentsService.byIdUser(idUser);
    if(comments.length > 0){
      res.status(200).send(comments);
    }else{
      res.status(400).send("This User don't have any comments");
    }
  }catch(e){
    res.status(400).send(e)
  }
}

//BORRAR COMENTARIOS
export const deleteComments = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const dbComment = await commentsService.deletComment(id);
    if(dbComment){
      return res.status(200).send(`The comment: ${id} delete`);
    }else{
      res.status(400).send('Comment not found');
    }
  } catch (e) {
    return res.status(400).send(e);
  }
};