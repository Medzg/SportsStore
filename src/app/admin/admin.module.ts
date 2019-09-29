import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthComponent } from "./auth.component";
import { AdminComponent } from "./admin.component";
import { RouterModule } from "@angular/router";
import { authGuard } from "./auth.guard";

let routing = RouterModule.forChild([
    { path: "auth", component: AuthComponent },
    {
        path: "dashboard", component: AdminComponent,
        canActivate: [authGuard]
    },
    { path: "**", redirectTo: "auth" }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing],
    providers: [authGuard],
    declarations: [AuthComponent, AdminComponent]
})
export class AdminModule { };