import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModuleService } from '../shared/module.service';

@Component({
  selector: 'app-moduleimporter',
  templateUrl: './moduleimporter.component.html',
  styleUrls: ['./moduleimporter.component.css']
})
export class ModuleimporterComponent implements OnInit {

  constructor(private moduleService: ModuleService) {

    }

  ngOnInit() {
  }

}
