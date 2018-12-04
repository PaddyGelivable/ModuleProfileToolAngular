import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ModuleService }  from '../shared/module.service';
import { Module } from '../shared/module.model';

@Component({
  selector: 'app-module-detail',
  templateUrl: './module-detail.component.html',
  styleUrls: ['./module-detail.component.css']
})
export class ModuleDetailComponent implements OnInit {

  selectedModule: Module;

  constructor(
    private route: ActivatedRoute,
    private moduleService: ModuleService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.selectedModule = this.moduleService.getModule(id);
  }

  goBack(): void {
    this.location.back();
  }
}
