import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChurchComponent } from './church.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
    imports: [Ng2SmartTableModule],
    declarations: [ChurchComponent],
    providers: []
})
export class ChurchModule { }