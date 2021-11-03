import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { SignupFormComponent } from "./signup-form.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, SignupFormComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
