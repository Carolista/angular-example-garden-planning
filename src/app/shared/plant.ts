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

  // TODO #3: add returnOne() method to shift numbers

  
  // TODO #3: add allocateOne() method to shift numbers
  
}
