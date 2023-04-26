import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MainBottomComponent } from '../main-bottom/main-bottom.component';

@Component({
  selector: 'main-top',
  templateUrl: './main-top.component.html',
  styleUrls: ['./main-top.component.css']
})
export class MainTopComponent implements OnInit, AfterViewInit, AfterContentInit {

  @ViewChild(MainBottomComponent) childExample: MainBottomComponent;
  @ContentChild("projectedDiv") projectedDiv: ElementRef;

  constructor() { }

  ngOnInit(): void {
    // Both ViewChild and ContentChild are undefined (would be defined if static was set to true)
    console.log("ngOnInit:");
    this.logChildren();
  }

  ngAfterContentInit(): void {
    // ContentChild is defined
    console.log("ngAfterContentInit:"); 
    this.logChildren(); 
  }

  ngAfterViewInit(): void {
      // Both ViewChild and ContentChild are now defined
      console.log("ngAfterViewInit:");
      this.logChildren();
  }


  logChildren() {
    console.log("ViewChild:");
    console.log(this.childExample);
    console.log("ContentChild:");
    console.log(this.projectedDiv);
  }
}
