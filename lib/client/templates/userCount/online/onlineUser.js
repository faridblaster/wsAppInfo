
Template.onlineUser.onCreated(function(){
   var instance=this;
   instance.subscribe('onlineUsers');
   instance.onlineUser=new ReactiveVar(0);
   instance.autorun(function(){
      var onlineUserCount=db.onlineUser.find({}).count();

      instance.onlineUser.set(onlineUserCount);
   });
});
Template.onlineUser.helpers({
   onlineUser:function(){
      return Template.instance().onlineUser;
   }
});
var generateInitialData = function() {
   var initialData = [],
       time = new Date().getTime(),
       i;
   for (i = -19; i <= 0; i++) {
      initialData.push([time+i*3000,null]);
   }
   return initialData;
};

Template.previewChart.onRendered(function(){
   var templateData=Template.instance().data;
   Highcharts.setOptions({
      global: {
         useUTC: false
      }
   });
   addPoint = function() {
      var value = templateData.onlineUserCursor.get();
      console.log(value)
      chart.series[0].addPoint([new Date().getTime(), value], true, true);
   }

   $('#onlineChart').highcharts({
      chart: {
         type: 'spline',
         //animation: Highcharts.svg, // don't animate in old IE
         marginRight: 10,
      },
      title:{
         text:'Users Online'
      },
      xAxis:{
         type:'datetime',
         gridLineColor: '#000',
         lineColor: '#000'
      },
      yAxis:{
         title:{
            text:'No of users online'
         }
      },
      tooltip: {
         formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                Highcharts.numberFormat(this.y, 2);
         }
      },
      legend: {
         enabled: false
      },
      exporting: {
         enabled: true
      }
   });
   var chart = $('#onlineChart').highcharts();

   chart.addSeries({"name": "Users","data":generateInitialData()});
   setInterval(addPoint,3000);
});