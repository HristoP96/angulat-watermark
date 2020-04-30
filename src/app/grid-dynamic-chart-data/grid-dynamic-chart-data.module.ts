import { NgModule } from "@angular/core";
import { IgxButtonModule, IgxDialogModule, IgxDividerModule, IgxGridModule, IgxTabsModule } from "igniteui-angular";

import { ChartHostDirective,
    ChartIntegrationDirective } from "./directives/chart-integration/chart-integration.directive";
import { ConditionalFormattingDirective } from "./directives/conditional-formatting/conditional-formatting.directive";
import { GridDynamicChartDataRoutingModule } from "./grid-dynamic-chart-data-routing.module";
import { FilterTypePipe, GridDynamicChartDataComponent, NamePipe } from "./grid-dynamic-chart-data.component";
import { IgxDataChartCategoryModule } from "igniteui-charts/igx-data-chart-category-module";
import { IgxDataChartCoreModule } from "igniteui-charts/igx-data-chart-core-module";
import { IgxLegendModule } from "igniteui-charts/igx-legend-module";
import { IgxDataChartInteractivityModule } from "igniteui-charts/igx-data-chart-interactivity-module";
import { IgxNumericXAxisModule } from "igniteui-charts/igx-numeric-x-axis-module";
import { IgxNumericYAxisModule } from "igniteui-charts/igx-numeric-y-axis-module";
import { IgxCategoryXAxisModule } from "igniteui-charts/igx-category-x-axis-module";
import { IgxItemLegendModule } from "igniteui-charts/igx-item-legend-module";
import { IgxPieChartModule } from "igniteui-charts/igx-pie-chart-module";
import { IgxDataChartStackedModule } from "igniteui-charts/igx-data-chart-stacked-module";
import { IgxDataChartScatterModule } from "igniteui-charts/igx-data-chart-scatter-module";
import { IgxBarSeriesModule } from "igniteui-charts/igx-bar-series-module";
import { IgxCategoryChartModule } from "igniteui-charts/igx-category-chart-module";
import { IgxDataChartComponent } from "igniteui-charts/igx-data-chart-component";
import { IgxItemLegendComponent } from "igniteui-charts/igx-item-legend-component";
import { IgxLegendComponent } from "igniteui-charts/igx-legend-component";
import { IgxPieChartComponent } from "igniteui-charts/igx-pie-chart-component";

@NgModule({
    declarations: [
        GridDynamicChartDataComponent,
        ChartHostDirective,
        ConditionalFormattingDirective,
        ChartIntegrationDirective,
        NamePipe,
        FilterTypePipe
    ],
    imports: [
        IgxButtonModule,
        IgxDialogModule,
        IgxDividerModule,
        IgxGridModule,
        IgxTabsModule,
        IgxDataChartCategoryModule,
        IgxDataChartCoreModule,
        IgxLegendModule,
        IgxDataChartInteractivityModule,
        IgxNumericXAxisModule,
        IgxNumericYAxisModule,
        IgxCategoryXAxisModule,
        IgxItemLegendModule,
        IgxPieChartModule,
        IgxDataChartStackedModule,
        IgxDividerModule,
        IgxDataChartScatterModule,
        IgxBarSeriesModule,
        IgxCategoryChartModule,
        GridDynamicChartDataRoutingModule
    ],
    providers: [],
    entryComponents: [
        IgxDataChartComponent,
        IgxItemLegendComponent,
        IgxLegendComponent,
        IgxPieChartComponent
    ]
})
export class GridDynamicChartDataModule {}
