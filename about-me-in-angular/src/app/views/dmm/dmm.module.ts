import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { DmmComponent } from './dmm.component'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    component: DmmComponent,
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DmmComponent],
})

export class DmmModule { }
