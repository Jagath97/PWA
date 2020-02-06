import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IData{
  data:string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data:IData[];
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.httpClient.get<IData[]>('http://localhost:8080/').subscribe(response=>{
      this.data=response;
    })
  }

}
