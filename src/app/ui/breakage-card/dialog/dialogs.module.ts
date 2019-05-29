import { DialogsService } from './dialogs.service';
import { MatDialogModule, MatButtonModule  } from '@angular/material';
import { NgModule } from '@angular/core';

import { ConfirmDialogComponent } from './confirm-dialog.component';
import { ImageModalComponent } from './image-modal.component';

@NgModule({
    imports: [
        MatDialogModule,
        MatButtonModule,
    ],
    exports: [
        ConfirmDialogComponent,
        ImageModalComponent,
    ],
    declarations: [
        ConfirmDialogComponent,
        ImageModalComponent,
    ],
    providers: [
        DialogsService,
    ],
    entryComponents: [
        ConfirmDialogComponent,
        ImageModalComponent,
    ],
})
export class DialogsModule { }
