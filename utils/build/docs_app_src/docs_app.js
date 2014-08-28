    requirejs( [
            'angular-ui-bootstrap',
            'angular-markdown',
            'css!./isis_ui_components/docs/styles/ui_components_demo.css'
        ].concat(
            components.map( function ( e ) { return 'isis-ui-components/' + e + '/docs/demo'; } )
        ), function ( ngBootstrap ) {

            angular.module(
                'demoApp',
                [ 'btford.markdown' ].concat(components.map( function( e ) { return 'isis.ui.' + e + '.demo';} ))
            ).controller(
                'UIComponentsDemoController',
                function ( $scope ) {

                    $scope.components = components.map(function( component ) {
                        return {
                            name: component,
                            template: '../' + component + '/docs/demo.html',
                            docs: '../' + component + '/docs/readme.md'
                        }
                    });

            } );

            angular.bootstrap(document, ['demoApp']);

        } );