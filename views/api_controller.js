  var app = angular.module("myApp", []);
  
     app.controller("ProgramController", ['$scope', function($scope) {   
        
        //Function to call the function loadTblGranteeInfo within the Script Include 
        $scope.getTblGranteeInfo = function () {
        var ga = new GlideAjax('global.GBI_Portal_ChartScripts');
        ga.addParam('sysparm_name', 'loadTblGranteeInfo');  
        ga.getXML(getRecordsParse);  
        }    
        
         function getRecordsParse(response) {
            var answer = response.responseXML.documentElement.getAttribute('answer');
            $scope.$apply(function () {
            $scope.programs= angular.fromJson(answer);
            });
            }
        }
        ] );

     
     // Apply datatables after last repeat, otherwise it won't render right
     app.directive('onLastRepeat', function() {
         return function(scope, element, attrs) {
             if (scope.$last) setTimeout(function() {

                  $j('#programs tfoot th').each( function () {
                    var title = $j(this).text();
                    $j(this).html( '<input type="text" placeholder="Search '+title+'" />' );
                } );   


                 var list = $j('#programs').DataTable({
                     "processing": true,
                     "responsive": true,
                
                     buttons: [
                         'pdf'
                     ],
                     "order": [
                         [0, "asc"]
                     ]
                 });

                  list.columns().every( function () {
                  var that = this;
                
                        $j( 'input', this.footer() ).on( 'keyup change', function () {
                            if ( that.search() !== this.value ) {
                                that
                                    .search( this.value )
                                    .draw();
                            }
                        } );
                    } );

                 list.buttons().container()
                     .appendTo($('.col-sm-6:eq(0)', list.table().container()));
             }, 1);
                 
         };
     });

     app.directive('programHref', ['$location', '$window', function ($location, $window) {
        return{
            restrict: 'A',
            link: function (scope, element, attr) {
                element.attr('style', 'cursor:pointer');
                element.on('click', function(){
                    // $location.search(attr.programHref);
                    // $location.path('Final-Bi-Grantee-Details.do');
                    // $location.replace();
                    // scope.$apply();

                    var appendURIvars = $location.search({duns : '{{program.duns}}', busname : '{{program.name}}' });

                    var host = $location.host();
                    var landingUrl = "http://" + host + "/Grants_Bi_Beta/grantee_details.do?" + attr.programHref;
                    $window.location.href = landingUrl;
                    // $window.location.search = attr.programHref;

                    
                });
                }
        }
        }]);