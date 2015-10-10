/**
 * Created by piyush on 10/11/15.
 */


var updateRamGraph=function(data){
    $('.memory-ram').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: 'Memory'
            }
        },

        credits: {
            enabled: false
        },

        series: [{
            name: 'Memory',
            data: [data],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                '<span style="font-size:12px;color:silver">%</span></div>'
            },
            tooltip: {
                valueSuffix: '%'
            }
        }]

    }));
};
Template.ram.onCreated(function(){
   this.subscribe('getMemory');
    Meteor.call('beginMemeory', function (err,res) {

    });
});
Template.ramGraph.onRendered(function(){
    updateRamGraph(0);
    this.autorun(function(){
       var ramUsage=db.memory.findOne({type:'ram'});
        console.log(ramUsage);
        if(ramUsage && ramUsage.value){
            var chart = $('.memory-ram').highcharts();
            if(chart){
               var  point = chart.series[0].points[0];
                point.update(ramUsage.value);
            }


        }

    });
});