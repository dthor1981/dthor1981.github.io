    var map =
          new Datamap(
            {
              element: document.getElementById('map-container'),
              responsive: true,
              scope: "usa",
              fills:{
          
                    low: 'green',
                    elevated: 'yellow',
                    significant:'red'
               },
              height:500,
              width:700,
                
            dataUrl: '../data/map1.csv',
            dataType: 'csv',
            data: {},
                
            geographyConfig: {
                    highlightBorderColor: '#bada55',
                    popupTemplate: function(geography, data) {
                    return '<div class="hoverinfo">' + geography.properties.name +'<br>'+ 'Total Risk: ' +  data.totalRisk + ' '
                    },
            highlightBorderWidth: 3
            },
            
            });
          map.labels();
          window.addEventListener('resize', function() { map.resize(); }); 
          
  var map2 =
          new Datamap(
            {
              element: document.getElementById('map-container-two'),
              responsive: true,
              scope: "usa",
              fills:{
          
                    1: 'green',
                    2: 'yellow',
                    3: 'red',
                    4: 'orange',
                    5: 'brown'
               },
              height:500,
              width:700,
                
            dataUrl: '../data/map2.csv',
            dataType: 'csv',
            data: {},
                
            geographyConfig: {
                    highlightBorderColor: '#bada55',
                    popupTemplate: function(geography, data) {
                    return '<div class="hoverinfo">' + geography.properties.name +'<br>'+ 'Total Obligated Amount, Including Future Obligations: ' +  data.oblAmtDue + ' '
                    },
            highlightBorderWidth: 3
            },
            
            });
          map2.labels();
          window.addEventListener('resize2', function() { map2.resize2(); }); 
          
          
  var map3 =
          new Datamap(
            {
              element: document.getElementById('map-container-three'),
              responsive: true,
              scope: "usa",
              fills:{
          
                    1: 'green',
                    2: 'yellow',
                    3: 'red',
                    4: 'orange',
                    5: 'brown',
                    6: 'indigo',
                    7: 'violet',
                    8: 'blue',
                    9: 'gray',
                    10: 'pink'
               },
              height:500,
              width:700,
                
            dataUrl: '../data/map3.csv',
            dataType: 'csv',
            data: {},
                
            geographyConfig: {
                    highlightBorderColor: '#bada55',
                    popupTemplate: function(geography, data) {
                    return '<div class="hoverinfo">' + geography.properties.name +'<br>'+ ' Average Obligated Amount, Including Future Obligations:  ' +  data.oblAmt + ' '
                    },
            highlightBorderWidth: 3
            },
            
            });
          map3.labels();
          window.addEventListener('resize3', function() { map3.resize3(); }); 
          
          
          
             
     