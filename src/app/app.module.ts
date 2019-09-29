import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StoreModule } from "./store/store.module";
import { StoreComponent } from "./store/store.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { CheckoutComponent } from "./store/checkout.component";
import { RouterModule, Routes } from "@angular/router";
import { StoreFirstGuard } from "./storeFirst.guard";

const routes: Routes = [
    {
        path: "store", component: StoreComponent,
        canActivate: [StoreFirstGuard]
    },
    {
        path: "cart", component: CartDetailComponent,
        canActivate: [StoreFirstGuard]
    },
    {
        path: "checkout", component: CheckoutComponent,
        canActivate: [StoreFirstGuard]
    },
    {
        path: "admin",
        loadChildren:"./admin/admin.module#AdminModule",
        canActivate: [StoreFirstGuard]
    },
    { path: "**", redirectTo: "/store" }
]

@NgModule({
    imports: [BrowserModule, StoreModule,
        RouterModule.forRoot(routes, { enableTracing: false }) // change for router log
    ],
    providers: [StoreFirstGuard],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }