import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { RoutePaths } from 'app/shared/common/route-paths';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  public navPaths = RoutePaths;
  public currentUrl: String;

  private subRoute: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.subRoute = this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.currentUrl = e.url;
      }
    });
  }
  ngOnDestroy(): void {
    this.subRoute.unsubscribe();
  }

  isLinkActive(path: string) {
    return ('/' + path) === this.currentUrl;
  }

}
