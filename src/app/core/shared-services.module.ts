import { NgModule, ModuleWithProviders } from '@angular/core';

import { AuthenticationService } from './auth/authentication.service';
import { ThemeTrackerService } from './theme/theme-tracker.service';
import { KnownBoatsService } from './constants/known-boats/known-boats.service';

import { CookieModule } from 'ngx-cookie';

@NgModule({
  imports: [
    CookieModule.forRoot()
  ]
})
export class SharedServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedServicesModule,
      providers: [AuthenticationService, ThemeTrackerService, KnownBoatsService]
    };
  }
}
