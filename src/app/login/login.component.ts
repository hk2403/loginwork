import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // public signInForm: FormGroup;
  constructor( private formBuilder: FormBuilder, private _router:Router){
  }

  ngOnInit(){
    
  }
  isPasswordVisible: boolean = false;

 

    togglePasswordVisibility(): void {
        this.isPasswordVisible = !this.isPasswordVisible;
        const passwordInput = document.getElementById('pwd') as HTMLInputElement;

        if (this.isPasswordVisible) {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    }

    

    // login(){
    //   this._loginService.doLogin(this.signInForm.value).subscribe(
    //     (data:any)=>{
    //       alert("Login Success");
    //       this._router.navigateByUrl("/dashboard");
    //       localStorage.setItem('token',data.token);
    //     },
    //     (err:any)=>{
    //       alert("Login Failed");
    //     }
    //   )
    // }
}

