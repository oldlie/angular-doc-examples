import { 
  AfterViewInit,
  Component, ComponentFactoryResolver,
  Input, 
  OnDestroy, OnInit,
  ViewChild,  } from '@angular/core';
import { AdItem } from "../ad-item";
import { AdDirective } from "../ad.directive";

import { AdComponent } from "../ad/ad.component";

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit, OnDestroy {

  @Input() ads: AdItem[];
  currentIndex: number = -1;
  @ViewChild(AdDirective) adHost: AdDirective;
  subscription: any;
  interval: any;

  constructor(private componentFactoryResolve: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    console.log(this.currentIndex);

    this.currentIndex = (this.currentIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentIndex];

    let compoentFactory = this.componentFactoryResolve.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let compoentRef = viewContainerRef.createComponent(compoentFactory);
    (<AdComponent>compoentRef.instance).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
