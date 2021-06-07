import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { VizComponent } from "./viz/viz.component";
import { AppComponent } from "./app.component";
import { DataService } from "./data.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, VizComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
