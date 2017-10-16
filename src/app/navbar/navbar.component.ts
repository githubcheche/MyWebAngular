import {Component, OnInit} from '@angular/core';
import {UserService} from "../shared/user.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    private activeState: string;

    public userId: number;

    constructor(private router: Router, private userService: UserService) {
    }

    ngOnInit() {
    }

    onClick(eventName: string) {
        console.log(eventName);

        this.activeState = eventName;
    }

    onCreateArticle() {
        // [routerLink]="['/article', 'create', userId]"
        if (this.userService.getUser()) {
            this.userId = this.userService.getUser().id;
            console.log(this.userId);
            this.router.navigate(['/article', 'create', this.userId]);
        }else {
            this.router.navigate(['/enter', 'login']);
        }

    }

}
