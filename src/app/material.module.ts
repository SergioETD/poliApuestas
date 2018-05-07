import {MatButtonModule} from '@angular/material/button';
import {NgModule} from '@angular/core';
import {MatInputModule, MatSidenav, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatInputModule, MatSidenavModule, MatIconModule,
    MatToolbarModule,
    MatListModule],
  exports: [MatButtonModule, MatInputModule, MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule],
})
export class MaterialModule { }