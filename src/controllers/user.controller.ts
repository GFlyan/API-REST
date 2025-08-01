import {Request, Response} from "express";

export const create = (req: Request, res: Response) => {
    
    const {name, username, email, password, avatar, background} = req.body;

    console.log({name, username, email, password, avatar, background})

    if(!name || !username || !email || !password || !avatar || !background) {
        res.status(400).send({"message": "Submit all fields for registration."})
    }

    res.status(201).send({user: {name, 
                                      username, 
                                      email, 
                                      avatar, 
                                      background},
                                message: "User created successfully."})
}   