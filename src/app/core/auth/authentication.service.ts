import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireAuth } from "@angular/fire/auth";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class AuthenticationService {
  public authState: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isAdmin: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private afAuth: AngularFireAuth, db: AngularFireDatabase) {
    this.afAuth.authState.subscribe(async (data) => {
      console.log(data);
      if (!data) {
        this.isAdmin.next(false);
        this.authState.next(false);
      }

      if (data != null) {
        (await this.afAuth.currentUser)
          .getIdTokenResult()
          .then((idTokenResult) => {
            this.authState.next(true); // Is now authenticated

            // Confirm the user is an Admin.
            if (!!idTokenResult.claims.admin) {
              this.isAdmin.next(true);
              return;
            }

            this.isAdmin.next(false); // If reached not an admin
          })
          .catch(() => {
            this.isAdmin.next(false);
          });
      }
    });
  }

  /* Logout the current user */
  public async logout() {
    await this.afAuth.signOut();
  }
}
