import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FeatureRoutingModule} from './features-routing';
import {FeaturesService} from './features.service';
import {FeaturesComponent} from './features.component';
import {FeatureDetailComponent} from './feature-detail/feature-detail.component';
import {FeatureFormComponent} from './feature-form/feature-form.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';

@NgModule({
  imports: [
    CommonModule,
    FeatureRoutingModule
  ],
  providers: [
    FeaturesService
  ],
  declarations: [
    FeaturesComponent,
    FeatureDetailComponent,
    FeatureFormComponent,
    FeatureCardComponent
  ],
  exports: [
    FeatureCardComponent
  ]
})
export class FeaturesModule {
}
