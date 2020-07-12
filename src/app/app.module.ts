import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoTabComponent } from './components/video-tab/video-tab.component';
import { VideoModalComponent } from './components/video-modal/video-modal.component';
import { HomeComponent } from './pages/home/home.component';
import { VideolistComponent } from './pages/videolist/videolist.component';

@NgModule({
  declarations: [AppComponent, VideoTabComponent, VideoModalComponent, HomeComponent, VideolistComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
