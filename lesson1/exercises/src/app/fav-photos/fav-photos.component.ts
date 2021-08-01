import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Pic Picks';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://res.cloudinary.com/practicaldev/image/fetch/s--2pjyd3Po--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/azc04lz5jg6pn5h2lzdj.png';
  image3 = 'https://www.rust-lang.org/static/images/rust-logo-blk.svg';

  constructor() { }

  ngOnInit() {
  }

}