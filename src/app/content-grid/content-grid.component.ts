import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-content-grid',
  templateUrl: './content-grid.component.html',
  styleUrls: ['./content-grid.component.css']
})
export class ContentGridComponent implements OnInit {

  contentCols: number;
  private breakpointObserver: BreakpointObserver;
  private maxCols = 3;
  private minCols = 1;
  private smWidth = 500;

  constructor(breakpointObserver: BreakpointObserver) {
    this.breakpointObserver = breakpointObserver;
    breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet,
      Breakpoints.Web
    ]).subscribe(result => {
      this.onScreenSizeChanged(result);
    });
  }

  ngOnInit() {
    this.contentCols = (window.innerWidth <= this.smWidth) ? 1 : this.maxCols;
  }

  onResize(event) {
    this.contentCols = (event.target.innerWidth <= this.smWidth) ? 1 : this.maxCols;
  }

  onScreenSizeChanged(result) {
    console.log('Screen size was changed.');
    if(this.breakpointObserver.isMatched(Breakpoints.Handset)){
      this.contentCols = this.minCols;
    }
    else if (this.breakpointObserver.isMatched([Breakpoints.Tablet, Breakpoints.Web])){
      this.contentCols = this.maxCols;
    }
  }

}
