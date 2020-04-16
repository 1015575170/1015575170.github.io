import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ch0401';

  shouldShow = false;
  score = 60;
  color : string;
  fontSize : string;

  isBordered = true;

  classObj = {
    bordered: this.isBordered,
    blue: false,
    round: true
  }

  cities = ['杭州','南京','上海','无锡'];
 

  onToggle(){
    this.shouldShow = !this.shouldShow;
    return false;
  }

  grade(){
    return Math.floor(this.score/10);
  }
  onInput(evt:Event){
    const inputEle = <HTMLInputElement>evt.target;
    this.score = Number(inputEle.value);
  }

  apply(color: string,fontSize:string){
    this.color = color;
    this.fontSize = fontSize;

  }
  toggleBorder(){
    this.isBordered = !this.isBordered;
  }
}
