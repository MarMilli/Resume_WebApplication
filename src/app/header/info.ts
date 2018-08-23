export class Info {
  readonly event: string;
  readonly name: string;
  readonly photoLogo: string;
  readonly altPhotoLogo: string;

  constructor(event: string, name: string, photoLogo: string, altPhotoLogo: string) {
    this.event = event;
    this.name = name;
    this.photoLogo = photoLogo;
    this.altPhotoLogo = altPhotoLogo;
  }

}


