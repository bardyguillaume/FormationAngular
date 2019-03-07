import { Component, Input, OnInit } from '@angular/core';
import { Link } from '../../interfaces/link';

@Component({
  selector: 'app-button-router',
  templateUrl: './button-router.component.html',
  styleUrls: ['./button-router.component.scss']
})
export class ButtonRouterComponent implements OnInit {
  @Input() link: Link;
  constructor() {}

  ngOnInit() {}
}
