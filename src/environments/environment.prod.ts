import data from '../app.config.json';

export const environment = {
  production: true,
  baseUrl : data.APP_URL.BASE_API,

  playlistUrl: data.APP_URL.PLAYLIST_API
};
