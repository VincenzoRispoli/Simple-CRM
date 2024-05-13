import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {

  userId = "";

  constructor(public route: ActivatedRoute) {

  }

  ngOnInit(): void {
      this.route.paramMap.subscribe(paramMap => {
       let id = paramMap.get('id');
        this.userId = id !== null ? id : "";
        console.log(this.userId);
      });
  }

}
