import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunnerArticleComponent } from './runner-article.component';

describe('RunnerArticleComponent', () => {
  let component: RunnerArticleComponent;
  let fixture: ComponentFixture<RunnerArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunnerArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunnerArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
