/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Component, EventEmitter, Output, ViewChild, AfterContentInit, ChangeDetectionStrategy, TemplateRef, ChangeDetectorRef, Input } from '@angular/core';
import { TypeRegistrar } from 'igniteui-core/type';
import { IgxSeriesComponent } from './igx-series-component';


@Component({
  selector: 'igx-financial-chart-default-templates',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-template #financialChartRangeSelectorTemplate let-vm="vm">
        <div class='financialChartRangeSelector'>
		    <label class='financialChartRangeSelectorLabel rangeSelectorOneMonth' *ngIf="vm.oneMonthVisible">
		    	<input type='radio' value='1m' [checked]="vm.oneMonthChecked" (change)="vm.changeSelection($event.target.value)">
		    	<span class='financialChartRangeSelectorLabelSpan'>1m</span>
		    </label>
		    <label class='financialChartRangeSelectorLabel rangeSelectorThreeMonths' *ngIf="vm.threeMonthsVisible">
		    	<input type='radio' value='3m' [checked]="vm.threeMonthsChecked" (change)="vm.changeSelection($event.target.value)">
		    	<span class='financialChartRangeSelectorLabelSpan'>3m</span>
		    </label>
		    <label class='financialChartRangeSelectorLabel rangeSelectorSixMonths' *ngIf="vm.sixMonthsVisible">
		    	<input type='radio' value='6m' [checked]="vm.sixMonthsChecked" (change)="vm.changeSelection($event.target.value)">
		    	<span class='financialChartRangeSelectorLabelSpan'>6m</span>
		    </label>
		    <label class='financialChartRangeSelectorLabel rangeSelectorYTD' *ngIf="vm.yearToDateVisible">
		    	<input type='radio' value='YTD' [checked]="vm.yearToDateChecked" (change)="vm.changeSelection($event.target.value)">
		    	<span class='financialChartRangeSelectorLabelSpan'>YTD</span>
		    </label>
		    <label class='financialChartRangeSelectorLabel rangeSelectorOneYear' *ngIf="vm.oneYearVisible">
		    	<input type='radio' value='1y' [checked]="vm.oneYearChecked" (change)="vm.changeSelection($event.target.value)">
		    	<span class='financialChartRangeSelectorLabelSpan'>1y</span>
		    </label>
		    <label class='financialChartRangeSelectorLabel rangeSelectorAll' *ngIf="vm.allVisible">
		    	<input type='radio' value='all' [checked]="vm.allChecked" (change)="vm.changeSelection($event.target.value)">
		    	<span class='financialChartRangeSelectorLabelSpan'>all</span>
		    </label>
	    </div>
    </ng-template>

    <ng-template #financialChartTypePickerTemplate let-vm="vm">
        <button class='financialChartTypePickerDropDownButton' (click)="vm.onButtonPressed()" [attr.data-value]="vm.chartTypeString">
	    	<span class='ui-icon ui-icon-changeable'></span>
	    	<span class='ui-icon-toolbar-dd'></span>
	    </button>

	    <div class='financialChartTypePickerDropDownMenu' [style.display]="vm.isOpen ? 'block' : 'none'"
            (click)="vm.handleDropDownClick($event)">
	    	<ul>
	    		<li class='financialChartListItem' data-value='Auto'>
	    		    <span class='ui-icon ui-icon-chartAuto'></span>
	    		    <span>Auto</span>
	    		</li>
	    		<li class='financialChartListItem' data-value='Bar'>
	    			<span class='ui-icon ui-icon-BarIcon'></span>
	    			<span>Bar</span>
	    		</li>
	    		<li class='financialChartListItem' data-value='Line'>
	    			<span class='ui-icon ui-icon-LineIcon'></span>
	    			<span>Line</span>
	    		</li>
	    		<li class='financialChartListItem' data-value='Candle'>
	    			<span class='ui-icon ui-icon-CandleIcon'></span>
	    			<span>Candle</span>
	    		</li>
	    		<li class='financialChartListItem' data-value='Column'>
	    			<span class='ui-icon ui-icon-ColumnIcon'></span>
	    			<span>Column</span>
	    		</li>
	    	</ul>
	    </div>
    </ng-template>

    <ng-template #financialChartIndicatorMenuTemplate let-vm="vm">
        <button class='financialChartIndicatorMenuDropDownButton' (click)="vm.onButtonPressed()">
	    	<div class='ui-ChartButtonWrapper'>
	    		<span class='ui-icon ui-icon-IndicatorsIcon'></span>
	    		<span class='financialChartIndicatorMenuLabel'>Indicators</span>
	    		<span class='ui-icon-toolbar-dd'></span>
	    	</div>
        </button>

	    <div class='financialChartIndicatorMenuDropDownMenu' [style.display]="vm.isOpen ? 'block' : 'none'" (click)="vm.handleDropDownClick($event)">
	    	<ul class='financialChartIndicatorMenuDropDownMenuList'>
			<li data-value='FinancialOverlayType'>
				<span>Overlays</span>
				<ul>
					<li class='financialChartListItem' data-value='BollingerBands'>Bollinger Bands</li>
					<li class='financialChartListItem' data-value='PriceChannel'>Price Channel</li>
				</ul>
			</li>
			<li data-value='TrendLineType'>
				<span>Trendlines</span>
				<ul>
					<li class='financialChartListItem' data-value='LinearFit'>Linear Fit</li>
					<li class='financialChartListItem' data-value='QuadraticFit'>Quadratic Fit</li>
					<li class='financialChartListItem' data-value='CubicFit'>Cubic Fit</li>
					<li class='financialChartListItem' data-value='QuarticFit'>Quartic Fit</li>
					<li class='financialChartListItem' data-value='QuinticFit'>Quintic Fit</li>
					<li class='financialChartListItem' data-value='LogarithmicFit'>Logarithmic Fit</li>
					<li class='financialChartListItem' data-value='ExponentialFit'>Exponential Fit</li>
					<li class='financialChartListItem' data-value='PowerLawFit'>PowerLaw Fit</li>
					<li class='financialChartListItem' data-value='SimpleAverage'>Simple Average</li>
					<li class='financialChartListItem' data-value='ExponentialAverage'>Exponential Average</li>
					<li class='financialChartListItem' data-value='ModifiedAverage'>Modified Average</li>
					<li class='financialChartListItem' data-value='CumulativeAverage'>Cumulative Average</li>
					<li class='financialChartListItem' data-value='WeightedAverage'>Weighted Average</li>
				</ul>
			</li>
			<li data-value='FinancialChartVolumeType'><span>Volume</span>
				<ul>
					<li class='financialChartListItem' data-value='Column'>Column</li>
					<li class='financialChartListItem' data-value='Line'>Line</li>
					<li class='financialChartListItem' data-value='Area'>Area</li>
				</ul>
			</li>
			<li data-value='FinancialIndicatorType'><span>Standalone Indicators</span>
				<ul>
					<li class='financialChartListItem' data-value='AbsoluteVolumeOscillator'>Absolute Volume Oscillator</li>
					<li class='financialChartListItem' data-value='AccumulationDistribution'>Accumulation Distribution</li>
					<li class='financialChartListItem' data-value='AverageDirectionalIndex'>Average Directional Index</li>
					<li class='financialChartListItem' data-value='AverageTrueRange'>Average True Range</li>
					<li class='financialChartListItem' data-value='BollingerBandWidth'>Bollinger Band Width</li>
					<li class='financialChartListItem' data-value='ChaikinOscillator'>Chaikin Oscillator</li>
					<li class='financialChartListItem' data-value='ChaikinVolatility'>Chaikin Volatility</li>
					<li class='financialChartListItem' data-value='CommodityChannelIndex'>Commodity Channel Index</li>
					<li class='financialChartListItem' data-value='DetrendedPriceOscillator'>Detrended Price Oscillator</li>
					<li class='financialChartListItem' data-value='EaseOfMovement'>Ease Of Movement</li>
					<li class='financialChartListItem' data-value='FastStochasticOscillator'>Fast Stochastic Oscillator</li>
					<li class='financialChartListItem' data-value='ForceIndex'>Force Index</li>
					<li class='financialChartListItem' data-value='FullStochasticOscillator'>Full Stochastic Oscillator</li>
					<li class='financialChartListItem' data-value='MarketFacilitationIndex'>Market Facilitation Index</li>
					<li class='financialChartListItem' data-value='MassIndex'>Mass Index</li>
					<li class='financialChartListItem' data-value='MedianPrice'>Median Price</li>
					<li class='financialChartListItem' data-value='MoneyFlowIndex'>Money Flow Index</li>
					<li class='financialChartListItem' data-value='MovingAverageConvergenceDivergence'>MACD</li>
					<li class='financialChartListItem' data-value='NegativeVolumeIndex'>Negative Volume Index</li>
					<li class='financialChartListItem' data-value='OnBalanceVolume'>On Balance Volume</li>
					<li class='financialChartListItem' data-value='PercentagePriceOscillator'>Percentage Price Oscillator</li>
					<li class='financialChartListItem' data-value='PercentageVolumeOscillator'>Percentage Volume Oscillator</li>
					<li class='financialChartListItem' data-value='PositiveVolumeIndex'>Positive Volume Index</li>
					<li class='financialChartListItem' data-value='PriceVolumeTrend'>Price Volume Trend</li>
					<li class='financialChartListItem' data-value='RateOfChangeAndMomentum'>ROC</li>
					<li class='financialChartListItem' data-value='RelativeStrengthIndex'>RSI</li>
					<li class='financialChartListItem' data-value='SlowStochasticOscillator'>Slow Stochastic Oscillator</li>
					<li class='financialChartListItem' data-value='StandardDeviation'>Standard Deviation</li>
					<li class='financialChartListItem' data-value='StochRSI'>Stoch RSI</li>
					<li class='financialChartListItem' data-value='TRIX'>TRIX</li>
					<li class='financialChartListItem' data-value='TypicalPrice'>Typical Price</li>
					<li class='financialChartListItem' data-value='UltimateOscillator'>Ultimate Oscillator</li>
					<li class='financialChartListItem' data-value='WeightedClose'>Weighted Close</li>
					<li class='financialChartListItem' data-value='WilliamsPercentR'>Williams %R</li>
				</ul>
			</li>
		</ul>
	    </div>
    </ng-template>

    <ng-template #financialChartToolbarTemplate let-vm="vm">
        <ng-template #defaultTemplate>
            <div></div>
        </ng-template>

        <div class='financialChartToolbar'>
            <div class='financialChartToolbar'>
                <div class='financialChartIndicatorMenu' *ngIf='vm.isIndicatorMenuVisible'>
                    <ng-container *ngTemplateOutlet="vm.financialChartIndicatorMenu.template ? vm.financialChartIndicatorMenu.template : defaultTemplate; context: vm.financialChartIndicatorMenu">
                    </ng-container>
                </div>
                <div class='financialChartRangeSelector'>
                    <ng-container *ngTemplateOutlet="vm.financialChartRangeSelector.template ? vm.financialChartRangeSelector.template : defaultTemplate; context: vm.financialChartRangeSelector">
                    </ng-container>
                </div>
                <div class='financialChartTypePicker'>
                    <ng-container *ngTemplateOutlet="vm.financialChartTypePicker.template ? vm.financialChartTypePicker.template : defaultTemplate; context: vm.financialChartTypePicker">
                    </ng-container>
                </div>
            </div>
        </div>
    </ng-template>
  `,
  styles: [`
.ui-financialchart-container {
    font-family: "Segoe UI",Arial,sans-serif;
    font-family: var(--financial-toolbar-font-family, "Segoe UI",Arial,sans-serif);
    font-size: 12px;
    font-size: var(--financial-toolbar-font-size, 12px);
    border-width: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: var(--financial-highlight-color, rgba(0,0,0,0));
}

.ui-financialchart-mainChart {
    margin-left: 15px;
    margin-left: var(--financial-pane-margin-left, 15px);
}

.ui-financialchart-volumeChart {
    margin-left: 15px;
    margin-left: var(--financial-pane-margin-left, 15px);
}

.financialChartMainGrid {
    height: 100%;
    width: 100%;
    display: grid;
    display: -ms-grid;
    -ms-grid-columns: 100%;
}

.financialChartPrice {
    grid-row: 3;
    -ms-grid-row: 3;
    margin-top: 10px;
    margin-top: var(--financial-pane-margin-top, 10px);
}
.financialChartPrice, .financialChartPrice > div {
    min-height: 100px;
}
.financialChartIndicators {
    grid-row: 4;
    -ms-grid-row: 4;
}
.financialChartVolume {
    grid-row: 5;
    -ms-grid-row: 5;
}
.financialChartZoomSlider {
    grid-row: 6;
    -ms-grid-row: 6;
}

/*
/////////////////////
*/
/* Toolbar styles */
/*
/////////////////////
*/

.financialChartToolbar {
    display: grid;
    display: -ms-grid;
    grid-row: 1;
    -ms-grid-rows: 100%;
    -ms-grid-row: 1;
    -ms-grid-columns: 100%;
    font-family: "Verdana",Arial,sans-serif;
    font-family: var(--financial-toolbar-font-family, "Verdana",Arial,sans-serif);
    font-size: 12px;
    font-size: var(--financial-toolbar-font-size, 12px);
}

/* scrollbar styles */
.financialChartToolbar ::-webkit-scrollbar
{
    width: 14px;
    width: var(--financial-toolbar-scrollbar-width, 14px);
    background-color: #eee;
    background-color: var(--financial-toolbar-scrollbar-background, #eee);
}
.financialChartToolbar ::-webkit-scrollbar-track
{
    border-radius: 1px;
    border-radius: var(--financial-toolbar-scrollbar-track-radius, 1px);
    background-color: #eee;
    background-color: var(--financial-toolbar-scrollbar-track-background, #eee);
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    -webkit-box-shadow: inset 0 0 var(--financial-toolbar-scrollbar-track-shadow-radius, 6px) var(--financial-toolbar-scrollbar-track-shadow-color, rgba(0,0,0,0.3));
}
.financialChartToolbar ::-webkit-scrollbar-thumb
{
    border-radius: 1px;
    border-radius: var(--financial-toolbar-scrollbar-thumb-radius, 1px);
    background-color: #838383;
    background-color: var(--financial-toolbar-scrollbar-thumb-background, #838383);
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    -webkit-box-shadow: inset 0 0 var(--financial-toolbar-scrollbar-thumb-shadow-radius, 6px) var(--financial-toolbar-scrollbar-thumb-shadow-color, rgba(0,0,0,0.3));
}

.financialChartToolbar .financialChartToolbar {
    display: flex;
    display: -ms-flexbox;
    align-items: center;
    border: 1px solid #dadada;
    border: var(--financial-toolbar-border-thickness, 1px) solid var(--financial-toolbar-border-color, #dadada);
    color: black;
    color: var(--financial-toolbar-text-color, black);
    max-height: 45px;
    max-height: var(--financial-toolbar-max-height, 45px);
    background: #eeeeee;
    background: var(--financial-toolbar-background, #eeeeee);
}

.financialChartToolbar,
.financialChartToolbar button {
    font: 400 13px "Segoe UI", Arial, sans-serif!important;
    font: var(--financial-toolbar-range-button-font, 400 13px "Segoe UI", Arial, sans-serif!important);
}

.financialChartRangeSelector {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    height: 100%;
}

.financialChartRangeSelector input {
    display: none;
}

.financialChartRangeSelectorLabel {
    cursor: pointer;
    height: 100%;
}
.financialChartRangeSelectorLabel:hover .financialChartRangeSelectorLabelSpan {
    color: #4897AA;
    color: var(--financial-toolbar-range-button-hover-color, #4897AA);
    background: transparent;
    background: var(--financial-toolbar-range-button-hover-background, transparent);
}

.financialChartRangeSelectorLabel input:checked + span {
    color: #444444;
    color: var(--financial-toolbar-range-button-check-color, #444444);
    background-color: #dadada;
    background-color: var(--financial-toolbar-range-button-check-background, #dadada);
}

.financialChartRangeSelectorLabelSpan {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    padding: var(--financial-toolbar-range-button-padding, 10px);
    box-sizing: border-box;
}

.financialChartRangeSelectorLastOption {
    border: none;
    padding-right: 0;
    padding-right: var(--financial-toolbar-range-button-padding-right, 0px);
}

.financialChartIndicatorMenu,
.financialChartTypePicker {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.financialChartTypePicker {
    margin-left: auto;
    height: 100%;
    border-left: 1px solid #dadada;
    border-left: var(--financial-toolbar-border-thickness, 1px) solid
                 var(--financial-toolbar-border-color, #dadada);
}

.financialChartIndicatorMenu {
    height: 100%;
    padding:0 10px;
    border-right: 1px solid #dadada;
    border-right: var(--financial-toolbar-border-thickness, 1px) solid
                  var(--financial-toolbar-border-color, #dadada);
}

.financialChartIndicatorMenuDropDownMenu,
.financialChartTypePickerDropDownMenu {
    background: #fff;
    background: var(--financial-toolbar-dropdown-background-color, #fff);
    color: black;
    color: var(--financial-toolbar-dropdown-text-color, black);
    display: flex;
    flex-direction: column;
    z-index: 1;
    position: absolute;
    top: calc(100% + 1px);
    top: calc(100% + var(--financial-toolbar-dropdown-top-offset, 1px));
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    box-shadow: var(--financial-toolbar-dropdown-shadow,  0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22));
    white-space: nowrap;
    font-family: "Verdana",Arial,sans-serif;
    font-family: var(--financial-toolbar-dropdown-font-family, "Verdana",Arial,sans-serif);
    font-size: 12px;
    font-size: var(--financial-toolbar-dropdown-font-size, 12px);
}

.financialChartIndicatorMenuDropDownMenu {
    left: 0;
    min-width: 100px;
    min-width: var(--financial-toolbar-dropdown-min-width, 100px);
    height: 300px;
    height: var(--financial-toolbar-dropdown-height, 300px);
    overflow: auto;
}

.financialChartTypePickerDropDownMenu {
    right: 0;
}

.financialChartListItem {
    cursor: pointer;
    cursor: var(--financial-toolbar-dropdown-item-cursor, pointer);
}

.financialChartListItem:hover,
.financialChartListItem:focus {
    color: #4897AA;
    color: var(--financial-toolbar-dropdown-item-hover-color, #4897AA);
    background: transparent;
    background: var(--financial-toolbar-dropdown-item-hover-background, transparent);
}

.financialChartListItem span {
    position: relative;
    /* TODO: figure out why we need z-index here */
    z-index: -1;
}

.financialChartTypePickerDropDownMenu .financialChartListItem {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.financialChartTypePickerDropDownMenu .ui-icon {
    margin-right: 5px;
    margin-right: var(--financial-toolbar-icon-margin-right, 5px);
}

.financialChartIndicatorMenuDropDownButton,
.financialChartTypePickerDropDownButton {
    background-color: transparent;
    background-color: var(--financial-toolbar-indicators-background-color, transparent);
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

.financialChartIndicatorMenuDropDownMenuList {
    font-weight: bold;
}

.financialChartIndicatorMenuDropDownMenu li.checked,
.financialChartTypePickerDropDownMenu li.checked {
    color: #4897AA;
    color: var(--financial-toolbar-dropdown-item-check-color, #4897AA);
    background: transparent;
    background: var(--financial-toolbar-dropdown-item-check-background, transparent);
}

.financialChartIndicatorMenuDropDownMenu ul,
.financialChartTypePickerDropDownMenu ul {
    list-style-type: none;
    margin: 0;
    padding: 8px;
}

.financialChartIndicatorMenuDropDownMenu ul ul,
.financialChartTypePickerDropDownMenu ul ul {
    padding-left: 15px;
    padding-left: var(--financial-toolbar-dropdown-list-padding-left, 15px);
    font-weight: normal;
}

.financialChartIndicatorMenuDropDownMenu ul li,
.financialChartTypePickerDropDownMenu ul li {
    padding-top: 4px;
    padding-top: var(--financial-toolbar-dropdown-list-padding-top, 4px);
    position: relative;
}

.financialChartIndicatorMenuDropDownMenu li.checked:before{
    margin-left: -15px;
    margin-left:  var(--financial-toolbar-dropdown-list-margin-left, -15px);
    margin-right: 5px;
    margin-right: var(--financial-toolbar-dropdown-list-margin-right, 5px);
    content: "\\2713";
    position: absolute;
}

.financialChartLegend {
    grid-row: 2;
    -ms-grid-row: 2;
}

.ui-ChartButtonWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}

.financialChartTypePickerDropDownButton .ui-icon-triangle-1-s,
.ui-ChartButtonWrapper .ui-icon-triangle-1-s {
    font-size: 10px;
    font-size: var(--financial-toolbar-icon-font-size, 10px);
}

.financialChartTypePickerDropDownButton {
    background-color: transparent;
    background-color: var(--financial-toolbar-chart-picker-background, transparent);
    height: 100%;
    padding: 0 10px;
    padding: var(--financial-toolbar-chart-picker-padding, 0 10px);
}

.financialChartIndicatorMenuLabel {
    margin: 0 5px;
    margin: var(--financial-toolbar-indicators-label-margin, 0 5px);
    color: inherit;
    color: var(--financial-toolbar-indicators-label-normal-color, inherit);
}

/* Icon styles if no theme is included */
.financialChartToolbar .ui-icon {
    color: #888888;
    color: var(--financial-toolbar-icon-color, #888888);
    width: 16px;
    width: var(--financial-toolbar-icon-width, 16px);
    height: 16px;
    height: var(--financial-toolbar-icon-height, 16px);
    display: flex;
    justify-content: center;
    align-items: center;
    text-indent: -99999px;
    overflow: hidden;
    position: relative;
}
.financialChartToolbar .ui-icon:before {
    display: block;
    height: 1em;
    left: 50%;
    line-height: 1;
    margin-left: -0.5em;
    margin-top: -0.5em;
    position: absolute;
    text-indent: 0;
    top: 50%;
    width: 1em;
}

.ui-icon-IndicatorsIcon:before {
    content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2055%2055%27%20fill%3D%27%23777777%27%3E%3Crect%20x%3D%2746.32%27%20y%3D%2716.34%27%20width%3D%275.97%27%20height%3D%2738.47%27%2F%3E%3Cpolygon%20points%3D%2736.73%2054.8%2042.7%2054.8%2042.7%2020.71%2040.34%2020.71%2036.73%2023.92%2036.73%2054.8%27%2F%3E%3Cpolygon%20points%3D%2727.14%2030.07%2027.14%2054.8%2033.11%2054.8%2033.11%2027.15%2028.46%2031.28%2027.14%2030.07%27%2F%3E%3Cpolygon%20points%3D%2730.74%2020.71%2029.62%2020.71%2030.12%2021.22%2030.74%2020.71%27%2F%3E%3Cpolygon%20points%3D%2717.55%2026.49%2017.55%2054.8%2023.52%2054.8%2023.52%2026.76%2020.26%2023.78%2017.55%2026.49%27%2F%3E%3Cpolygon%20points%3D%277.96%2024.97%207.96%2026.49%209.48%2024.97%207.96%2024.97%27%2F%3E%3Cpolygon%20points%3D%277.96%2054.8%2013.93%2054.8%2013.93%2030.11%207.96%2036.08%207.96%2054.8%27%2F%3E%3Cpolygon%20points%3D%2737.29%200.2%2043.23%206.14%2030.12%2016.96%2021.68%208.51%202.5%2027.69%207.29%2032.48%2020.26%2019.52%2028.46%2027.02%2047.33%2010.23%2052.5%2015.4%2052.5%2014.57%2052.5%200.2%2037.29%200.2%27%2F%3E%3C%2Fsvg%3E");
    content: var(--financial-toolbar-indicators-normal-icon,
             url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2055%2055%27%20fill%3D%27%23777777%27%3E%3Crect%20x%3D%2746.32%27%20y%3D%2716.34%27%20width%3D%275.97%27%20height%3D%2738.47%27%2F%3E%3Cpolygon%20points%3D%2736.73%2054.8%2042.7%2054.8%2042.7%2020.71%2040.34%2020.71%2036.73%2023.92%2036.73%2054.8%27%2F%3E%3Cpolygon%20points%3D%2727.14%2030.07%2027.14%2054.8%2033.11%2054.8%2033.11%2027.15%2028.46%2031.28%2027.14%2030.07%27%2F%3E%3Cpolygon%20points%3D%2730.74%2020.71%2029.62%2020.71%2030.12%2021.22%2030.74%2020.71%27%2F%3E%3Cpolygon%20points%3D%2717.55%2026.49%2017.55%2054.8%2023.52%2054.8%2023.52%2026.76%2020.26%2023.78%2017.55%2026.49%27%2F%3E%3Cpolygon%20points%3D%277.96%2024.97%207.96%2026.49%209.48%2024.97%207.96%2024.97%27%2F%3E%3Cpolygon%20points%3D%277.96%2054.8%2013.93%2054.8%2013.93%2030.11%207.96%2036.08%207.96%2054.8%27%2F%3E%3Cpolygon%20points%3D%2737.29%200.2%2043.23%206.14%2030.12%2016.96%2021.68%208.51%202.5%2027.69%207.29%2032.48%2020.26%2019.52%2028.46%2027.02%2047.33%2010.23%2052.5%2015.4%2052.5%2014.57%2052.5%200.2%2037.29%200.2%27%2F%3E%3C%2Fsvg%3E")
    );
}

.financialChartIndicatorMenuDropDownButton:hover .ui-icon-IndicatorsIcon:before,
.financialChartIndicatorMenuDropDownButton:focus .ui-icon-IndicatorsIcon:before {
    content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2055%2055%27%20fill%3D%27%234897AA%27%3E%3Crect%20x%3D%2746.32%27%20y%3D%2716.34%27%20width%3D%275.97%27%20height%3D%2738.47%27%2F%3E%3Cpolygon%20points%3D%2736.73%2054.8%2042.7%2054.8%2042.7%2020.71%2040.34%2020.71%2036.73%2023.92%2036.73%2054.8%27%2F%3E%3Cpolygon%20points%3D%2727.14%2030.07%2027.14%2054.8%2033.11%2054.8%2033.11%2027.15%2028.46%2031.28%2027.14%2030.07%27%2F%3E%3Cpolygon%20points%3D%2730.74%2020.71%2029.62%2020.71%2030.12%2021.22%2030.74%2020.71%27%2F%3E%3Cpolygon%20points%3D%2717.55%2026.49%2017.55%2054.8%2023.52%2054.8%2023.52%2026.76%2020.26%2023.78%2017.55%2026.49%27%2F%3E%3Cpolygon%20points%3D%277.96%2024.97%207.96%2026.49%209.48%2024.97%207.96%2024.97%27%2F%3E%3Cpolygon%20points%3D%277.96%2054.8%2013.93%2054.8%2013.93%2030.11%207.96%2036.08%207.96%2054.8%27%2F%3E%3Cpolygon%20points%3D%2737.29%200.2%2043.23%206.14%2030.12%2016.96%2021.68%208.51%202.5%2027.69%207.29%2032.48%2020.26%2019.52%2028.46%2027.02%2047.33%2010.23%2052.5%2015.4%2052.5%2014.57%2052.5%200.2%2037.29%200.2%27%2F%3E%3C%2Fsvg%3E");
    content: var(--financial-toolbar-indicators-hover-icon,
             url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2055%2055%27%20fill%3D%27%234897AA%27%3E%3Crect%20x%3D%2746.32%27%20y%3D%2716.34%27%20width%3D%275.97%27%20height%3D%2738.47%27%2F%3E%3Cpolygon%20points%3D%2736.73%2054.8%2042.7%2054.8%2042.7%2020.71%2040.34%2020.71%2036.73%2023.92%2036.73%2054.8%27%2F%3E%3Cpolygon%20points%3D%2727.14%2030.07%2027.14%2054.8%2033.11%2054.8%2033.11%2027.15%2028.46%2031.28%2027.14%2030.07%27%2F%3E%3Cpolygon%20points%3D%2730.74%2020.71%2029.62%2020.71%2030.12%2021.22%2030.74%2020.71%27%2F%3E%3Cpolygon%20points%3D%2717.55%2026.49%2017.55%2054.8%2023.52%2054.8%2023.52%2026.76%2020.26%2023.78%2017.55%2026.49%27%2F%3E%3Cpolygon%20points%3D%277.96%2024.97%207.96%2026.49%209.48%2024.97%207.96%2024.97%27%2F%3E%3Cpolygon%20points%3D%277.96%2054.8%2013.93%2054.8%2013.93%2030.11%207.96%2036.08%207.96%2054.8%27%2F%3E%3Cpolygon%20points%3D%2737.29%200.2%2043.23%206.14%2030.12%2016.96%2021.68%208.51%202.5%2027.69%207.29%2032.48%2020.26%2019.52%2028.46%2027.02%2047.33%2010.23%2052.5%2015.4%2052.5%2014.57%2052.5%200.2%2037.29%200.2%27%2F%3E%3C%2Fsvg%3E")
    );
}

.financialChartIndicatorMenuDropDownButton:hover .financialChartIndicatorMenuLabel,
.financialChartIndicatorMenuDropDownButton:focus .financialChartIndicatorMenuLabel {
    color: #4897AA;
    color: var(--financial-toolbar-indicators-label-hover-color, #4897AA);
}

.ui-icon-toolbar-dd {
    position: relative;
    width: 16px;
    width: var(--financial-toolbar-dropdown-icon-width, 16px);
    height: 16px;
    height: var(--financial-toolbar-dropdown-icon-height, 16px);
    display: flex;
    justify-content: center;
    align-items: center;
}

.ui-icon-toolbar-dd:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 4px 0 4px;
    border-color: #666 transparent transparent transparent;
    border-color: var(--financial-toolbar-dropdown-icon-normal-color, #666) transparent transparent transparent;
}

.financialChartIndicatorMenuDropDownButton:hover .ui-icon-toolbar-dd:before,
.financialChartIndicatorMenuDropDownButton:focus .ui-icon-toolbar-dd:before,
.financialChartTypePickerDropDownButton:hover .ui-icon-toolbar-dd:before,
.financialChartTypePickerDropDownButton:focus .ui-icon-toolbar-dd:before {
    content: '';
    border-color: #4897AA transparent transparent transparent;
    border-color: var(--financial-toolbar-dropdown-icon-hover-color, #4897AA) transparent transparent transparent;
}

.financialChartListItem[data-value='Auto'] {
    padding-bottom: 5px;
    padding-bottom: var(--financial-toolbar-dropdown-border-bottom-padding, 5px)
    border-bottom: 1px solid #ddd;
    border-bottom: 1px solid var(--financial-toolbar-dropdown-border-bottom-color, #ddd)
    margin-bottom: 3px;
    margin-bottom: var(--financial-toolbar-dropdown-border-bottom-margin, 3px)
}

.financialChartTypePickerDropDownButton[data-value="Auto"] .ui-icon-chartAuto:before,
.financialChartListItem[data-value='Auto'] .ui-icon-changeable:before,
.financialChartListItem[data-value='Auto'] .ui-icon-chartAuto:before,
.financialChartTypePickerDropDownButton[data-value="Auto"] .ui-icon-changeable:before {
    content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2016%2016%27%3E%3Cpath%20d%3D%27M%208%203%20L%208%2013%20L%2010%2013%20L%2010%2016%20L%2012%2016%20L%2012%2013%20L%2014%2013%20L%2014%203%20L%2012%203%20L%2012%200%20L%2010%200%20L%2010%203%20L%208%203%20ZM%200%205%20L%200%2012%20L%202%2012%20L%202%2015%20L%204%2015%20L%204%2012%20L%206%2012%20L%206%205%20L%204%205%20L%204%202%20L%202%202%20L%202%205%20L%200%205%20Z%27%20fill%3D%27%23777777%27%20%2F%3E%3C%2Fsvg%3E");
    content: var(--financial-toolbar-chart-auto-normal-icon,
             url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2016%2016%27%3E%3Cpath%20d%3D%27M%208%203%20L%208%2013%20L%2010%2013%20L%2010%2016%20L%2012%2016%20L%2012%2013%20L%2014%2013%20L%2014%203%20L%2012%203%20L%2012%200%20L%2010%200%20L%2010%203%20L%208%203%20ZM%200%205%20L%200%2012%20L%202%2012%20L%202%2015%20L%204%2015%20L%204%2012%20L%206%2012%20L%206%205%20L%204%205%20L%204%202%20L%202%202%20L%202%205%20L%200%205%20Z%27%20fill%3D%27%23777777%27%20%2F%3E%3C%2Fsvg%3E")
    );
}

.financialChartListItem[data-value='Auto']:hover .ui-icon-chartAuto:before,
.financialChartListItem[data-value='Auto']:focus .ui-icon-chartAuto:before,
.financialChartTypePickerDropDownButton[data-value='Auto']:hover .ui-icon-changeable:before,
.financialChartTypePickerDropDownButton[data-value='Auto']:focus .ui-icon-changeable:before {
    content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2016%2016%27%20%3E%3Cpath%20d%3D%27M%208%203%20L%208%2013%20L%2010%2013%20L%2010%2016%20L%2012%2016%20L%2012%2013%20L%2014%2013%20L%2014%203%20L%2012%203%20L%2012%200%20L%2010%200%20L%2010%203%20L%208%203%20ZM%200%205%20L%200%2012%20L%202%2012%20L%202%2015%20L%204%2015%20L%204%2012%20L%206%2012%20L%206%205%20L%204%205%20L%204%202%20L%202%202%20L%202%205%20L%200%205%20Z%27%20fill%3D%27%234897AA%27%20%2F%3E%3C%2Fsvg%3E");
    content: var(--financial-toolbar-chart-auto-hover-icon,
             url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2016%2016%27%20%3E%3Cpath%20d%3D%27M%208%203%20L%208%2013%20L%2010%2013%20L%2010%2016%20L%2012%2016%20L%2012%2013%20L%2014%2013%20L%2014%203%20L%2012%203%20L%2012%200%20L%2010%200%20L%2010%203%20L%208%203%20ZM%200%205%20L%200%2012%20L%202%2012%20L%202%2015%20L%204%2015%20L%204%2012%20L%206%2012%20L%206%205%20L%204%205%20L%204%202%20L%202%202%20L%202%205%20L%200%205%20Z%27%20fill%3D%27%234897AA%27%20%2F%3E%3C%2Fsvg%3E")
    );
}

.financialChartListItem[data-value='Bar'] .ui-icon-BarIcon:before,
.financialChartTypePickerDropDownButton[data-value="Bar"] .ui-icon-changeable:before {
    content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2016%2016%27%20%3E%3Cpath%20d%3D%27M%203%202%20L%203%204%20L%203%206%20L%203%207%20L%200%207%20L%200%209%20L%203%209%20L%203%2012%20L%205%2012%20L%205%209%20L%205%207%20L%205%206%20L%208%206%20L%208%204%20L%205%204%20L%205%202%20L%203%202%20ZM%2010%200%20L%2010%203%20L%2010%205%20L%2010%2010%20L%207%2010%20L%207%2012%20L%2010%2012%20L%2010%2015%20L%2012%2015%20L%2012%2012%20L%2012%2010%20L%2012%205%20L%2015%205%20L%2015%203%20L%2012%203%20L%2012%200%20L%2010%200%20Z%27%20fill%3D%27%23777777%27%20%2F%3E%3C%2Fsvg%3E");
    content: var(--financial-toolbar-chart-bar-normal-icon,
             url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2016%2016%27%20%3E%3Cpath%20d%3D%27M%203%202%20L%203%204%20L%203%206%20L%203%207%20L%200%207%20L%200%209%20L%203%209%20L%203%2012%20L%205%2012%20L%205%209%20L%205%207%20L%205%206%20L%208%206%20L%208%204%20L%205%204%20L%205%202%20L%203%202%20ZM%2010%200%20L%2010%203%20L%2010%205%20L%2010%2010%20L%207%2010%20L%207%2012%20L%2010%2012%20L%2010%2015%20L%2012%2015%20L%2012%2012%20L%2012%2010%20L%2012%205%20L%2015%205%20L%2015%203%20L%2012%203%20L%2012%200%20L%2010%200%20Z%27%20fill%3D%27%23777777%27%20%2F%3E%3C%2Fsvg%3E")
    );
}

.financialChartTypePickerDropDownButton[data-value='Bar']:hover .ui-icon-changeable:before,
.financialChartTypePickerDropDownButton[data-value='Bar']:focus .ui-icon-changeable:before,
.financialChartListItem[data-value="Bar"]:hover .ui-icon-BarIcon:before,
.financialChartListItem[data-value="Bar"]:focus .ui-icon-BarIcon:before {
    content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2016%2016%27%3E%3Cpath%20d%3D%27M%203%202%20L%203%204%20L%203%206%20L%203%207%20L%200%207%20L%200%209%20L%203%209%20L%203%2012%20L%205%2012%20L%205%209%20L%205%207%20L%205%206%20L%208%206%20L%208%204%20L%205%204%20L%205%202%20L%203%202%20ZM%2010%200%20L%2010%203%20L%2010%205%20L%2010%2010%20L%207%2010%20L%207%2012%20L%2010%2012%20L%2010%2015%20L%2012%2015%20L%2012%2012%20L%2012%2010%20L%2012%205%20L%2015%205%20L%2015%203%20L%2012%203%20L%2012%200%20L%2010%200%20Z%27%20fill%3D%27%234897AA%27%20%2F%3E%3C%2Fsvg%3E");
    content: var(--financial-toolbar-chart-bar-hover-icon,
             url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2016%2016%27%3E%3Cpath%20d%3D%27M%203%202%20L%203%204%20L%203%206%20L%203%207%20L%200%207%20L%200%209%20L%203%209%20L%203%2012%20L%205%2012%20L%205%209%20L%205%207%20L%205%206%20L%208%206%20L%208%204%20L%205%204%20L%205%202%20L%203%202%20ZM%2010%200%20L%2010%203%20L%2010%205%20L%2010%2010%20L%207%2010%20L%207%2012%20L%2010%2012%20L%2010%2015%20L%2012%2015%20L%2012%2012%20L%2012%2010%20L%2012%205%20L%2015%205%20L%2015%203%20L%2012%203%20L%2012%200%20L%2010%200%20Z%27%20fill%3D%27%234897AA%27%20%2F%3E%3C%2Fsvg%3E")
    );
}

.financialChartListItem[data-value='Line'] .ui-icon-LineIcon:before,
.financialChartTypePickerDropDownButton[data-value="Line"] .ui-icon-changeable:before {
    content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2016%2016%27%3E%3Cpath%20d%3D%27M%200%2011.3333%20L%201.6842%2013%20L%206.5%208.8125%20L%209.5313%2011.3438%20L%2016%205.5%20L%2014%203.5%20L%209.5313%208.1875%20L%206.5%205.625%20L%200%2011.3333%20Z%27%20fill%3D%27%23777777%27%20%2F%3E%3C%2Fsvg%3E");
    content: var(--financial-toolbar-chart-line-normal-icon,
             url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2016%2016%27%3E%3Cpath%20d%3D%27M%200%2011.3333%20L%201.6842%2013%20L%206.5%208.8125%20L%209.5313%2011.3438%20L%2016%205.5%20L%2014%203.5%20L%209.5313%208.1875%20L%206.5%205.625%20L%200%2011.3333%20Z%27%20fill%3D%27%23777777%27%20%2F%3E%3C%2Fsvg%3E")
    );
}

.financialChartTypePickerDropDownButton[data-value='Line']:hover .ui-icon-changeable:before,
.financialChartTypePickerDropDownButton[data-value='Line']:focus .ui-icon-changeable:before,
.financialChartListItem[data-value="Line"]:hover .ui-icon-LineIcon:before,
.financialChartListItem[data-value="Line"]:focus .ui-icon-LineIcon:before {
    content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2016%2016%27%3E%3Cpath%20d%3D%27M%200%2011.3333%20L%201.6842%2013%20L%206.5%208.8125%20L%209.5313%2011.3438%20L%2016%205.5%20L%2014%203.5%20L%209.5313%208.1875%20L%206.5%205.625%20L%200%2011.3333%20Z%27%20fill%3D%27%234897AA%27%20%2F%3E%3C%2Fsvg%3E");
    content: var(--financial-toolbar-chart-line-hover-icon,
             url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2016%2016%27%3E%3Cpath%20d%3D%27M%200%2011.3333%20L%201.6842%2013%20L%206.5%208.8125%20L%209.5313%2011.3438%20L%2016%205.5%20L%2014%203.5%20L%209.5313%208.1875%20L%206.5%205.625%20L%200%2011.3333%20Z%27%20fill%3D%27%234897AA%27%20%2F%3E%3C%2Fsvg%3E")
    );
}

.financialChartListItem[data-value='Candle'] .ui-icon-CandleIcon:before,
.financialChartTypePickerDropDownButton[data-value="Candle"] .ui-icon-changeable:before {
    content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2016%2016%27%3E%3Cpath%20d%3D%27M%208%203%20L%208%2013%20L%2010%2013%20L%2010%2016%20L%2012%2016%20L%2012%2013%20L%2014%2013%20L%2014%203%20L%2012%203%20L%2012%200%20L%2010%200%20L%2010%203%20L%208%203%20ZM%200%205%20L%200%2012%20L%202%2012%20L%202%2015%20L%204%2015%20L%204%2012%20L%206%2012%20L%206%205%20L%204%205%20L%204%202%20L%202%202%20L%202%205%20L%200%205%20Z%27%20fill%3D%27%23777777%27%20%2F%3E%3C%2Fsvg%3E");
    content: var(--financial-toolbar-chart-candle-normal-icon,
             url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2016%2016%27%3E%3Cpath%20d%3D%27M%208%203%20L%208%2013%20L%2010%2013%20L%2010%2016%20L%2012%2016%20L%2012%2013%20L%2014%2013%20L%2014%203%20L%2012%203%20L%2012%200%20L%2010%200%20L%2010%203%20L%208%203%20ZM%200%205%20L%200%2012%20L%202%2012%20L%202%2015%20L%204%2015%20L%204%2012%20L%206%2012%20L%206%205%20L%204%205%20L%204%202%20L%202%202%20L%202%205%20L%200%205%20Z%27%20fill%3D%27%23777777%27%20%2F%3E%3C%2Fsvg%3E")
    );
}

.financialChartTypePickerDropDownButton[data-value='Candle']:hover .ui-icon-changeable:before,
.financialChartTypePickerDropDownButton[data-value='Candle']:focus .ui-icon-changeable:before,
.financialChartListItem[data-value="Candle"]:hover .ui-icon-CandleIcon:before,
.financialChartListItem[data-value="Candle"]:focus .ui-icon-CandleIcon:before {
    content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2016%2016%27%20%3E%3Cpath%20d%3D%27M%208%203%20L%208%2013%20L%2010%2013%20L%2010%2016%20L%2012%2016%20L%2012%2013%20L%2014%2013%20L%2014%203%20L%2012%203%20L%2012%200%20L%2010%200%20L%2010%203%20L%208%203%20ZM%200%205%20L%200%2012%20L%202%2012%20L%202%2015%20L%204%2015%20L%204%2012%20L%206%2012%20L%206%205%20L%204%205%20L%204%202%20L%202%202%20L%202%205%20L%200%205%20Z%27%20fill%3D%27%234897AA%27%20%2F%3E%3C%2Fsvg%3E");
    content: var(--financial-toolbar-chart-candle-hover-icon,
             url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2016%2016%27%20%3E%3Cpath%20d%3D%27M%208%203%20L%208%2013%20L%2010%2013%20L%2010%2016%20L%2012%2016%20L%2012%2013%20L%2014%2013%20L%2014%203%20L%2012%203%20L%2012%200%20L%2010%200%20L%2010%203%20L%208%203%20ZM%200%205%20L%200%2012%20L%202%2012%20L%202%2015%20L%204%2015%20L%204%2012%20L%206%2012%20L%206%205%20L%204%205%20L%204%202%20L%202%202%20L%202%205%20L%200%205%20Z%27%20fill%3D%27%234897AA%27%20%2F%3E%3C%2Fsvg%3E")
    );
}

.financialChartListItem[data-value='Column'] .ui-icon-ColumnIcon:before,
.financialChartTypePickerDropDownButton[data-value="Column"] .ui-icon-changeable:before {
    content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2016%2016%27%3E%3Cpath%20d%3D%27M%200%2016%20L%203%2016%20L%203%2011%20L%200%2011%20L%200%2016%20ZM%2011%2016%20L%2011%202%20L%208%202%20L%208%2016%20L%2011%2016%20ZM%2015%2016%20L%2015%204%20L%2012%204%20L%2012%2016%20L%2015%2016%20ZM%207%2016%20L%207%206%20L%204%206%20L%204%2016%20L%207%2016%20Z%27%20fill%3D%27%23777777%27%20%2F%3E%3C%2Fsvg%3E");
    content: var(--financial-toolbar-chart-column-normal-icon,
             url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2016%2016%27%3E%3Cpath%20d%3D%27M%200%2016%20L%203%2016%20L%203%2011%20L%200%2011%20L%200%2016%20ZM%2011%2016%20L%2011%202%20L%208%202%20L%208%2016%20L%2011%2016%20ZM%2015%2016%20L%2015%204%20L%2012%204%20L%2012%2016%20L%2015%2016%20ZM%207%2016%20L%207%206%20L%204%206%20L%204%2016%20L%207%2016%20Z%27%20fill%3D%27%23777777%27%20%2F%3E%3C%2Fsvg%3E");
    );
}

.financialChartTypePickerDropDownButton[data-value='Column']:hover .ui-icon-changeable:before,
.financialChartTypePickerDropDownButton[data-value='Column']:focus .ui-icon-changeable:before,
.financialChartListItem[data-value="Column"]:hover .ui-icon-ColumnIcon:before,
.financialChartListItem[data-value="Column"]:focus .ui-icon-ColumnIcon:before {
    content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2016%2016%27%3E%3Cpath%20d%3D%27M%200%2016%20L%203%2016%20L%203%2011%20L%200%2011%20L%200%2016%20ZM%2011%2016%20L%2011%202%20L%208%202%20L%208%2016%20L%2011%2016%20ZM%2015%2016%20L%2015%204%20L%2012%204%20L%2012%2016%20L%2015%2016%20ZM%207%2016%20L%207%206%20L%204%206%20L%204%2016%20L%207%2016%20Z%27%20fill%3D%27%234897AA%27%20%2F%3E%3C%2Fsvg%3E");
    content: var(--financial-toolbar-chart-column-hover-icon,
        url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2016%2016%27%3E%3Cpath%20d%3D%27M%200%2016%20L%203%2016%20L%203%2011%20L%200%2011%20L%200%2016%20ZM%2011%2016%20L%2011%202%20L%208%202%20L%208%2016%20L%2011%2016%20ZM%2015%2016%20L%2015%204%20L%2012%204%20L%2012%2016%20L%2015%2016%20ZM%207%2016%20L%207%206%20L%204%206%20L%204%2016%20L%207%2016%20Z%27%20fill%3D%27%234897AA%27%20%2F%3E%3C%2Fsvg%3E")
    );
}
`]
})
export class IgxFinancialChartDefaultTemplatesComponent implements AfterContentInit {
    getSelection(ele: HTMLSelectElement): string[] {
        let ret: string[] = [];
        for (let i = 0; i < ele.options.length; i++) {
            if (ele.options[i].selected) {
                ret.push(ele.options[i].value);
            }
        }
        return ret;
    }

    @ViewChild("financialChartRangeSelectorTemplate", { static: true })
    public financialChartRangeSelectorTemplate: TemplateRef<any>;

    @ViewChild("financialChartTypePickerTemplate", { static: true })
    public financialChartTypePickerTemplate: TemplateRef<any>;

    @ViewChild("financialChartIndicatorMenuTemplate", { static: true })
    public financialChartIndicatorMenuTemplate: TemplateRef<any>;

    @ViewChild("financialChartToolbarTemplate", { static: true })
    public financialChartToolbarTemplate: TemplateRef<any>;

    constructor(private _changeDetectorRef: ChangeDetectorRef) {

    }

    static register(): void {
        TypeRegistrar.registerCons("IgxFinancialChartDefaultTemplatesComponent", IgxFinancialChartDefaultTemplatesComponent);
    }

    @Output()
    onContentReady: EventEmitter<any> = new EventEmitter<any>();

    ngAfterContentInit(): void {
        this.onContentReady.emit({});
    }
}