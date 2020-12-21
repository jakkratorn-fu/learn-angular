import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { TopBannerComponentComponent } from './top-banner-component/top-banner-component.component';
import { CategoryMenuComponentComponent } from './category-menu-component/category-menu-component.component';
import { SearchBarComponentComponent } from './search-bar-component/search-bar-component.component';
import { ToDoListComponentComponent } from './to-do-list-component/to-do-list-component.component';
import { SwiftViewsComponent } from './swift-views/swift-views.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponentComponent,
    TopBannerComponentComponent,
    CategoryMenuComponentComponent,
    SearchBarComponentComponent,
    ToDoListComponentComponent,
    SwiftViewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
