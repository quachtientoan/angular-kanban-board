import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  todo = [
    'Learn Angular Material',
    'Code Kanban Board App',
    'Code final project'
  ];

  doing = [
    'Learn Angular'
  ];

  done = [
    'Learn HTML basic',
    ' Learn CSS basic ',
    ' Learn javascript basic ',
    ' Code Example Image Gallery ',
    ' Learn Javascrip DOM ',
    ' Code Example Calculator App ',
    ' Learn Responsive Web Design '
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
