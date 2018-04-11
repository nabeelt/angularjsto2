import {Component} from '@angular/core';

@Component({
  selector: 'settings',
  template: `
    <h1>Settings</h1>
    <a routerLink="/messages/inbox">Page Size Settings</a>
    <a routerLink="../">Back</a>
    <p>back to angular 1<a href="/">super</a></p>
  `
})
export class SettingsCmp {
}