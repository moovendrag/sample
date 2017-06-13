import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'at-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.css']
})
export class DealerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const loadFile: any = function (event) {
      const output = document.getElementById('outputsss') as HTMLImageElement;
      output.src = URL.createObjectURL(event.target.files[0]);
    };
  }

}
