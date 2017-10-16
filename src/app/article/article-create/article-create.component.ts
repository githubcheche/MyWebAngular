import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../shared/user.service';

@Component({
    selector: 'app-article-create',
    templateUrl: './article-create.component.html',
    styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {

    private userId: number;
    private formModel: FormGroup;
    private isHidden = [
        { value: 'F', label: '是' },
        { value: 'T', label: '否' }
    ];

    constructor(private router: Router,
                private route: ActivatedRoute,
                private fb: FormBuilder,
                private userService: UserService) {

        this.formModel = fb.group({
            title: ['', [Validators.required, Validators.minLength(4)]],
            category: ['生活', [Validators.required]],
            body: ['', [Validators.required, Validators.minLength(10)]],
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
    }


    get isTitleValid() {
        return this.isValid('title');
    }

    get isBodyValid() {
        return this.isValid('body');
    }

    get isTagsValid() {
        return this.isValid('tags');
    }

    onSubmit() {

    }

    isValid(path: string) {
        if (this.formModel.get(path).untouched) {
            return '';
        }
        if (this.formModel.hasError('required', [path])) {
            switch (path) {
                case 'title':
                    return '请输入标题';
                case 'body':
                    return '请输入内容';
                case 'tags':
                    return '请输入标签';
            }
        } else if (this.formModel.hasError('minlength', [path])) {
            switch (path) {
                case 'title':
                    return '标题至少4个字符';
                case 'body':
                    return '标题至少10个字符';
                case 'tags':
                    return '标题至少1个字符';
            }
        }
        return '';
    }

}
