import { Component, OnInit } from '@angular/core';
import { ForfaitsService } from '../forfaits.service';
import { Forfait } from 'src/forfait';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
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

  public barChartLabels: Label[] = [];
  public barChartData: ChartDataSets[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: ChartOptions = {
    responsive: true,
  };

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
  }

  generateBarChart(forfaits: Forfait[]) {
    this.barChartLabels = [
      ...new Set(forfaits.map((forfait) => forfait.destination.toLowerCase())),
    ];
    this.barChartData = [
      {
        data: this.barChartLabels.map((label) => {
          const forfait = forfaits.filter(
            (forfait) => forfait.destination.toLowerCase() === label
          );
          const length = forfait.length;
          const prix = forfait.map((forfait) => forfait.prix);
          const prixTotal = prix.reduce((acc, val) => +acc + +val);
          const moyenne = prixTotal / length;
          return moyenne;
        }),
        label: 'Moyenne de prix',
      },
    ];
  }

  generateGraph(forfaits: Forfait[]) {
    this.generatePieChart(forfaits);
    this.generateBarChart(forfaits);

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
