import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  userId = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  handleNavigate() {
    this.router.navigate(['user', this.userId]);
  }
}
