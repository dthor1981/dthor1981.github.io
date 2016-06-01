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
          
  