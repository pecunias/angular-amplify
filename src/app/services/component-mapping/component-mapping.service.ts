import { Injectable, Type } from '@angular/core';
import { SignalsExampleComponent } from '../../components/signals-example//signals-example/signals-example.component'
// Import other components as needed


interface ComponentMap {
  [key: string]: Type<any>;
}

@Injectable({
  providedIn: 'root'
})
export class ComponentMappingService {
  private componentMap: ComponentMap = {
    'signals-example': SignalsExampleComponent,
    // Add other mappings here
  };

  getComponent(componentName: string): any {
    return this.componentMap[componentName];
  }
}