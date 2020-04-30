import { RouterModule, Routes } from "@angular/router";
import { CategoryChartSampleComponent } from "./category-chart-sample/category-chart-sample.component";
import { NgModule } from '@angular/core';
import { FinancialChartSampleComponent } from './financial-chart-sample/financial-chart-sample.component';

const routes = [{
    path: "",
    pathMatch: "full",
    redirectTo: "grid-dynamic-chart-data"
},
{
    path: "category-chart-sample",
    component: CategoryChartSampleComponent
},{
    data: ["GridDynamicChartDataModule"],
    loadChildren: () => import("./grid-dynamic-chart-data/grid-dynamic-chart-data.module")
    .then(m => m.GridDynamicChartDataModule),
    path: "grid-dynamic-chart-data"
},
{
    data: ["HierarchicalGridDVModule"],
    loadChildren: () => import("./hierarchical-grid/hierarchical-grid.module")
    .then(m => m.HierarchicalGridDVModule),
    path: "hierarchical-grid"
},
{
    path: "financial-chart-sample",
    component: FinancialChartSampleComponent
}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}