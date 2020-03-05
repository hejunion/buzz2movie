import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private autheService: AuthenticationService,
    public menuCtrl:MenuController,
    public router: Router

  ) {}

  logout(){
    this.autheService.logout();
    this.menuCtrl.close('mainMenu');
    this.goHome();
  }

  goHome(){
    this.router.navigateByUrl('tabs/feed');
  }
}
