import { Component, Input } from '@angular/core';

@Component({
  selector: 'collapsible-well',
  template: `
    <div (click)="toggleContent()" class="well pointable">
      <h4>
        <ng-content select="[well-title]"></ng-content>
      </h4>
      <!-- Where the magic is: use ng-content for the "content pojection" -->
      <ng-content *ngIf="visible" select="[well-body]"></ng-content>
    </div>
  `,
})
export class CollapasibleWellComponent {
  @Input() title: string | undefined;
  visible: boolean = true;

  toggleContent() {
    this.visible = !this.visible;
  }
}
