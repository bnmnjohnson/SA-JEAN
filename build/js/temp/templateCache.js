angular.module("templatescache", []).run(["$templateCache", function($templateCache) {$templateCache.put("home.html","<h1>SA-JEAN</h1>");
$templateCache.put("view1.html","<h1> This is view 1 </h1>");
$templateCache.put("view2.html","<h1>This is view 2 </h1>");
$templateCache.put("view3.html","<h1> View 3 </h1>\n<p> The route params are: {{routeId}}</p>");}]);