import { Component, OnInit } from '@angular/core';
import { EntityService } from '../sample/services/entity.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Entity } from '../shared/models/entity';

@Component({
  selector: 'app-spring-dependent',
  templateUrl: './spring-dependent.component.html',
  styleUrls: ['./spring-dependent.component.css']
})
export class SpringDependentComponent implements OnInit {
  entities: Array<any>;
  endpoint: string;

  constructor(private service: EntityService, private router: Router) { }

  ngOnInit() {
    this.endpoint = environment.SPRING_DEPDENDENT_API_URL+'/dependentEntity';

    this.service.getAll(this.endpoint).subscribe(data =>{
      this.entities = data;
    });
  }

  getAll() {
    this.service.getAll(this.endpoint).subscribe(data =>{
      this.entities = data;
    });
  }

  addEntity(){
    this.router.navigate(['add-entity/spring-dependent']);
  }

  editEntity(entity: Entity){
    this.router.navigate([`edit-entity/spring-dependent/${entity.id}`]);
  }

  deleteEntity(entity: Entity){
    this.service.deleteEntity(this.endpoint, entity.id).subscribe(data => {
      this.entities = this.entities.filter( e => e !== entity)
    })
  }
}
