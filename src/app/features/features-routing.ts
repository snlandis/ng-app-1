import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FeaturesComponent} from './features.component';
import {FeatureDetailComponent} from './feature-detail/feature-detail.component';

const routes: Routes = [
  {path: 'features', component: FeaturesComponent},
  {path: 'feature/:slug', component: FeatureDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {
}
