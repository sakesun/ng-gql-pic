import { Injectable } from '@angular/core';
import { gql } from 'graphql-tag';

let AllRockets = gql`
  query AllRockets {
    rockets {
      special_id: id
      type company boosters cost_per_launch country description
      diameter { feet meters }
      engines {
        engine_loss_max layout number propellant_1 propellant_2
        thrust_sea_level { kN lbf }
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  constructor() { }
}
