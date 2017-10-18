import {Component, ElementRef, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ArticleService} from '../../shared/article.service';
import {Category} from '../../model/category.model';
import {Router} from '@angular/router';

import * as WangEditor from '../../../assets/wangEditor_3.0.10/wangEditor.min.js';

@Component({
    selector: 'app-article-create',
    templateUrl: './article-create.component.html',
    styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {

    private userId: number;
    private formModel: FormGroup;
    public isHidden = [
        {value: 'F', label: '是'},
        {value: 'T', label: '否'}
    ];
    public categories: Category[];
    private editor: any;

    constructor(private fb: FormBuilder,
                private router: Router,
                private articleService: ArticleService,
                private el: ElementRef) {

        this.formModel = fb.group({
            title: ['', [Validators.required, Validators.minLength(4)]],
            category: [1, [Validators.required]],
            tags: ['', [Validators.required, Validators.minLength(1)]],
            closeComment: [this.isHidden[0].value, [Validators.required]]
        });
    }

    ngOnInit() {
        scroll(0, 0);
        // this.route.paramMap
        //     .switchMap((params: ParamMap) =>
        //         params.get('user_id')).subscribe((userId: string) => {
        //     this.userId = +userId;
        //     console.log(this.userId);
        // });
        // 获取所有文章类别
        this.articleService.getCategories((categories) => {
            console.log(categories[0]);
            this.categories = categories;
        });

        let editordom = this.el.nativeElement.querySelector('#editorElem')
        this.editor = new WangEditor(editordom)
        this.editor.customConfig.uploadImgShowBase64 = true
        this.editor.create();

    }


    get isTitleValid() {
        return this.isValid('title');
    }

    get isTagsValid() {
        return this.isValid('tags');
    }

    onSubmit() {
        const isValid: boolean = this.formModel.get('title').valid;
        const errors: any = this.formModel.get('title').errors;
        // console.log(JSON.stringify(errors));

        if (this.formModel.valid) {
            console.log(this.formModel.value);
            let param = {
                title: this.formModel.value.title,
                // body: this.formModel.value.body,
                body: this.editor.txt.html(),
                tag: this.formModel.value.tags,
                category: this.formModel.get('category').value,
                is_hidden: this.formModel.get('closeComment').value,
            };
            this.articleService.postCreateArticle(param, (message) => {
                console.log(message);
                this.router.navigate(['/home']);
            });
        }

    }

    isValid(path: string) {
        if (this.formModel.get(path).untouched) {
            return '';
        }
        if (this.formModel.hasError('required', [path])) {
            switch (path) {
                case 'title':
                    return '请输入标题';
                case 'tags':
                    return '请输入标签';
            }
        } else if (this.formModel.hasError('minlength', [path])) {
            switch (path) {
                case 'title':
                    return '标题至少4个字符';
                case 'tags':
                    return '标题至少1个字符';
            }
        }
        return '';
    }

}
