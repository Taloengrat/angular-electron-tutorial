import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-waypoint',
  templateUrl: './waypoint.component.html',
  styleUrls: ['./waypoint.component.sass']
})
export class WaypointComponent implements OnInit {

  elevationPattern: string = '^-?(0|[1-9]/d*)?$';
  exForm!: FormGroup;
  isValidLatitude: boolean = false;
  isValidLongtitude: boolean = false;
  isElevationValid: boolean = false;
  isFormValid: boolean = false;
  isSubmit: boolean = false;
  latitudeValue: string = "";
  longtitudeValue: string = "";

  constructor() { }

  ngOnInit(): void {
    this.exForm = new FormGroup({
      latitude: new FormControl(null, [Validators.required]),
      longtitude: new FormControl(null, [Validators.required]),
      elevation: new FormControl(null, [Validators.required])
    })
  }

  onSubmit() {
    this.isSubmit = true;
  }



  onBlurValidationLatitude() {

    let value: string = this.exForm.get('latitude')?.value
    if (value == null) return;
    let latDD = Number(value.substring(1, 3))
    let latMM = Number(value.substring(3, 5))
    let latSS = Number(value.substring(5, 7))

    if (value.length != 7 || !value.toLowerCase().startsWith('s') && !value.toLowerCase().startsWith('n') || value.includes('.')) {
      this.isValidLatitude = false;
    } else if (latDD < 0 || latDD > 90) {
      this.isValidLatitude = false;
    } else if (latMM < 0 || latMM > 60) {
      this.isValidLatitude = false;
    } else if (latSS < 0 || latSS > 60) {
      this.isValidLatitude = false;
    } else {
      this.isValidLatitude = true;
    }
  }

  onBlurValidationLongtitude() {

    let value: string = this.exForm.get('longtitude')?.value
    if (value == null) return;
    let longDDD = Number(value.substring(1, 4))
    let longMM = Number(value.substring(4, 6))
    let longSS = Number(value.substring(6, 8))

    if (value.length != 8 || !value.toLowerCase().startsWith('e') && !value.toLowerCase().startsWith('w') || value.includes('.')) {
      this.isValidLongtitude = false
    } else if (longDDD < 0 || longDDD > 180) {
      this.isValidLongtitude = false
    } else if (longMM < 0 || longMM > 60) {
      this.isValidLongtitude = false
    } else if (longSS < 0 || longSS > 60) {
      this.isValidLongtitude = false
    } else {
      this.isValidLongtitude = true
      value.replace(value.substring(0, 1), value.substring(0, 1).toUpperCase())
    }


  }

  onBlurValidationElevation() {

  }
}
