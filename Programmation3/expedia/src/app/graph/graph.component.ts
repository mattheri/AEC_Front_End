import { Component, OnInit } from '@angular/core';
import { ForfaitsService } from '../forfaits.service';
import { Forfait } from 'src/forfait';
import { ChartType, ChartOptions } from 'chart.js';
import {
  SingleDataSet,
  Label,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip,
} from 'ng2-charts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(private forfaitsService: ForfaitsService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }
  forfaits: Forfait[];

  generatePieChart(forfaits: Forfait[]) {
    this.pieChartLabels = [
      ...new Set(forfaits.map((forfait) => forfait.destination.toLowerCase())),
    ];
    this.pieChartData = this.pieChartLabels.map(
      (label) =>
        forfaits.filter(
          (forfait) => forfait.destination.toLowerCase() === label
        ).length
    );
    console.log([
      ...new Set(forfaits.map((forfait) => forfait.destination.toLowerCase())),
    ]);
    console.log(
      this.pieChartLabels.map(
        (label) =>
          forfaits.filter(
            (forfait) => forfait.destination.toLowerCase() === label
          ).length
      )
    );
  }

  generateGraph(forfaits: Forfait[]) {
    this.generatePieChart(forfaits);

    return forfaits;
  }

  getForfaits() {
    this.forfaitsService
      .getForfaits()
      .subscribe((result) => (this.forfaits = this.generateGraph(result)));
  }

  ngOnInit(): void {
    this.getForfaits();
  }
}
