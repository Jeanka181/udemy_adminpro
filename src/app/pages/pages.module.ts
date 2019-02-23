import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';

import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';

// https://valor-software.com/ng2-charts/
import { ChartsModule } from 'ng2-charts/ng2-charts';


// temporales
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoChartsComponent } from '../components/grafico-charts/grafico-charts.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graphics1Component,
    IncrementadorComponent,
    GraficoChartsComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graphics1Component
  ],
  imports: [
    FormsModule,
    CommonModule,
    PAGES_ROUTES,
    SharedModule,
    ChartsModule
  ]
})

export class PagesModule { }
