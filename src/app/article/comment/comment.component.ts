import { Component, OnInit, Input } from '@angular/core';
import { CommentModule, CommentService } from '../../shared/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  private comment: CommentModule;
  private commentList: CommentModule[];

  @Input()
  public articleId: number;
  private observer: string;
  private commentId: number;
  private time: string;
  private content: string;
  private stars: number;

  constructor(
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.commentList = this.commentService.getCommentList(this.articleId);
  }

  onPushComment() {
    this.commentService.addComment(new CommentModule(this.articleId, "cheyy", this.commentList.length + 1, new Date().getTime(), this.content, this.stars));
    this.ngOnInit();
    this.content = "";
    this.stars=5;
  }

  setStarNum(event:number) {
    this.stars = event;
  }

}
