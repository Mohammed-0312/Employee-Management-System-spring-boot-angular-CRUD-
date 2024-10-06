import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinkDataComponent } from './sink-data.component';

describe('SinkDataComponent', () => {
  let component: SinkDataComponent;
  let fixture: ComponentFixture<SinkDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinkDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinkDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
