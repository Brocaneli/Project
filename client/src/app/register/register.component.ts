import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Md5} from 'ts-md5/dist/md5';
import { UserService } from '../user.service';

@Component({templateUrl: 'register.component.html'})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            phone: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            role: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        this.f.role.setValue('ALUNO');

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.f.password.setValue(Md5.hashStr(this.f.password.value).toString());

        this.loading = true;
        this.userService.createUser(this.registerForm.getRawValue()).subscribe(
            (data) => {
                this.router.navigate(['login']);
            }, 
            (error) => {
                this.loading = false;
            }
        );

    }
}