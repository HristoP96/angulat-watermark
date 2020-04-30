import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    NgZone,
    OnDestroy,
    ViewChild,
    HostBinding
} from "@angular/core";
import { IgxCategoryChartComponent } from "igniteui-charts/igx-category-chart-component";
import { Router, NavigationStart } from "@angular/router";
import { IgxNavigationDrawerComponent } from "igniteui-angular";
import { filter } from "rxjs/operators";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    @ViewChild("navdrawer", { read: IgxNavigationDrawerComponent, static: true })
    navdrawer;

    public drawerState = {
        enableGestures: true,
        open: true,
        pin: false,
        pinThreshold: 768,
        position: "left",
        width: "300px",
        miniWidth: "80px",
        miniVariant: false
    };

    @HostBinding("class")
    public class = 'default';

    constructor(private router: Router) {
        this.router.events.pipe(
            filter(x => x instanceof NavigationStart)
        )
            .subscribe((event: NavigationStart) => {
                if (event.url !== "/" && !this.navdrawer.pin) {
                    this.navdrawer.close();
                }
            });
    }
}
