import * as _ from 'lodash';
import { ng } from 'angular';
import { MyController } from './MyController';
import { Map } from './Map';

// demo lodash
let a = _.once( x => console.log(x) );
a(1);
a(2);       // pas affiché

// def du module angular
angular.module('hello', [])
    .controller('MyController', MyController)
    .directive('map', () => { return new Map() } )
;

