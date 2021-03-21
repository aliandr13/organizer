import {Pipe, PipeTransform} from "@angular/core";
import * as moment from 'moment'

@Pipe({
  name: 'momentPipe',
  pure: false
})
export class MomentPipe implements PipeTransform {

  transform(m: moment.Moment | null, format: string = 'MMMM YYYY'): string {
    return m ? m.format(format) : "";
  }

}
