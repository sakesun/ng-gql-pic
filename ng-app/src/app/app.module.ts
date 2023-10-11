import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { InMemoryCache } from '@apollo/client/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular'
import { HttpLink } from 'apollo-angular/http'
import { AppComponent } from './app.component';

const SPACEX_PROVIDER = {
  provide: APOLLO_OPTIONS,
  useFactory(httpLink: HttpLink) {
    return {
      cache: new InMemoryCache(),
      link: httpLink.create({
        uri: "https://spacex-production.up.railway.app/"
      })
    }
  },
  deps: [HttpLink]
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule
  ],
  providers: [
    SPACEX_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
