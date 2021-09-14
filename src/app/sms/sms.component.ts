import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.sass']
})
export class SmsComponent implements OnInit {

  closeModal!: string;
  currentIndex!: number;
  currentWeaponType!: number;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  counter(i: number) {
    return new Array(i);
  }

  onOpenDialog(index: number) {
    console.log('onAdd => ' + index)
    this.currentIndex = index;
  }

  onWeaponType(index: number) {
    this.currentWeaponType = index;
    console.log('currentWeapon => ' + this.currentWeaponType)
  }
}

