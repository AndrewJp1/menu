import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PagesRoutingModule } from '../pages/pages-routing.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { DatoService } from '../services/dato/dato.service';



@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    NzMenuModule,
    NzGridModule,
    NzLayoutModule,
  ],
  declarations: [
    MenuComponent
  ],
  entryComponents: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [
    DatoService
  ]
})
export class ComponentsModule { }
