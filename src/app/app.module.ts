import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxSliderModule, IgxNavigationDrawerModule, IgxIconModule, IgxSelectModule, IgxButtonModule } from "igniteui-angular";
import { IgxCategoryChartModule } from "igniteui-charts/igx-category-chart-module";
import { CategoryChartSampleComponent } from "./category-chart-sample/category-chart-sample.component";
import { RoutingModule } from "./app.routing.module";
import { FinancialChartSampleComponent } from "./financial-chart-sample/financial-chart-sample.component";
import { IgxFinancialChartModule } from "igniteui-charts/igx-financial-chart-module";
import { GridDynamicChartDataRoutingModule } from "./grid-dynamic-chart-data/grid-dynamic-chart-data-routing.module";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    CategoryChartSampleComponent,
    FinancialChartSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxCategoryChartModule,
    IgxSliderModule,
    IgxNavigationDrawerModule,
    IgxIconModule,
    RoutingModule,
    IgxFinancialChartModule,
    IgxButtonModule,
    IgxSelectModule,
    GridDynamicChartDataRoutingModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: []
})
export class AppModule {
}
