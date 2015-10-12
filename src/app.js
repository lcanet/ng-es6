import * as _ from 'lodash';
import { ng } from 'angular';
import { MyController } from './MyController';
import { MapDirective } from './Map';

// demo lodash
let a = _.once( x => console.log(x) );
a(1);
a(2);       // pas affich�

// def du module angular
angular.module('hello', [])
    .controller('MyController', MyController)
    .directive('map', MapDirective )
;

