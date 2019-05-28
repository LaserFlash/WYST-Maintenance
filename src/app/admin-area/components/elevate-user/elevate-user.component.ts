import { Component, OnInit } from '@angular/core';
import { User } from '../../../core/objects/user';
import { UserManagementService } from '../../shared/user-management.service'

@Component({
  selector: 'elevate-user',
  templateUrl: './elevate-user.component.html',
  styleUrls: ['./elevate-user.component.css']
})

/**
* UI component for change the role of a user
*   Can change betweeen 'admin' & 'user'
*   Connects to a 'UserManagementService' to save the role to a DB
**/
export class ElevateUserComponent implements OnInit {

  users: User[];  //list of user information
  usersRole: boolean[]; //For use with checkbox (true if admin)

  constructor(
    private USERS: UserManagementService
  ) { }

  ngOnInit() {
    /* Get user information from DB and subscribe to changes */
    this.USERS.users.subscribe(usersDB => {
      this.users = usersDB;
      this.usersRole = this.users.map(user => {
        return user.role === 'admin';
      })
    })
  }

  /**
    Propogate changes to the given user's role to the database
  **/
  save(index: number) {
    /* Check if user is marked as 'admin' */
    if (this.usersRole[index]) {
      // Upgrade user to admin role
      this.USERS.upgradeToAdmin(this.users[index].id);
      return;
    }

    // Downgrade to standard user.
    this.USERS.downgradeToUser(this.users[index].id);
  }

}
