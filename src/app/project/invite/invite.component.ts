import { Component, OnInit } from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

    items = [
        { id: 1,
          name: 'John'
      },
      { id: 2,
        name: 'Mary'
    },
    { id: 3,
      name: 'Jack'
  }
    ];

  constructor() { }

  ngOnInit() {
  }

  displayUser(user: {id: string; name: string}){
      return user? user.name: '';
  }
}

/*export interface User {
    id: string;
    name: string;
}*/
