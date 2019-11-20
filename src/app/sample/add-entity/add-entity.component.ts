import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EntityService } from '../services/entity.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-add-entity',
  templateUrl: './add-entity.component.html',
  styleUrls: ['./add-entity.component.css']
})
export class AddEntityComponent implements OnInit {
  addForm: FormGroup;
  endpoint: string;

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private service: EntityService) { }

  ngOnInit() {
    if(this.route.snapshot.paramMap.get('type') == 'spring-dependent'){
      this.endpoint = this.endpoint = environment.SPRING_DEPDENDENT_API_URL+'/dependentEntity';
    } else if(this.route.snapshot.paramMap.get('type') == 'spring-independent') {
      this.endpoint = environment.SPRING_INDEPENDENT_API_URL+'/independentEntity';
    }

    this.addForm = this.formBuilder.group({
      property1: [''],
      property2: [''],
      property3: ['']
    });
  }

  onSubmit() {
    this.service.addEntity(this.endpoint, this.addForm.value).subscribe(data => {
      this.router.navigate(['']);
    });
  }

  onCancel(){
    this.router.navigate(['']);
  }

}
