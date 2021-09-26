import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router'; 
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';
import { AuthService } from '../../services/auth.service';
import { TixInterface } from '../../models/tix-interface'; 

@Component({
  selector: 'app-singlecourse',
  templateUrl: './singlecourse.component.html',
  styleUrls: ['./singlecourse.component.css']
})
export class SinglecourseComponent implements OnInit {
public tix:TixInterface ={
    tittle:"",
    description:"",    
    images:[],
    modules:[],
    costPrice:""
  };
    public tixs:TixInterface;
  constructor(
 private dataApi: DataApiService,
    public _uw:UserWService,
    private location: Location,
    private route:ActivatedRoute,
    private router: Router
    ) { }
    getCourseDetail(id: string){
    this.dataApi.getCourseDetailById(id).subscribe(tix => (this.tix = tix)); 
  }
  go(link){
  window.open(link);
}
  ngOnInit() {
  	  this.tix.images=[];
     this.getCourseDetail(this.route.snapshot.paramMap.get('id'));
  }

}
