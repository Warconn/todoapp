import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DataGrid } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        DataGrid
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DataGrid);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'todoapp-angular'`, () => {
    const fixture = TestBed.createComponent(DataGrid);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('todoapp-angular');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(DataGrid);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to todoapp-angular!');
  });
});
