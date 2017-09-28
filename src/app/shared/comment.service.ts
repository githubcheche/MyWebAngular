import { Injectable } from '@angular/core';

@Injectable()
export class CommentService {

  private commentList: CommentModule[] = [];

  constructor() {
    for (let i = 0; i < 8; i++) {
      this.commentList.push(new CommentModule(1, "cheyy", i, new Date().getTime(), "很好，哈哈哈哈哈哈1", 5));
    }

    for (let i = 0; i < 8; i++) {
      this.commentList.push(new CommentModule(2, "cheyy", i, new Date().getTime(), "很好，哈哈哈哈哈哈2", 5));
    }
  }

  getCommentList(articleId:number): CommentModule[] {
    return this.commentList.filter((value)=>value.articleId == articleId);
  }

  addComment(comment:CommentModule):void {
    this.commentList.unshift(comment);
  }

}


export class CommentModule {

  constructor(
    public articleId: number,
    private observer: string,
    private commentId: number,
    private time: number,
    private content: string,
    private stars: number
  ) { }
}