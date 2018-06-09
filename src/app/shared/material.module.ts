import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [CommonModule],
  exports: [BrowserAnimationsModule, MatButtonModule, MatIconModule],
  declarations: []
})
export class MaterialModule {}
