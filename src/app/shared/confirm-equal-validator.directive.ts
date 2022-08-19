import { Validator, AbstractControl, NG_VALIDATORS } from "@angular/forms";
import { Directive } from "@angular/core";

@Directive({
  selector: "[appConfirmEqualValidator]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ConfirmEqualValidatorDirective,
      multi: true,
    },
  ],
})
export class ConfirmEqualValidatorDirective implements Validator {
  validate(passwordGroup: AbstractControl): { [key: string]: any } | null {
    const passwordField = passwordGroup.parent.get("password");
    const ConfirmPasswordField = passwordGroup.parent.get("confirmPassword");
    if (
      passwordField &&
      ConfirmPasswordField &&
      passwordField.value !== ConfirmPasswordField.value
    ) {
      return { notEqual: true };
    }

    return null;
  }
}
