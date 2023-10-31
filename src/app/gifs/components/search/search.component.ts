import {Component, ElementRef, ViewChild} from "@angular/core";
import {GifsService} from "../../services/gifs.service";


@Component({
  selector: 'search-gif-component',
  template: `
    <h5>Search</h5>
    <input
      type="text"
      class="form-control "
      placeholder="Search ..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    >
  `
})

export class SearchComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;


  constructor( private gifsService: GifsService) {

  }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTags( newTag );

    this.tagInput.nativeElement.value = '';

  }

}
