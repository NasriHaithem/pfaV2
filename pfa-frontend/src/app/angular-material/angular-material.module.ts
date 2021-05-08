import { NgModule } from '@angular/core';
import {MatTableModule } from '@angular/material/table'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort'
import {MatInputModule} from '@angular/material/input';
import { MatPaginatorModule} from '@angular/material/paginator'
import { MatCardModule} from '@angular/material/card'
import { MatGridListModule} from '@angular/material/grid-list'

const materials = [
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule,
  MatPaginatorModule,
  MatCardModule,
  MatGridListModule
] 

@NgModule({

  imports: [materials],
  exports: [materials]
})
export class AngularMaterialModule { }
