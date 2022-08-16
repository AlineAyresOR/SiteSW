import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './inicio/inicio.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { SobreComponent } from './sobre/sobre.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    PersonagensComponent,
    SobreComponent,
    InicioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule


  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
