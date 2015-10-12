import { leaf } from 'leaflet';

// this is just the directive wrapper. Most DOM manipulation are encapsulated into a component which has
// the same lifecycle as the DOM

/** @ngInject */
export function MapDirective($injector) {
    return {
        restrict: 'E',
        replace: true,
        template:
            `<div style="width: 400px; height:300px">
            </div>`,
        link: (scope, elt, attrs) => {
            let map = $injector.instantiate(Map);
            map.link(scope, elt, attrs);
        }

    };
}

class AbstractMapComponent {
    constructor() {
    }

    buildOSMLayer() {
        return L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors and friends'
        });
    }
}

class Map extends AbstractMapComponent {

    // we have injection
    /** @ngInject */
    constructor($window) {
        super();
        this.$window = $window;
    }

    handleClick () {
        this.$window.alert('You clicked on me.');
    }

    link (scope, elt, attrs) {
        let map = L.map(elt[0]).setView([47, 4], 5);
        this.buildOSMLayer().addTo(map);

        // nasty dom manipulation
        elt.on('click', (evt) => { this.handleClick() })
    }
}
