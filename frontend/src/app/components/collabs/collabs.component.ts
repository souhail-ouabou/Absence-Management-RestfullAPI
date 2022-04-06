import { Component, OnInit } from '@angular/core';
import { Collab } from 'src/app/Collabs';
import { CollabsService } from 'src/app/services/collabs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collabs',
  templateUrl: './collabs.component.html',
  styleUrls: ['./collabs.component.css']
})
export class CollabsComponent implements OnInit {
  Success : boolean = false;
   collabs?: Collab[];
  constructor(private collabService : CollabsService,private router :Router) {
    this.collabService.getCollabs().subscribe(items =>{
      console.log("iteeems",items);
      this.collabs = items;
   })}

  private getCollabs(){
    this.collabService.getCollabs().subscribe(items =>{
      console.log("iteeems",items);
      this.collabs = items;
    })
  }
  ngOnInit(): void {
    this.getCollabs();
  }
  goToAdd(){
    this.router.navigate(["add-collab"]);
  }
  
  updateCollab(matr: string){
    this.router.navigate(['update-collab', matr]);
  }

  deleteCollab(matr: string){
    this.collabService.deleteCollab(matr).subscribe((data)=> {
      console.log(data);
      this.ngOnInit();
    })
  }
  
}