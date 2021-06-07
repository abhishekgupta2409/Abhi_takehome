import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import * as d3 from "d3";

@Component({
  selector: "viz-component",
  templateUrl: "./viz.component.html",
  styleUrls: ["./viz.component.css"]
})
export class VizComponent implements OnInit, OnChanges {
  @Input() public data: [];

  private svg;
  private margin = 50;
  private width = 750 - this.margin * 2;
  private height = 400 - this.margin * 2;

  public ngOnInit() {
    this.createSvg();
    this.drawBars(this.data);
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.data) {
      this.drawBars(this.data);
    }
  }

  private createSvg(): void {
    this.svg = d3
      .select("figure#bar")
      .append("svg")
      .attr("width", this.width + this.margin * 2)
      .attr("height", this.height + this.margin * 2)
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawBars(data: any[]): void {
    if(!this.svg || !this.data) { return; }
    // Create the X-axis band scale
    const x = d3
      .scaleBand()
      .range([0, this.width])
      .domain((data || []).map((d) => d.framework))
      .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg
      .append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // Create the Y-axis band scale
    const y = d3.scaleLinear().domain([0, 200000]).range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g").call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg
      .selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => x(d.framework))
      .attr("y", (d) => y(d.stars))
      .attr("width", x.bandwidth())
      .attr("height", (d) => this.height - y(d.stars))
      .attr("fill", "#d04a35");
  }
}
