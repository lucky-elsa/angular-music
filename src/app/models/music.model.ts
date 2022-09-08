
export interface MusicModel {
    id: number;
    title: string;
    titleEn: string;
    cover: string;
    duration: number;
    durationStr: string;
    publishDateString: string;
    hlsUrl: string;
    shareLink: string;
    artistId: number;
    artistName: string;
    artistNameEn: string;
    like: number;
    config: {
        sColor: '',
        eColor: '',
        fColor: ''
    }
}