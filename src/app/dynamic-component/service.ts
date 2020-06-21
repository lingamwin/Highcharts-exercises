import {
    ComponentFactoryResolver,
    Injectable,
    Inject,
    ReflectiveInjector
  } from '@angular/core'
  
import { HighchartsComponent } from '../highcharts/highcharts.component';
  
  @Injectable()
  export class Service {
    rootViewContainer:any;
  
    constructor(private factoryResolver: ComponentFactoryResolver) { }
  
    public setRootViewContainerRef(viewContainerRef) {
      this.rootViewContainer = viewContainerRef
    }
  
    public addDynamicComponent(chartType: string) {
      const factory = this.factoryResolver.resolveComponentFactory(HighchartsComponent)
      const component = factory.create(this.rootViewContainer.parentInjector)
      component.instance.chartType = chartType
      this.rootViewContainer.insert(component.hostView)
    }
  
  }
  