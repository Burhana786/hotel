import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dishdeails',
  templateUrl: './dishdeails.component.html',
  styleUrls: ['./dishdeails.component.css']
})
export class DishdeailsComponent implements OnInit {
  id:any=''
  item:any={}
  reviews:any=[]

  constructor(private route:ActivatedRoute,private service:AuthService){

  }
  ngOnInit(): void {
    this.route.params.subscribe(p=>this.id=p["id"])
    this.service.getDishesdetails(this.id).then(r=>r.json()).then(d=>this.item=d)
    this.service.getReview(this.id).then(r=>r.json()).then(d=>this.reviews=d)
  }
}
