import { NgModule, ModuleWithProviders } from '@angular/core';

import { AuthenticationService } from "./core/auth/authentication.service";
import { ThemeTrackerService } from './theme-tracker.service';
import { KnownBoatsService } from './core/constants/known-boats/known-boats.service';

@NgModule({})
export class SharedServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedServicesModule,
      providers: [AuthenticationService, ThemeTrackerService, KnownBoatsService]
    };
  }
}
