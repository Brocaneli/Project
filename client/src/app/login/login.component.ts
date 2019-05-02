import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { ConstService } from '../const.service';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    loginError = false;

    constructor(
        private formBuilder: FormBuilder,
        private constService: ConstService,
        private router: Router,
        private authenticationService: AuthenticationService
    ) { 
        // redirect to home if already logged in
        let user = this.authenticationService.currentUserValue;
        if (user) { 
            this.router.navigate([this.constService.returnUrl[user.role]]);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;

        this.authenticationService.login(this.f.email.value, this.f.password.value).then(
            data => {
                if (data) {
                    let user: any = data;
                    this.router.navigate([this.constService.returnUrl[user.role]]);
                } else {
                    this.loginError = true;
                    this.loading = false;
                }   
            });
    }
}
