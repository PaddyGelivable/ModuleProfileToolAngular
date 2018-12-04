import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../shared/module.service';
import { Module } from '../shared/module.model';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

  moduleList: Module[];
  currentModule: Module;

  constructor(private service: ModuleService) { }

  ngOnInit() {
    this.moduleList = this.service.getModules();
  }

  onSelect(mod : Module){
    this.currentModule = mod;
    this.service.currentSelectedModule = Object.assign({}, mod);
  }

  onDelete(id : number){
    if(confirm('Are you sure delete this module?')){
      console.dir(id);
      this.service.deleteModule(id);
      this.moduleList = this.service.getModules();
    };
  }
}
