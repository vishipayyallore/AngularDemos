import { TestBed, async } from '@angular/core/testing';
import { TourOfHeroesComponent } from './tourofheroes.component';

describe('TourOfHeroesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TourOfHeroesComponent
      ],
    }).compileComponents();
  }));

  it('should create the Tour of Heroes', async(() => {
    const fixture = TestBed.createComponent(TourOfHeroesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'appTour of Heroes'`, async(() => {
    const fixture = TestBed.createComponent(TourOfHeroesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Tour of Heroes');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(TourOfHeroesComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Tour of Heroes!');
  }));
});
