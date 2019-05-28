import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SignupComponent } from './core/auth/signup/signup.component';

import { MatSidenavModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OverlayContainer } from '@angular/cdk/overlay';

import { SharedServicesModule } from './core/shared-services.module';

import { environment } from '../environments/environment';

import { ServiceWorkerModule } from '@angular/service-worker';

import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { HammerConfig } from './hammer.config';
import 'hammerjs';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular';


const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  tosUrl: '',
  privacyPolicyUrl: '',
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM,
  autoUpgradeAnonymousUsers: true
};

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    MatSidenavModule,
    MatTabsModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatToolbarModule,
    SharedServicesModule.forRoot()
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: HammerConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('my-app-theme');
  }
}
