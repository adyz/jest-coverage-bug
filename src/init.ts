import * as angular from "angular";

import "angular-mocks";

// Attach the angular directive in the dom in order to bootstrap the app and have the react wrapper services instantiated (that are instantiated with the "run" method)
document.documentElement.setAttribute("ng-app", "testApp");
const app = angular.module('testApp', [
    require("angular-ui-bootstrap")
]);