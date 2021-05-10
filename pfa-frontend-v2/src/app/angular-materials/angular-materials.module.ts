import { NgModule } from '@angular/core';
import {MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatCardModule} from '@angular/material/card';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core'
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';



const materials = [
  MatTableModule,
  MatDividerModule,
  MatDatepickerModule,
  MatRadioModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule,
  MatPaginatorModule,
  MatCardModule,
  MatGridListModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule
] 

@NgModule({

  imports: [materials],
  exports: [materials]
})
export class AngularMaterialModule { }

