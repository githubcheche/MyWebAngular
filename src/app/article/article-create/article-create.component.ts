import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../shared/user.service";

@Component({
    selector: 'app-article-create',
    templateUrl: './article-create.component.html',
    styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {

    private userId: number;
    private formModel: FormGroup;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private fb: FormBuilder,
                private userService: UserService) {

        this.formModel = fb.group({
            title: ['', [Validators.required, Validators.minLength(4)]],
            category: ['生活' , [Validators.required]],
            body: ['', [Validators.required, Validators.minLength(4)]],
            tags: ['', [Validators.required, Validators.minLength(1)]],
            closeComment: ['是', [Validators.required]]
        });

    }

    ngOnInit() {
        scroll(0, 0);
        this.route.paramMap
            .switchMap((params: ParamMap) =>
                params.get('user_id')).subscribe((userId: string) => {
            this.userId = +userId;
            console.log(userId);
        });
    }

    onSubmit() {

    }

}
