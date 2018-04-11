
import 'core-js/es7/reflect'
import 'zone.js/dist/zone'


import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {setUpLocationSync} from '@angular/router/upgrade';
import {Ng1AppModule} from './ng1_app';
import {Ng2AppModule} from './ng2_app';


platformBrowserDynamic().bootstrapModule(Ng2AppModule).then(ref => {
  const upgrade = (<any>ref.instance).upgrade;
  upgrade.bootstrap(document.body, [Ng1AppModule.name]);
  setUpLocationSync(upgrade);
});
