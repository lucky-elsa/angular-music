import { Component, OnInit , OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MusicModel } from 'src/app/models/music.model';
import { PlayListModel } from 'src/app/models/playList.model';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-catergory-items',
  templateUrl: './catergory-items.component.html',
  styleUrls: ['./catergory-items.component.scss']
})
export class CatergoryItemsComponent implements OnInit, OnDestroy {
  categorySubscription: Subscription | undefined;
  categoryData : MusicModel[] = [];
  searchKey: string = '';
  constructor(private route: ActivatedRoute, private _musicService: MusicService) { }

  ngOnInit(): void {
    this.getCategrory();
  }

  
  getCategrory() {
    const routeParams = this.route.snapshot.paramMap;
    const categroyIdFromRoute = Number(routeParams.get('id'));
    this.categorySubscription = this._musicService
      .getCategroyItems(categroyIdFromRoute).subscribe((res:any) => {
        this.categoryData = res.data;
      });
  }
  doSearch(searchKey: string): void {
    let result: MusicModel[] = [];
    if (searchKey.length > 2) {
      result = this.categoryData.filter((item) => {
        // @ts-ignore
        return !(item.title.trim().indexOf(this.searchKey.trim()) <= -1);
      });
    }
    if (result.length > 0) {
      this.categoryData = result;
    }
    else {
      this.getCategrory();
    }
  }


  ngOnDestroy():void{
    this.categorySubscription?.unsubscribe();
  }

}
