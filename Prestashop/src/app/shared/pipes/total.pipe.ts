import { Pipe, PipeTransform } from "@angular/core";
import { Prestation } from "../models/prestation";

@Pipe({
  name: "total"
})
export class TotalPipe implements PipeTransform {
  transform(value: Prestation, type: string, tva: number): number {
    if (value) {
      switch (type) {
        case "HT":
          return value.totalHT();
        case "TTC":
          return value.totalTTC(tva);
        default:
          return null;
      }
    }
  }
}
