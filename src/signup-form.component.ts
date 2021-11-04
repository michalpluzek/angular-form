import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "signup-form",
  template: `
    <form (submit)="onSubmit(form)" novalidate #form="ngForm">
      <div class="mb-3">
        <label class="form-label"> Email </label>
        <input
          type="email"
          class="form-control"
          [(ngModel)]="email"
          name="email"
          required
          pattern=".+@.+"
          #emailField="ngModel"
        />
        <p
          *ngIf="
            emailField.touched &&
            emailField.invalid &&
            emailField.errors.required
          "
          class="alert alert-danger"
        >
          Wymagany jest adres email.
        </p>
        <p
          *ngIf="
            emailField.touched &&
            emailField.invalid &&
            emailField.errors.pattern
          "
          class="alert alert-danger"
        >
          Adres email jest nieprawidłowy.
        </p>
      </div>
      <div class="mb-3">
        <label class="form-label"> Hasło </label>
        <input
          type="password"
          class="form-control"
          [(ngModel)]="password"
          name="password"
          required
          pattern=".{4,}"
          #passwordField="ngModel"
        />
        <p
          *ngIf="
            passwordField.touched &&
            passwordField.invalid &&
            passwordField.errors.required
          "
          class="alert alert-danger"
        >
          Wymagane jest hasło.
        </p>
        <p
          *ngIf="
            passwordField.touched &&
            passwordField.invalid &&
            passwordField.errors.pattern
          "
          class="alert alert-danger"
        >
          Hasło musi mieć min. 4 znaki.
        </p>
      </div>
      <button class="btn btn-primary" type="submit" [disabled]="form.invalid">
        Rejestracja
      </button>
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
  password: string = "";

  onSubmit(form: NgForm) {
    console.log("Test on submit", this.email);
    form.resetForm();
  }
}
