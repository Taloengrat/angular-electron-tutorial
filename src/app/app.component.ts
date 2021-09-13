import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataLink } from './_model/datalink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})


export class AppComponent implements OnInit {


  dataLinkForm!: FormGroup;
  datalinkList: DataLink[] = [];
  currentIndex!: number;



  constructor(
    public formBuilder: FormBuilder,

  ) {
    this.dataLinkForm = this.formBuilder.group({
      index: [Number, Validators.required],
      category: [Number, Validators.required],
      textIdentity: [Number, Validators.required],
      heading: [Number, Validators.required],
      body: [Number, Validators.required],
    })
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(): any {
    let updateItem = this.dataLinkForm.controls['index'].value;
    let datalinkElement = this.datalinkList.find(element => element.index == updateItem)

    if (datalinkElement == undefined) {
      this.datalinkList.push(this.dataLinkForm.value);
      console.log('undefind')
    } else {
      this.datalinkList[this.datalinkList.indexOf(datalinkElement)] = this.dataLinkForm.value;
      console.log('push new element')
    }

    this.datalinkList.sort((a, b) => (a.index > b.index) ? 1 : -1)

  }

  onSelect(index: number): void {
    this.currentIndex = index;
    // console.log('currentIndex => ' + this.currentIndex)

    if (this.currentIndex != null) {

      this.dataLinkForm.controls['index'].patchValue(this.datalinkList[this.currentIndex].index)
      this.dataLinkForm.controls['category'].patchValue(this.datalinkList[this.currentIndex].category)
      this.dataLinkForm.controls['textIdentity'].patchValue(this.datalinkList[this.currentIndex].textIdentity)
      this.dataLinkForm.controls['heading'].patchValue(this.datalinkList[this.currentIndex].heading)
      this.dataLinkForm.controls['body'].patchValue(this.datalinkList[this.currentIndex].body)

    }


  }

  onDelete(): void {

    if (this.currentIndex != null) {
      this.datalinkList.splice(this.currentIndex, 1)
    }

  }

  onCancel(): void {
    this.dataLinkForm.reset()
  }

  title = 'angular-tutorial';


}