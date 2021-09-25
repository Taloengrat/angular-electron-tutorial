import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-communications',
  templateUrl: './communications.component.html',
  styleUrls: ['./communications.component.sass']
})
export class CommunicationsComponent implements OnInit {

  communicationsForm!: FormGroup;
  isSubmit: boolean = false;

  inScope: string = "";
  inScopeAvailable: string = "";
  result: string = "...";

  valueModel!: string;
  constructor() {
  }

  ngOnInit(): void {
    this.communicationsForm = new FormGroup({
      field1: new FormControl(null, { validators: [Validators.required, this.ValidateCommunication], updateOn: "blur" }),
    })
  }

  onBlur() {

  }

  onSubmit() {

  }

  ValidateCommunication(control: AbstractControl): { [key: string]: any } | null {

    let available25_833: Array<number> = [0, 5, 10, 15, 20];
    let available25: Array<number> = [0, 20];

    let value: number = control.value


    if (value < 30) {
      return { 'Invalid range 30.000 ': true }
    } else if (value > 87.975 && value < 108) {
      return { 'Invalid range 87.975 to 108.000': true }
    } else if (value > 117.975 && value < 118) {
      return { 'Invalid range 117.975 - 118.000': true }
    } else if (value > 136.975 && value < 136) {
      return { 'Invalid range 136.975 - 136': true }
    } else if (value > 155.975 && value < 156) {
      return { 'Invalid range 155.975 - 156': true }
    } else if (value > 173.975 && value < 225) {
      return { 'Invalid range 155.975 - 156': true }
    } else if (value > 399.975) {
      return { 'Invalid range 399.975': true }
    }


    let validatingValue: number = (value * 1000) % 25

    if (value >= 118 && value <= 136.975) {
      if (available25_833.includes(validatingValue)) {

        control.patchValue(value.toFixed(3))
        return null;

      } else {

        return { 'valueValidated is not available': true }

      }

    } else {
      console.log('before available 25 => value is ' + validatingValue)
      if (available25.includes(validatingValue)) {

        control.patchValue(value.toFixed(3))
        return null

      } else {

        console.log("UNABLE")
        return { 'valueValidated is not available ': true }

      }
    }

  }

}
