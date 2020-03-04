import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppService, HEROES } from './app.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let appService : AppService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [AppService]
    }).compileComponents();
    appService = TestBed.get(AppService);
    spyOn(appService, 'getHeroes').and.returnValue(of(HEROES));

    // appService.getHeroes().subscribe(res => {
    //   response = res;
    // });
  }));

  xit(`should have as title 'FirstApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('FirstApp');
  });

  it('should call getHeroes', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.array).toEqual(HEROES);
    expect(app.title).toEqual('hello there');
  });
});
