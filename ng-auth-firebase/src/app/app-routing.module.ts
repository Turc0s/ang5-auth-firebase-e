import{ NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { PagesListComponent } from "./pages-list/pages-list.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
    { path: "", redirectTo: "/home",  pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "pages", component: PagesListComponent },
    { path: "login", component: LoginPageComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
    
}