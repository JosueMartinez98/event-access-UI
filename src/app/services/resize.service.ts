import { Injectable } from "@angular/core";
import { ResizeEnum } from "../shared/models/resize.enum";

@Injectable()
export class ResizeService {

  public getBreackpoint(innerWidth: number): string {

    if (innerWidth > ResizeEnum.TABLET_DEVICE) return 'isLaptop'
    if (innerWidth > ResizeEnum.PHONE_DEVICE) return 'isTablet'
    if (innerWidth <= ResizeEnum.PHONE_DEVICE) return 'isPhone'
    return 'isLaptop'
  }
}
