import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public email: string;

  constructor() {
    this.title = "Roberto Prado";
    this.subtitle = "Desarrollador web";
    this.email = "ropralo@protonmail.com";
   }

  ngOnInit(): void {
  }

}
