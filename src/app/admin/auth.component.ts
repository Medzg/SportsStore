import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { AuthService } from "../model/auth.service";

@Component({
    templateUrl: "auth.component.html"
})
export class AuthComponent {
    public username: string;
    public password: string;
    public errorMsg: string;

    constructor(private router: Router, private authService: AuthService) { }

    authenticate(form: NgForm) {
        if (form.valid) {
            this.authService.authenticate(this.username, this.password)
                .subscribe(response => {
                    if (response) {
                        this.router.navigateByUrl("/admin/dashboard");
                    }else{
                        this.errorMsg = "Authentication failed !";
                    }
                })
        } else {
            this.errorMsg = "Form data is invalid";
        }
    }
}