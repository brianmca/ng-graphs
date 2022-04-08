import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: any;
  @Input() size: any;

  other = 'test';

  constructor() { }

  ngOnInit(): void {
  }

}
