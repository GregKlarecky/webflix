import { Component, OnInit } from '@angular/core';
import { faPlayCircle, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public play = faPlayCircle;
  public bars = faBars;
  constructor() {}

  ngOnInit(): void {}
}
