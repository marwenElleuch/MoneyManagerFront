import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-dashbord-template',
  templateUrl: './dashbord-template.component.html',
  styleUrls: ['./dashbord-template.component.css']
})
export class DashbordTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // if ($('#e_chart_2').length > 0) {
    //   var eChart_2 = echarts.init(document.getElementById('e_chart_2'));
    //   var option5 = {
    //     color: ['#e4e7ea'],
    //     tooltip: {
    //       show: true,
    //       trigger: 'axis',
    //       backgroundColor: '#fff',
    //       borderRadius: 6,
    //       padding: 6,
    //       axisPointer: {
    //         lineStyle: {
    //           width: 0,
    //         }
    //       },
    //       textStyle: {
    //         color: '#324148',
    //         fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    //         fontSize: 12
    //       }
    //     },

    //     grid: {
    //       top: '3%',
    //       left: '3%',
    //       right: '3%',
    //       bottom: '3%',
    //       containLabel: true
    //     },
    //     xAxis: [
    //       {
    //         type: 'category',
    //         data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    //         axisLine: {
    //           show: false
    //         },
    //         axisTick: {
    //           show: false
    //         },
    //         axisLabel: {
    //           textStyle: {
    //             color: '#5e7d8a'
    //           }
    //         }
    //       }
    //     ],
    //     yAxis: [
    //       {
    //         type: 'value',
    //         axisLine: {
    //           show: false
    //         },
    //         axisTick: {
    //           show: false
    //         },
    //         axisLabel: {
    //           textStyle: {
    //             color: '#5e7d8a'
    //           }
    //         },
    //         splitLine: {
    //           lineStyle: {
    //             color: '#eaecec',
    //           }
    //         }
    //       }
    //     ],

    //     series: [
    //       {
    //         data: [420, 332, 401, 334, 400, 330, 410],
    //         type: 'bar',
    //         barMaxWidth: 30,
    //       },
    //       {
    //         data: [220, 282, 391, 300, 390, 230, 210],
    //         type: 'line',
    //         symbolSize: 6,
    //         itemStyle: {
    //           color: '#14cc9e',
    //         },
    //         lineStyle: {
    //           color: '#14cc9e',
    //           width: 2,
    //         }
    //       },
    //       {
    //         data: [120, 152, 251, 124, 250, 120, 110],
    //         type: 'line',
    //         symbolSize: 6,
    //         itemStyle: {
    //           color: '#f44236',
    //         },
    //         lineStyle: {
    //           color: '#f44236',
    //           width: 2,
    //         }
    //       }
    //     ]
    //   };
    //   eChart_2.setOption(option5);
    //   eChart_2.resize();
    // }

  }

}
