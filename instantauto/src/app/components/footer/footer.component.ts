import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'at-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.fancybox').fancybox({
      'width': 400,
      'height': 250,
      'autoSize': false
    });

  }
}
