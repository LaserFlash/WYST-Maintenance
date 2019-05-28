import { Injectable } from '@angular/core';
import { CookieService, CookieOptions } from 'ngx-cookie';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ThemeTrackerService {
  public isDark: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private cookieService: CookieService) {
    this.isDark.next(this.cookieService.get('wyst') === '1');
   }

  public setDark(b: boolean){
    this.isDark.next(b);
    const cookieOptions: CookieOptions = { expires: new Date(32525112147000)}
    this.cookieService.put('wyst', (b ? 1 : 0).toString(), cookieOptions)
  }

}
