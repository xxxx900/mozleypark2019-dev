import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mozley-main-panel',
  templateUrl: './mozley-main-panel.component.html',
  styleUrls: ['./mozley-main-panel.component.scss']
})
export class MozleyMainPanelComponent implements OnInit {
  curURL:String;

  constructor(private router: Router) { }

  ngOnInit() {
    this.curURL = this.router.url
    console.log(this.router.url);
  }



}
