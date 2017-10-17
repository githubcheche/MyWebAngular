import {Component, OnInit} from '@angular/core';
import {UserService} from '../shared/user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    private activeState: string;

    public token: string;

    constructor(private router: Router, private userService: UserService) {
    }

    ngOnInit() {
        this.getToken();
    }

    get hasToken() {
        this.getToken();
        return this.token;
    }

    onClick(eventName: string) {
        console.log(eventName);

        this.activeState = eventName;
    }

    onLogout() {
        this.userService.getLogout((message) => {
            console.log('logout success');
            this.getToken();
            this.token = null;
            this.router.navigate(['/home']);
        });
    }

    onCreateArticle() {
        this.getToken();
        console.log(this.token);
        if (this.token != null) {
            this.router.navigate(['/article', 'create']);
        } else {
            this.router.navigate(['/enter', 'login']);
        }
    }

    getToken() {
        const token = this.userService.getUserToken();
        if (token != null && (token.trim().length > 1)) {
            this.token = token.trim();
        }
    }

}
