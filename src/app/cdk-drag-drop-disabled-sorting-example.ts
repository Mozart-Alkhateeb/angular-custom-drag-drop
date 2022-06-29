import { Component } from "@angular/core";
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  copyArrayItem,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";

/**
 * @title Drag&Drop disabled sorting
 */
@Component({
  selector: "cdk-drag-drop-disabled-sorting-example",
  templateUrl: "cdk-drag-drop-disabled-sorting-example.html",
  styleUrls: ["cdk-drag-drop-disabled-sorting-example.css"],
})
export class CdkDragDropDisabledSortingExample {
  items = [
    { id: 1, name: "Carrots" },
    { id: 2, name: "Tomatoes" },
    { id: 3, name: "Onions" },
    { id: 4, name: "Apples" },
    { id: 5, name: "Avocados" },
  ];

  groups = [
    {
      name: "Kitchen",
      items: [
        { id: 6, name: "Oranges" },
        { id: 7, name: "Bananas" },
        { id: 8, name: "Cucumbers" },
      ],
    },
    {
      name: "Resto",
      items: [
        { id: 6, name: "Oranges" },
        { id: 7, name: "Bananas" },
        { id: 8, name: "Cucumbers" },
      ],
    },
    {
      name: "Pento",
      items: [
        { id: 6, name: "Oranges" },
        { id: 7, name: "Bananas" },
        { id: 8, name: "Cucumbers" },
      ],
    },
    {
      name: "Cresto",
      items: [
        { id: 6, name: "Oranges" },
        { id: 7, name: "Bananas" },
        { id: 8, name: "Cucumbers" },
      ],
    },
    {
      name: "Cresto",
      items: [
        { id: 6, name: "Oranges" },
        { id: 7, name: "Bananas" },
        { id: 8, name: "Cucumbers" },
      ],
    },
    {
      name: "Cresto",
      items: [
        { id: 6, name: "Oranges" },
        { id: 7, name: "Bananas" },
        { id: 8, name: "Cucumbers" },
      ],
    },
    {
      name: "Cresto",
      items: [
        { id: 6, name: "Oranges" },
        { id: 7, name: "Bananas" },
        { id: 8, name: "Cucumbers" },
      ],
    },
    {
      name: "Cresto",
      items: [
        { id: 6, name: "Oranges" },
        { id: 7, name: "Bananas" },
        { id: 8, name: "Cucumbers" },
      ],
    },
  ];

  deletedItems = [];

  noReturnPredicate() {
    return false;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else if (event.previousContainer.id === "all-items") {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      if (event.container.id === "delete-list") {
        this.deletedItems = [];
      }
    }
  }

  groupPredicate(item: CdkDrag<any>, drop: CdkDropList) {
    return !drop.data.find((el: any) => el.id === item.data.id);
  }

  deletePredicate(item: CdkDrag<any>) {
    return item.dropContainer.id !== "all-items";
  }
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
