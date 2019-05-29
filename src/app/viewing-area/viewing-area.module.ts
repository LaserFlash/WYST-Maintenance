import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewingAreaRoutingModule } from './viewing-area-routing.module';

/* Import Services/Providers */
import { BoatBreakageService } from './shared/providers/boat-breakage.service';
import { BoatUsageService } from './pages/view-usage/providers/boat-usage.service';

/* Import the sub-pages */
import { ViewingAreaComponent } from './viewing-area.component';
import { ViewUsageComponent } from './pages/view-usage/view-usage.component';
import { ViewIssuesComponent } from './pages/view-issues/view-issues.component';
import { ViewFixedComponent } from './pages/view-fixed/view-fixed.component';

/* Custom Components */
import { LastUsesComponent } from './pages/view-usage/components/last-uses/last-uses.component';
import { UsageGraphsComponent } from './pages/view-usage/components/usage-graphs/usage-graphs.component';
import { BreakageCardModule } from '../ui/breakage-card/breakage-card.module';
import { SortFilterBarComponent } from '../ui/sort-filter-bar/sort-filter-bar.component';

/* Import Material2 things */
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material';
import { MatChipsModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';

import { ChartsModule } from 'ng2-charts';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    ViewingAreaComponent,
    ViewUsageComponent,
    ViewIssuesComponent,
    ViewFixedComponent,
    LastUsesComponent,
    UsageGraphsComponent,
    SortFilterBarComponent
  ],
  imports: [
    CommonModule,
    ViewingAreaRoutingModule,
    BreakageCardModule,
    FlexLayoutModule,
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    MatMenuModule,
    MatChipsModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatInputModule,
    MatButtonModule,
    ChartsModule,
  ],
  providers: [
    BoatBreakageService,
    BoatUsageService
  ]
})
export class ViewingAreaModule { }
