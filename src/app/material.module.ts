import {MatButtonModule} from '@angular/material/button';
import {NgModule} from '@angular/core';
import {MatInputModule, MatSidenav, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule, MatNativeDateModule, MatSortModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  imports: [MatButtonModule, MatInputModule, MatSidenavModule, MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatNativeDateModule, MatTableModule, MatSortModule],
  exports: [MatButtonModule, MatInputModule, MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule],
})
export class MaterialModule { }