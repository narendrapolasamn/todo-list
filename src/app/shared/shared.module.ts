import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

const MODULES = [
    CommonModule,
    MaterialModule
];

@NgModule({
    declarations: [ConfirmDialogComponent],
    imports: [...MODULES],
    exports: [ConfirmDialogComponent, ...MODULES],
})
export class SharedModule {}
