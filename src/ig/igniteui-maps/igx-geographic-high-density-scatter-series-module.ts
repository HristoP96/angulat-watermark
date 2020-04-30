/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { IgxHighDensityScatterSeriesDynamicModule } from 'igniteui-charts/igx-high-density-scatter-series-dynamic-module';

import { IgxGeographicHighDensityScatterSeriesComponent } from './igx-geographic-high-density-scatter-series-component';

@NgModule({
    declarations: [IgxGeographicHighDensityScatterSeriesComponent],
    imports: [CommonModule, IgxHighDensityScatterSeriesDynamicModule],
    exports: [IgxGeographicHighDensityScatterSeriesComponent, IgxHighDensityScatterSeriesDynamicModule],
    entryComponents: []
})
export class IgxGeographicHighDensityScatterSeriesModule {

}
