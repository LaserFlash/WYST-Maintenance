import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Import Building components */
import { BreakageCardComponent } from './breakage-card.component';
import { DialogsModule } from './dialog/dialogs.module';

import { KnownBoatsService } from '../../core/constants/known-boats/known-boats.service';
import { DialogsService } from './dialog/dialogs.service';
import { ThemeTrackerService } from '../../theme-tracker.service';
import { ImportanceConversionHelper } from '../../core/constants/menu-names/nameConversion';


/* Import Material2 */
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';

import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    BreakageCardComponent,
  ],
  imports: [
    CommonModule,
    DialogsModule,
    FlexLayoutModule,
    MatCardModule,
    MatListModule,
    MatButtonModule

  ],
  providers: [
    KnownBoatsService,
    DialogsService,
    ThemeTrackerService,
    ImportanceConversionHelper
  ],
  exports: [
    BreakageCardComponent
  ],
})
export class BreakageCardModule { }
