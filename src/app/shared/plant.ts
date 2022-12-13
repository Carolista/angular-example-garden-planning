export class Plant {

  id: number;
  name: string;
  color: string;
  numAvailable: number;
  numAllocated: number;
  image: string;

  constructor(id: number, name: string, color: string, numAvailable: number, image: string) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.numAvailable = numAvailable;
    this.numAllocated = 0;
    this.image = image;
  }

  returnOne(): void {
    if (this.numAllocated > 0) {
      this.numAllocated--;
      this.numAvailable++;
    }
  }
  
  allocateOne(): void {
    if (this.numAvailable > 0) {
      this.numAllocated++;
      this.numAvailable--;
    }
  }
}
