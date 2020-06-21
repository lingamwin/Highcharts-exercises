import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // assume styles coming from server
  welcomeTextStyle = 'margin: auto; font-size: 30px;'
  constructor(private doms : DomSanitizer) { }

  ngOnInit(): void {
  }

  safeCss(style) {
    return this.doms.bypassSecurityTrustStyle(style);
  }
}
