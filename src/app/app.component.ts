import { Component, OnInit } from "@angular/core";
import { take } from "rxjs/operators";
import { DataService } from "./data.service";
import { FrameworkInfo } from "./models";
import { FormBuilder } from '@angular/forms';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public title = "Framework Comparison";
  public data: Partial<FrameworkInfo>[];

  public filterForm = this.formBuilder.group({
    filter: ''
  });

  constructor(
    private dataService: DataService, 
    private formBuilder: FormBuilder) {
  }

  public ngOnInit() {
      this.dataService.getList()
      .pipe(
        take(1)
      )
      .subscribe( data => {
        this.data = data;
      });
  }

  public onSubmit() {
    console.warn('Filter submitted', this.filterForm.value);
    this.filterForm.reset();
  }
}
