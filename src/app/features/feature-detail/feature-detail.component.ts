import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {FeaturesService} from '../features.service';
import {Feature} from '../feature';

@Component({
  selector: 'app-feature-detail',
  templateUrl: './feature-detail.component.html',
  styleUrls: ['./feature-detail.component.css']
})
export class FeatureDetailComponent implements OnInit {
  public feature: Feature;

  constructor(private route: ActivatedRoute, private featuresService: FeaturesService) {
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.featuresService.getBySlug(params.get('slug')))
      .subscribe(feature => this.feature = feature);
  }

}
