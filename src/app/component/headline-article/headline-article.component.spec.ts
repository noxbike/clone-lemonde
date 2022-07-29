import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineArticleComponent } from './headline-article.component';

describe('HeadlineArticleComponent', () => {
  let component: HeadlineArticleComponent;
  let fixture: ComponentFixture<HeadlineArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadlineArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadlineArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
