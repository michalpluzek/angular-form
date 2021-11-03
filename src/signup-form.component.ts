import { Component } from "@angular/core";

@Component({
  selector: "signup-form",
  template: `
    <form (submit)="onSubmit()">
      <div class="mb-3">
        <label class="form-label"> Email </label>
        <input
          type="email"
          class="form-control"
          [(ngModel)]="email"
          name="email"
          required
        />
      </div>
      <button class="btn btn-primary" type="submit">Rejestracja</button>
    </form>
  `,
})
export class SignupFormComponent {
  email: string = "";

  onSubmit() {
    console.log("Test onSubmit", this.email);
  }
}
