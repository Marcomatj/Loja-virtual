import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSearchToolComponent } from './header-search-tool.component';

describe('HeaderSearchToolComponent', () => {
  let component: HeaderSearchToolComponent;
  let fixture: ComponentFixture<HeaderSearchToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSearchToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSearchToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
