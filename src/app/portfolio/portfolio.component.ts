import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  skills = [
    {
      "name":'bootstrap',
      "level":"90%"
  },
  {
    "name":'JQuery',
    "level":"75%"
  },
  {
    "name":'node.js',
    "level":"80%"
  },
    {
      "name":'Angular',
      "level":"79%"

  },
  {
    "name":'react',
    "level":"95%"
  },
  {
    "name":'MongoDb',
    "level":"90%"
  }
  ]


}
