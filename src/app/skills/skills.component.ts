import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
skill = [
  {
    "name":"bootstrap",
    "prog":95,
    "color":"info"
  },
  {
    "name":"Angular",
    "prog":65,
    "color":"warning"
  },
  {
    "name":"react",
    "prog":75,
    "color":"danger"
  },
  {
    "name":"node.js",
    "prog":50,
    "color":"primary"
  },
  {
    "name":"MongoDb",
    "prog":25,
    "color":"success"
  }
]
}
