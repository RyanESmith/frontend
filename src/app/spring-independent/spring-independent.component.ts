import { Component, OnInit } from '@angular/core';
import { EntityService } from '../sample/services/entity.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Entity } from '../shared/models/entity';

@Component({
  selector: 'app-spring-independent',
  templateUrl: './spring-independent.component.html',
  styleUrls: ['./spring-independent.component.css']
})
export class SpringIndependentComponent implements OnInit {
  entities: Array<any>;
  endpoint: string;

  constructor(private service: EntityService, private router: Router) { }

  ngOnInit() {
    this.endpoint = environment.SPRING_INDEPENDENT_API_URL+'/independentEntity';

    this.service.getAll(this.endpoint).subscribe(data => {
      this.entities = data;
    });
  }

  getAll() {
    this.service.getAll(this.endpoint).subscribe(data =>{
      this.entities = data;
    });
  }

  addEntity(){
    this.router.navigate(['add-entity/spring-independent']);
  }

  editEntity(entity: Entity){
    this.router.navigate([`edit-entity/spring-independent/${entity.id}`]);
  }

  deleteEntity(entity: Entity){
    this.service.deleteEntity(this.endpoint, entity.id).subscribe(data => {
      this.entities = this.entities.filter( e => e !== entity)
    })
  }
}
