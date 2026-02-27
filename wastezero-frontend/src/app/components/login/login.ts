import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  showPassword: boolean = false;
  isLoading: boolean = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {

    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
      alert("Login Successful 🚀");
    }, 2000);

  }

}