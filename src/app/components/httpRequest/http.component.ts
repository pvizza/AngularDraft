import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Info } from './../../models/info.model';
@Component({
  selector: 'http-component_ss',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss'],
})
export class HttpComponent implements OnInit {
  datos: Info[] = new Array<Info>();
  constructor(private getInyectado: RequestService) {}
  ngOnInit() {
    this.getInyectado.get().subscribe((dataGet) => {
      this.datos = dataGet;
      console.log(typeof this.datos);
    });

    const sendPostInfo: Info = new Info();
    sendPostInfo.title = 'this is the value of title send in post';
    sendPostInfo.userId = 20;

    this.getInyectado.post(sendPostInfo).subscribe((dataSend) => {
      this.datos.push(dataSend);
    });
  }
}
