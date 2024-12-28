import { Component } from '@angular/core';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HomePageComponent } from './gifs/pages/home-page/home-page.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [SidebarComponent, HomePageComponent]
})
export class AppComponent {
  title = 'gifs-app';
}
