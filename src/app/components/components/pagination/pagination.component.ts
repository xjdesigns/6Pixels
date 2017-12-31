import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: 'app/components/components/pagination/pagination.component.html'
})

export class PaginationComponent {
  // list: [any] = [];
  // pages: [any] = [];
  // currentPage: [any] = [];
  //
  // constructor() {
  //   this.setupList();
  //   this.paginate(this.list, 100);
  //   this.setCurrentPage(2);
  //   console.warn('this', this);
  // }
  //
  // setupList() {
  //   for(let i = 0; i < 1000; i++) {
  //     this.list.push(i);
  //   }
  // }
  //
  // setCurrentPage(page) {
  //   this.currentPage = this.list[page];
  // }
  //
  // incrementPage() {
  //   this.currentPage++;
  // }
  //
  // decrementPage() {
  //   this.currentPage--;
  // }
  //
  // paginate(list, pages) {
  //   let arr = [];
  //   let final = [];
  //   for(let i = 0; i < list.length; i++) {
  //     arr.push(i);
  //     if (arr.length === pages) {
  //       final.push(arr);
  //       arr = [];
  //     }
  //   }
  //   this.pages = final;
  // }
}
