import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [HttpClientTestingModule]
    }).compileComponents();

    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have application name as'testApplication'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.applicationName).toEqual('testApplication');
  });

  describe('testFunctionTest', () => {
    it(`should call testFunctionTwo`, () => {
      const testFunctionTwoSpy = spyOn(app, 'testFunctionTwo');
      app.testFunction();
      expect(testFunctionTwoSpy).toHaveBeenCalled();
    });

    it(`should set randomProp to test`, () => {
      app.testFunction();
      expect(app.randomProp).toEqual('test');
    });
  });


});
