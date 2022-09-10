import { Component, OnInit , OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MusicModel } from 'src/app/models/music.model';
import { PlayListModel } from 'src/app/models/playList.model';
import { DataService } from 'src/app/services/data.service';
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
  isWait: boolean = true;
  isScrolled: boolean = false;
  currentPageSize: number = 10;
  constructor(private route: ActivatedRoute, private _musicService: MusicService, private data: DataService) { }

  ngOnInit(): void {
    this.getCategrory();
  }

  sendData(item: MusicModel){
    this.data.update(item);
    this.data.changeBarStatus();
  }


  getCategrory() {
    const routeParams = this.route.snapshot.paramMap;
    const categroyIdFromRoute = Number(routeParams.get('id'));
    this.categorySubscription = this._musicService
      .getCategroyItems(categroyIdFromRoute,this.currentPageSize).subscribe((res:any) => {
        this.categoryData = res.data;
        this.isWait = false;
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

  onScroll(){
    console.log("ok")
    this.isScrolled = true;
    this.currentPageSize += 5;
    this.getCategrory();
  }

  trackByFn(index:number) {
    return index; // or item.id
  }

  ngOnDestroy():void{
    this.categorySubscription?.unsubscribe();
  }

}
