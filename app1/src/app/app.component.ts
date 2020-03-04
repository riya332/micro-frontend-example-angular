import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FirstApp';
  array = [];
  constructor(private srvc: AppService){}
  ngOnInit() {
    this.srvc.getHeroes().subscribe((data)=>{
      this.array  = data;
      this.title = 'hello there';
    })
  }
}
