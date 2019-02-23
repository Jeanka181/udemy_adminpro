import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-grafico-charts",
  templateUrl: "./grafico-charts.component.html",
  styles: []
})
export class GraficoChartsComponent implements OnInit {
  // Inputs necesarios
  @Input() char_options: any;

  /*
  // Doughnut
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
*/

  public doughnutChartLabels: string[];
  public doughnutChartData: number[];
  public doughnutChartType: string;
  public leyenda: string;
  public donutColors: Array<any> = [];


  constructor() {}

  ngOnInit() {
    this.leyenda = this.char_options.leyenda;
    this.doughnutChartLabels = this.char_options.labels;
    this.doughnutChartData = this.char_options.data;
    this.doughnutChartType = this.char_options.type;
    this.donutColors = this.char_options.colors;

  }
}
