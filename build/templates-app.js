angular.module('templates-app', ['results/results-details.tpl.html', 'results/results.tpl.html', 'search/search.tpl.html']);

angular.module("results/results-details.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("results/results-details.tpl.html",
    "<div class=\"modal-body\">\n" +
    "  <div><b>Depart Details: </b></div>\n" +
    "  <table class=\"ui single line table\">\n" +
    "    <thead>\n" +
    "      <tr>\n" +
    "        <th>Carrier</th>\n" +
    "        <th>Aircraft</th>\n" +
    "        <th>Cabin</th>\n" +
    "        <th>Origin</th>\n" +
    "        <th>Destination</th>\n" +
    "        <th>Departure Time</th>\n" +
    "        <th>Arrival Time</th>\n" +
    "      </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "      <tr ng-repeat=\"flight in departSegments\">\n" +
    "        <td>{{flight.carrier}}</td>\n" +
    "        <td>{{flight.aircraft}}</td>\n" +
    "        <td>{{flight.cabin}}</td>\n" +
    "        <td>{{flight.origin}}</td>\n" +
    "        <td>{{flight.destination}}</td>\n" +
    "        <td>{{convertTime(flight.departureTime)}}</td>\n" +
    "        <td>{{convertTime(flight.arrivalTime)}}</td>\n" +
    "      </tr>\n" +
    "    </tbody>\n" +
    "  </table>\n" +
    "\n" +
    "  <div ng-show=\"isReturnFlight()\">\n" +
    "    <br>\n" +
    "    <br>\n" +
    "    <div><b>Return Details: </b></div>\n" +
    "    <table class=\"ui single line table\">\n" +
    "      <thead>\n" +
    "        <tr>\n" +
    "          <th>Carrier</th>\n" +
    "          <th>Aircraft</th>\n" +
    "          <th>Cabin</th>\n" +
    "          <th>Origin</th>\n" +
    "          <th>Destination</th>\n" +
    "          <th>Departure Time</th>\n" +
    "          <th>Arrival Time</th>\n" +
    "        </tr>\n" +
    "      </thead>\n" +
    "      <tbody>\n" +
    "        <tr ng-repeat=\"flight in returnSegments\">\n" +
    "          <td>{{flight.carrier}}</td>\n" +
    "          <td>{{flight.aircraft}}</td>\n" +
    "          <td>{{flight.cabin}}</td>\n" +
    "          <td>{{flight.origin}}</td>\n" +
    "          <td>{{flight.destination}}</td>\n" +
    "          <td>{{convertTime(flight.departureTime)}}</td>\n" +
    "          <td>{{convertTime(flight.arrivalTime)}}</td>\n" +
    "        </tr>\n" +
    "      </tbody>\n" +
    "    </table>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button type=\"button\" class=\"btn btn-primary\" ng-click=\"ok()\">OK</button>\n" +
    "</div>");
}]);

angular.module("results/results.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("results/results.tpl.html",
    "<div class=\"container\">\n" +
    "	<div class=\"row\">\n" +
    "		<!--div class=\"gridStyle\" ui-grid=\"vm.gridOptions\" ui-grid-resize-columns style=\"height: 330px\"></div-->\n" +
    "\n" +
    "		<table class=\"ui single line selectable celled table\">\n" +
    "			<thead>\n" +
    "				<tr>\n" +
    "					<th>Price</th>\n" +
    "					<th>Carrier</th>\n" +
    "					<th>Details</th>\n" +
    "				</tr>\n" +
    "			</thead>\n" +
    "			<tbody>\n" +
    "				<tr dir-paginate=\"data in vm.flightData | itemsPerPage:5\" ng-click=\"vm.details(data)\">\n" +
    "					<td>\n" +
    "						<b>{{data.totalPrice}}</b>\n" +
    "						<p style=\"opacity: 0.5; font-size: 12px\">{{data.pricePerson}}</p>\n" +
    "					</td>\n" +
    "					<td>{{data.carrier.join(\" + \")}}</td>\n" +
    "					<td>\n" +
    "						<div>\n" +
    "							<div><b>{{vm.convertTime(data.depart.departure)}}</b>\n" +
    "							 ------------ <b>{{vm.convertTime(data.depart.arrival)}}</b></div>\n" +
    "							 <div>[{{vm.convertMinToHr(data.departDuration)}}]</div>\n" +
    "							 <div>{{data.depart.stops}} stops</div>\n" +
    "						</div>\n" +
    "						<div ng-show=\"vm.isReturnFlight(data)\">\n" +
    "							<br>\n" +
    "							<div><b>{{vm.convertTime(data.return.departure)}}</b>\n" +
    "							 ------------ <b>{{vm.convertTime(data.return.arrival)}}</b></div>\n" +
    "							 <div>[{{vm.convertMinToHr(data.returnDuration)}}]</div>\n" +
    "							 <div>{{data.return.stops}} stops</div>\n" +
    "						</div>\n" +
    "					</td>\n" +
    "				</tr>\n" +
    "			</tbody>\n" +
    "		</table>\n" +
    "		<dir-pagination-controls\n" +
    "			max-size=\"10\"\n" +
    "			direction-links=\"true\"\n" +
    "			boundary-links=\"true\" >\n" +
    "		</dir-pagination-controls>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("search/search.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("search/search.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <form name=\"flightForm\" class=\"col-xs-6 col-xs-offset-3\">\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"fromText\">From:</label>\n" +
    "            <input id=\"fromText\" class=\"form-control\"\n" +
    "                   ng-autocomplete ng-model=\"vm.from\" details=\"vm.acFromDetails\" options=\"vm.acOptions\">\n" +
    "          </div>\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"toText\">To:</label>\n" +
    "            <input id=\"toText\" class=\"form-control\"\n" +
    "                   ng-autocomplete ng-model=\"vm.to\" details=\"vm.acToDetails\" options=\"vm.acOptions\">\n" +
    "          </div>\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"departText\">Depart:</label>\n" +
    "            <input id=\"departDate\" class=\"form-control\" type=\"text\"\n" +
    "                   ng-model=\"departDate\">\n" +
    "          </div>\n" +
    "          <div class=\"form-group\" ng-show=\"vm.tripType === 'return'\">\n" +
    "            <label for=\"returnText\">Return:</label>\n" +
    "            <input id=\"returnDate\" class=\"form-control\" type=\"text\"\n" +
    "                   ng-model=\"returnDate\">\n" +
    "          </div>\n" +
    "          <!--div class=\"form-group row\">\n" +
    "            <label for=\"actionLocation\">Cabin Class:</label>\n" +
    "            <select id=\"actionLocation\" class=\"form-control\"\n" +
    "                    ng-model=\"\">\n" +
    "                <option>Economy</option>\n" +
    "                <option>Premium Economy</option>\n" +
    "                <option>Business Class</option>\n" +
    "                <option>First Class</option>\n" +
    "            </select>\n" +
    "          </div-->\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"adults\">Adults:</label>\n" +
    "            <!--button type=\"button\" class=\"decrement\" data-selector=\"#adults\">-</button-->\n" +
    "            <input type=\"text\" class=\"form-control\" id=\"adults\" min=\"1\" max=\"8\" ng-model=\"vm.adult\">\n" +
    "            <!--button type=\"button\" class=\"increment\" data-selector=\"#adults\">+</button-->\n" +
    "          </div>\n" +
    "          <div>\n" +
    "            <div class=\"radio\">\n" +
    "              <label>\n" +
    "                  <input type=\"radio\" name=\"trip\" ng-model=\"vm.tripType\" value=\"return\"/>\n" +
    "                  Round Trip\n" +
    "              </label>\n" +
    "            </div>\n" +
    "            <div class=\"radio\">\n" +
    "              <label>\n" +
    "                  <input type=\"radio\" name=\"trip\" ng-model=\"vm.tripType\" value=\"oneWay\"/>\n" +
    "                  One Way\n" +
    "              </label>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <button class=\"btn btn-primary btn-md\" ng-disabled=\"vm.isNotValidForm()\"\n" +
    "                ng-click=\"vm.search()\"><i class=\"fa fa-paper-plane-o\"></i>\n" +
    "             Search\n" +
    "          </button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
}]);
