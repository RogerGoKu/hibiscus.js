import {NgModule} from '@angular/core';

import {FileUploadComponent} from './file-upload.component';
import {CommonModule} from '@angular/common';
import {FileUploadPreviewComponent} from './file-upload-preview.component';
import {AlertBoxModule} from '../alert-box/alert-box.module';
import {DraggableModule} from '../draggable/draggable.module';
import {UploadFileTmplComponent, UploadPreviewTmplComponent, UploadToolbarTmplComponent} from './file-upload-tmpl.directive';

@NgModule({
  imports: [
    CommonModule,
    AlertBoxModule,
    DraggableModule
  ],
  providers: [],
  declarations: [
    FileUploadComponent,
    FileUploadPreviewComponent,
    UploadToolbarTmplComponent,
    UploadPreviewTmplComponent,
    UploadFileTmplComponent
  ],
  exports: [
    FileUploadComponent,
    FileUploadPreviewComponent,
    UploadToolbarTmplComponent,
    UploadPreviewTmplComponent,
    UploadFileTmplComponent
  ],
})
export class FileUploadModule {
}
