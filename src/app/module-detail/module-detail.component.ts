import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ModuleService }  from '../shared/module.service';

@Component({
  selector: 'app-module-detail',
  templateUrl: './module-detail.component.html',
  styleUrls: ['./module-detail.component.css']
})
export class ModuleDetailComponent implements OnInit {

  createNewModule: boolean;

  constructor(
    private route: ActivatedRoute,
    public moduleService: ModuleService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    if(id === 0){
      this.createNewModule = true;
    }
    else{
      this.createNewModule = false;
    }
    this.moduleService.currentSelectedModule = Object.assign({}, this.moduleService.getModule(id));
  }

  goBack(): void {
    this.location.back();
  }
}
