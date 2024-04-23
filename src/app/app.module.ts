import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { CardProfilComponent } from './components/card-profil/card-profil.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';

import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { CvComponent } from './cv/cv/cv.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';

import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { NgclassComponent } from './directives/ngclass/ngclass.component';
import { TodoComponent } from './todo/todo/todo.component';

import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';

import { Btc2usdPipe } from './pipes/btc2usd.pipe';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FrontComponent } from './templates/front/front.component';
import { AdminComponent } from './templates/admin/admin.component';
import { NF404Component } from './components/nf404/nf404.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { LoginComponent } from './auth/login/login.component';
import { TestObservableComponent } from './components/test-observable/test-observable.component';
import { TestHttpComponent } from './components/test-http/test-http.component';
import { AuthInterceptorProvider } from './auth/interceptors/auth.interceptor';
import { ListComponent } from './cv/list/list.component';
import { ItemComponent } from './cv/item/item.component';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { CvCardComponent } from './cv/cv-card/cv-card.component';
import { RhComponent } from './optimizationPattern/rh/rh.component';
import { UserListComponent } from './optimizationPattern/user-list/user-list.component';
import { ProductsComponent } from './products/products.component';
import { todoInjectionToken } from './injection Tokens/todo.injection-token';
import { todoServiceProviderFactory } from './provider factories/todo-service.provider-factory';
import { LoggerService } from './services/logger.service';
import { TodoService } from './todo/service/todo.service';
import { CvService } from './cv/services/cv.service';
import { CONSTANTES } from 'src/config/const.config';
import { FakeCvService } from './cv/services/fake-cv.service';
import { OtherLoggerService } from './services/other-logger.service';
import { WeekTodoComponent } from './todo/week-todo/week-todo.component';
import {v4 as uuidv4} from 'uuid';
import { uuidInjectionToken } from './injection Tokens/uuid.injection-token';
import { ListCvsComponent } from './cv/list-cvs/list-cvs.component';
import { FromOfComponent } from './rxjs/from-of/from-of.component';
import { SliderComponent } from './rxjs/slider/slider.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    CardProfilComponent,
    PereComponent,
    FilsComponent,
    AddCvComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    DetailsCvComponent,
    CvCardComponent,
    CardProfilComponent,
    EmbaucheComponent,
    DefaultImagePipe,
    NgstyleComponent,
    MiniWordComponent,
    NgclassComponent,
    HighlightDirective,
    RainbowDirective,
    Btc2usdPipe,
    TodoComponent,
    NavbarComponent,
    FrontComponent,
    AdminComponent,
    NF404Component,
    TestFormComponent,
    LoginComponent,
    TestObservableComponent,
    TestHttpComponent,
    RhComponent,
    UserListComponent,
    ProductsComponent,
    WeekTodoComponent,
    ListCvsComponent,
    FromOfComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    // {
         // useFactory => kifech tesna3 el dependance
    //   useFactory: todoServiceProviderFactory,
        // kifech t3ayet lel dependance
    //   provide: todoInjectionToken,
      // chneya les dépendances eli iest7a9hom el factory bech iesna3 el dependance
    //   deps: [LoggerService, uuidInjectionToken]
    // },
    {
      provide: CvService,
      useClass: CONSTANTES.env == 'production' ? CvService : FakeCvService
    },
    AuthInterceptorProvider,
    {
      provide: 'APP_LOGGER',
      useClass: LoggerService,
      multi: true
    },
    {
      provide: 'APP_LOGGER',
      useClass: OtherLoggerService,
      multi: true
    },
    {
      provide: uuidInjectionToken,
      useValue: uuidv4
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
