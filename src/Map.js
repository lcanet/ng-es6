import { leaf } from 'leaflet';

class BaseDirective {
    constructor(restrict, template) {
        this.restrict = restrict;
        this.replace = true;
        this.template = template;
    }
}

// inheritance
export class Map extends BaseDirective {
    constructor() {
        // multiline string
        super('E',
        `<div style="width: 400px; height:300px">
        </div>`)
    }

    link (scope, elt, attrs) {

        let map = L.map(elt[0]).setView([47, 4], 5);

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors and friends'
        }).addTo(map);
    }
}
