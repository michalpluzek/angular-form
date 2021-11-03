import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { SignupFormComponent } from "./signup-form.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, SignupFormComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
