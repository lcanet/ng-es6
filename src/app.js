import { xor } from 'lodash';
import { ng } from 'angular';
import { MyController } from './MyController';
import { Map } from './Map';

angular.module('hello', [])
    .controller('MyController', MyController)
    .directive('map', () => { return new Map() } )
;

