import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgChartsModule } from 'ng2-charts';
import { SwiperModule } from 'swiper/angular';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './components/contact/contact.component';
import { CustomersComponent } from './components/customers/customers.component';
import { FeaturesComponent } from './components/features/features.component';
import { HeroComponent } from './components/hero/hero.component';
import { IntegrationsComponent } from './components/integrations/integrations.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SnippetsComponent } from './components/snippets/snippets.component';
import { StatsComponent } from './components/stats/stats.component';
import { SummaryComponent } from './components/summary/summary.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HeroComponent,
    SummaryComponent,
    SnippetsComponent,
    FeaturesComponent,
    StatsComponent,
    IntegrationsComponent,
    CustomersComponent,
    ContactComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgChartsModule,
    FontAwesomeModule,
    SwiperModule,
  ],
})
export class HomeModule {}
