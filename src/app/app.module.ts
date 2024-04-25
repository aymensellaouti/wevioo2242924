import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { NgclassComponent } from './directives/ngclass/ngclass.component';

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
import { RhComponent } from './optimizationPattern/rh/rh.component';
import { UserListComponent } from './optimizationPattern/user-list/user-list.component';
import { ProductsComponent } from './products/products.component';
import { LoggerService } from './services/logger.service';
import { CvService } from './cv/services/cv.service';
import { CONSTANTES } from 'src/config/const.config';
import { FakeCvService } from './cv/services/fake-cv.service';
import { OtherLoggerService } from './services/other-logger.service';

import {v4 as uuidv4} from 'uuid';

import { uuidInjectionToken } from './injection Tokens/uuid.injection-token';
import { FromOfComponent } from './rxjs/from-of/from-of.component';
import { SliderComponent } from './rxjs/slider/slider.component';
import { AutocmpleteComponent } from './rxjs/autocmplete/autocmplete.component';
import { TodoModule } from './todo/todo.module';
import { CvModule } from './cv/cv.module';
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
    CardProfilComponent,
    NgstyleComponent,
    MiniWordComponent,
    NgclassComponent,
    HighlightDirective,
    RainbowDirective,
    Btc2usdPipe,
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
    FromOfComponent,
    SliderComponent,
    AutocmpleteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CvModule
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
