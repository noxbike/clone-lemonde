import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiverArticleComponent } from './river-article.component';

describe('RiverArticleComponent', () => {
  let component: RiverArticleComponent;
  let fixture: ComponentFixture<RiverArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiverArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiverArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
