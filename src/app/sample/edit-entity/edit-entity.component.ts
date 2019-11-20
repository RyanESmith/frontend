import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Entity } from '../../shared/models/entity';
import { EntityService } from '../services/entity.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-edit-entity',
  templateUrl: './edit-entity.component.html',
  styleUrls: ['./edit-entity.component.css']
})
export class EditEntityComponent implements OnInit {
  entity: Entity;
  editForm: FormGroup;
  endpoint: string;

  @Output() submit = new EventEmitter();

  constructor(private formBuilder:FormBuilder, private router: Router, private route: ActivatedRoute, private service: EntityService) { }

  ngOnInit() {
    if(this.route.snapshot.paramMap.get('type') == 'spring-dependent'){
      this.endpoint = this.endpoint = environment.SPRING_DEPDENDENT_API_URL+'/dependentEntity';
    } else if(this.route.snapshot.paramMap.get('type') == 'spring-independent') {
      this.endpoint = environment.SPRING_INDEPENDENT_API_URL+'/independentEntity';
    }

    this.editForm = this.formBuilder.group({
      id: [''],
      property1: [''],
      property2: [''],
      property3: ['']
    });

    this.service.getEntity(this.endpoint, this.route.snapshot.params['id']).subscribe( data =>{
      this.editForm.setValue(data);
    })
  }

  onSubmit(){
    this.service.updateEntity(this.endpoint, this.editForm.value).subscribe(data => {
      this.router.navigate(['dashboard']);
      this.submit.emit();
    })
  }

  onCancel(){
    this.router.navigate(['']);
  }

}
