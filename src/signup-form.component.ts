import { Component } from "@angular/core";

@Component({
  selector: "signup-form",
  template: `
    <form (submit)="onSubmit()" novalidate>
      <div class="mb-3">
        <label class="form-label"> Email </label>
        <input
          type="email"
          class="form-control"
          [(ngModel)]="email"
          name="email"
          required
          pattern=".+@.+"
        />
      </div>
      <button class="btn btn-primary" type="submit">Rejestracja</button>
    </form>
  `,
  styles: [
    `
      input.ng-invalid.ng-touched {
        border: solid red 2px;
      }
      input.ng-valid.ng-touched {
        border: solid green 2px;
      }
    `,
  ],
})
export class SignupFormComponent {
  email: string = "";

  onSubmit() {
    console.log("Test onSubmit", this.email);
  }
}
