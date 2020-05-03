import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = $localize`:@@my:My`;
  constructor(@Inject(LOCALE_ID) locale: string) {
    console.log('Locale:', locale);
    const profile = $localize`:@@profile:Profile`;
    console.log('Translated profile:', profile);
  }
}
