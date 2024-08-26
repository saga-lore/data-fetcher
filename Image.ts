import probe from 'probe-image-size';
export default class Image {
  url: string;
  width: number = 800;
  height: number = 600;
  type: string = 'image/jpeg';

  constructor({ url }: { url: string }) {
    this.url = url;
    probe(url).then(({ width, height, type }) => {
      this.width = width;
      this.height = height;
      this.type = type;
    });
  }
}