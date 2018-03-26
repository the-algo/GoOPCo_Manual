import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';



@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-project-description-accordian',
  templateUrl: './project-description-accordian.component.html',
  styleUrls: ['./project-description-accordian.component.css']
})
export class ProjectDescriptionAccordianComponent implements OnInit {


  ngOnInit() {
  }

  isCollapsed = true;
  constructor(private sanitizer: DomSanitizer) { }

  trustSrcUrl = function (data) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(data);
  }

  // Changing the Panel Icon
  ontoggle(idname: string) {
    let icon = "";
    if (idname === "accordion5") {
      icon = "icon5";
    }

    let cN = document.getElementById(icon).className;

    if (icon === "icon5") {

      if (document.getElementById("icon5").className === "glyphicon glyphicon-minus") {
        document.getElementById("icon5").className = "glyphicon glyphicon-plus";
      }

      if (cN === "glyphicon glyphicon-plus") {
        document.getElementById(icon).className = "glyphicon glyphicon-minus";
      }
      else {
        document.getElementById(icon).className = "glyphicon glyphicon-plus";
      }
    }
  }


}
