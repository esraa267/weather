import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HTTPService } from '../../Service/HTTP.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private http: HTTPService) {}
  countries: any;
  searchitem: string = '';
  ngOnInit() {
    
  }
  search() {

    setTimeout(() => {
      if (this.searchitem != '') {
        this.http.js().subscribe((e: any) => {
          this.countries = e.filter((g: any) => {
            return g.name.toLowerCase().search(this.searchitem) == 0;
          });
        });
      } else {
        this.countries = [];
      }
    }, 700);
  }
  clear(){
    this.searchitem=''
    this.countries=[]
  }

}
