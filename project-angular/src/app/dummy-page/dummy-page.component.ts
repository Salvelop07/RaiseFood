import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy-page',
  templateUrl: './dummy-page.component.html',
  styleUrls: ['./dummy-page.component.css']
})
export class DummyPageComponent implements OnInit {

  pizzaPic: string = "../assets/samplepizzapic.jpg";

  constructor() { }

  ngOnInit() {
  }

}
