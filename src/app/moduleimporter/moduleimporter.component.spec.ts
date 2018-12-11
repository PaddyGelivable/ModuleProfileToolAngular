import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleimporterComponent } from './moduleimporter.component';

describe('ModuleimporterComponent', () => {
  let component: ModuleimporterComponent;
  let fixture: ComponentFixture<ModuleimporterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleimporterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleimporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
