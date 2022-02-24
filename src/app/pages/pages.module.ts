import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    PagesRoutingModule,
    NzGridModule,
    NzLayoutModule,
  ],
  declarations: [
    HomeComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: []
})
export class PagesModule { }
