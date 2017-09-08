import { Component, OnInit } from '@angular/core';
import { AdComponent } from "../ad/ad.component";

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.css'],
  inputs: ['data: data']
})
export class HeroProfileComponent implements OnInit, AdComponent {

  data: any;

  constructor() { }

  ngOnInit() {
  }

}
