import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { CommentModule, CommentService } from '../../shared/comment.service';
import * as WangEditor from '../../../assets/wangEditor_3.0.10/wangEditor.min.js'


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

  private editor: any;

  constructor(
    private commentService: CommentService,
    private el: ElementRef
  ) {
  }

  ngOnInit() {
    this.commentList = this.commentService.getCommentList(this.articleId);

    let editordom = this.el.nativeElement.querySelector('#editorElem')
    this.editor = new WangEditor(editordom)
    this.editor.customConfig.uploadImgShowBase64 = true
    this.editor.create();

  }

  onPushComment() {
    this.commentService.addComment(new CommentModule(this.articleId, "cheyy", this.commentList.length + 1, new Date().getTime(), this.content, this.stars));
    this.commentList = this.commentService.getCommentList(this.articleId);
    this.content = "";
    this.stars = 5;
  }

  setStarNum(event: number) {
    this.stars = event;
  }

}
