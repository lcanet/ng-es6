export class Map {
    constructor() {
        this.restrict = 'E';
        this.replace = true;
        this.template = `<div style="width: 300px; height:300px">
        </div>`
    }

    link (scope, elt, attrs) {

        var map = L.map(elt[0]).setView([47, 4], 5);

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    }
}
