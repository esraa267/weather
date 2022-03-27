import { Component, Input, OnChanges, OnInit } from '@angular/core';

import * as d3 from 'd3';
import { IChart } from '../../ViewModel/Ichart';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit, OnChanges {
  private margin = { top: 30, right: 20, bottom: 30, left: 30 };
  private width!: number;
  private height!: number;
  private x: any;
  private y: any;
  private svg: any;
  private line!: d3.Line<[number, number]>; // this is line defination
  private line2!: d3.Line<[number, number]>;
  @Input() sentData: IChart[] = [];
  constructor() {
    this.width = 550 - this.margin.left - this.margin.right;
    this.height = 250 - this.margin.top - this.margin.bottom;
  }
  ngOnChanges(): void {
    console.log(this.sentData);
    this.creatSVG();
    this.addXandYAxis(this.sentData);
    this.drawLineAndPath(this.sentData);
  }

  ngOnInit() {}
  private creatSVG(): void {
    this.svg = d3
      .select('svg') // svg element from html
      .append('g') // appends 'g' element for graph design
      .attr(
        'transform',
        'translate(' + this.margin.left + ',' + this.margin.top + ')'
      );
  }
  private addXandYAxis(data: IChart[]) {
    // range of data configuring
    this.x = d3.scaleTime().range([0, this.width]);
    this.y = d3.scaleLinear().range([this.height, 0]);
    this.x.domain(d3.extent(data, (d: any) => d.date));
    this.y.domain([
      d3.min(data, function (d: any) {
        return Math.min(d.value, d.value2) - 1;
      }),
      d3.max(data, function (d: any) {
        return Math.max(d.value, d.value2);
      }),
    ]);
    // Configure the X Axis
    this.svg
      .append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(this.x))
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('dx', '-.8em')
      .attr('dy', '.15em')
      .attr('transform', () => {
        return 'rotate(-90)';
      })
      .style('font-size', 12);
    // Configure the Y Axis
    this.svg
      .append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(this.y))
     this. svg.append("text")
      .attr("class", "y label")
      .attr("text-anchor", "end")
      .attr("y", 6)
      .attr("dy", ".75em")
      .attr("transform", "rotate(-90)")
      .text("temp");
    const dots = this.svg.append('g');
    dots
      .selectAll('dot')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', (d: any) => this.x(d.date))
      .attr('cy', (d: any) => this.y(d.value!))
      .attr('r', 7)
      .style('opacity', 0.5)
      .style('fill', '#ff9800');
    const dots2 = this.svg.append('g');
    dots2
      .selectAll('dot')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', (d: any) => this.x(d.date))
      .attr('cy', (d: any) => this.y(d.value2))
      .attr('r', 7)
      .style('opacity', 0.5)
      .style('fill', 'cornflowerblue');

    dots
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text((d: any) => d.value)
      .attr('x', (d: any) => this.x(Number(d.date) + 70))
      .attr('y', (d: any) => this.y(d.value + 2))
      .style('font-size', 12);
    dots2
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text((d: any) => d.value2)
      .attr('x', (d: any) => this.x(Number(d.date) + 70))
      .attr('y', (d: any) => this.y(d.value2 + 2))
      .style('font-size', 12);
  }
  private drawLineAndPath(data: any) {
    this.line = d3
      .line()
      .x((d: any) => this.x(d.date))
      .y((d: any) => this.y(d.value))
      .curve(d3.curveMonotoneX);
    this.line2 = d3
      .line()
      .x((d: any) => this.x(d.date))
      .y((d: any) => this.y(d.value2))
      .curve(d3.curveMonotoneX);
    // Configuring line path
    this.svg
      .append('path')
      .datum(data)
      .attr('class', 'line')
      .style('stroke', '#ff8533')
      .style('fill', 'none')
      .style('stroke-width', '3px')
      .attr('d', this.line);
    this.svg
      .append('path')
      .datum(data)
      .attr('class', 'line')

      .style('stroke', '#4572a7')
      .style('fill', 'none')
      .style('stroke-width', '3px')
      .attr('d', this.line2);
  }
}
