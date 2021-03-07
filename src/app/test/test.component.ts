import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  @Input() public parentData;

  public messgae = "hello from child to parent";

  @Output() public childEvent = new EventEmitter();

  ngOnInit(): void {
  }

  fireEvent() {
    this.childEvent.emit(this.messgae);
  }

}
