import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    this.decrementSection = this.decrementSection.bind(this);
    this.incrementSection = this.incrementSection.bind(this);
    this.setSection = this.setSection.bind(this);
  }

  section: number = 0;

  decrementSection() {
    if(this.section>0)
      this.section--;
  }
  incrementSection() {
    if(this.section < 5)
      this.section++;
  }
  setSection(section: number) {
    this.section = section;
  }
}
