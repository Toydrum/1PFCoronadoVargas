import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
/* Components */
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';

@NgModule({
  declarations: [ArticlesComponent, ArticlesListComponent],
  imports: [CommonModule, SharedModule],
  exports: [ArticlesComponent, ArticlesListComponent],
})
export class ArticlesModule {}
