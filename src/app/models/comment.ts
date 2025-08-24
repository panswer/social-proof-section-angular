import { CommentInterface } from "../interfaces/comment-interface";

export class Comment implements CommentInterface {
    avatar: string;
    comment: string;
    name: string;
    status: string;
    index: number;

    constructor(params: CommentInterface) {
        this.avatar = params.avatar;
        this.comment = params.comment;
        this.index = 0;
        this.name = params.name;
        this.status = params.status;
    }
}
