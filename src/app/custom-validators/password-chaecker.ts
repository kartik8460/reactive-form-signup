import { FormGroup } from '@angular/forms'

export function PasswordChecker(passwordControl: string, confirmPasswordControl: string) {
  return (formGroup: FormGroup) => {
    const password = formGroup.controls[passwordControl];
    const confirmPassword = formGroup.controls[confirmPasswordControl];

    if(password.value !== confirmPassword.value) {
      confirmPassword.setErrors({mismatch: true})
    }
  }
}
