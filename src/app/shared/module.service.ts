import { Injectable } from '@angular/core';
import { Module } from './module.model';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  moduleList : Module[] =[
    {Id: 1, VendorName: "Spectrum Controls", ModuleID: "NA", ProductCode: 114, CatalogName: "2085-IF4OF4-SC", ModuleRevision: "1.1", ProfileRevision:"1"},
    {Id: 2, VendorName:"Spectrum Controls", ModuleID:"NA", ProductCode:115, CatalogName:"2085-OB32-SC", ModuleRevision:"1.1", ProfileRevision:"1"},
    {Id: 3, VendorName:"Spectrum Controls", ModuleID:"NA", ProductCode:116, CatalogName:"2085-OBV32-SC", ModuleRevision:"1.1", ProfileRevision:"1"}
  ];

  currentSelectedModule : Module;

  constructor() { }

  getModules(): Module[] {
    return this.moduleList;
  }

  getModule(id: number): Module{
    return this.moduleList.find(mod => mod.Id === id);
  }

  deleteModule(id : number){

  }
}
