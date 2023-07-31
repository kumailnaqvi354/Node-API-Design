import {validationResult} from "express-validator"
export const handlerInputError = (req, res, next)=>{

    const error = validationResult(req);
    if (!error.isEmpty()) {
      res.status(400);
      res.json({ error: error.array() });
    //   return;
    }else{
        next()
    }
}