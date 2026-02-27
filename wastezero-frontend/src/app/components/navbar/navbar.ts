import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {

  darkMode = false;

  toggleTheme() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark-theme');
  }

}