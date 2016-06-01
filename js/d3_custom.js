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
              element: document.getElementById('map-container-2'),
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
                    return '<div class="hoverinfo">' + geography.properties.name +'<br>'+ 'Total Obligated Amount, Including Future Obligations: ' +  data.oblAmt + ' '
                    },
            highlightBorderWidth: 3
            },
            
            });
          map.labels();
          window.addEventListener('resize', function() { map.resize(); }); 