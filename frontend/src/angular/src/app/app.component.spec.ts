/**
 *    Copyright 2019 Sven Loesekann
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
       http://www.apache.org/licenses/LICENSE-2.0
   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { TestBed, waitForAsync } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { NgxServiceModule } from "ngx-simple-charts/base-service";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    declarations: [AppComponent],
    imports: [RouterTestingModule,
        NgxServiceModule.forRoot({
            tokenRefreshPath: "/rest/auth/refreshToken",
            logoutPath: "/rest/auth/logout",
            loginRoute: "/",
        })],
    providers: [provideHttpClient(withInterceptorsFromDi())]
}).compileComponents();
  }));
  it("should create the app", waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("app");
  }));
  //  it('should render title in a h1 tag', async(() => {
  //    const fixture = TestBed.createComponent(AppComponent);
  //    fixture.detectChanges();
  //    const compiled = fixture.debugElement.nativeElement;
  //    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  //  }));
});
