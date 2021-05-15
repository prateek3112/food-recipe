import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'recipebook';
loadedFeature = 'recipe'
  onNavigate(feature : string){
this.loadedFeature=feature;
  }
}
