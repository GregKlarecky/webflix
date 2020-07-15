import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoTabComponent } from './components/video-tab/video-tab.component';
import { VideoModalComponent } from './components/video-modal/video-modal.component';
import { HomeComponent } from './pages/home/home.component';
import { VideolistComponent } from './pages/videolist/videolist.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { PlayerComponent } from './components/player/player.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { PagePipe } from './pipes/page.pipe';
import { TilesComponent } from './components/tiles/tiles.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoTabComponent,
    VideoModalComponent,
    HomeComponent,
    VideolistComponent,
    SearchComponent,
    NavbarComponent,
    PlayerComponent,
    SafeHtmlPipe,
    PagePipe,
    TilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
