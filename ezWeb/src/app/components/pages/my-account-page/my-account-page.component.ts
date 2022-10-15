import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-my-account-page',
    templateUrl: './my-account-page.component.html',
    styleUrls: ['./my-account-page.component.scss']
})
export class MyAccountPageComponent implements OnInit {

    signInForm: FormGroup;
    signUpForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.signInForm = this.formBuilder.group({
            username: ['', Validators.required ],
			password: ['', Validators.required ],
			remember: [true]
        });

        this.signUpForm = this.formBuilder.group({
            firstName: ['', Validators.required ],
			middleName: [''],
			lastName: ['', Validators.required ],
            emailAddress: ['', Validators.required ],
			phoneNumber: ['', Validators.required]
        });
    }

    pageTitle = [
        {
            bgImage: 'assets/img/page-title-bg.jpg',
            title: 'Profile Authentication'
        }
    ]

    submitSignIn(): void {}

    submitSignUp(): void {}
}