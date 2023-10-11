import { Component, OnInit } from '@angular/core';
import { AllRocketsGQL, AllRocketsQuery } from '../generated/graphql'
import { ApolloError } from '@apollo/client';
import { GraphQLError } from 'graphql';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ng-app';
  loading = false;
  apolloError?: ApolloError;
  graphQLError?: readonly GraphQLError[];
  rockets: AllRocketsQuery['rockets'];
  public constructor(private allRockets: AllRocketsGQL) {}
  ngOnInit(): void {
    this.allRockets.fetch().subscribe(e => {
      this.loading = e.loading;
      this.apolloError = e.error;
      this.graphQLError = e.errors;
      this.rockets = e.data.rockets;
    })
  }
}
