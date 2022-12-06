import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Business } from 'src/app/common/business';
import { SearchServiceService } from 'src/app/service/search-service.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  searchFormGroup:FormGroup;

  businesses:Business[];

  constructor(private formBuilder:FormBuilder, private searchService:SearchServiceService) { }

  ngOnInit(): void {
    this.searchFormGroup = this.formBuilder.group({
      searchInfo: this.formBuilder.group({
        address: new FormControl(),
        radius: new FormControl()
      }),
    })
  }
  search(){
    console.log(this.searchFormGroup.get('searchInfo').value);
    let ad = this.searchFormGroup.get('searchInfo.address').value;
    let rd = this.searchFormGroup.get('searchInfo.radius').value;
    this.searchService.searchBusinesses(ad,rd).subscribe(
      data =>{
        this.businesses = data;
        
        console.log(this.businesses);
        console.log(this.businesses[0].image_url)
      }
    )
  }


  


}
