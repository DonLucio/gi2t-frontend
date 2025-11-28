import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.sass',
})
export class Home implements OnInit {

    constructor(private titleService: Title) {

    }
    ngOnInit(): void {
      this.setPageTitle('GI2T: Inicio');
    }
    private setPageTitle(title: string) {
      this.titleService.setTitle(title);
    }
}
