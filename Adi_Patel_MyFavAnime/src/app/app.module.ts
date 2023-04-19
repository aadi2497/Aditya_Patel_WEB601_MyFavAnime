import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { FliterPipe } from './fliter.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockServer } from './mock-server';
import { ModifyContentComponent } from './modify-content/modify-content.component';
import { InMemoryDataService } from './services/in-memory-data.service';
import { AnimeService } from './anime.service';
<<<<<<< Updated upstream
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AddContentDialogComponent } from './add-content-dialog/add-content-dialog.component';
=======
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    FliterPipe,
    HoverAffectDirective,
    MessagesComponent,
    ModifyContentComponent,
<<<<<<< Updated upstream
    AddContentDialogComponent
=======
    
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MockServer),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    FormsModule,
<<<<<<< Updated upstream
    MatButtonToggleModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule

    
    
=======
    MatButtonModule,
    MatFormFieldModule,
    CommonModule
>>>>>>> Stashed changes
  ],
  providers: [AnimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
