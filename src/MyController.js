export class MyController {

    /*@ngInject*/
    constructor($scope) {
        this.$scope = $scope;
        $scope.hello = 'Hello world';

    };

    print() {
        alert(this.$scope.hello);

    }
}
