import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpComponent } from './components/httpRequest/http.component';
import { EjemploComponenteComponent } from './prueba/ejemplo-componente/ejemplo-componente.component';
import { RequestService } from './services/request.service';

@NgModule({
  declarations: [AppComponent, HttpComponent, EjemploComponenteComponent],
  imports: [AppRoutingModule, HttpClientModule, FormsModule, BrowserModule],
  providers: [RequestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
