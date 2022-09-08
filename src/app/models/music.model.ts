
export class MusicModel {
    id: number = 0;
    title: string = '';
    titleEn: string = '';
    cover: string = '';
    duration: number = 0;
    durationStr: string = '';
    publishDateString: string = '';
    hlsUrl: string = '';
    shareLink: string = '';
    artistId: number = 0;
    artistName: string = '';
    artistNameEn: string = '';
    like: number = 0;
    config = {
        sColor: '',
        eColor: '',
        fColor: ''
    }
}