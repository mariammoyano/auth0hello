import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public auth: AuthService) {}

  ngOnInit() {
  }

  logA1() {
    console.log('feature A part 1');
  }

  logA2() {
    console.log('feature A part 2');
  }

  featB1() {
    console.log('feature B part 1');
  }

  featB2() {
    console.log('feature B part 2');
  }

  c1() {
    console.log('c1');
  }

  c2() {
    console.log('c2');
  }
}
