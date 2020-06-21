import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Service } from './service'

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss']
})
export class DynamicComponentComponent implements OnInit {

  constructor(public service: Service, public viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }

  add(chartType: string){
    this.viewContainerRef.clear();
    this.service.setRootViewContainerRef(this.viewContainerRef);
    this.service.addDynamicComponent(chartType)
  }
}
