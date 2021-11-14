import { APP_INITIALIZER } from '@angular/core';
import { Router} from "@angular/router";

export function appInitializerFactory(rout: Router) {

  return () => {
    new Promise(  (resolve => {
      rout.navigate(['/login'])
      resolve(1);
    }))
  }
}

export const APP_INITIALIZER_PROVIDER = {
  provide: APP_INITIALIZER,
  useFactory: appInitializerFactory,
  deps: [],
  multi: true,
};
