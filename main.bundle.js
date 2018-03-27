webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\r\n    font-size: 16px;\r\n}\r\n\r\nhr {\r\n    border-top: 1px solid black;\r\n}\r\n\r\nsmall {\r\n    font-size: 9.5px;\r\n}\r\n\r\n.greenColor {\r\n    color: green;\r\n}\r\n\r\nagm-map {\r\n   \r\n    height: 450px;\r\n}\r\n\r\n#Main-Div {\r\n    min-height: 750px;\r\n    padding-top: 20px;\r\n}\r\n\r\n.container {\r\n    padding-top: 20px;\r\n    font-family: 'sans-serif';\r\n}\r\n\r\n#tooltipDiv {\r\n    width: 20px;\r\n    text-align: left;\r\n}\r\n\r\n#tooltipText {\r\n    font-size: 14px;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    #tooltipText {\r\n        font-size: 10px;\r\n    }\r\n    #tooltipDiv {\r\n        padding-left: 20px;\r\n        width: 30px;\r\n    }\r\n    .row {\r\n        font-size: 12px;\r\n    }\r\n}\r\n\r\n.col-md-12 {\r\n    font-size: 16px;\r\n}\r\n\r\n.breaker {\r\n    margin-top: 10px;\r\n    height: 20px;\r\n    background-color: grey;\r\n    margin-bottom: 10px;\r\n}\r\n\r\ni:active:after {\r\n    content: attr(title);\r\n    padding: 5px 10px;\r\n    font-size: 13px;\r\n    line-height: 1.2em;\r\n    color: white;\r\n    width: 300px;\r\n    background: black;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    position: absolute;\r\n    z-index: 500;\r\n    word-spacing: -10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.tool:active:after {\r\n    content: 'Partnership Name: BBL Operating Company LLC \\ATotal Raise: $850,000 \\ATotal Net Revenue Interest (NRI): 56.25% \\AUnit Cost: $170,000 \\ANumber of Units: 5';\r\n    white-space: pre;\r\n    padding: 5px 10px;\r\n    font-size: 14px;\r\n    line-height: 1.2em;\r\n    color: white;\r\n    width: 300px;\r\n    background: black;\r\n    display: inline-block;\r\n    position: absolute;\r\n    z-index: 500;\r\n    word-spacing: 2px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.round.round-lg {\r\n    height: 90px;\r\n    width: 90px;\r\n    line-height: 90px;\r\n    border-radius: 45px;\r\n    font-size: 2.5em;\r\n    font-weight: bold;\r\n}\r\n\r\n.round.hollow {\r\n    display: inline-block;\r\n    height: 90px;\r\n    width: 90px;\r\n    line-height: 90px;\r\n    border-radius: 45px;\r\n    background-color: #FFF;\r\n    color: rgba(8, 173, 63, 0.75);\r\n    text-align: center;\r\n    box-shadow: 0px 0px 0px 7px rgba(8, 173, 63, 0.75);\r\n}\r\n\r\n#icon1 {\r\n    color: white;\r\n    background-color: black;\r\n    height: 36px;\r\n    width: 36px;\r\n    text-align: center;\r\n    padding: 5px\r\n}\r\n\r\n#icon2 {\r\n    color: white;\r\n    background-color: black;\r\n    height: 36px;\r\n    width: 36px;\r\n    text-align: center;\r\n    padding: 5px\r\n}\r\n\r\n#icon3 {\r\n    color: white;\r\n    background-color: black;\r\n    height: 36px;\r\n    width: 36px;\r\n    text-align: center;\r\n    padding: 5px\r\n}\r\n\r\n.panel-heading {\r\n    padding: 0;\r\n    border-radius: 0;\r\n    color: #212121;\r\n    min-height: 48px;\r\n}\r\n\r\n.panel-title {\r\n    font-size: 22px;\r\n    font-weight: bold;\r\n    display: block;\r\n    padding: 10px;\r\n    text-decoration: none;\r\n}\r\n\r\naccordion-heading {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.table>tbody>tr>td{\r\n    border-top: none;\r\n    text-align: center;\r\n}\r\n\r\n.table>tbody>tr>th{\r\n    border-top: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n\r\n    <div class=\"row\">\r\n       \r\n    \r\n                   \r\n         <div class=\"row\" style=\"padding-top:10px\">\r\n                           \r\n                \r\n               \r\n              \r\n                 <div class=\"col-md-6\">\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\" style=\"text-align: left; font-weight: bold\">\r\n                                    {{ map_title }}\r\n                                </div>\r\n                                <div class=\"col-md-6\" style=\"text-align: right\">\r\n                                        <button class=\"btn\" (click)=\"onReload()\">Reset Map</button>\r\n                                </div>\r\n                               \r\n                            </div>\r\n\r\n                            <br>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12\">\r\n                                    <agm-map [mapTypeId]=\"'satellite'\" gestureHandling=\"greedy\" [scrollwheel]=\"false\" [zoom]=\"zoom\" [latitude]=\"lati\" [longitude]=\"longi\"\r\n                                        (mapReady)=\"changeTilt($event)\">\r\n                                        <agm-marker *ngFor=\"let marker of latlong; let pos = index\" iconUrl=\"{{ marker.url }}\" (markerClick)=\"onMarkerClickLocation(pos, infoRef)\"\r\n                                            [latitude]=\"marker.latitude\" [longitude]=\"marker.longitude\">\r\n                                            <agm-info-window #infoRef>\r\n                                                <strong>ROI : {{ marker.roi_percentage? marker.roi_percentage : '0' }} %</strong>\r\n                                            </agm-info-window>\r\n                                        </agm-marker>\r\n                                    </agm-map>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <br>\r\n\r\n                           \r\n\r\n                        <!--\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xs-2\" style=\"text-align:center\">\r\n                                    <img src=\"assets/marker/plain/blue.png\" height=\"25px\" width=\"25px\">\r\n                                </div>\r\n                                <div class=\"col-xs-2\" style=\"text-align:center\">\r\n                                    <img src=\"assets/marker/plain/marron.png\" height=\"25px\" width=\"25px\">\r\n                                </div>\r\n                                <div class=\"col-xs-2\" style=\"text-align:center\">\r\n                                    <img src=\"assets/marker/plain/red.png\" height=\"25px\" width=\"25px\">\r\n                                </div>\r\n                                <div class=\"col-xs-2\" style=\"text-align:center\">\r\n                                    <img src=\"assets/marker/plain/orange.png\" height=\"25px\" width=\"25px\">\r\n                                </div>\r\n                                <div class=\"col-xs-2\" style=\"text-align:center\">\r\n                                    <img src=\"assets/marker/plain/yellow.png\" height=\"25px\" width=\"25px\">\r\n                                </div>\r\n                                <div class=\"col-xs-2\" style=\"text-align:center\">\r\n                                    <img src=\"assets/marker/plain/green.png\" height=\"25px\" width=\"25px\">\r\n                                </div>\r\n                            </div>\r\n                              \r\n                            <div class=\"row\">\r\n                                <div class=\"col-xs-2\" style=\"text-align:center; background-color: #30AAF4; height: 15px\"></div>\r\n                                <div class=\"col-xs-2\" style=\"text-align:center; background-color: #7740A7; height: 15px\"></div>\r\n                                <div class=\"col-xs-2\" style=\"text-align:center; background-color: #F13D38; height: 15px\"></div>\r\n                                <div class=\"col-xs-2\" style=\"text-align:center; background-color: #ED882D; height: 15px\"></div>\r\n                                <div class=\"col-xs-2\" style=\"text-align:center; background-color: #F7EE2B; height: 15px\"></div>\r\n                                <div class=\"col-xs-2\" style=\"text-align:center; background-color: #499130; height: 15px\"></div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xs-2\" style=\"text-align:center; font-size: 11px\">0% to 100%</div>\r\n                                <div class=\"col-xs-2\" style=\"text-align:center; font-size: 11px\">101% to 200%</div>\r\n                                <div class=\"col-xs-2\" style=\"text-align:center; font-size: 11px\">201% to 300%</div>\r\n                                <div class=\"col-xs-2\" style=\"text-align:center; font-size: 11px\">301% to 400%</div>\r\n                                <div class=\"col-xs-2\" style=\"text-align:center; font-size: 11px\">401% to 500%</div>\r\n                                <div class=\"col-xs-2\" style=\"text-align:center; font-size: 11px\">501%+</div>\r\n                            </div>\r\n                        -->       \r\n                            <br>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xs-6\" style=\"text-align:center;\">\r\n                                    <img src=\"assets/pointer.png\" height=\"20px\" width=\"22px\"> Current Selected\r\n                                </div>\r\n                                <div class=\"col-xs-6\" style=\"text-align:center;\">\r\n                                    <img src=\"assets/border.png\" height=\"20px\" width=\"25px\"> Previous Selected\r\n                                </div>\r\n                            </div>\r\n                            <br>\r\n               </div>\r\n               \r\n               <div class=\"col-md-6\" style=\"margin-top:55px; padding-bottom:20px; border: black 1px bold\">\r\n                \r\n                     <div class=\"row\">\r\n                             <div class=\"col-md-9\" style=\"font-size:14px;font-weight: bold; margin-top:10px;\">\r\n                                 <img src=\"assets/pointer.png\" height=\"19px\" width=\"20px\" style=\"margin-left:-2px; margin-top:-8px\"> SELECT A WELL FROM THE MAP TO VIEW INDIVIDUAL WELL DATA DIRECT FROM DRILLINGINFO.COM\r\n                             </div>\r\n\r\n                             <div class=\"col-md-3\" style=\"margin-top:10px;\">\r\n                                 <img src=\"assets/drilling.jpg\" class=\"img-responsive\" />\r\n                             </div>\r\n                         </div>\r\n\r\n                         <div class=\"row\" style=\"padding-left: 15px; padding-top:15px\">\r\n                             <div class=\"row\">\r\n                                 <div class=\"col-md-6\">\r\n                                     <div class=\"row\">\r\n                                         <div class=\"col-md-12\">API/UWI\r\n                                             <b>:</b> {{ api_uwi }}</div>\r\n                                     </div>\r\n\r\n                                     <br>\r\n\r\n                                     <div class=\"row\">\r\n                                         <div class=\"col-md-12\">Well/Lease Name\r\n                                             <b>:</b> {{ lease_name }}</div>\r\n                                     </div>\r\n\r\n                                     <br>\r\n\r\n                                     <div class=\"row\">\r\n                                         <div class=\"col-md-12\">Operator\r\n                                             <b>:</b> {{ operator_name }}</div>\r\n                                     </div>\r\n\r\n                                     <br>\r\n\r\n                                     <div class=\"row\">\r\n                                         <div class=\"col-md-12\">Status\r\n                                             <b>:</b> {{ production_status }}</div>\r\n                                     </div>\r\n\r\n                                     <br>\r\n\r\n                                     <div class=\"row\">\r\n                                         <div class=\"col-md-12\">County\r\n                                             <b>:</b> {{ county }}</div>\r\n                                     </div>\r\n\r\n                                     <br>\r\n\r\n                                     <div class=\"row\">\r\n                                         <div class=\"col-md-12\">State\r\n                                             <b>:</b> {{ state }}</div>\r\n                                     </div>\r\n\r\n                                     <br>\r\n\r\n                                     <div class=\"row\">\r\n                                         <div class=\"col-md-12\">Drill Type\r\n                                             <b>:</b> {{ drill_type }}</div>\r\n                                     </div>\r\n\r\n                                     <br>\r\n\r\n                                     <div class=\"row\">\r\n                                         <div class=\"col-md-12\">Measured Depth(TD)\r\n                                             <b>:</b> {{ measured_depth ? (measured_depth | number) : (measured_depth)\r\n                                             }}\r\n                                         </div>\r\n                                     </div>\r\n\r\n                                 </div>\r\n\r\n                                 <div class=\"col-md-6\">\r\n\r\n                                     <div class=\"row\" style=\"min-height:47px;\">\r\n                                     </div>\r\n\r\n                                     <div class=\"row\">\r\n                                         <div class=\"col-md-12\">Cumulative Oil\r\n                                             <b>:</b> {{ cum_oil ? (cum_oil | number) : (cum_oil) }}</div>\r\n                                     </div>\r\n\r\n                                     <br>\r\n\r\n                                     <div class=\"row\">\r\n                                         <div class=\"col-md-12\">Cumulative Gas\r\n                                             <b>:</b> {{ cum_gas ? (cum_gas | number) : (cum_gas) }}</div>\r\n                                     </div>\r\n\r\n                                     <br>\r\n\r\n                                     <div class=\"row\">\r\n                                         <div class=\"col-md-12\">First Production\r\n                                             <b>:</b> {{ first_prod_date }}</div>\r\n                                     </div>\r\n\r\n                                     <br>\r\n\r\n                                     <div class=\"row\">\r\n                                         <div class=\"col-md-12\">Last Production\r\n                                             <b>:</b> {{ last_prod_date }}</div>\r\n                                     </div>\r\n\r\n                                     <br>\r\n\r\n                                     <div class=\"row\">\r\n                                         <div class=\"col-md-12\">Reservoir\r\n                                             <b>:</b> {{ reservior }}</div>\r\n                                     </div>\r\n\r\n                                     <br>\r\n\r\n                                     <div class=\"row\">\r\n                                         <div class=\"col-md-12\">Longitude\r\n                                             <b>:</b> {{ long }}</div>\r\n                                     </div>\r\n\r\n                                     <br>\r\n\r\n                                     <div class=\"row\">\r\n                                         <div class=\"col-md-12\">Latitude\r\n                                             <b>:</b> {{ lat }}</div>\r\n                                     </div>\r\n                                 </div>\r\n                        </div>\r\n                 </div>\r\n\r\n\r\n</div>\r\n\r\n               \r\n               \r\n               \r\n               \r\n               \r\n               \r\n               \r\n               \r\n               \r\n               \r\n               \r\n               \r\n               \r\n               \r\n               \r\n               \r\n               \r\n               \r\n               \r\n               \r\n               \r\n               \r\n               \r\n         </div>\r\n    </div>\r\n</div>\r\n\r\n     \r\n\r\n\r\n<!--\r\n<app-hope-thetical-calculator></app-hope-thetical-calculator>\r\n\r\n<app-tax-effect-tool></app-tax-effect-tool>\r\n-->\r\n<!--\r\n<app-legal-doc-accordian></app-legal-doc-accordian>\r\n\r\n<app-footer></app-footer>\r\n-->\r\n\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js\"></script>\r\n<script src=\"../../node_modules/bootstrap/dist/js/bootstrap.min.js\"></script>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__well_application_service__ = __webpack_require__("../../../../../src/app/well-application.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    // Dependency Injection
    function AppComponent(wellapplicationservices) {
        this.wellapplicationservices = wellapplicationservices;
        this.cum_boe = 0;
        this.lati = 33.1476870;
        this.longi = -99.0388324;
        this.previous = -1;
        this.current = -1;
        this.isOpen = true;
        this.firstproddate = "0";
        this.firstsixtygas = "0";
        this.firstsixtyoil = "0";
        this.firsttwelvegas = "0";
        this.firsttwelveoil = "0";
        this.firsttwentyfourgas = "0";
        this.firsttwentyfouroil = "0";
        this.lasttwelvegas = "0";
        this.lasttwelveoil = "0";
        this.roifirsttwelve = "0%";
        this.roifirsttwentyfour = "0%";
        this.roifirstsixty = "0%";
        this.roilasttwelve = "0%";
        this.index = -1;
        this.investment_amount = 46875;
        this.nri_percentage = 0.1875;
        this.gross_cash_flow_wo_expenses = 46875;
        this.sold_boe = 31612;
        this.production_expenses = 0;
        this.average_oil_price = 0;
        this.tax = 0.046;
        this.tax_gas = 0.075;
        this.green_count = 0;
        this.yellow_count = 0;
        this.color = 'red';
        this.potential_profit_loss = 0;
        this.estimated_gross_cash_flow = 0;
        this.temp_estimated_gross_cash_flow = [];
        this.oil_price = 0;
        this.gas_price = 0;
        this.partner_name = "BBL Operating Company LLC";
        this.latlong = [];
        this.visit = -1;
        this.currentgreencount = 0;
        this.length = 0;
        this.zoom = 9;
        this.roi_percentage = 0;
        this.slider_percentage = "0%";
        this.temp_roi = [];
        this.type = null;
        this.clicked = -1;
        this.infoWindowOpened = null;
        this.partnership_raise = 2000000;
        this.partnership_term = 56.25;
        this.markerarray = [];
        /*-------------------------------------------------------------------------------------------------------------------*/
        // Hypothetical Price, Production, and Cash Flow Scenarios section calculation
        this.unit_price = 1700000;
        this.c = 0.1125;
        this.Hypothetical_investment_model = 46875;
        this.Estimated_oil_model = 50;
        this.Estimated_gas_model = 50;
        this.Estimated_oil_price_model = 60;
        this.Estimated_gas_price_model = 3;
        this.Estimated_Oil_ultimate_recovery_model = 77394;
        this.Estimated_Gas_ultimate_recovery_model = 2705;
        this.Projected_Lifespan = 0;
        this.Net_Income_Difference = 0;
        this.Actual_Dollars_At_Risk = 0;
        this.unit_equivalent_model = 0;
        this.Net_Revenue_model = 0;
        this.five_percent_of_temp = 0;
        this.Potential_Monthly_model = 0;
        this.Months_to_model = 0;
        this.Total_Potential_model = 0;
        this.Operating_Expenses_Ratio = 5;
        this.roi_percent = "0%";
        // 2016 K-1 Tax Estimator section calculation
        this.Estimated_Taxable_Income_model = 500000;
        this.Investment_Amount_K1_model = 0;
        this.Filing_Status = -1;
        this.data = [];
        this.Tax_Bracket = 0;
        this.Tax_Bracket_K1 = 0;
        this.Estimated_Tax_Due = 0;
        this.Deduction_K1 = 0;
        this.Adjusted_Taxable_Income = 0;
        this.Adjusted_Taxable_Income_K1 = 0;
        this.After_Tax_Income = 0;
        this.After_Tax_Income_K1 = 0;
        this.Tax_Rate_Pay_Tax = 0;
        this.Tax_Rate_Pay_Tax_K1 = 0;
        this.Range_Start = 0;
        this.Excess_Income = 0;
        this.Excess_Income_K1 = 0;
        this.Tax_On_Excess = 0;
        this.Tax_On_Excess_K1 = 0;
        this.Estimated_Tax_Due_K1 = 0;
        this.Adjusted_Net_Income = 0;
        this.Adjusted_Net_Income_K1 = 0;
        this.Tax_Savings_K1 = 0;
        this.Tax_Liability = 0;
        this.Tax_Liability_K1 = 0;
        this.Partnership_Investment = 0;
        this.Income_Difference = 0;
        this.k1_deduction_percentage = 75;
        this.panel_visit = 0;
    }
    // Initializing the Data to Map and Panels
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Calling JSON Object and Parsing Value
        this.wellapplicationservices.getFiveMilesJSON().subscribe(function (JSONlat) {
            for (var i = 0; i < JSONlat.length; i++) {
                _this.latlong[i] = JSONlat[i],
                    function (error) { return console.log(error); };
            }
            _this.well_count = JSONlat.length - 1;
            _this.calculate();
            _this.calculateows();
        });
        this.map_title = "Overall Production Map";
        this.hypothetical();
        this.intializeData();
    };
    // Tilt the Map by 45 degree 
    AppComponent.prototype.changeTilt = function (map) {
        this.map = map;
        this.map.setTilt(45);
    };
    // Get the selected Miles from the Radio Button to set the markers on Map
    AppComponent.prototype.getMiles = function (miles) {
        var _this = this;
        this.oil_price = 0;
        this.gas_price = 0;
        this.infoWindowOpened = null;
        this.markerarray = [];
        this.type = null;
        this.temp_roi = [];
        this.map_title = "Overall Production Map";
        while (this.latlong.length > 0) {
            this.latlong.pop();
        }
        /*
        if (miles === "One Mile") {
          this.wellapplicationservices.getOneMileJSON().subscribe(
            JSONlat => {
              for (var i = 0; i < JSONlat.length; i++) {
                this.latlong[i] = JSONlat[i],
                  error => console.log(error)
              }
    
              //console.log(this.latlong);
    
              this.firstsixtygas = "0";
              this.firstsixtyoil = "0";
              this.firsttwelvegas = "0";
              this.firsttwelveoil = "0";
              this.firsttwentyfourgas = "0";
              this.firsttwentyfouroil = "0";
              this.lasttwelvegas = "0";
              this.lasttwelveoil = "0";
    
              this.roifirsttwelve = "0%";
              this.roifirsttwentyfour = "0%";
              this.roifirstsixty = "0%";
              this.roilasttwelve = "0%";
    
              this.well_count = JSONlat.length - 1;
              this.previous = -1;
              this.current = -1;
              this.index = -1;
              this.zoom = 14;
              this.visit = -1;
              this.clicked = -1;
              this.calculate();
              //this.calculateows();
              //this.store_display(this.current);
            }
          );
        }
    
        else if (miles === "Three Miles") {
          this.wellapplicationservices.getThreeMilesJSON().subscribe(
            JSONlat => {
              for (var i = 0; i < JSONlat.length; i++) {
                this.latlong[i] = JSONlat[i],
                  error => console.log(error)
              }
    
              //console.log(this.latlong);
    
              this.firstsixtygas = "0";
              this.firstsixtyoil = "0";
              this.firsttwelvegas = "0";
              this.firsttwelveoil = "0";
              this.firsttwentyfourgas = "0";
              this.firsttwentyfouroil = "0";
              this.lasttwelvegas = "0";
              this.lasttwelveoil = "0";
    
              this.roifirsttwelve = "0%";
              this.roifirsttwentyfour = "0%";
              this.roifirstsixty = "0%";
              this.roilasttwelve = "0%";
    
              this.well_count = JSONlat.length - 1;
              this.previous = -1;
              this.current = -1;
              this.index = -1;
              this.zoom = 12;
              this.visit = -1;
              this.clicked = -1;
              this.calculate();
              //this.calculateows();
              //this.store_display(this.current);
            }
          );
        }
    
        else {
          this.wellapplicationservices.getFiveMilesJSON().subscribe(
            JSONlat => {
              for (var i = 0; i < JSONlat.length; i++) {
                this.latlong[i] = JSONlat[i],
                  error => console.log(error)
              }
    
              //console.log(this.latlong);
    
              this.firstsixtygas = "0";
              this.firstsixtyoil = "0";
              this.firsttwelvegas = "0";
              this.firsttwelveoil = "0";
              this.firsttwentyfourgas = "0";
              this.firsttwentyfouroil = "0";
              this.lasttwelvegas = "0";
              this.lasttwelveoil = "0";
    
              this.roifirsttwelve = "0%";
              this.roifirsttwentyfour = "0%";
              this.roifirstsixty = "0%";
              this.roilasttwelve = "0%";
    
              this.well_count = JSONlat.length - 1;
              this.previous = -1;
              this.current = -1;
              this.index = -1;
              this.zoom = 11;
              this.visit = -1;
              this.clicked = -1;
              this.calculate();
              //this.calculateows();
              //this.store_display(this.current);
            }
          );
        }
        */
        if (miles === "Five Miles") {
            this.wellapplicationservices.getFiveMilesJSON().subscribe(function (JSONlat) {
                for (var i = 0; i < JSONlat.length; i++) {
                    _this.latlong[i] = JSONlat[i],
                        function (error) { return console.log(error); };
                }
                //console.log(this.latlong);
                _this.firstsixtygas = "0";
                _this.firstsixtyoil = "0";
                _this.firsttwelvegas = "0";
                _this.firsttwelveoil = "0";
                _this.firsttwentyfourgas = "0";
                _this.firsttwentyfouroil = "0";
                _this.lasttwelvegas = "0";
                _this.lasttwelveoil = "0";
                _this.roifirsttwelve = "0%";
                _this.roifirsttwentyfour = "0%";
                _this.roifirstsixty = "0%";
                _this.roilasttwelve = "0%";
                _this.well_count = JSONlat.length - 1;
                _this.previous = -1;
                _this.current = -1;
                _this.index = -1;
                _this.zoom = 9;
                _this.visit = -1;
                _this.clicked = -1;
                _this.calculate();
                //this.calculateows();
                //this.store_display(this.current);
            });
        }
    };
    // Dynamically changing the Estimated Gross Cash Flow Value
    AppComponent.prototype.calculate = function () {
        if (this.clicked === 1) {
            this.calculateROIPercentage(this.type);
            //console.log(this.temp_roi);
        }
        this.length = this.well_count;
        var temp1 = 0, temp2 = 0;
        //Initial Calculation of ENCF
        temp1 = (this.oil_price * this.cum_oil);
        temp1 = temp1 - (this.tax * temp1);
        temp2 = (this.gas_price * this.cum_gas);
        temp2 = temp2 - (this.tax_gas * temp2);
        temp1 = temp1 + temp2;
        temp1 = temp1 - ((this.production_expenses / 100) * (temp1));
        this.estimated_gross_cash_flow = (this.partnership_term / 100) * temp1;
        this.green_count = 0;
        this.yellow_count = 0;
        if (this.visit != -1) {
            for (var i = 0; i < this.latlong.length; i++) {
                this.latlong[i].roi_percentage = null;
            }
            for (var i = 0; i < this.markerarray.length - 1; i++) {
                this.infoWindowOpened = this.markerarray[i];
                if (this.infoWindowOpened !== undefined && this.infoWindowOpened !== null)
                    this.infoWindowOpened.close();
            }
            //this.markerarray = [];
            //this.infoWindowOpened = null;
            this.calculatepayout();
            if (this.infoWindowOpened !== null && this.infoWindowOpened !== undefined)
                this.infoWindowOpened.innerHtml = this.latlong[this.index].roi_percentage;
        }
        // Setting the Text Color of ENCF if it is greater than 1511111
        if (isNaN(this.estimated_gross_cash_flow)) {
            this.estimated_gross_cash_flow = 0;
        }
        if (this.estimated_gross_cash_flow >= this.partnership_raise) {
            this.textcolor = 'green';
        }
        else {
            this.textcolor = 'red';
        }
        for (var i = 0; i < this.length; i++) {
            // Calculation of all the well when the value of Oil or Gas is changed
            temp1 = (this.oil_price * this.latlong[i].cumoil);
            temp1 = temp1 - (this.tax * temp1);
            temp2 = (this.gas_price * this.latlong[i].cumgas);
            temp2 = temp2 - (this.tax_gas * temp2);
            this.temp_estimated_gross_cash_flow[i] = temp1 + temp2;
            this.temp_estimated_gross_cash_flow[i] = this.temp_estimated_gross_cash_flow[i] - ((this.production_expenses / 100) * (this.temp_estimated_gross_cash_flow[i]));
            this.temp_estimated_gross_cash_flow[i] = (this.partnership_term / 100) * this.temp_estimated_gross_cash_flow[i];
            this.latlong[i].grosscashflow = this.temp_estimated_gross_cash_flow[i];
            this.temp_roi_percentage = Math.floor((this.temp_estimated_gross_cash_flow[i] * 100) / this.partnership_raise);
            if (this.clicked === 1) {
                if (this.temp_roi.length > 0) {
                    for (var i = 0; i < this.temp_roi.length - 1; i++) {
                        if (i === this.index) {
                            if (this.temp_roi[i] >= 500) {
                                this.latlong[this.index].url = "assets/marker/current/green_pointer.png";
                            }
                            else if (this.temp_roi[i] >= 401 && this.temp_roi[i] <= 500) {
                                this.latlong[this.index].url = "assets/marker/current/yellow_pointer.png";
                            }
                            else if (this.temp_roi[i] >= 301 && this.temp_roi[i] <= 400) {
                                this.latlong[this.index].url = "assets/marker/current/orange_pointer.png";
                            }
                            else if (this.temp_roi[i] >= 201 && this.temp_roi[i] <= 300) {
                                this.latlong[this.index].url = "assets/marker/current/red_pointer.png";
                            }
                            else if (this.temp_roi[i] >= 101 && this.temp_roi[i] <= 200) {
                                this.latlong[this.index].url = "assets/marker/current/marron_pointer.png";
                            }
                            else {
                                this.latlong[this.index].url = "assets/marker/current/blue_pointer.png";
                            }
                        }
                        else {
                            if (this.temp_roi[i] >= 500) {
                                this.latlong[i].url = "assets/marker/plain/green.png";
                            }
                            else if (this.temp_roi[i] >= 401 && this.temp_roi[i] <= 500) {
                                this.latlong[i].url = "assets/marker/plain/yellow.png";
                            }
                            else if (this.temp_roi[i] >= 301 && this.temp_roi[i] <= 400) {
                                this.latlong[i].url = "assets/marker/plain/orange.png";
                            }
                            else if (this.temp_roi[i] >= 201 && this.temp_roi[i] <= 300) {
                                this.latlong[i].url = "assets/marker/plain/red.png";
                            }
                            else if (this.temp_roi[i] >= 101 && this.temp_roi[i] <= 200) {
                                this.latlong[i].url = "assets/marker/plain/marron.png";
                            }
                            else {
                                this.latlong[i].url = "assets/marker/plain/blue.png";
                            }
                        }
                    }
                }
            }
            else {
                if (this.temp_estimated_gross_cash_flow[i] >= this.partnership_raise) {
                    this.green_count = this.green_count + 1;
                    //this.latlong[i].url = "assets/img/green_marker.png";
                    if (i === this.index) {
                        if (this.temp_roi_percentage >= 500) {
                            this.latlong[this.index].url = "assets/marker/current/green_pointer.png";
                        }
                        else if (this.temp_roi_percentage >= 401 && this.temp_roi_percentage <= 500) {
                            this.latlong[this.index].url = "assets/marker/current/yellow_pointer.png";
                        }
                        else if (this.temp_roi_percentage >= 301 && this.temp_roi_percentage <= 400) {
                            this.latlong[this.index].url = "assets/marker/current/orange_pointer.png";
                        }
                        else if (this.temp_roi_percentage >= 201 && this.temp_roi_percentage <= 300) {
                            this.latlong[this.index].url = "assets/marker/current/red_pointer.png";
                        }
                        else if (this.temp_roi_percentage >= 101 && this.temp_roi_percentage <= 200) {
                            this.latlong[this.index].url = "assets/marker/current/marron_pointer.png";
                        }
                        else {
                            this.latlong[this.index].url = "assets/marker/current/blue_pointer.png";
                        }
                    }
                    else {
                        if (this.temp_roi_percentage >= 500) {
                            this.latlong[i].url = "assets/marker/plain/green.png";
                        }
                        else if (this.temp_roi_percentage >= 401 && this.temp_roi_percentage <= 500) {
                            this.latlong[i].url = "assets/marker/plain/yellow.png";
                        }
                        else if (this.temp_roi_percentage >= 301 && this.temp_roi_percentage <= 400) {
                            this.latlong[i].url = "assets/marker/plain/orange.png";
                        }
                        else if (this.temp_roi_percentage >= 201 && this.temp_roi_percentage <= 300) {
                            this.latlong[i].url = "assets/marker/plain/red.png";
                        }
                        else if (this.temp_roi_percentage >= 101 && this.temp_roi_percentage <= 200) {
                            this.latlong[i].url = "assets/marker/plain/marron.png";
                        }
                        else {
                            this.latlong[i].url = "assets/marker/plain/blue.png";
                        }
                    }
                }
                else {
                    this.yellow_count = this.yellow_count + 1;
                    //this.latlong[i].url = "assets/grey_marker.png";
                    if (i === this.index) {
                        if (this.temp_roi_percentage >= 500) {
                            this.latlong[this.index].url = "assets/marker/current/green_pointer.png";
                        }
                        else if (this.temp_roi_percentage >= 401 && this.temp_roi_percentage <= 500) {
                            this.latlong[this.index].url = "assets/marker/current/yellow_pointer.png";
                        }
                        else if (this.temp_roi_percentage >= 301 && this.temp_roi_percentage <= 400) {
                            this.latlong[this.index].url = "assets/marker/current/orange_pointer.png";
                        }
                        else if (this.temp_roi_percentage >= 201 && this.temp_roi_percentage <= 300) {
                            this.latlong[this.index].url = "assets/marker/current/red_pointer.png";
                        }
                        else if (this.temp_roi_percentage >= 101 && this.temp_roi_percentage <= 200) {
                            this.latlong[this.index].url = "assets/marker/current/marron_pointer.png";
                        }
                        else {
                            this.latlong[this.index].url = "assets/marker/current/blue_pointer.png";
                        }
                    }
                    else {
                        if (this.temp_roi_percentage >= 500) {
                            this.latlong[i].url = "assets/marker/plain/green.png";
                        }
                        else if (this.temp_roi_percentage >= 401 && this.temp_roi_percentage <= 500) {
                            this.latlong[i].url = "assets/marker/plain/yellow.png";
                        }
                        else if (this.temp_roi_percentage >= 301 && this.temp_roi_percentage <= 400) {
                            this.latlong[i].url = "assets/marker/plain/orange.png";
                        }
                        else if (this.temp_roi_percentage >= 201 && this.temp_roi_percentage <= 300) {
                            this.latlong[i].url = "assets/marker/plain/red.png";
                        }
                        else if (this.temp_roi_percentage >= 101 && this.temp_roi_percentage <= 200) {
                            this.latlong[i].url = "assets/marker/plain/marron.png";
                        }
                        else {
                            this.latlong[i].url = "assets/marker/plain/blue.png";
                        }
                    }
                }
            }
        }
        this.calculateows();
        //this.getTooltip();
    };
    // Setting Markers based Production Selected
    AppComponent.prototype.onProductionClick = function (type) {
        this.oil_price = 0;
        this.gas_price = 0;
        this.previous = -1;
        this.current = -1;
        this.index = -1;
        this.type = type;
        this.clicked = 1;
        if (this.visit === 1) {
            for (var i = 0; i < this.latlong.length; i++) {
                this.latlong[i].roi_percentage = null;
            }
            for (var i = 0; i < this.markerarray.length; i++) {
                this.infoWindowOpened = this.markerarray[i];
                this.infoWindowOpened.close();
            }
            this.markerarray = [];
            this.infoWindowOpened = null;
        }
        this.visit = -1;
        this.store_display(this.current);
        this.calculateROIPercentage(type);
    };
    // Calculate
    AppComponent.prototype.calculateROIPercentage = function (type) {
        var _this = this;
        var temp = [];
        if (type === 'first12') {
            temp = [];
            this.map_title = "First 12 Months Production Map";
            this.latlong.forEach(function (element) {
                temp.push(_this.calculateROI(element.firsttwelveoil, element.firsttwelvegas));
            });
        }
        else if (type === 'first24') {
            temp = [];
            this.map_title = "First 24 Months Production Map";
            this.latlong.forEach(function (element) {
                temp.push(_this.calculateROI(element.firsttwentyfouroil, element.firsttwentyfourgas));
            });
        }
        else if (type === 'first60') {
            temp = [];
            this.map_title = "First 60 Months Production Map";
            this.latlong.forEach(function (element) {
                temp.push(_this.calculateROI(element.firstsixtyoil, element.firstsixtygas));
            });
        }
        else if (type === 'last12') {
            temp = [];
            this.map_title = "Last 12 Months Production Map";
            this.latlong.forEach(function (element) {
                temp.push(_this.calculateROI(element.lasttwelveoil, element.lasttwelvegas));
            });
        }
        if (temp.length > 0) {
            for (var i = 0; i < temp.length - 1; i++) {
                if (temp[i] >= 500) {
                    this.latlong[i].url = "assets/marker/plain/green.png";
                }
                else if (temp[i] >= 401 && temp[i] <= 500) {
                    this.latlong[i].url = "assets/marker/plain/yellow.png";
                }
                else if (temp[i] >= 301 && temp[i] <= 400) {
                    this.latlong[i].url = "assets/marker/plain/orange.png";
                }
                else if (temp[i] >= 201 && temp[i] <= 300) {
                    this.latlong[i].url = "assets/marker/plain/red.png";
                }
                else if (temp[i] >= 101 && temp[i] <= 200) {
                    this.latlong[i].url = "assets/marker/plain/marron.png";
                }
                else {
                    this.latlong[i].url = "assets/marker/plain/blue.png";
                }
            }
            this.temp_roi = temp;
        }
    };
    // Setting the lower Slider Div value to selected marker ENCF
    AppComponent.prototype.getTooltip = function () {
        document.getElementById("tooltipText").style.display = 'inline-block';
        if (this.green_count - 1 != -1) {
            this.tooltip = this.latlong[this.green_count - 1].grosscashflow;
            this.slider_percentage = Math.floor((this.green_count / this.well_count) * 100) - 6 + "%";
        }
        else {
            this.tooltip = "0";
            this.slider_percentage = "0%";
        }
    };
    // Dynamically Calculating the Payout Value and setting the text color to Green or Red
    AppComponent.prototype.calculatepayout = function () {
        this.potential_profit_loss = this.estimated_gross_cash_flow - this.partnership_raise;
        if (this.potential_profit_loss < 0) {
            this.color = 'red';
            if (isNaN(this.potential_profit_loss)) {
                this.potential_profit_loss = 0;
            }
            else {
                this.potential_profit_loss = Math.abs(this.potential_profit_loss);
            }
        }
        else {
            this.color = 'green';
        }
        //this.roi_percentage = (Math.floor((this.estimated_gross_cash_flow * 100) / this.partnership_raise)).toString() + "%";
        this.roi_percentage = (Math.floor((this.estimated_gross_cash_flow * 100) / this.partnership_raise));
        this.latlong[this.current].roi_percentage = this.temp_roi[this.current] >= 0 ? this.temp_roi[this.current] : this.roi_percentage;
        this.roifirsttwelve = this.calculateROI(this.firsttwelveoil, this.firsttwelvegas) + "%";
        this.roifirsttwentyfour = this.calculateROI(this.firsttwentyfouroil, this.firsttwentyfourgas) + "%";
        this.roifirstsixty = this.calculateROI(this.firstsixtyoil, this.firstsixtygas) + "%";
        this.roilasttwelve = this.calculateROI(this.lasttwelveoil, this.lasttwelvegas) + "%";
    };
    // Calculate Table ROI Value
    AppComponent.prototype.calculateROI = function (oil, gas) {
        var temp1, temp2, tempflow;
        temp1 = (this.oil_price * oil);
        temp1 = temp1 - (this.tax * temp1); //848726.1
        temp2 = (this.gas_price * gas);
        temp2 = temp2 - (this.tax_gas * temp2); //0
        temp1 = temp1 + temp2; //848726.1
        temp1 = temp1 - ((this.production_expenses / 100) * (temp1)); //848726.1
        tempflow = (this.partnership_term / 100) * temp1; //477408.43
        return (Math.floor((tempflow * 100) / this.partnership_raise));
    };
    // Dynamically changing and calculating OWS Score
    AppComponent.prototype.calculateows = function () {
        this.ows_score = 0;
        this.green_count = 0;
        this.yellow_count = 0;
        for (var i = 0; i < this.length; i++) {
            if (this.latlong[i].grosscashflow >= this.partnership_raise) {
                this.green_count = this.green_count + 1;
            }
            else {
                this.yellow_count = this.yellow_count + 1;
            }
            // Addition of ENCF
            this.ows_score = this.ows_score + this.latlong[i].grosscashflow;
        }
        // Calculating the Average and OWS Score
        this.ows_score = Math.round((this.ows_score * 100) / (this.well_count * this.partnership_raise));
    };
    // Getting Latitude and Longitude Value of the clicked marker
    AppComponent.prototype.onMarkerClickLocation = function (pos, infoRef) {
        var tempmarkerarray = [];
        tempmarkerarray = this.markerarray;
        // Removing the repeated markers from the array
        for (var i = 0; i < this.markerarray.length; i++) {
            if (tempmarkerarray[i]._id === infoRef._id) {
                this.markerarray.splice(i, 1);
            }
        }
        this.markerarray.push(infoRef);
        if (this.visit !== 1 && this.type !== null) {
            this.calculateROIPercentage(this.type);
        }
        this.visit = 1;
        if (this.previous != -1) {
            this.previous = this.current;
        }
        if (pos != this.length) {
            // Setting the clicked marker to Pink Blur and Previous marker to Green Pink or Grey Pink
            this.current = pos;
            // Creating the trail of Wells
            if (pos != this.previous) {
                this.calculatepayout();
                // Setting the current well to Pin Blur
                if (this.latlong[pos].url == "assets/marker/plain/green.png" || this.latlong[pos].url == "assets/marker/previous/green_border.png" || this.latlong[pos].url == "assets/marker/current/green_pointer.png") {
                    this.latlong[pos].url = "assets/marker/current/green_pointer.png";
                }
                else if (this.latlong[pos].url == "assets/marker/plain/yellow.png" || this.latlong[pos].url == "assets/marker/previous/yellow_border.png" || this.latlong[pos].url == "assets/marker/current/yellow_pointer.png") {
                    this.latlong[pos].url = "assets/marker/current/yellow_pointer.png";
                }
                else if (this.latlong[pos].url == "assets/marker/plain/orange.png" || this.latlong[pos].url == "assets/marker/previous/orange_border.png" || this.latlong[pos].url == "assets/marker/current/orange_pointer.png") {
                    this.latlong[pos].url = "assets/marker/current/orange_pointer.png";
                }
                else if (this.latlong[pos].url == "assets/marker/plain/red.png" || this.latlong[pos].url == "assets/marker/previous/red_border.png" || this.latlong[pos].url == "assets/marker/current/red_pointer.png") {
                    this.latlong[pos].url = "assets/marker/current/red_pointer.png";
                }
                else if (this.latlong[pos].url == "assets/marker/plain/marron.png" || this.latlong[pos].url == "assets/marker/previous/marron_border.png" || this.latlong[pos].url == "assets/marker/current/marron_pointer.png") {
                    this.latlong[pos].url = "assets/marker/current/marron_pointer.png";
                }
                else if (this.latlong[pos].url == "assets/marker/plain/blue.png" || this.latlong[pos].url == "assets/marker/previous/blue_border.png" || this.latlong[pos].url == "assets/marker/current/blue_pointer.png") {
                    this.latlong[pos].url = "assets/marker/current/blue_pointer.png";
                }
                if (this.previous != -1) {
                    if (this.temp_roi.length > 0) {
                        if (this.temp_estimated_gross_cash_flow[this.previous] >= this.partnership_raise) {
                            //this.latlong[this.previous].url = "assets/green_yellow.png";
                            if (this.temp_roi[this.previous] >= 500) {
                                this.latlong[this.previous].url = "assets/marker/previous/green_border.png";
                            }
                            else if (this.temp_roi[this.previous] >= 401 && this.temp_roi[this.previous] <= 500) {
                                this.latlong[this.previous].url = "assets/marker/previous/yellow_border.png";
                            }
                            else if (this.temp_roi[this.previous] >= 301 && this.temp_roi[this.previous] <= 400) {
                                this.latlong[this.previous].url = "assets/marker/previous/orange_border.png";
                            }
                            else if (this.temp_roi[this.previous] >= 201 && this.temp_roi[this.previous] <= 300) {
                                this.latlong[this.previous].url = "assets/marker/previous/red_border.png";
                            }
                            else if (this.temp_roi[this.previous] >= 101 && this.temp_roi[this.previous] <= 200) {
                                this.latlong[this.previous].url = "assets/marker/previous/marron_border.png";
                            }
                            else {
                                this.latlong[this.previous].url = "assets/marker/previous/blue_border.png";
                            }
                        }
                        else {
                            //this.latlong[this.previous].url = "assets/grey_yellow.png";
                            if (this.temp_roi[this.previous] >= 500) {
                                this.latlong[this.previous].url = "assets/marker/previous/green_border.png";
                            }
                            else if (this.temp_roi[this.previous] >= 401 && this.temp_roi[this.previous] <= 500) {
                                this.latlong[this.previous].url = "assets/marker/previous/yellow_border.png";
                            }
                            else if (this.temp_roi[this.previous] >= 301 && this.temp_roi[this.previous] <= 400) {
                                this.latlong[this.previous].url = "assets/marker/previous/orange_border.png";
                            }
                            else if (this.temp_roi[this.previous] >= 201 && this.temp_roi[this.previous] <= 300) {
                                this.latlong[this.previous].url = "assets/marker/previous/red_border.png";
                            }
                            else if (this.temp_roi[this.previous] >= 101 && this.temp_roi[this.previous] <= 200) {
                                this.latlong[this.previous].url = "assets/marker/previous/marron_border.png";
                            }
                            else {
                                this.latlong[this.previous].url = "assets/marker/previous/blue_border.png";
                            }
                        }
                    }
                    else {
                        if (this.temp_estimated_gross_cash_flow[this.previous] >= this.partnership_raise) {
                            //this.latlong[this.previous].url = "assets/green_yellow.png";
                            if (this.roi_percentage >= 500) {
                                this.latlong[this.previous].url = "assets/marker/previous/green_border.png";
                            }
                            else if (this.roi_percentage >= 401 && this.roi_percentage <= 500) {
                                this.latlong[this.previous].url = "assets/marker/previous/yellow_border.png";
                            }
                            else if (this.roi_percentage >= 301 && this.roi_percentage <= 400) {
                                this.latlong[this.previous].url = "assets/marker/previous/orange_border.png";
                            }
                            else if (this.roi_percentage >= 201 && this.roi_percentage <= 300) {
                                this.latlong[this.previous].url = "assets/marker/previous/red_border.png";
                            }
                            else if (this.roi_percentage >= 101 && this.roi_percentage <= 200) {
                                this.latlong[this.previous].url = "assets/marker/previous/marron_border.png";
                            }
                            else {
                                this.latlong[this.previous].url = "assets/marker/previous/blue_border.png";
                            }
                        }
                        else {
                            //this.latlong[this.previous].url = "assets/grey_yellow.png";
                            if (this.roi_percentage >= 500) {
                                this.latlong[this.previous].url = "assets/marker/previous/green_border.png";
                            }
                            else if (this.roi_percentage >= 401 && this.roi_percentage <= 500) {
                                this.latlong[this.previous].url = "assets/marker/previous/yellow_border.png";
                            }
                            else if (this.roi_percentage >= 301 && this.roi_percentage <= 400) {
                                this.latlong[this.previous].url = "assets/marker/previous/orange_border.png";
                            }
                            else if (this.roi_percentage >= 201 && this.roi_percentage <= 300) {
                                this.latlong[this.previous].url = "assets/marker/previous/red_border.png";
                            }
                            else if (this.roi_percentage >= 101 && this.roi_percentage <= 200) {
                                this.latlong[this.previous].url = "assets/marker/previous/marron_border.png";
                            }
                            else {
                                this.latlong[this.previous].url = "assets/marker/previous/blue_border.png";
                            }
                        }
                    }
                }
                else {
                    this.previous = pos;
                }
            }
            this.index = pos;
            this.store_display(this.current);
        }
    };
    // Setting & Getting Slider value 
    AppComponent.prototype.myOnFinish = function (event) {
        /*
            if (event.from - 1 == -1) {
              this.oil_price = 0;
              this.gas_price = 0;
            }
        
            else {
              if (this.oil_price == 0 && this.gas_price == 0) {
                this.oil_price = 60;
                this.gas_price = 3;
              }
            }
        
            if (event.from - 1 != -1) {
              this.calculate();
              this.calculateows();
              this.calculatepayout();
              this.green_count = event.from;
              this.getTooltip();
              this.visit = 1;
              this.store_display(event.from - 1);
        
              this.getMarker(event.from - 1);
            }
        
            else {
              this.calculate();
              this.calculateows();
              this.color = 'red';
              this.potential_profit_loss = 0;
              this.roi_percentage = 0;
              this.green_count = 0;
              this.getTooltip();
            }
        */
    };
    // Get the Selected Slider Marker
    AppComponent.prototype.getMarker = function (position) {
        if (this.index != -1) {
            if (this.latlong[this.index].grosscashflow >= this.partnership_raise) {
                //this.latlong[this.index].url = "assets/green.png";
                if (this.temp_roi_percentage >= 500) {
                    this.latlong[this.index].url = "assets/marker/plain/green.png";
                }
                else if (this.temp_roi_percentage >= 401 && this.temp_roi_percentage <= 500) {
                    this.latlong[this.index].url = "assets/marker/plain/yellow.png";
                }
                else if (this.temp_roi_percentage >= 301 && this.temp_roi_percentage <= 400) {
                    this.latlong[this.index].url = "assets/marker/plain/orange.png";
                }
                else if (this.temp_roi_percentage >= 201 && this.temp_roi_percentage <= 300) {
                    this.latlong[this.index].url = "assets/marker/plain/red.png";
                }
                else if (this.temp_roi_percentage >= 101 && this.temp_roi_percentage <= 200) {
                    this.latlong[this.index].url = "assets/marker/plain/marron.png";
                }
                else {
                    this.latlong[this.index].url = "assets/marker/plain/blue.png";
                }
            }
            else {
                //this.latlong[this.index].url = "assets/grey.png";
                if (this.temp_roi_percentage >= 500) {
                    this.latlong[this.index].url = "assets/marker/plain/green.png";
                }
                else if (this.temp_roi_percentage >= 401 && this.temp_roi_percentage <= 500) {
                    this.latlong[this.index].url = "assets/marker/plain/yellow.png";
                }
                else if (this.temp_roi_percentage >= 301 && this.temp_roi_percentage <= 400) {
                    this.latlong[this.index].url = "assets/marker/plain/orange.png";
                }
                else if (this.temp_roi_percentage >= 201 && this.temp_roi_percentage <= 300) {
                    this.latlong[this.index].url = "assets/marker/plain/red.png";
                }
                else if (this.temp_roi_percentage >= 101 && this.temp_roi_percentage <= 200) {
                    this.latlong[this.index].url = "assets/marker/plain/marron.png";
                }
                else {
                    this.latlong[this.index].url = "assets/marker/plain/blue.png";
                }
            }
        }
        if (position != -1) {
            if (this.latlong[position].grosscashflow >= this.partnership_raise) {
                //this.latlong[position].url = "assets/green_blur.png";
                if (this.temp_roi_percentage >= 500) {
                    this.latlong[this.index].url = "assets/marker/current/green_pointer.png";
                }
                else if (this.temp_roi_percentage >= 401 && this.temp_roi_percentage <= 500) {
                    this.latlong[this.index].url = "assets/marker/current/yellow_pointer.png";
                }
                else if (this.temp_roi_percentage >= 301 && this.temp_roi_percentage <= 400) {
                    this.latlong[this.index].url = "assets/marker/current/orange_pointer.png";
                }
                else if (this.temp_roi_percentage >= 201 && this.temp_roi_percentage <= 300) {
                    this.latlong[this.index].url = "assets/marker/current/red_pointer.png";
                }
                else if (this.temp_roi_percentage >= 101 && this.temp_roi_percentage <= 200) {
                    this.latlong[this.index].url = "assets/marker/current/marron_pointer.png";
                }
                else {
                    this.latlong[this.index].url = "assets/marker/current/blue_pointer.png";
                }
            }
            else {
                //this.latlong[position].url = "assets/grey_blur.png";
                if (this.temp_roi_percentage >= 500) {
                    this.latlong[this.index].url = "assets/marker/current/green_pointer.png";
                }
                else if (this.temp_roi_percentage >= 401 && this.temp_roi_percentage <= 500) {
                    this.latlong[this.index].url = "assets/marker/current/yellow_pointer.png";
                }
                else if (this.temp_roi_percentage >= 301 && this.temp_roi_percentage <= 400) {
                    this.latlong[this.index].url = "assets/marker/current/orange_pointer.png";
                }
                else if (this.temp_roi_percentage >= 201 && this.temp_roi_percentage <= 300) {
                    this.latlong[this.index].url = "assets/marker/current/red_pointer.png";
                }
                else if (this.temp_roi_percentage >= 101 && this.temp_roi_percentage <= 200) {
                    this.latlong[this.index].url = "assets/marker/current/marron_pointer.png";
                }
                else {
                    this.latlong[this.index].url = "assets/marker/current/blue_pointer.png";
                }
            }
            this.previous = this.index;
            this.index = position;
            this.current = position;
        }
    };
    // Displaying the details of the selected marker 
    AppComponent.prototype.store_display = function (position) {
        if (position != -1) {
            this.api_uwi = this.latlong[position].apiuwi;
            this.operator_name = this.latlong[position].operatorname;
            this.lease_name = this.latlong[position].leasename;
            this.county = this.latlong[position].county;
            this.reservior = this.latlong[position].reservior;
            this.production_status = this.latlong[position].productionstatus;
            this.drill_type = this.latlong[position].drilltype;
            this.first_prod_date = this.latlong[position].firstproddate;
            this.last_prod_date = this.latlong[position].lastproddate;
            this.cum_gas = this.latlong[position].cumgas;
            this.cum_oil = this.latlong[position].cumoil;
            this.measured_depth = this.latlong[position].measureddepth;
            this.state = this.latlong[position].state;
            this.lat = this.latlong[position].latitude;
            this.long = this.latlong[position].longitude;
            this.estimated_gross_cash_flow = this.latlong[position].grosscashflow;
            // Table ROI Calculation
            this.firstsixtygas = this.latlong[position].firstsixtygas;
            this.firstsixtyoil = this.latlong[position].firstsixtyoil;
            this.firsttwelvegas = this.latlong[position].firsttwelvegas;
            this.firsttwelveoil = this.latlong[position].firsttwelveoil;
            this.firsttwentyfourgas = this.latlong[position].firsttwentyfourgas;
            this.firsttwentyfouroil = this.latlong[position].firsttwentyfouroil;
            this.lasttwelvegas = this.latlong[position].lasttwelvegas;
            this.lasttwelveoil = this.latlong[position].lasttwelveoil;
            //console.log(this.latlong[position]);
            this.calculatepayout();
            if (this.estimated_gross_cash_flow >= this.partnership_raise) {
                this.textcolor = 'green';
            }
            else {
                this.textcolor = 'red';
            }
        }
        else {
            this.api_uwi = null;
            this.operator_name = "";
            this.lease_name = "";
            this.county = "";
            this.reservior = "";
            this.production_status = "";
            this.drill_type = "";
            this.first_prod_date = "";
            this.last_prod_date = "";
            this.cum_gas = null;
            this.cum_oil = null;
            this.measured_depth = "";
            this.state = "";
            this.lat = null;
            this.long = null;
            this.estimated_gross_cash_flow = 0;
            this.potential_profit_loss = 0;
            this.firstsixtygas = "";
            this.firstsixtyoil = "";
            this.firsttwelvegas = "";
            this.firsttwelveoil = "";
            this.firsttwentyfourgas = "";
            this.firsttwentyfouroil = "";
            this.lasttwelvegas = "";
            this.lasttwelveoil = "";
            this.textcolor = 'red';
        }
    };
    // Setting the Lower Slider Div invisible 
    AppComponent.prototype.myOnChange = function () {
        document.getElementById("tooltipText").style.display = 'none';
    };
    // Reload Page
    AppComponent.prototype.onReload = function () {
        window.location.reload();
    };
    // Calculate Hypothetical Price, Production, and Cash Flow Scenarios
    AppComponent.prototype.hypothetical = function () {
        var temp1 = 0, temp2 = 0;
        // Unit Equivalent Model Calculation
        this.unit_equivalent_model = (this.Hypothetical_investment_model / this.unit_price) * 10;
        this.findFraction(this.unit_equivalent_model);
        // NRI Percentage Calculation
        this.Net_Revenue_model = this.c * this.unit_equivalent_model;
        this.Net_Revenue_model = parseFloat(this.Net_Revenue_model.toPrecision(4));
        // Estimated Monthly Income Calculation
        temp1 = this.Estimated_oil_model * 30 * this.Estimated_oil_price_model;
        temp1 = temp1 - (this.tax * temp1);
        temp2 = this.Estimated_gas_model * 30 * this.Estimated_gas_price_model;
        temp2 = (temp2 - (this.tax_gas * temp2)) * this.Net_Revenue_model;
        temp1 = temp1 + temp2;
        temp1 = temp1 - ((this.Operating_Expenses_Ratio / 100) * temp1);
        this.Potential_Monthly_model = temp1 * this.Net_Revenue_model;
        this.Potential_Monthly_model = parseFloat(this.Potential_Monthly_model.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]);
        temp1 = this.Estimated_Oil_ultimate_recovery_model * this.Estimated_oil_price_model;
        temp1 = temp1 - (this.tax * temp1);
        temp2 = this.Estimated_Gas_ultimate_recovery_model * this.Estimated_gas_price_model;
        temp2 = temp2 - (this.tax_gas * temp2);
        temp1 = (temp1 + temp2) * this.Net_Revenue_model;
        this.Total_Potential_model = temp1 - ((this.Operating_Expenses_Ratio / 100) * temp1);
        // Months to Payout Calculation
        this.Months_to_model = this.Hypothetical_investment_model / this.Potential_Monthly_model;
        // Estimated Months of Cash Flow
        this.Months_to_cash_flow = this.Total_Potential_model / this.Potential_Monthly_model;
        this.roi_percent = (Math.floor((this.Total_Potential_model * 100) / this.Hypothetical_investment_model)).toString() + "%";
    };
    // Converting the Decimal to Fraction Part
    AppComponent.prototype.findFraction = function (value) {
        var numerator = value.toFixed(2).toString();
        var extra = numerator.split('.');
        if (100 % extra["1"] == 0) {
            extra["0"] = 100 / extra["1"];
            extra["1"] = extra["1"] / extra["1"];
        }
        else {
            var temp = extra["1"];
            if (temp % (Math.floor(temp / 2)) == 0 && 100 % (Math.floor(temp / 2)) == 0) {
                extra["1"] = temp / Math.floor(temp / 2);
                extra["0"] = 100 / Math.floor(temp / 2);
            }
            else if (temp % 20 == 0 && 100 % 20 == 0) {
                extra["1"] = temp / 20;
                extra["0"] = 100 / 20;
            }
            else if (temp % 10 == 0 && 100 % 10 == 0) {
                extra["1"] = temp / 10;
                extra["0"] = 100 / 10;
            }
            else if (temp % 5 == 0 && 100 % 5 == 0) {
                extra["1"] = temp / 5;
                extra["0"] = 100 / 5;
            }
            else if (temp % 4 == 0 && 100 % 4 == 0) {
                extra["1"] = temp / 4;
                extra["0"] = 100 / 4;
            }
            else if (temp % 2 == 0 && 100 % 2 == 0) {
                extra["1"] = temp / 2;
                extra["0"] = 100 / 2;
            }
            else {
                extra["1"] = extra["1"];
                extra["0"] = 100;
            }
        }
        if (extra["1"] != 0 && (!isNaN(extra["1"]) || isFinite(extra["0"]))) {
            if (Math.floor(value) != 0) {
                if ((extra["1"] && extra["0"]) == 1) {
                    this.unit = Math.floor(value) + extra["1"];
                }
                else {
                    this.unit = Math.floor(value) + " " + extra["1"] + "/" + extra["0"];
                }
            }
            else {
                this.unit = extra["1"] + "/" + extra["0"];
            }
        }
        else {
            this.unit = Math.floor(this.unit_equivalent_model).toString();
        }
    };
    // Initialize the data[]
    AppComponent.prototype.intializeData = function () {
        this.data[0] = [{
                "range_start": 191650,
                "range_end": 416700,
                "percent_on_excess_k1": 33.0,
                "percent_on_excess": 33.0,
                "tax_rate_pay_tax_k1": 46643.75,
                "tax_rate_pay_tax": 46643.75
            },
            {
                "range_start": 416700,
                "range_end": 418400,
                "percent_on_excess_k1": 35.0,
                "percent_on_excess": 35.0,
                "tax_rate_pay_tax_k1": 120910.25,
                "tax_rate_pay_tax": 120910.25
            },
            {
                "range_start": 418400,
                "range_end": "Infinity",
                "percent_on_excess_k1": 39.6,
                "percent_on_excess": 39.6,
                "tax_rate_pay_tax_k1": 121505.25,
                "tax_rate_pay_tax": 121505.25
            }
        ];
        this.data[1] = [{
                "range_start": 153100,
                "range_end": 233350,
                "percent_on_excess_k1": 28,
                "percent_on_excess": 28,
                "tax_rate_pay_tax_k1": 29752.5,
                "tax_rate_pay_tax": 29752.5
            },
            {
                "range_start": 233350,
                "range_end": 416700,
                "percent_on_excess_k1": 33,
                "percent_on_excess": 33,
                "tax_rate_pay_tax_k1": 52222.5,
                "tax_rate_pay_tax": 52222.5
            },
            {
                "range_start": 416700,
                "range_end": 470700,
                "percent_on_excess_k1": 35,
                "percent_on_excess": 35,
                "tax_rate_pay_tax_k1": 112728,
                "tax_rate_pay_tax": 112728
            },
            {
                "range_start": 470700,
                "range_end": "Infinity",
                "percent_on_excess_k1": 39.6,
                "percent_on_excess": 39.6,
                "tax_rate_pay_tax_k1": 131628,
                "tax_rate_pay_tax": 131628
            }
        ];
        this.data[2] = [{
                "range_start": 116675,
                "range_end": 208350,
                "percent_on_excess_k1": 33,
                "percent_on_excess": 28,
                "tax_rate_pay_tax_k1": 26111.25,
                "tax_rate_pay_tax": 26111.25
            },
            {
                "range_start": 208350,
                "range_end": 235350,
                "percent_on_excess_k1": 35,
                "percent_on_excess": 33,
                "tax_rate_pay_tax_k1": 56364,
                "tax_rate_pay_tax": 56364
            },
            {
                "range_start": 235350,
                "range_end": "Infinity",
                "percent_on_excess_k1": 39.6,
                "percent_on_excess": 35,
                "tax_rate_pay_tax_k1": 65814,
                "tax_rate_pay_tax": 65814
            }
        ];
        this.data[3] = [{
                "range_start": 212500,
                "range_end": 416700,
                "percent_on_excess_k1": 33,
                "percent_on_excess": 28,
                "tax_rate_pay_tax_k1": 49816,
                "tax_rate_pay_tax": 26111.25
            },
            {
                "range_start": 416700,
                "range_end": 444550,
                "percent_on_excess_k1": 35,
                "percent_on_excess": 33,
                "tax_rate_pay_tax_k1": 117202.5,
                "tax_rate_pay_tax": 117202.5
            },
            {
                "range_start": 444550,
                "range_end": "Infinity",
                "percent_on_excess_k1": 39.6,
                "percent_on_excess": 35,
                "tax_rate_pay_tax_k1": 126950,
                "tax_rate_pay_tax": 126950
            }
        ];
    };
    // Get the selected value from the dropdown list
    AppComponent.prototype.getSelected = function (selectedValue) {
        this.Filing_Status = parseInt(selectedValue);
    };
    // Calculate the K1 with and without K1 value 
    AppComponent.prototype.compare_k1 = function () {
        this.Deduction_K1 = this.Investment_Amount_K1_model * 0.75;
        this.Adjusted_Taxable_Income = this.Estimated_Taxable_Income_model;
        this.Adjusted_Taxable_Income_K1 = this.Estimated_Taxable_Income_model - this.Deduction_K1;
        for (var i = 0; i < this.data[this.Filing_Status].length; i++) {
            if (this.data[this.Filing_Status][i].range_start <= this.Adjusted_Taxable_Income && this.Adjusted_Taxable_Income <= this.data[this.Filing_Status][i].range_end) {
                this.panel_visit = 1;
                this.Tax_Bracket = this.data[this.Filing_Status][i].percent_on_excess / 100;
                this.Tax_Bracket_K1 = this.data[this.Filing_Status][i].percent_on_excess_k1 / 100;
                this.Tax_Rate_Pay_Tax = this.data[this.Filing_Status][i].tax_rate_pay_tax;
                this.Tax_Rate_Pay_Tax_K1 = this.data[this.Filing_Status][i].tax_rate_pay_tax_k1;
                this.Range_Start = this.data[this.Filing_Status][i].range_start;
                break;
            }
        }
        this.Excess_Income = this.Adjusted_Taxable_Income - this.Range_Start;
        this.Tax_On_Excess = this.Excess_Income * (this.Tax_Bracket);
        this.Estimated_Tax_Due = this.Tax_On_Excess + this.Tax_Rate_Pay_Tax;
        this.Adjusted_Net_Income = this.Adjusted_Taxable_Income - this.Estimated_Tax_Due;
        this.Tax_Liability = this.Estimated_Tax_Due;
    };
    // Calculate the K1 with value
    AppComponent.prototype.compare_k2 = function () {
        if (this.panel_visit == 1) {
            this.Deduction_K1 = this.Investment_Amount_K1_model * (this.k1_deduction_percentage / 100);
            this.Adjusted_Taxable_Income_K1 = this.Estimated_Taxable_Income_model - this.Deduction_K1;
            for (var i = 0; i < this.data[this.Filing_Status].length; i++) {
                if (this.data[this.Filing_Status][i].range_start <= this.Adjusted_Taxable_Income_K1 && this.Adjusted_Taxable_Income_K1 <= this.data[this.Filing_Status][i].range_end) {
                    this.Tax_Bracket_K1 = this.data[this.Filing_Status][i].percent_on_excess_k1 / 100;
                    this.Tax_Rate_Pay_Tax_K1 = this.data[this.Filing_Status][i].tax_rate_pay_tax_k1;
                    this.Range_Start = this.data[this.Filing_Status][i].range_start;
                }
            }
            this.Excess_Income_K1 = this.Adjusted_Taxable_Income_K1 - this.Range_Start;
            this.Tax_On_Excess_K1 = this.Excess_Income_K1 * (this.Tax_Bracket_K1);
            this.Estimated_Tax_Due_K1 = this.Tax_On_Excess_K1 + this.Tax_Rate_Pay_Tax_K1;
            this.Adjusted_Net_Income_K1 = this.Adjusted_Taxable_Income_K1 - this.Estimated_Tax_Due_K1;
            this.Tax_Savings_K1 = this.Estimated_Tax_Due - this.Estimated_Tax_Due_K1;
            this.Tax_Liability_K1 = this.Estimated_Tax_Due_K1;
            this.Partnership_Investment = this.Investment_Amount_K1_model;
            this.Income_Difference = this.Adjusted_Net_Income - this.Adjusted_Net_Income_K1;
            this.Actual_Dollars_At_Risk = this.Investment_Amount_K1_model - this.Income_Difference;
        }
    };
    // Changing the Panel Icon
    AppComponent.prototype.onclicktoggle = function (idname) {
        var icon = "";
        if (idname === "accordion1") {
            icon = "icon1";
        }
        var cN = document.getElementById(icon).className;
        if (icon === "icon1") {
            if (cN === "glyphicon glyphicon-plus") {
                document.getElementById(icon).className = "glyphicon glyphicon-minus";
            }
            else {
                document.getElementById(icon).className = "glyphicon glyphicon-plus";
            }
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        providers: [__WEBPACK_IMPORTED_MODULE_1__well_application_service__["a" /* WellApplicationServices */]],
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__well_application_service__["a" /* WellApplicationServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__well_application_service__["a" /* WellApplicationServices */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ion_range_slider__ = __webpack_require__("../../../../ng2-ion-range-slider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ion_range_slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_ion_range_slider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_accordion__ = __webpack_require__("../../../../ng2-accordion/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_accordion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_accordion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__well_application_service__ = __webpack_require__("../../../../../src/app/well-application.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__price_service__ = __webpack_require__("../../../../../src/app/price.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_accordian_login_accordian_component__ = __webpack_require__("../../../../../src/app/login-accordian/login-accordian.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__project_description_accordian_project_description_accordian_component__ = __webpack_require__("../../../../../src/app/project-description-accordian/project-description-accordian.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__legal_doc_accordian_legal_doc_accordian_component__ = __webpack_require__("../../../../../src/app/legal-doc-accordian/legal-doc-accordian.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__hope_thetical_calculator_hope_thetical_calculator_component__ = __webpack_require__("../../../../../src/app/hope-thetical-calculator/hope-thetical-calculator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__tax_effect_tool_tax_effect_tool_component__ = __webpack_require__("../../../../../src/app/tax-effect-tool/tax-effect-tool.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__login_accordian_login_accordian_component__["a" /* LoginAccordianComponent */],
            __WEBPACK_IMPORTED_MODULE_14__project_description_accordian_project_description_accordian_component__["a" /* ProjectDescriptionAccordianComponent */],
            __WEBPACK_IMPORTED_MODULE_15__legal_doc_accordian_legal_doc_accordian_component__["a" /* LegalDocAccordianComponent */],
            __WEBPACK_IMPORTED_MODULE_13__login_accordian_login_accordian_component__["b" /* SafePipe */],
            __WEBPACK_IMPORTED_MODULE_16__hope_thetical_calculator_hope_thetical_calculator_component__["a" /* HopeTheticalCalculatorComponent */],
            __WEBPACK_IMPORTED_MODULE_17__tax_effect_tool_tax_effect_tool_component__["a" /* TaxEffectToolComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_ion_range_slider__["IonRangeSliderModule"],
            __WEBPACK_IMPORTED_MODULE_7_ng2_accordion__["AccordionModule"],
            __WEBPACK_IMPORTED_MODULE_18_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_10__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBhdhhvdxmrwApkcQ_OPHaBQz4i2-lGZPI'
            })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__well_application_service__["a" /* WellApplicationServices */],
            __WEBPACK_IMPORTED_MODULE_9__price_service__["a" /* PriceService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <hr>\r\n            <h5 style=\"font-weight:bold\">&copy; 2018 LC GoOpCo Manuel #1, LP </h5>\r\n            <h6 style=\"text-align:justify; padding-top:10px\">Copyright 2018 Corporation. All rights reserved. This website is for informational purposes only. ​Nothing herein\r\n                is intended to constitute an offer, or the solicitation of an offer, to buy or subscribe for any securities\r\n                to any person in any jurisdiction unless otherwise stated. Offers or solicitations which are made to buy\r\n                or sell any securities are only be made pursuant to the Disclosure Memorandum, which contains important information\r\n                about risks, fees, expenses, and details. Further, no offer is made in any jurisdiction where such securities\r\n                are not registered or appropriately exempted. Unless otherwise stated, any securities listed herein will\r\n                not be registered under the US Securities Act of 1933 as amended, or any other act, and only Accredited Investors\r\n                inside the United States as defined in 17 CFR 230.501(a) and persons residing abroad in jurisdictions where\r\n                securities registration exemptions apply may purchase them.</h6>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"assets/header.png\" style=\"position:fixed; z-index: 10;\" width=\"100%\" class=\"image-responsive\" />\r\n<br><br><br><br>\r\n<div class=\"container\">\r\n    <img src=\"assets/banner.png\" height=\"450px\" width=\"100%\" class=\"image-responsive\" />\r\n</div>\r\n\r\n<!--\r\n<app-login-accordian></app-login-accordian>\r\n<app-project-description-accordian></app-project-description-accordian>\r\n-->"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/hope-thetical-calculator/hope-thetical-calculator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\r\n    font-size: 16px;\r\n}\r\n\r\nhr {\r\n    border-top: 1px solid black;\r\n}\r\n\r\nsmall {\r\n    font-size: 9.5px;\r\n}\r\n\r\n.greenColor {\r\n    color: green;\r\n}\r\n\r\nagm-map {\r\n    height: 525px;\r\n}\r\n\r\n#Main-Div {\r\n    min-height: 750px;\r\n    padding-top: 20px;\r\n}\r\n\r\n.container {\r\n    padding-top: 20px;\r\n    font-family: 'sans-serif';\r\n}\r\n\r\n#tooltipDiv {\r\n    width: 20px;\r\n    text-align: left;\r\n}\r\n\r\n#tooltipText {\r\n    font-size: 14px;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    #tooltipText {\r\n        font-size: 10px;\r\n    }\r\n    #tooltipDiv {\r\n        padding-left: 20px;\r\n        width: 30px;\r\n    }\r\n    .row {\r\n        font-size: 12px;\r\n    }\r\n    .round.round-sm {\r\n        height: 60px;\r\n        width: 60px;\r\n        line-height: 60px;\r\n        border-radius: 30px;\r\n        font-size: 1.7em;\r\n        font-weight: bold;\r\n    }\r\n    \r\n    .round.holl {\r\n        display: inline-block;\r\n        height: 60px;\r\n        width: 60px;\r\n        line-height: 60px;\r\n        border-radius: 30px;\r\n        background-color: #FFF;\r\n        color: rgba(8, 173, 63, 0.75);\r\n        text-align: center;\r\n        box-shadow: 0px 0px 0px 5px rgba(8, 173, 63, 0.75);\r\n    }\r\n}\r\n\r\n.col-md-12 {\r\n    font-size: 16px;\r\n}\r\n\r\n.breaker {\r\n    margin-top: 10px;\r\n    height: 20px;\r\n    background-color: grey;\r\n    margin-bottom: 10px;\r\n}\r\n\r\ni:active:after {\r\n    content: attr(title);\r\n    padding: 5px 10px;\r\n    font-size: 13px;\r\n    line-height: 1.2em;\r\n    color: white;\r\n    width: 300px;\r\n    background: black;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    position: absolute;\r\n    z-index: 500;\r\n    word-spacing: -10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.tool:active:after {\r\n    content: 'Partnership Name: LC GoOpCo Manuel #1, LP \\ATotal Raise: $850,000 \\ATotal Net Revenue Interest (NRI): 56.25% \\AUnit Cost: $170,000 \\ANumber of Units: 5';\r\n    white-space: pre;\r\n    padding: 5px 10px;\r\n    font-size: 14px;\r\n    line-height: 1.2em;\r\n    color: white;\r\n    width: 300px;\r\n    background: black;\r\n    display: inline-block;\r\n    position: absolute;\r\n    z-index: 500;\r\n    word-spacing: 2px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.round.round-lg {\r\n    height: 80px;\r\n    width: 80px;\r\n    line-height: 80px;\r\n    border-radius: 40px;\r\n    font-size: 1.8em;\r\n    font-weight: bold;\r\n}\r\n\r\n.round.hollow {\r\n    display: inline-block;\r\n    height: 80px;\r\n    width: 80px;\r\n    line-height: 80px;\r\n    border-radius: 40px;\r\n    background-color: #FFF;\r\n    color: rgba(8, 173, 63, 0.75);\r\n    text-align: center;\r\n    box-shadow: 0px 0px 0px 5px rgba(8, 173, 63, 0.75);\r\n}\r\n\r\n#icon1 {\r\n    color: white;\r\n    background-color: black;\r\n    height: 36px;\r\n    width: 36px;\r\n    text-align: center;\r\n    padding: 5px\r\n}\r\n\r\n#icon2 {\r\n    color: white;\r\n    background-color: black;\r\n    height: 36px;\r\n    width: 36px;\r\n    text-align: center;\r\n    padding: 5px\r\n}\r\n\r\n.panel-heading {\r\n    padding: 0;\r\n    border-radius: 0;\r\n    color: #212121;\r\n    min-height: 48px;\r\n}\r\n\r\n.panel-title {\r\n    font-size: 22px;\r\n    font-weight: bold;\r\n    display: block;\r\n    padding: 10px;\r\n    text-decoration: none;\r\n}\r\n\r\naccordion-heading {\r\n    cursor: pointer;\r\n}\r\n\r\n.table>tbody>tr>td{\r\n    border-top: none;\r\n    text-align: center;\r\n}\r\n\r\n.table>tbody>tr>th{\r\n    border-top: none;\r\n}\r\n\r\n.gas-price {\r\n    position: relative;\r\n    height: 30px;\r\n    margin: 0px;\r\n    overflow: hidden;\r\n    width: 175px\r\n}\r\n\r\n.oil-price {\r\n    position: relative;\r\n    height: 30px;\r\n    margin: 0px;\r\n    overflow: hidden;\r\n    width: 175px\r\n}\r\n\r\n\r\n\r\n#arrow{\r\n    position:relative;\r\n    background:lightgrey;\r\n    text-align:center;\r\n}\r\n#arrow:after, #arrow:before{\r\n    content:\"\";\r\n    position:absolute;\r\n    width:20px;\r\n    height:50%;\r\n    left:100%;\r\n}\r\n#arrow:after{\r\n    bottom:0;\r\n    background: linear-gradient(to right bottom, lightgrey 50%, transparent 50%);\r\n}\r\n#arrow:before{\r\n      top:0;\r\n    background: linear-gradient(to right top, lightgrey 50%, transparent 50%);\r\n}\r\n\r\n.input-group-addon{\r\n    padding: 0px 1px 0px 2px;\r\n}\r\n\r\n.frame{\r\n    min-height:40px; \r\n    border:none; \r\n    margin-top: -10px; \r\n    margin-left: -32px; \r\n    margin-bottom: 10px\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hope-thetical-calculator/hope-thetical-calculator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <accordion>\r\n                <accordion-group isOpened=\"false\">\r\n                    <accordion-heading id=\"accordion2\" (click)=\"onclicktoggle('accordion2')\">\r\n                        <div class=\"panel-heading\">\r\n                            <h2 class=\"panel-title\">\r\n                                <span id=\"icon2\" class=\"glyphicon glyphicon-minus\"></span> Cash Flow Calculator\r\n                            </h2>\r\n                        </div>\r\n                    </accordion-heading>\r\n                    <div class=\"panel-body\">\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-9\">\r\n                                <h4>\r\n                                    Input values into this interactive calculator to create unique investment and cash flow scenarios.\r\n                                </h4>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <img src=\"assets/logo.png\" width=\"200px\" />\r\n                            </div>\r\n                        </div>\r\n\r\n                        <br>\r\n\r\n                        <div class=\"row\" *ngIf=\"!mobileView\">\r\n                            <div class=\"col-md-6\" style=\"margin-top: 70px; padding: 20px 0px 10px 25px; border: 1px solid black\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\" style=\"text-align:center; padding-bottom: 30px;\">\r\n                                        <h3>\r\n                                            <b>INVESTMENT AMOUNT AND TERMS</b>\r\n                                        </h3>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\" style=\"min-height:50px\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <b>Investment Amount:</b>\r\n                                        <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"input-group\">\r\n                                            <input type=\"number\" [(ngModel)]=\"Hypothetical_investment_model\" min=\"0\" (change)=\"hypothetical()\" min=\"0\" class=\"form-control\"\r\n                                            />\r\n                                            <span class=\"input-group-addon\" style=\"font-weight:bold\">&nbsp;$&nbsp;&nbsp;</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\" style=\"min-height:50px\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <b>Net Revenue Interest:</b>\r\n                                        <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"input-group\">\r\n                                            <input type=\"number\" [(ngModel)]=\"nri_percentage\" min=\"0\" (change)=\"hypothetical()\" min=\"0\" class=\"form-control\" />\r\n                                            <span class=\"input-group-addon\" style=\"font-weight:bold\">%&nbsp;</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\" style=\"min-height:50px\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <b>Production Expenses Ratio:</b>\r\n                                        <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"input-group\">\r\n                                            <input type=\"number\" min=\"0\" max=\"100\" [(ngModel)]=\"Operating_Expenses_Ratio\" (change)=\"hypothetical()\" class=\"form-control\"\r\n                                            />\r\n                                            <span class=\"input-group-addon\" style=\"font-weight:bold; font-size: 16px\">%&nbsp;</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\" style=\"min-height:50px\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <b>State O&G Production Taxes:</b>\r\n                                        <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <select class=\"form-control\" name=\"taxValue\" (change)=\"onChange($event.target.value)\">\r\n                                            <option *ngFor=\"let item of options\" [value]=\"item.taxValue\">\r\n                                                {{ item.stateName }}\r\n                                            </option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\" style=\"min-height:60px\">\r\n                                    <div class=\"col-md-6\"></div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-6\">\r\n                                                <b>Oil Tax</b>\r\n                                            </div>\r\n                                            <div class=\"col-md-6\">\r\n                                                {{ tempOil/100 | percent }}\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-6\">\r\n                                                <b>Gas Tax</b>\r\n                                            </div>\r\n                                            <div class=\"col-md-6\">\r\n                                                {{ tempGas/100 | percent }}\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-1\"></div>\r\n                                            <div id=\"arrow\" class=\"col-md-5\" style=\"text-align: center\">\r\n                                                Estimated Monthly Income\r\n                                                <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n                                                <br>\r\n                                                <span style=\"font-weight: bold\">{{ Potential_Monthly_model | currency:'USD' : true : '1.2-2' }}</span>\r\n                                            </div>\r\n                                            <div class=\"col-md-6\" style=\"text-align: center\">\r\n                                                Estimated Total Net Cash Flow\r\n                                                <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n                                                <br>\r\n                                                <span style=\"color: green; font-weight: bold\">{{ Total_Potential_model | currency:'USD' : true : '1.2-2' }}</span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <br>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-10\">\r\n                                        <canvas baseChart id=\"myChart2\" [options]=\"barChartOptions\" [colors]=\"lineChartColors\" [datasets]=\"lineData1\" [labels]=\"lineChartLabels1\"\r\n                                            [chartType]=\"'line'\" height=\"280px\"></canvas>\r\n                                        <i style=\"float:right; margin-top: -50px\" class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n\r\n                                    </div>\r\n                                    <div class=\"col-md-2\" style=\"margin-top: 90px;\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-12\">\r\n                                                <div class=\"round round-lg hollow \">{{ roi_percent ? roi_percent : \"0%\" }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <br>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-8\">\r\n                                                <h2 style=\"text-align: center; font-weight:bold; color: rgba(8, 173, 63, 0.75)\">ROI</h2>\r\n                                            </div>\r\n                                            <div class=\"col-md-1\" style=\"padding-top: 30px\">\r\n                                                <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- \r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-10\">\r\n                                        <canvas baseChart id=\"myChart1\" [options]=\"barChartOptions\" [colors]=\"lineChartColors\" [datasets]=\"lineData\" [labels]=\"lineChartLabels\"\r\n                                            [chartType]=\"'line'\" height=\"275px\"></canvas>\r\n                                    </div>\r\n                                    <div class=\"col-md-2\" style=\"margin-left: -15px; margin-top: 75px;\">\r\n                                        <div class=\"round round-lg hollow \">{{ roi_percent ? roi_percent : \"0%\" }}</div>\r\n                                        <br>\r\n                                        <h2 style=\"padding-left:15px; text-align: center; font-weight:bold; color: rgba(8, 173, 63, 0.75)\">ROI</h2>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"col-md-10\">\r\n                                    <canvas baseChart id=\"myChart2\" [options]=\"barChartOptions\" [colors]=\"lineChartColors\" [datasets]=\"lineData1\" [labels]=\"lineChartLabels1\"\r\n                                        [chartType]=\"'line'\" height=\"275px\"></canvas>\r\n                                </div>\r\n                                <div class=\"col-md-2\" style=\"margin-left: -15px; margin-top: 75px;\">\r\n                                    <div class=\"round round-lg hollow \">{{ roi_percent ? roi_percent : \"0%\" }}</div>\r\n                                    <br>\r\n                                    <h2 style=\"padding-left:15px; text-align: center; font-weight:bold; color: rgba(8, 173, 63, 0.75)\">ROI</h2>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n -->\r\n                        <div class=\"row\" *ngIf=\"mobileView\">\r\n\r\n                            <div class=\"col-xs-12\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-12\">\r\n                                        <div class=\"row\">\r\n                                            <div id=\"arrow\" class=\"col-xs-6\" style=\"text-align: center\">\r\n                                                Estimated Monthly Income\r\n                                                <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n                                                <br>\r\n                                                <span style=\"font-weight: bold\">{{ Potential_Monthly_model | currency:'USD' : true : '1.2-2' }}</span>\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\" style=\"text-align: center\">\r\n                                                Estimated Total Net Cash Flow\r\n                                                <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n                                                <br>\r\n                                                <span style=\"color: green; font-weight: bold\">{{ Total_Potential_model | currency:'USD' : true : '1.2-2' }}</span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <br>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-10\">\r\n                                        <canvas baseChart id=\"myChart2\" [options]=\"barChartOptions\" [colors]=\"lineChartColors\" [datasets]=\"lineData1\" [labels]=\"lineChartLabels1\"\r\n                                            [chartType]=\"'line'\" height=\"300px\"></canvas>\r\n                                        <i style=\"float: right; margin-top: -72px\" class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n\r\n                                    </div>\r\n                                    <div class=\"col-xs-2\" style=\"margin-top: 35px;\">\r\n                                        <div style=\"margin-left: -15px; text-align: center\" class=\"round round-sm holl\">{{ roi_percent ? roi_percent : \"0%\" }}</div>\r\n                                        <br>\r\n                                        <h3 style=\"margin-left: -10px; font-weight:bold; color: rgba(8, 173, 63, 0.75)\">ROI</h3>\r\n                                        <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n                                    </div>\r\n                                </div>\r\n                                <!-- \r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-10\">\r\n                                        <canvas baseChart id=\"myChart\" [options]=\"barChartOptions\" [colors]=\"lineChartColors\" [datasets]=\"lineData\" [labels]=\"lineChartLabels\"\r\n                                            [chartType]=\"'line'\" height=\"200px\"></canvas>\r\n                                    </div>\r\n                                    <div class=\"col-xs-2\" style=\"margin-top: 20px;\">\r\n                                        <div style=\"margin-left: -15px; text-align: center\" class=\"round round-sm holl\">{{ roi_percent ? roi_percent : \"0%\" }}</div>\r\n                                        <br>\r\n                                        <h3 style=\"margin-left: -10px; font-weight:bold; color: rgba(8, 173, 63, 0.75)\">ROI</h3>\r\n                                    </div>\r\n                                </div>\r\n -->\r\n                            </div>\r\n\r\n                            <div class=\"col-xs-12\" style=\"margin-top: 25px; padding:20px 10px 20px 10px;  border: 1px solid black\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\" style=\"text-align:center; padding-bottom: 30px;\">\r\n                                        <h3>\r\n                                            <b>INVESTMENT AMOUNT AND TERMS</b>\r\n                                        </h3>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\" style=\"min-height:70px\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <b>Investment Amount:</b>\r\n                                        <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"input-group\">\r\n                                            <input type=\"number\" [(ngModel)]=\"Hypothetical_investment_model\" min=\"0\" (change)=\"hypothetical()\" min=\"0\" class=\"form-control\"\r\n                                            />\r\n                                            <span class=\"input-group-addon\" style=\"font-weight:bold\">&nbsp;$&nbsp;&nbsp;</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\" style=\"min-height:70px\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <b>Net Revenue Interest:</b>\r\n                                        <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"input-group\">\r\n                                            <input type=\"number\" [(ngModel)]=\"nri_percentage\" min=\"0\" (change)=\"hypothetical()\" min=\"0\" class=\"form-control\" />\r\n                                            <span class=\"input-group-addon\" style=\"font-weight:bold; font-size: 16px\">%&nbsp;</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\" style=\"min-height:70px\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <b>Production Expenses Ratio:</b>\r\n                                        <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"input-group\">\r\n                                            <input type=\"number\" min=\"0\" max=\"100\" [(ngModel)]=\"Operating_Expenses_Ratio\" (change)=\"hypothetical()\" class=\"form-control\"\r\n                                            />\r\n                                            <span class=\"input-group-addon\" style=\"font-weight:bold; font-size: 16px\">%&nbsp;</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\" style=\"min-height:70px\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <b>State O&G Production Taxes:</b>\r\n                                        <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <select class=\"form-control\" name=\"taxValue\" (change)=\"onChange($event.target.value)\">\r\n                                            <option *ngFor=\"let item of options\" [value]=\"item.taxValue\">\r\n                                                {{ item.stateName }}\r\n                                            </option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\" style=\"min-height:20px\">\r\n                                    <div class=\"col-xs-1\"></div>\r\n                                    <div class=\"col-xs-5\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6\">\r\n                                                <b>Oil Tax</b>\r\n                                            </div>\r\n                                            <div class=\"col-xs-2\">\r\n                                                {{ tempOil/100 | percent }}\r\n\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"col-xs-5\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6\">\r\n                                                <b>Gas Tax</b>\r\n                                            </div>\r\n                                            <div class=\"col-xs-2\">\r\n                                                {{ tempGas/100 | percent }}\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <br>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div style=\"height: 30px; background: silver; text-align:center\">\r\n                                    <h3>Prices & Production Rates</h3>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <br>\r\n                        <br>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-1\">\r\n                                <div class=\"row\">\r\n                                    <div style=\"text-align:center\" class=\"col-md-12\">\r\n                                        <b>OIL</b>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\" style=\"text-align:center\">\r\n                                        <img src=\"assets/oil.png\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-5\">\r\n                                <div class=\"row\" style=\"min-height:45px\">\r\n                                    <div class=\"col-md-8\">\r\n                                        <b>Estimated Oil Price:</b>\r\n                                        <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"input-group\">\r\n                                            <input type=\"number\" [(ngModel)]=\"Estimated_oil_price_model\" min=\"0\" (change)=\"hypothetical()\" class=\"form-control\" />\r\n                                            <span class=\"input-group-addon\" style=\"font-weight:bold; font-size: 16px\">&nbsp;$&nbsp;</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row frame\">\r\n                                    <div class=\"col-md-8\"></div>\r\n                                    <div class=\"oil-price col-md-4\">\r\n                                        <iframe style=\"border: none !important\" src=\"https://the-algo.github.io/oil-value/\"></iframe>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-8\">\r\n                                        <b>Estimated Daily Oil Production:</b>\r\n                                        <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"input-group\">\r\n                                            <input type=\"number\" [(ngModel)]=\"Estimated_oil_model\" min=\"0\" (change)=\"hypothetical()\" class=\"form-control\" />\r\n                                            <span class=\"input-group-addon\" style=\"font-weight:bold\">BO</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <br>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-8\">\r\n                                        <b>Estimated Total Oil Production:</b>\r\n                                        <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"input-group\">\r\n                                            <input type=\"number\" [(ngModel)]=\"Estimated_Oil_ultimate_recovery_model\" min=\"0\" (change)=\"hypothetical()\" class=\"form-control\"\r\n                                            />\r\n                                            <span class=\"input-group-addon\" style=\"font-weight:bold\">BO</span>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n\r\n                                <br>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-1\">\r\n                                <div class=\"row\">\r\n                                    <div style=\"text-align:center\" class=\"col-md-12\">\r\n                                        <b>GAS</b>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\" style=\"text-align:center\">\r\n                                        <img src=\"assets/gas.png\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-5\">\r\n                                <div class=\"row\" style=\"min-height:45px\">\r\n                                    <div class=\"col-md-8\">\r\n                                        <b>Estimated Gas Price:</b>\r\n                                        <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"input-group\">\r\n                                            <input type=\"number\" [(ngModel)]=\"Estimated_gas_price_model\" min=\"0\" (change)=\"hypothetical()\" class=\"form-control\" />\r\n                                            <span class=\"input-group-addon\" style=\"font-weight:bold; font-size: 16px\">&nbsp;&nbsp;&nbsp;$&nbsp;&nbsp;&nbsp;</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row frame\">\r\n                                    <div class=\"col-md-8\"></div>\r\n                                    <div class=\"gas-price col-md-4\">\r\n                                        <iframe style=\"border: none !important\" src=\"https://the-algo.github.io/gas-value/\"></iframe>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-8\">\r\n                                        <b>Estimated Daily Gas Production:</b>\r\n                                        <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"input-group\">\r\n                                            <input type=\"number\" [(ngModel)]=\"Estimated_gas_model\" min=\"0\" (change)=\"hypothetical()\" class=\"form-control\" />\r\n                                            <span class=\"input-group-addon\" style=\"font-weight:bold\">MCF</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <br>\r\n\r\n                                <div class=\"row\" style=\"min-height:50px\">\r\n                                    <div class=\"col-md-8\">\r\n                                        <b>Estimated Total Gas Production:</b>\r\n                                        <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"input-group\">\r\n                                            <input type=\"number\" [(ngModel)]=\"Estimated_Gas_ultimate_recovery_model\" min=\"0\" (change)=\"hypothetical()\" class=\"form-control\"\r\n                                            />\r\n                                            <span class=\"input-group-addon\" style=\"font-weight:bold\">MCF</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <br>\r\n                        </div>\r\n                    </div>\r\n                </accordion-group>\r\n            </accordion>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- \r\n    <div class=\"backdrop\" [ngStyle]=\"{'display':display}\"></div>\r\n    <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':display}\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onCloseHandled()\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                    <h4 class=\"modal-title\">{{title}}</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\" style=\"text-align: center\" *ngIf=\"graph\">\r\n                            <canvas baseChart id=\"myChart1\" [options]=\"barChartOptions\" [colors]=\"lineChartColors\" [datasets]=\"lineData\" [labels]=\"lineChartLabels\"\r\n                                [chartType]=\"'line'\" height=\"200px\"></canvas>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-12\" style=\"text-align: center\" *ngIf=\"!graph\">\r\n                            <canvas baseChart id=\"myChart2\" [options]=\"barChartOptions\" [colors]=\"lineChartColors\" [datasets]=\"lineData1\" [labels]=\"lineChartLabels1\"\r\n                                [chartType]=\"'line'\" height=\"200px\"></canvas>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"onCloseHandled()\">Close</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n     -->\r\n</div>\r\n\r\n\r\n\r\n\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js\"></script>\r\n<script src=\"../../node_modules/bootstrap/dist/js/bootstrap.min.js\"></script>\r\n<script src=\"../../node_modules/chart.js/src/chart.js\"></script>"

/***/ }),

/***/ "../../../../../src/app/hope-thetical-calculator/hope-thetical-calculator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HopeTheticalCalculatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__price_service__ = __webpack_require__("../../../../../src/app/price.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HopeTheticalCalculatorComponent = (function () {
    function HopeTheticalCalculatorComponent(price, datePipe) {
        this.price = price;
        this.datePipe = datePipe;
        this.tax = 0;
        this.tax_gas = 0;
        this.partner_name = "Partnership Name";
        this.temp_partner_name = "";
        this.address = "Location";
        this.temp_address = "";
        this.measured = "Measured Depth Details";
        this.temp_measured = "";
        this.description1 = "Description";
        this.temp_description1 = "";
        this.description2 = "Description";
        this.temp_description2 = "";
        this.showPartnerName = false;
        this.showAddress = false;
        this.showMeasured = false;
        this.showDescription1 = false;
        this.showDescription2 = false;
        this.nri_percentage = 11.25;
        this.total_raise = 0;
        this.url = "assets/no-preview.png";
        this.hidden = true;
        this.mobileView = false;
        this.options = [
            { stateName: "-- Select State --", taxValue: [0, 0] },
            { stateName: "Alabama", taxValue: [4, 4] },
            { stateName: "Arkansas", taxValue: [5, 5] },
            { stateName: "Alaska", taxValue: [15, 10] },
            { stateName: "Arizona", taxValue: [6.60, 6.60] },
            { stateName: "California", taxValue: [0, 0] },
            { stateName: "Colorado", taxValue: [5, 5] },
            { stateName: "Florida", taxValue: [9, 9] },
            { stateName: "Idaho", taxValue: [2, 2] },
            { stateName: "Illinois", taxValue: [0, 0] },
            { stateName: "Indiana", taxValue: [1, 0.24] },
            { stateName: "Kansas", taxValue: [8, 8] },
            { stateName: "Kentucky", taxValue: [4.5, 4.5] },
            { stateName: "Louisiana", taxValue: [12.5, 0.164] },
            { stateName: "Maryland", taxValue: [7, 7] },
            { stateName: "Michigan", taxValue: [6.6, 5] },
            { stateName: "Minnesota", taxValue: [2, 2] },
            { stateName: "Mississippi", taxValue: [6, 6] },
            { stateName: "Montana", taxValue: [1, 1] },
            { stateName: "Nebraska", taxValue: [3, 3] },
            { stateName: "New Mexico", taxValue: [3.75, 3.75] },
            { stateName: "Nevada", taxValue: [5, 5] },
            { stateName: "North Dakota", taxValue: [5, 0.04] },
            { stateName: "Ohio", taxValue: [0.10, 0.025] },
            { stateName: "Oklahoma", taxValue: [7, 7] },
            { stateName: "Oregon", taxValue: [6, 6] },
            { stateName: "South Dakota", taxValue: [4.5, 4.5] },
            { stateName: "Texas", taxValue: [4.6, 7.5] },
            { stateName: "Tennessee", taxValue: [3, 3] },
            { stateName: "Utah", taxValue: [5, 5] },
            { stateName: "Virginia", taxValue: [5, 5] },
            { stateName: "West Virginia", taxValue: [10, 10] },
            { stateName: "Wisconsin", taxValue: [7, 7] },
            { stateName: "Wyoming", taxValue: [6, 6] },
        ];
        this.lineData = [{
                label: '', data: [], pointStyle: 'circle'
            }];
        this.lineData1 = [{ label: '', data: [], pointStyle: 'circle' }];
        this.lineChartLabels = [];
        this.lineChartLabels1 = [];
        this.barChartOptions = {};
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(146,206,80,0.6)',
                borderColor: 'rgba(146,206,80,1.0)',
                pointBackgroundColor: 'rgba(146,206,80,1.0)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(146,206,80,1.0)'
            },
            {
                backgroundColor: 'rgba(51,129,199,0.4)',
                borderColor: 'rgba(51,129,199,1.0)',
                pointBackgroundColor: 'rgba(51,129,199,1.0)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(51,129,199,1.0)'
            }
        ];
        /*-------------------------------------------------------------------------------------------------------------------*/
        // Hypothetical Price, Production, and Cash Flow Scenarios section calculation
        this.unit_price = 1700000;
        this.c = 0.1125;
        this.Hypothetical_investment_model = 0;
        this.Estimated_oil_model = 0;
        this.Estimated_gas_model = 0;
        this.Estimated_oil_price_model = 0;
        this.Estimated_gas_price_model = 0;
        this.Estimated_Oil_ultimate_recovery_model = 0;
        this.Estimated_Gas_ultimate_recovery_model = 0;
        this.Projected_Lifespan = 0;
        this.Net_Income_Difference = 0;
        this.Actual_Dollars_At_Risk = 0;
        this.unit_equivalent_model = 0;
        this.Net_Revenue_model = 0;
        this.five_percent_of_temp = 0;
        this.Potential_Monthly_model = 0;
        this.Months_to_model = 0;
        this.Total_Potential_model = 0;
        this.Operating_Expenses_Ratio = 0;
        this.roi_percent = "0%";
        this.allTax = [];
        this.tempOil = 0;
        this.tempGas = 0;
    }
    HopeTheticalCalculatorComponent.prototype.onChange = function (item) {
        this.allTax = [];
        this.allTax = item.split(",");
        this.tempOil = parseFloat(this.allTax[0]);
        this.tempGas = parseFloat(this.allTax[1]);
        this.calculateTax(this.tempOil, this.tempGas);
        this.hypothetical();
    };
    HopeTheticalCalculatorComponent.prototype.calculateTax = function (oil, gas) {
        if (oil > 0 && oil < 0.5) {
            this.tax = ((oil / 100) * this.Estimated_Oil_ultimate_recovery_model) / 100;
        }
        if (gas > 0 && gas < 0.5) {
            this.tax_gas = ((oil / 100) * this.Estimated_Oil_ultimate_recovery_model) / 100;
        }
        if (oil >= 0 && gas >= 0) {
            this.tax = oil / 100;
            this.tax_gas = gas / 100;
        }
    };
    // Initializing the Data to Map and Panels
    HopeTheticalCalculatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.price.getOilPrice().subscribe(function (res) {
            _this.Estimated_oil_price_model = res.data[0][6];
        });
        this.price.getGasPrice().subscribe(function (res) {
            _this.Estimated_gas_price_model = res.data[0][6];
            _this.Estimated_gas_price_model = parseFloat(_this.Estimated_gas_price_model.toFixed(2));
        });
        this.hypothetical();
        if (window.screen.width <= 600) {
            this.mobileView = true;
        }
        else {
            this.mobileView = false;
        }
    };
    /*   display = 'none';
      graph = false;
      title = '';
      
      openModal(graph: string) {
        this.title = graph;
        if (graph === 'Graph1') {
          this.graph = true;
        } else {
          this.graph = false;
        }
        this.display = 'block';
      }
    
      onCloseHandled() {
        this.display = 'none';
      } */
    // Calculate Hypothetical Price, Production, and Cash Flow Scenarios
    HopeTheticalCalculatorComponent.prototype.hypothetical = function () {
        if (this.tempOil >= 0 && this.tempGas >= 0)
            this.calculateTax(this.tempOil, this.tempGas);
        this.lineData = [];
        this.lineData1 = [];
        //this.lineChartLabels = [];
        this.lineChartLabels.length = 0;
        this.lineChartLabels1.length = 0;
        var temp1 = 0, temp2 = 0;
        // Unit Equivalent Model Calculation
        this.unit_equivalent_model = (this.Hypothetical_investment_model / this.unit_price) * 10;
        this.findFraction(this.unit_equivalent_model);
        // NRI Percentage Calculation
        //this.Net_Revenue_model = this.c * this.unit_equivalent_model;
        //this.Net_Revenue_model = parseFloat(this.Net_Revenue_model.toPrecision(4));
        // Estimated Monthly Income Calculation
        temp1 = this.Estimated_oil_model * 30 * this.Estimated_oil_price_model;
        temp1 = temp1 - (this.tax * temp1);
        temp2 = this.Estimated_gas_model * 30 * this.Estimated_gas_price_model;
        temp2 = (temp2 - (this.tax_gas * temp2)) * (this.nri_percentage / 100);
        temp1 = temp1 + temp2;
        temp1 = temp1 - ((this.Operating_Expenses_Ratio / 100) * temp1);
        this.Potential_Monthly_model = temp1 * (this.nri_percentage / 100);
        this.Potential_Monthly_model = parseFloat(this.Potential_Monthly_model.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]);
        temp1 = this.Estimated_Oil_ultimate_recovery_model * this.Estimated_oil_price_model;
        temp1 = temp1 - (this.tax * temp1);
        temp2 = this.Estimated_Gas_ultimate_recovery_model * this.Estimated_gas_price_model;
        temp2 = temp2 - (this.tax_gas * temp2);
        temp1 = (temp1 + temp2) * (this.nri_percentage / 100);
        this.Total_Potential_model = temp1 - ((this.Operating_Expenses_Ratio / 100) * temp1);
        // Months to Payout Calculation
        if (isFinite(this.Hypothetical_investment_model / this.Potential_Monthly_model) && !isNaN(this.Hypothetical_investment_model / this.Potential_Monthly_model))
            this.Months_to_model = this.Hypothetical_investment_model / this.Potential_Monthly_model;
        else
            this.Months_to_model = 0;
        // Estimated Months of Cash Flow
        if (isFinite(this.Total_Potential_model / this.Potential_Monthly_model) && !isNaN(this.Total_Potential_model / this.Potential_Monthly_model))
            this.Months_to_cash_flow = this.Total_Potential_model / this.Potential_Monthly_model;
        else
            this.Months_to_cash_flow = 0;
        if (isFinite(Math.floor((this.Total_Potential_model * 100) / this.Hypothetical_investment_model)) && !isNaN(Math.floor((this.Total_Potential_model * 100) / this.Hypothetical_investment_model)))
            this.roi_percent = (Math.floor((this.Total_Potential_model * 100) / this.Hypothetical_investment_model)).toString() + "%";
        else
            this.roi_percent = "0%";
        var data1 = [];
        var data2 = [];
        if ((isFinite(this.Hypothetical_investment_model) && !isNaN(this.Hypothetical_investment_model)) && (isFinite(this.Total_Potential_model) && !isNaN(this.Total_Potential_model))) {
            if (this.Hypothetical_investment_model > this.Total_Potential_model && this.Total_Potential_model !== 0) {
                data1.push(null, null, parseFloat(this.Hypothetical_investment_model.toFixed(2)) ? parseFloat(this.Hypothetical_investment_model.toFixed(2)) : null);
                this.lineData.push({ label: 'Investment Amount ($)', data: data1 });
                //data2.push(null, null, parseFloat(this.Total_Potential_model.toFixed(2)) ? parseFloat(this.Total_Potential_model.toFixed(2)) : null);
                data2.push(0, parseFloat(this.Total_Potential_model.toFixed(2)) ? parseFloat(this.Total_Potential_model.toFixed(2)) : null, parseFloat(this.Total_Potential_model.toFixed(2)) ? parseFloat(this.Total_Potential_model.toFixed(2)) : null);
                this.lineData.push({ label: 'Estimated Total Cash Flow ($)', data: data2 });
            }
            else {
                data1.push(0, parseFloat(this.Hypothetical_investment_model.toFixed(2)) ? parseFloat(this.Hypothetical_investment_model.toFixed(2)) : null, null);
                this.lineData.push({ label: 'Investment Amount ($)', data: data1 });
                data2.push(0, parseFloat(this.Hypothetical_investment_model.toFixed(2)) ? parseFloat(this.Hypothetical_investment_model.toFixed(2)) : null, parseFloat(this.Total_Potential_model.toFixed(2)) ? parseFloat(this.Total_Potential_model.toFixed(2)) : null);
                this.lineData.push({ label: 'Estimated Total Cash Flow ($)', data: data2 });
            }
        }
        else {
            this.lineData.push({ label: 'Investment Amount ($)', data: null });
            this.lineData.push({ label: 'Estimated Total Cash Flow ($)', data: null });
        }
        var data3 = [];
        var data4 = [];
        if ((isFinite(this.Hypothetical_investment_model) && !isNaN(this.Hypothetical_investment_model)) && (isFinite(this.Total_Potential_model) && !isNaN(this.Total_Potential_model))) {
            if (this.Hypothetical_investment_model > this.Total_Potential_model && this.Total_Potential_model !== 0) {
                data3.push(0, parseFloat(this.Hypothetical_investment_model.toFixed(2)) ? parseFloat(this.Hypothetical_investment_model.toFixed(2)) : null, null);
                this.lineData1.push({ label: 'Investment Amount ($)', data: data3 });
                data4.push(0, parseFloat(this.Total_Potential_model.toFixed(2)) ? parseFloat(this.Total_Potential_model.toFixed(2)) : null, null);
                this.lineData1.push({ label: 'Estimated Total Cash Flow ($)', data: data4 });
            }
            else {
                data3.push(0, parseFloat(this.Hypothetical_investment_model.toFixed(2)) ? parseFloat(this.Hypothetical_investment_model.toFixed(2)) : null);
                this.lineData1.push({ label: 'Investment Amount ($)', data: data3 });
                data4.push(0, parseFloat(this.Hypothetical_investment_model.toFixed(2)) ? parseFloat(this.Hypothetical_investment_model.toFixed(2)) : null, parseFloat(this.Total_Potential_model.toFixed(2)) ? parseFloat(this.Total_Potential_model.toFixed(2)) : null);
                this.lineData1.push({ label: 'Estimated Total Cash Flow ($)', data: data4 });
            }
        }
        else {
            this.lineData1.push({ label: 'Investment Amount ($)', data: null });
            this.lineData1.push({ label: 'Estimated Total Cash Flow ($)', data: null });
        }
        this.lineChartLabels.push('0');
        if ((isFinite(this.Months_to_model) && !isNaN(this.Months_to_model)) && (isFinite(this.Months_to_cash_flow) && !isNaN(this.Months_to_cash_flow))) {
            if (this.Months_to_model > this.Months_to_cash_flow && this.Months_to_cash_flow !== 0) {
                this.lineChartLabels.push(this.Months_to_cash_flow !== 0 ? this.Months_to_cash_flow.toFixed(1) + '' : '0');
                this.lineChartLabels.push(this.Months_to_model !== 0 ? this.Months_to_model.toFixed(1) + '' : '0');
            }
            else {
                this.lineChartLabels.push(this.Months_to_model !== 0 ? this.Months_to_model.toFixed(1) + '' : '0');
                this.lineChartLabels.push(this.Months_to_cash_flow !== 0 ? this.Months_to_cash_flow.toFixed(1) + '' : '0');
            }
        }
        this.lineChartLabels1.push('0');
        if ((isFinite(this.Months_to_model) && !isNaN(this.Months_to_model)) && (isFinite(this.Months_to_cash_flow) && !isNaN(this.Months_to_cash_flow))) {
            if (this.Months_to_model > this.Months_to_cash_flow && this.Months_to_cash_flow !== 0) {
                //this.lineChartLabels1.push(this.Months_to_cash_flow !== 0 ? this.Months_to_cash_flow.toFixed(1) + '' : '0');
                this.lineChartLabels1.push(this.Months_to_model.toFixed(1) + '');
            }
            else {
                if (this.Months_to_model !== 0) {
                    this.lineChartLabels1.push(this.Months_to_model !== 0 ? this.Months_to_model.toFixed(1) + '' : '0');
                }
                this.lineChartLabels1.push(this.Months_to_cash_flow !== 0 ? this.Months_to_cash_flow.toFixed(1) + '' : '0');
            }
        }
        /*
            if (isFinite(this.Months_to_model) && !isNaN(this.Months_to_model))
              this.lineChartLabels.push(this.Months_to_model.toFixed(1) + '');
            else
              this.lineChartLabels.push('0');
        
        
            if (isFinite(this.Months_to_cash_flow) && !isNaN(this.Months_to_cash_flow))
              this.lineChartLabels.push(this.Months_to_cash_flow.toFixed(1) + '');
            else
              this.lineChartLabels.push('0');
         */
        //this.lineChartLabels = label;
        //this.lineChartLabels.push()
        /*     var ctx = document.getElementById("myChart");
            var myLineChart = new Chart(ctx, {
              type: 'line',
              data: data
              //options: options
            }); */
        var option = {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true
                }
            },
            tooltips: {
                displayColors: false,
                isHtml: true,
                callbacks: {
                    title: function (tooltipItems, data) {
                        return '';
                    },
                    label: function (tooltipItem, data) {
                        var datasetLabel = '';
                        var label = data.labels[tooltipItem.index];
                        var txt;
                        txt = "PAYOUT  $";
                        txt += (+data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                        return txt;
                    }
                }
            },
            scales: {
                yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: '($)',
                            fontSize: 16,
                            fontStyle: "bold"
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Total Months of Cash Flow',
                            fontSize: 14,
                            fontStyle: "bold"
                        }
                    }]
            },
            elements: {
                point: {
                    radius: 6,
                    hitRadius: 6,
                    hoverRadius: 6,
                    hoverBorderWidth: 1
                },
                line: {
                    tension: 0
                }
            }
        };
        this.barChartOptions = option;
    };
    // Converting the Decimal to Fraction Part
    HopeTheticalCalculatorComponent.prototype.findFraction = function (value) {
        var numerator = value.toFixed(2).toString();
        var extra = numerator.split('.');
        if (100 % extra["1"] == 0) {
            extra["0"] = 100 / extra["1"];
            extra["1"] = extra["1"] / extra["1"];
        }
        else {
            var temp = extra["1"];
            if (temp % (Math.floor(temp / 2)) == 0 && 100 % (Math.floor(temp / 2)) == 0) {
                extra["1"] = temp / Math.floor(temp / 2);
                extra["0"] = 100 / Math.floor(temp / 2);
            }
            else if (temp % 20 == 0 && 100 % 20 == 0) {
                extra["1"] = temp / 20;
                extra["0"] = 100 / 20;
            }
            else if (temp % 10 == 0 && 100 % 10 == 0) {
                extra["1"] = temp / 10;
                extra["0"] = 100 / 10;
            }
            else if (temp % 5 == 0 && 100 % 5 == 0) {
                extra["1"] = temp / 5;
                extra["0"] = 100 / 5;
            }
            else if (temp % 4 == 0 && 100 % 4 == 0) {
                extra["1"] = temp / 4;
                extra["0"] = 100 / 4;
            }
            else if (temp % 2 == 0 && 100 % 2 == 0) {
                extra["1"] = temp / 2;
                extra["0"] = 100 / 2;
            }
            else {
                extra["1"] = extra["1"];
                extra["0"] = 100;
            }
        }
        if (extra["1"] != 0 && (!isNaN(extra["1"]) || isFinite(extra["0"]))) {
            if (Math.floor(value) != 0) {
                if ((extra["1"] && extra["0"]) == 1) {
                    this.unit = Math.floor(value) + extra["1"];
                }
                else {
                    this.unit = Math.floor(value) + " " + extra["1"] + "/" + extra["0"];
                }
            }
            else {
                this.unit = extra["1"] + "/" + extra["0"];
            }
        }
        else {
            this.unit = Math.floor(this.unit_equivalent_model).toString();
        }
    };
    // Changing the Panel Icon
    HopeTheticalCalculatorComponent.prototype.onclicktoggle = function (idname) {
        var icon = "";
        if (idname === "accordion2") {
            icon = "icon2";
        }
        var cN = document.getElementById(icon).className;
        if (icon === "icon2") {
            if (cN === "glyphicon glyphicon-plus") {
                document.getElementById(icon).className = "glyphicon glyphicon-minus";
            }
            else {
                document.getElementById(icon).className = "glyphicon glyphicon-plus";
            }
        }
    };
    return HopeTheticalCalculatorComponent;
}());
HopeTheticalCalculatorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-hope-thetical-calculator',
        template: __webpack_require__("../../../../../src/app/hope-thetical-calculator/hope-thetical-calculator.component.html"),
        styles: [__webpack_require__("../../../../../src/app/hope-thetical-calculator/hope-thetical-calculator.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__price_service__["a" /* PriceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__price_service__["a" /* PriceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"]) === "function" && _b || Object])
], HopeTheticalCalculatorComponent);

var _a, _b;
//# sourceMappingURL=hope-thetical-calculator.component.js.map

/***/ }),

/***/ "../../../../../src/app/legal-doc-accordian/legal-doc-accordian.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col-md-12 {\r\n    font-size: 18px;\r\n}\r\n\r\n#icon6 {\r\n    color: white;\r\n    background-color: black;\r\n    height: 36px;\r\n    width: 36px;\r\n    text-align: center;\r\n    padding: 5px\r\n}\r\n\r\n.panel-heading {\r\n    padding: 0;\r\n    border-radius: 0;\r\n    color: #212121;\r\n    min-height: 48px;\r\n}\r\n\r\n.panel-title {\r\n    font-size: 22px;\r\n    font-weight: bold;\r\n    display: block;\r\n    padding: 10px;\r\n    text-decoration: none;\r\n}\r\n\r\naccordion-heading {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/legal-doc-accordian/legal-doc-accordian.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <accordion>\r\n          <accordion-group disabled=\"true\">\r\n            <accordion-heading style=\"background:black\" id=\"accordion5\">\r\n              <div class=\"panel-heading\">\r\n                <h2 class=\"panel-title\">\r\n                  <span id=\"icon6\" class=\"glyphicon glyphicon-plus\"></span> Legal Documents\r\n                </h2>\r\n              </div>\r\n            </accordion-heading>\r\n            <div class=\"panel-body\">\r\n              \r\n            </div>\r\n          </accordion-group>\r\n        </accordion>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/legal-doc-accordian/legal-doc-accordian.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LegalDocAccordianComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LegalDocAccordianComponent = (function () {
    function LegalDocAccordianComponent() {
    }
    LegalDocAccordianComponent.prototype.ngOnInit = function () {
    };
    return LegalDocAccordianComponent;
}());
LegalDocAccordianComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-legal-doc-accordian',
        template: __webpack_require__("../../../../../src/app/legal-doc-accordian/legal-doc-accordian.component.html"),
        styles: [__webpack_require__("../../../../../src/app/legal-doc-accordian/legal-doc-accordian.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LegalDocAccordianComponent);

//# sourceMappingURL=legal-doc-accordian.component.js.map

/***/ }),

/***/ "../../../../../src/app/login-accordian/login-accordian.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col-md-12 {\r\n    font-size: 18px;\r\n}\r\n\r\n#icon4 {\r\n    color: white;\r\n    background-color: black;\r\n    height: 36px;\r\n    width: 36px;\r\n    text-align: center;\r\n    padding: 5px\r\n}\r\n\r\n.panel-heading {\r\n    padding: 0;\r\n    border-radius: 0;\r\n    color: #212121;\r\n    min-height: 48px;\r\n}\r\n\r\n.panel-title {\r\n    font-size: 22px;\r\n    font-weight: bold;\r\n    display: block;\r\n    padding: 10px;\r\n    text-decoration: none;\r\n}\r\n\r\naccordion-heading {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-accordian/login-accordian.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <accordion>\r\n        <accordion-group>\r\n          <accordion-heading id=\"accordion4\" (click)=\"ontoggle('accordion4')\">\r\n            <div class=\"panel-heading\">\r\n              <h2 class=\"panel-title\">\r\n                <span id=\"icon4\" class=\"glyphicon glyphicon-plus\"></span> Login/ Registration - Access to online subscription documents and payment options\r\n              </h2>\r\n            </div>\r\n          </accordion-heading>\r\n          <div class=\"panel-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                For convenience, privacy and accuracy we offer a complete online subscription process.\r\n                <br>\r\n                <ol>\r\n                  <li>Simply, register by entering your email address and creating a password.</li>\r\n                  <li>You will immediately receive an email with you user name and password with a prompt to login.</li>\r\n                  <li>Login and access electronic subscription documents and payment options.</li>\r\n                </ol>\r\n\r\n                <button class=\"btn\" style=\"background:#ffc926\" disabled>Click here to login/register</button>\r\n              </div>\r\n            </div>\r\n\r\n            <br>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <div>\r\n                  <iframe class=\"embed-responsive-item\" width=\"100%\" height=\"500\" [src]=\"'https://www.youtube.com/embed/8yGu3HFUrqY' | safe\"\r\n                    allowfullscreen></iframe>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </accordion-group>\r\n      </accordion>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login-accordian/login-accordian.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SafePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginAccordianComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return SafePipe;
}());
SafePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'safe' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
], SafePipe);

var LoginAccordianComponent = (function () {
    function LoginAccordianComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.isCollapsed = true;
        this.trustSrcUrl = function (data) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(data);
        };
    }
    LoginAccordianComponent.prototype.ngOnInit = function () {
    };
    // Changing the Panel Icon
    LoginAccordianComponent.prototype.ontoggle = function (idname) {
        var icon = "";
        if (idname === "accordion4") {
            icon = "icon4";
        }
        var cN = document.getElementById(icon).className;
        if (icon === "icon4") {
            if (document.getElementById("icon2").className === "glyphicon glyphicon-minus") {
                document.getElementById("icon2").className = "glyphicon glyphicon-plus";
            }
            if (cN === "glyphicon glyphicon-plus") {
                document.getElementById(icon).className = "glyphicon glyphicon-minus";
            }
            else {
                document.getElementById(icon).className = "glyphicon glyphicon-plus";
            }
        }
    };
    return LoginAccordianComponent;
}());
LoginAccordianComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login-accordian',
        template: __webpack_require__("../../../../../src/app/login-accordian/login-accordian.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login-accordian/login-accordian.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _b || Object])
], LoginAccordianComponent);

var _a, _b;
//# sourceMappingURL=login-accordian.component.js.map

/***/ }),

/***/ "../../../../../src/app/price.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PriceService = (function () {
    function PriceService(http) {
        this.http = http;
        this.oilUrl = "https://www.quandl.com/api/v1/datasets/CHRIS/CME_CL1.json?api_key=2ormc4EiXzERXCzmcsx-";
        this.gasUrl = "https://www.quandl.com/api/v1/datasets/CHRIS/CME_NG1.json?api_key=2ormc4EiXzERXCzmcsx-";
    }
    PriceService.prototype.getOilPrice = function () {
        return this.http.get(this.oilUrl)
            .map(function (response) {
            return response.json();
        });
    };
    PriceService.prototype.getGasPrice = function () {
        return this.http.get(this.gasUrl)
            .map(function (response) {
            return response.json();
        });
    };
    return PriceService;
}());
PriceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PriceService);

var _a;
//# sourceMappingURL=price.service.js.map

/***/ }),

/***/ "../../../../../src/app/project-description-accordian/project-description-accordian.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col-md-12 {\r\n    font-size: 18px;\r\n}\r\n\r\n#icon5 {\r\n    color: white;\r\n    background-color: black;\r\n    height: 36px;\r\n    width: 36px;\r\n    text-align: center;\r\n    padding: 5px\r\n}\r\n\r\n.panel-heading {\r\n    padding: 0;\r\n    border-radius: 0;\r\n    color: #212121;\r\n    min-height: 48px;\r\n}\r\n\r\n.panel-title {\r\n    font-size: 22px;\r\n    font-weight: bold;\r\n    display: block;\r\n    padding: 10px;\r\n    text-decoration: none;\r\n}\r\n\r\naccordion-heading {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project-description-accordian/project-description-accordian.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <accordion>\r\n        <accordion-group>\r\n          <accordion-heading style=\"background:black\" id=\"accordion5\" (click)=\"ontoggle('accordion5')\">\r\n            <div class=\"panel-heading\">\r\n              <h2 class=\"panel-title\">\r\n                <span id=\"icon5\" class=\"glyphicon glyphicon-plus\"></span> Project Description\r\n              </h2>\r\n            </div>\r\n          </accordion-heading>\r\n          <div class=\"panel-body\">\r\n              <a href=\"assets/BBL-document.pdf\">BBL Document</a>\r\n          </div>\r\n        </accordion-group>\r\n      </accordion>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/project-description-accordian/project-description-accordian.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SafePipe */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDescriptionAccordianComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return SafePipe;
}());
SafePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'safe' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
], SafePipe);

var ProjectDescriptionAccordianComponent = (function () {
    function ProjectDescriptionAccordianComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.isCollapsed = true;
        this.trustSrcUrl = function (data) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(data);
        };
    }
    ProjectDescriptionAccordianComponent.prototype.ngOnInit = function () {
    };
    // Changing the Panel Icon
    ProjectDescriptionAccordianComponent.prototype.ontoggle = function (idname) {
        var icon = "";
        if (idname === "accordion5") {
            icon = "icon5";
        }
        var cN = document.getElementById(icon).className;
        if (icon === "icon5") {
            if (document.getElementById("icon5").className === "glyphicon glyphicon-minus") {
                document.getElementById("icon5").className = "glyphicon glyphicon-plus";
            }
            if (cN === "glyphicon glyphicon-plus") {
                document.getElementById(icon).className = "glyphicon glyphicon-minus";
            }
            else {
                document.getElementById(icon).className = "glyphicon glyphicon-plus";
            }
        }
    };
    return ProjectDescriptionAccordianComponent;
}());
ProjectDescriptionAccordianComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-project-description-accordian',
        template: __webpack_require__("../../../../../src/app/project-description-accordian/project-description-accordian.component.html"),
        styles: [__webpack_require__("../../../../../src/app/project-description-accordian/project-description-accordian.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _b || Object])
], ProjectDescriptionAccordianComponent);

var _a, _b;
//# sourceMappingURL=project-description-accordian.component.js.map

/***/ }),

/***/ "../../../../../src/app/tax-effect-tool/tax-effect-tool.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\r\n    font-size: 16px;\r\n}\r\n\r\nhr {\r\n    border-top: 1px solid black;\r\n}\r\n\r\nsmall {\r\n    font-size: 9.5px;\r\n}\r\n\r\n.greenColor {\r\n    color: green;\r\n}\r\n\r\nagm-map {\r\n    height: 525px;\r\n}\r\n\r\n#Main-Div {\r\n    min-height: 750px;\r\n    padding-top: 20px;\r\n}\r\n\r\n.container {\r\n    padding-top: 20px;\r\n    font-family: 'sans-serif';\r\n}\r\n\r\n#tooltipDiv {\r\n    width: 20px;\r\n    text-align: left;\r\n}\r\n\r\n#tooltipText {\r\n    font-size: 14px;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    #tooltipText {\r\n        font-size: 10px;\r\n    }\r\n    #tooltipDiv {\r\n        padding-left: 20px;\r\n        width: 30px;\r\n    }\r\n    .row {\r\n        font-size: 12px;\r\n    }\r\n}\r\n\r\n.col-md-12 {\r\n    font-size: 16px;\r\n}\r\n\r\n.breaker {\r\n    margin-top: 10px;\r\n    height: 20px;\r\n    background-color: grey;\r\n    margin-bottom: 10px;\r\n}\r\n\r\ni:active:after {\r\n    content: attr(title);\r\n    padding: 5px 10px;\r\n    font-size: 13px;\r\n    line-height: 1.2em;\r\n    color: white;\r\n    width: 300px;\r\n    background: black;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    position: absolute;\r\n    z-index: 500;\r\n    word-spacing: -10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.tool:active:after {\r\n    content: 'Partnership Name: LC GoOpCo Manuel #1, LP \\ATotal Raise: $850,000 \\ATotal Net Revenue Interest (NRI): 56.25% \\AUnit Cost: $170,000 \\ANumber of Units: 5';\r\n    white-space: pre;\r\n    padding: 5px 10px;\r\n    font-size: 14px;\r\n    line-height: 1.2em;\r\n    color: white;\r\n    width: 300px;\r\n    background: black;\r\n    display: inline-block;\r\n    position: absolute;\r\n    z-index: 500;\r\n    word-spacing: 2px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.round.round-lg {\r\n    height: 90px;\r\n    width: 90px;\r\n    line-height: 90px;\r\n    border-radius: 45px;\r\n    font-size: 2.5em;\r\n    font-weight: bold;\r\n}\r\n\r\n.round.hollow {\r\n    display: inline-block;\r\n    height: 90px;\r\n    width: 90px;\r\n    line-height: 90px;\r\n    border-radius: 45px;\r\n    background-color: #FFF;\r\n    color: rgba(8, 173, 63, 0.75);\r\n    text-align: center;\r\n    box-shadow: 0px 0px 0px 7px rgba(8, 173, 63, 0.75);\r\n}\r\n\r\n#icon1 {\r\n    color: white;\r\n    background-color: black;\r\n    height: 36px;\r\n    width: 36px;\r\n    text-align: center;\r\n    padding: 5px\r\n}\r\n\r\n#icon2 {\r\n    color: white;\r\n    background-color: black;\r\n    height: 36px;\r\n    width: 36px;\r\n    text-align: center;\r\n    padding: 5px\r\n}\r\n\r\n#icon3 {\r\n    color: white;\r\n    background-color: black;\r\n    height: 36px;\r\n    width: 36px;\r\n    text-align: center;\r\n    padding: 5px\r\n}\r\n\r\n.panel-heading {\r\n    padding: 0;\r\n    border-radius: 0;\r\n    color: #212121;\r\n    min-height: 48px;\r\n}\r\n\r\n.panel-title {\r\n    font-size: 22px;\r\n    font-weight: bold;\r\n    display: block;\r\n    padding: 10px;\r\n    text-decoration: none;\r\n}\r\n\r\naccordion-heading {\r\n    cursor: pointer;\r\n}\r\n\r\n.table>tbody>tr>td{\r\n    border-top: none;\r\n    text-align: center;\r\n}\r\n\r\n.table>tbody>tr>th{\r\n    border-top: none;\r\n}\r\n\r\n\r\n#arrowUp{\r\n    margin-left: 0px;\r\n    position:relative;\r\n    background:lightgrey;\r\n    text-align:center;\r\n    min-height: 40px;\r\n}\r\n#arrowUp:after, #arrowUp:before{\r\n    content:\"\";\r\n    position:absolute;\r\n    width:30px;\r\n    height:50%;\r\n    left:100%;\r\n}\r\n#arrowUp:after{\r\n    bottom:0;\r\n    background: linear-gradient(to right bottom, lightgrey 50%, transparent 50%);\r\n}\r\n#arrowUp:before{\r\n      top:0;\r\n    background: linear-gradient(to right top, lightgrey 50%, transparent 50%);\r\n}\r\n\r\n#arrowDown{\r\n    margin-left: 0px;\r\n    position:relative;\r\n    background:lightgrey;\r\n    text-align:center;\r\n    min-height: 70px;\r\n}\r\n#arrowDown:after, #arrowDown:before{\r\n    content:\"\";\r\n    position:absolute;\r\n    width:30px;\r\n    height:50%;\r\n    left:100%;\r\n}\r\n#arrowDown:after{\r\n    bottom:0;\r\n    background: linear-gradient(to right bottom, lightgrey 50%, transparent 50%);\r\n}\r\n#arrowDown:before{\r\n      top:0;\r\n    background: linear-gradient(to right top, lightgrey 50%, transparent 50%);\r\n}\r\n\r\n.round-div{\r\n    border-radius: 25px;\r\n    border: 2px solid lightgrey;\r\n    padding: 20px; \r\n    text-align: center\r\n}\r\n\r\n.input-group-addon{\r\n    padding: 0px 1px 0px 1px;\r\n}\r\n\r\n.foo {\r\n    float: left;\r\n    width: 25px;\r\n    height: 12px;\r\n    margin: 5px;\r\n    border: 1px solid rgba(0, 0, 0, .2);\r\n}\r\n\r\n.red {\r\n    background: #FF4136;\r\n}\r\n  \r\n.silver {\r\n    background: #DCDCDC;\r\n}\r\n  \r\n.green {\r\n    background: #93D454;\r\n}\r\n\r\n.blue{\r\n    background: #9EC0E3;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tax-effect-tool/tax-effect-tool.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <accordion>\r\n                <accordion-group [isOpened]=\"true\">\r\n                    <accordion-heading id=\"accordion3\" (click)=\"onclicktoggle('accordion3')\">\r\n                        <div class=\"panel-heading\">\r\n                            <h2 class=\"panel-title\">\r\n                                <span id=\"icon3\" class=\"glyphicon glyphicon-minus\"></span> K-1 Tax Effect Tool\r\n                            </h2>\r\n                        </div>\r\n                    </accordion-heading>\r\n                    <div class=\"panel-body\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-9\">\r\n                                <h4>Explore the Potential Tax Effect of investing in an oil drilling partnership.</h4>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <img src=\"assets/logo.png\" width=\"200px\" />\r\n                            </div>\r\n                        </div>\r\n\r\n                        <br>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-8\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-5\" style=\"min-height:25px\">\r\n                                        Estimated Taxable Income\r\n                                        <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\" style=\"min-height:50px\">\r\n                                        <div class=\"input-group\">\r\n                                            <input type=\"number\" [(ngModel)]=\"Estimated_Taxable_Income_model\" min=\"0\" class=\"form-control\" />\r\n                                            <span class=\"input-group-addon\" style=\"font-weight:bold\">&nbsp;&nbsp;$&nbsp;&nbsp;</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-5\" style=\"min-height:25px\">\r\n                                        Filing Status\r\n                                        <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\" style=\"min-height:50px\">\r\n                                        <select class=\"form-control\" (change)=\"getSelected($event.target.value)\">\r\n                                            <option value=\"-1\">Select Filing Status</option>\r\n                                            <option value=\"0\">Single</option>\r\n                                            <option value=\"1\">Married Filing Jointly</option>\r\n                                            <option value=\"2\">Married Filing Separately</option>\r\n                                            <option value=\"3\">Head of Household</option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"col-md-1\" style=\"min-height:50px\">\r\n                                        <button class=\"btn btn-success\" (click)=\"compare_k1()\">SUBMIT</button>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div id=\"arrowUp\" class=\"col-md-4 col-xs-7\" style=\"text-align: center\">\r\n                                        <span style=\"font-size: 25px;\">Your Tax\r\n                                            <br> Bracket</span>\r\n                                        <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-md-1 col-xs-1\"></div>\r\n                                    <div class=\"col-md-4 col-xs-3\" style=\"padding-top: 10px\">\r\n                                        <b>\r\n                                            <span style=\"font-size: xx-large;\">{{Tax_Bracket | percent}}</span>\r\n                                        </b>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <br>\r\n                            <div class=\"col-md-4\" style=\"margin-left: -10px\" *ngIf=\"pieChartData.length > 1\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-7 col-xs-6\">\r\n                                        Est. After Tax Income\r\n                                        <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n\r\n                                    </div>\r\n                                    <div class=\"col-md-5 col-xs-6\">\r\n                                        <div class=\"foo silver\"></div>{{ Adjusted_Net_Income | currency:'USD' : true : '1.2-2' }}\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-7 col-xs-6\">\r\n                                        Est. Tax Liability\r\n                                        <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n\r\n                                    </div>\r\n                                    <div class=\"col-md-5 col-xs-6\">\r\n                                        <div class=\"foo red\"></div>{{ Tax_Liability | currency:'USD' : true : '1.2-2' }}\r\n                                    </div>\r\n                                </div>\r\n                                <br>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <canvas baseChart height=\"175px\" [data]=\"pieChartData\" [options]=\"pieChartOption\" [labels]=\"pieChartLabels\" [colors]=\"pieChartColor\"\r\n                                            [chartType]=\"pieChartType\"></canvas>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <hr style=\"border-top: 1px solid #CDCDCD\">\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-7\">\r\n                                <h4 style=\"text-align:justify\">This Tool helps you do two very important things when considering investing in oil and gas\r\n                                    drilling partnerships that issue K-1 's for tax filing purposes:</h4>\r\n                                <ol style=\"padding-top: 10px; margin-left: -25px\">\r\n                                    <li>Compare the effect on your\r\n                                        <b>After Tax Income</b> with a K-1 write off.</li>\r\n                                    <li>Estimate the\r\n                                        <b>Out-of-Pocket Investment Dollars at Risk.</b>\r\n                                    </li>\r\n                                </ol>\r\n                                Simply input an\r\n                                <b>Investment Amount</b> and\r\n                                <b>Estimated K-1 Deduction</b>\r\n                            </div>\r\n                            <div class=\"col-md-1\"></div>\r\n                            <div class=\"col-md-4 round-div\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        Est. Out-of-Pocket Investment Dollars at Risk\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <h3>\r\n                                            <b style=\"color:#9fc1e4\">{{Actual_Dollars_At_Risk | currency:'USD' : true : '1.2-2' }}</b>\r\n                                        </h3>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        Your Estimated Cost Savings\r\n                                        <span style=\"color: green; font-size: large; font-weight:bold\">\r\n                                            {{ costSaving | percent }} </span>\r\n                                        <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <br>\r\n                        <br>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-8\">\r\n                                <div class=\"row\" style=\"min-height:50px\">\r\n                                    <div class=\"col-md-5\" style=\"min-height:25px\">\r\n                                        Investment Amount\r\n                                        <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\" style=\"min-height:50px\">\r\n                                        <div class=\"input-group\">\r\n                                            <input type=\"number\" [(ngModel)]=\"Investment_Amount_K1_model\" min=\"0\" (change)=\"compare_k2()\" class=\"form-control\" />\r\n                                            <span class=\"input-group-addon\" style=\"font-weight:bold\">&nbsp;&nbsp;$&nbsp;&nbsp;</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\" style=\"min-height:50px\">\r\n                                    <div class=\"col-md-5\" style=\"min-height:25px\">\r\n                                        Est. K-1 Deduction\r\n                                        <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-md-2\" style=\"min-height:35px\">\r\n                                        <div class=\"input-group\">\r\n                                            <input type=\"number\" [(ngModel)]=\"k1_deduction_percentage\" min=\"0\" max=\"100\" (change)=\"compare_k2()\" class=\"form-control\"\r\n                                            />\r\n                                            <span class=\"input-group-addon\" style=\"font-weight:bold\">&nbsp;%&nbsp;</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-2\" style=\"min-height:50px; padding-top: 5px\">\r\n                                        {{ Deduction_K1 | currency:'USD' : true : '1.2-2' }}\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\" style=\"min-height:50px\">\r\n                                    <div class=\"col-md-7\" style=\"min-height:25px\">\r\n                                        Est. Adjusted Taxable Income\r\n                                        <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\" style=\"min-height:50px\">\r\n                                        {{Adjusted_Taxable_Income_K1 | currency:'USD' : true : '1.2-2' }}\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div id=\"arrowDown\" class=\"col-md-4 col-xs-7\" style=\"text-align: center\">\r\n                                        <span style=\"font-size: x-large;\">Your Adjusted Tax Bracket</span>\r\n                                        <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-md-1 col-xs-1\"></div>\r\n                                    <div class=\"col-md-4 col-xs-3\" style=\"padding-top: 10px\">\r\n                                        <b>\r\n                                            <span style=\"font-size: xx-large;\">{{Tax_Bracket_K1 | percent}}</span>\r\n                                        </b>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <br>\r\n\r\n                            <div class=\"col-md-4\" style=\"margin-left: -10px\" *ngIf=\"pieChartData1.length > 1\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <canvas baseChart [data]=\"pieChartData1\" [options]=\"pieChartOption1\" [labels]=\"pieChartLabels1\" [colors]=\"pieChartColor1\"\r\n                                            [chartType]=\"pieChartType\" height=\"175px\"></canvas>\r\n                                    </div>\r\n                                </div>\r\n                                <br>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-7 col-xs-6\">\r\n                                        Est. After Tax Income\r\n                                        <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-md-5 col-xs-6\">\r\n                                        <div class=\"foo silver\"></div>{{ Adjusted_Net_Income_K1 | currency:'USD' : true : '1.2-2' }}\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-7 col-xs-6\">\r\n                                        Est. Investment\r\n                                        <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-md-5 col-xs-6\">\r\n                                        <div class=\"foo blue\"></div>{{ Income_Difference | currency:'USD' : true : '1.2-2' }}\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-7 col-xs-6\">\r\n                                        Est. Tax Savings\r\n                                        <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-md-5 col-xs-6\">\r\n                                        <div class=\"foo green\"></div>{{ Tax_Savings_K1 | currency:'USD' : true : '1.2-2' }}\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-7 col-xs-6\">\r\n                                        Est. Tax Liability\r\n                                        <i class=\"glyphicon glyphicon-question-sign\" title=\"\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-md-5 col-xs-6\">\r\n                                        <div class=\"foo red\"></div>{{ Tax_Liability_K1 | currency:'USD' : true : '1.2-2' }}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </accordion-group>\r\n            </accordion>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js\"></script>\r\n<script src=\"../../node_modules/bootstrap/dist/js/bootstrap.min.js\"></script>"

/***/ }),

/***/ "../../../../../src/app/tax-effect-tool/tax-effect-tool.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaxEffectToolComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaxEffectToolComponent = (function () {
    function TaxEffectToolComponent() {
        //public pieChartLabels: string[] = ["$0", "$0"];
        //public pieChartLabels1: string[] = ["$0", "$0", "$0", "$0"];
        this.pieChartData = [];
        this.pieChartData1 = [];
        this.pieChartType = 'pie';
        this.pieChartColor = [{
                backgroundColor: [
                    "#FF4136", "#DCDCDC"
                ]
            }];
        this.pieChartColor1 = [{
                backgroundColor: [
                    "#9EC0E3", "#93D454", "#FF4136", "#DCDCDC",
                ]
            }];
        this.pieChartOption = {};
        this.pieChartOption1 = {};
        // 2016 K-1 Tax Estimator section calculation
        this.Estimated_Taxable_Income_model = 500000;
        this.Investment_Amount_K1_model = 0;
        this.Filing_Status = -1;
        this.data = [];
        this.Tax_Bracket = 0;
        this.Tax_Bracket_K1 = 0;
        this.Estimated_Tax_Due = 0;
        this.Deduction_K1 = 0;
        this.Adjusted_Taxable_Income = 0;
        this.Adjusted_Taxable_Income_K1 = 0;
        this.After_Tax_Income = 0;
        this.After_Tax_Income_K1 = 0;
        this.Tax_Rate_Pay_Tax = 0;
        this.Tax_Rate_Pay_Tax_K1 = 0;
        this.Range_Start = 0;
        this.Excess_Income = 0;
        this.Excess_Income_K1 = 0;
        this.Tax_On_Excess = 0;
        this.Tax_On_Excess_K1 = 0;
        this.Estimated_Tax_Due_K1 = 0;
        this.Adjusted_Net_Income = 0;
        this.Adjusted_Net_Income_K1 = 0;
        this.Tax_Savings_K1 = 0;
        this.Tax_Liability = 0;
        this.Tax_Liability_K1 = 0;
        this.Partnership_Investment = 0;
        this.Income_Difference = 0;
        this.k1_deduction_percentage = 75;
        this.panel_visit = 0;
        this.Actual_Dollars_At_Risk = 0;
        this.costSaving = 0;
        this.intializeData();
    }
    // Initialize the data[]
    TaxEffectToolComponent.prototype.intializeData = function () {
        this.data[0] = [{
                "range_start": 191650,
                "range_end": 416700,
                "percent_on_excess_k1": 33.0,
                "percent_on_excess": 33.0,
                "tax_rate_pay_tax_k1": 46643.75,
                "tax_rate_pay_tax": 46643.75
            },
            {
                "range_start": 416700,
                "range_end": 418400,
                "percent_on_excess_k1": 35.0,
                "percent_on_excess": 35.0,
                "tax_rate_pay_tax_k1": 120910.25,
                "tax_rate_pay_tax": 120910.25
            },
            {
                "range_start": 418400,
                "range_end": "Infinity",
                "percent_on_excess_k1": 39.6,
                "percent_on_excess": 39.6,
                "tax_rate_pay_tax_k1": 121505.25,
                "tax_rate_pay_tax": 121505.25
            }
        ];
        this.data[1] = [{
                "range_start": 153100,
                "range_end": 233350,
                "percent_on_excess_k1": 28,
                "percent_on_excess": 28,
                "tax_rate_pay_tax_k1": 29752.5,
                "tax_rate_pay_tax": 29752.5
            },
            {
                "range_start": 233350,
                "range_end": 416700,
                "percent_on_excess_k1": 33,
                "percent_on_excess": 33,
                "tax_rate_pay_tax_k1": 52222.5,
                "tax_rate_pay_tax": 52222.5
            },
            {
                "range_start": 416700,
                "range_end": 470700,
                "percent_on_excess_k1": 35,
                "percent_on_excess": 35,
                "tax_rate_pay_tax_k1": 112728,
                "tax_rate_pay_tax": 112728
            },
            {
                "range_start": 470700,
                "range_end": "Infinity",
                "percent_on_excess_k1": 39.6,
                "percent_on_excess": 39.6,
                "tax_rate_pay_tax_k1": 131628,
                "tax_rate_pay_tax": 131628
            }
        ];
        this.data[2] = [{
                "range_start": 116675,
                "range_end": 208350,
                "percent_on_excess_k1": 33,
                "percent_on_excess": 28,
                "tax_rate_pay_tax_k1": 26111.25,
                "tax_rate_pay_tax": 26111.25
            },
            {
                "range_start": 208350,
                "range_end": 235350,
                "percent_on_excess_k1": 35,
                "percent_on_excess": 33,
                "tax_rate_pay_tax_k1": 56364,
                "tax_rate_pay_tax": 56364
            },
            {
                "range_start": 235350,
                "range_end": "Infinity",
                "percent_on_excess_k1": 39.6,
                "percent_on_excess": 35,
                "tax_rate_pay_tax_k1": 65814,
                "tax_rate_pay_tax": 65814
            }
        ];
        this.data[3] = [{
                "range_start": 212500,
                "range_end": 416700,
                "percent_on_excess_k1": 33,
                "percent_on_excess": 28,
                "tax_rate_pay_tax_k1": 49816,
                "tax_rate_pay_tax": 26111.25
            },
            {
                "range_start": 416700,
                "range_end": 444550,
                "percent_on_excess_k1": 35,
                "percent_on_excess": 33,
                "tax_rate_pay_tax_k1": 117202.5,
                "tax_rate_pay_tax": 117202.5
            },
            {
                "range_start": 444550,
                "range_end": "Infinity",
                "percent_on_excess_k1": 39.6,
                "percent_on_excess": 35,
                "tax_rate_pay_tax_k1": 126950,
                "tax_rate_pay_tax": 126950
            }
        ];
    };
    // Get the selected value from the dropdown list
    TaxEffectToolComponent.prototype.getSelected = function (selectedValue) {
        this.Filing_Status = parseInt(selectedValue);
    };
    /*
      commafy(num) {
        var str = num.toString().split('.');
        if (str[0].length >= 5) {
          str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        }
        if (str[1] && str[1].length >= 1) {
          str[1] = str[1].slice(0, 2);
        }
    
        if (!str[1]) {
          str[1] = '00';
        }
        return str.join('.');
      }
    
       */
    // Calculate the K1 with and without K1 value 
    TaxEffectToolComponent.prototype.compare_k1 = function () {
        //this.pieChartLabels = [];
        this.pieChartData.length = 0;
        this.Deduction_K1 = this.Investment_Amount_K1_model * 0.75;
        this.Adjusted_Taxable_Income = this.Estimated_Taxable_Income_model;
        this.Adjusted_Taxable_Income_K1 = this.Estimated_Taxable_Income_model - this.Deduction_K1;
        for (var i = 0; i < this.data[this.Filing_Status].length; i++) {
            if (this.data[this.Filing_Status][i].range_start <= this.Adjusted_Taxable_Income && this.Adjusted_Taxable_Income <= this.data[this.Filing_Status][i].range_end) {
                this.panel_visit = 1;
                this.Tax_Bracket = this.data[this.Filing_Status][i].percent_on_excess / 100;
                this.Tax_Bracket_K1 = this.data[this.Filing_Status][i].percent_on_excess_k1 / 100;
                this.Tax_Rate_Pay_Tax = this.data[this.Filing_Status][i].tax_rate_pay_tax;
                this.Tax_Rate_Pay_Tax_K1 = this.data[this.Filing_Status][i].tax_rate_pay_tax_k1;
                this.Range_Start = this.data[this.Filing_Status][i].range_start;
                break;
            }
        }
        this.Excess_Income = this.Adjusted_Taxable_Income - this.Range_Start;
        this.Tax_On_Excess = this.Excess_Income * (this.Tax_Bracket);
        this.Estimated_Tax_Due = this.Tax_On_Excess + this.Tax_Rate_Pay_Tax;
        this.Adjusted_Net_Income = this.Adjusted_Taxable_Income - this.Estimated_Tax_Due;
        this.Tax_Liability = this.Estimated_Tax_Due;
        var per1 = ((this.Adjusted_Net_Income * 100) / this.Adjusted_Taxable_Income).toFixed(2);
        var per2 = ((this.Tax_Liability * 100) / this.Adjusted_Taxable_Income).toFixed(2);
        //var val1 = this.commafy(this.Tax_Liability);
        //var val2 = this.commafy(this.Adjusted_Net_Income);
        this.pieChartData.push(parseFloat(per2), parseFloat(per1));
        //this.pieChartLabels.push("$" + val1, "$" + val2)
        var options = {
            /*
                  tooltips: {
                    callbacks: {
                      label: function (tooltipItem, data) {
                        var allData = data.datasets[tooltipItem.datasetIndex].data;
                        var tooltipLabel = data.labels[tooltipItem.index];
                        var tooltipData = allData[tooltipItem.index];
                        var total = 0;
                        for (var i in allData) {
                          total += allData[i];
                        }
                        return tooltipData + '%';
                      }
                    }
                  },
             */
            events: false,
            responsive: true,
            legend: {
                display: false,
            },
            animation: {
                duration: 500,
                easing: "easeOutQuart",
                onComplete: function () {
                    var ctx = this.chart.ctx;
                    __WEBPACK_IMPORTED_MODULE_1_chart_js__["Chart"].defaults.global.defaultFontSize = 14;
                    ctx.font = __WEBPACK_IMPORTED_MODULE_1_chart_js__["Chart"].helpers.fontString(__WEBPACK_IMPORTED_MODULE_1_chart_js__["Chart"].defaults.global.defaultFontSize, 'normal', __WEBPACK_IMPORTED_MODULE_1_chart_js__["Chart"].defaults.global.defaultFontFamily);
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';
                    this.data.datasets.forEach(function (dataset) {
                        for (var i = 0; i < dataset.data.length; i++) {
                            var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model, total = dataset._meta[Object.keys(dataset._meta)[0]].total, mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2, start_angle = model.startAngle, end_angle = model.endAngle, mid_angle = start_angle + (end_angle - start_angle) / 2;
                            var x = mid_radius * Math.cos(mid_angle);
                            var y = mid_radius * Math.sin(mid_angle);
                            ctx.fillStyle = '#fff';
                            //if (i == 3) { // Darker text color for lighter background
                            //  ctx.fillStyle = '#444';
                            //}
                            //var percent = String(Math.round(dataset.data[i] / total * 100)) + "%";
                            ctx.fillText(dataset.data[i] + "%", model.x + x, model.y + y + 5);
                            // Display percent in another line, line break doesn't work for fillText
                            //ctx.fillText(percent, model.x + x, model.y + y + 15);
                        }
                    });
                }
            }
        };
        this.pieChartOption = options;
    };
    // Calculate the K1 with value
    TaxEffectToolComponent.prototype.compare_k2 = function () {
        //this.pieChartLabels1 = [];
        this.pieChartData1.length = 0;
        this.Deduction_K1 = this.Investment_Amount_K1_model * (this.k1_deduction_percentage / 100);
        this.Adjusted_Taxable_Income_K1 = this.Estimated_Taxable_Income_model - this.Deduction_K1;
        for (var i = 0; i < this.data[this.Filing_Status].length; i++) {
            if (this.data[this.Filing_Status][i].range_start <= this.Adjusted_Taxable_Income_K1 && this.Adjusted_Taxable_Income_K1 <= this.data[this.Filing_Status][i].range_end) {
                this.Tax_Bracket_K1 = this.data[this.Filing_Status][i].percent_on_excess_k1 / 100;
                this.Tax_Rate_Pay_Tax_K1 = this.data[this.Filing_Status][i].tax_rate_pay_tax_k1;
                this.Range_Start = this.data[this.Filing_Status][i].range_start;
            }
        }
        this.Excess_Income_K1 = this.Adjusted_Taxable_Income_K1 - this.Range_Start;
        this.Tax_On_Excess_K1 = this.Excess_Income_K1 * (this.Tax_Bracket_K1);
        this.Estimated_Tax_Due_K1 = this.Tax_On_Excess_K1 + this.Tax_Rate_Pay_Tax_K1;
        this.Adjusted_Net_Income_K1 = this.Adjusted_Taxable_Income_K1 - this.Estimated_Tax_Due_K1;
        this.Tax_Savings_K1 = this.Estimated_Tax_Due - this.Estimated_Tax_Due_K1;
        this.Tax_Liability_K1 = this.Estimated_Tax_Due_K1;
        this.Partnership_Investment = this.Investment_Amount_K1_model;
        this.Income_Difference = this.Adjusted_Net_Income - this.Adjusted_Net_Income_K1;
        this.Actual_Dollars_At_Risk = this.Investment_Amount_K1_model - this.Income_Difference;
        var total = this.Adjusted_Net_Income_K1 + this.Tax_Liability_K1 + this.Tax_Savings_K1 + this.Income_Difference;
        var per1 = ((this.Adjusted_Net_Income_K1 * 100) / total).toFixed(2);
        var per2 = ((this.Tax_Liability_K1 * 100) / total).toFixed(2);
        var per3 = ((this.Tax_Savings_K1 * 100) / total).toFixed(2);
        var per4 = ((this.Income_Difference * 100) / total).toFixed(2);
        //var val1 = this.commafy(this.Income_Difference);
        //var val2 = this.commafy(this.Tax_Savings_K1);
        //var val3 = this.commafy(this.Tax_Liability_K1);
        //var val4 = this.commafy(this.Adjusted_Net_Income_K1);
        this.pieChartData1.push(parseFloat(per4), parseFloat(per3), parseFloat(per2), parseFloat(per1));
        //this.pieChartLabels1.push("$" + val1 + "                             ", "$" + val2 + "                             ", "$" + val3 + "                                  ", "$" + val4 + "                                ")
        //this.pieChartLabels1.push("$" + val1, "$" + val2, "$" + val3, "$" + val4);
        var percent = (100 - ((this.Actual_Dollars_At_Risk * 100) / this.Investment_Amount_K1_model)).toFixed(2);
        this.costSaving = parseFloat(percent) / 100;
        var options = {
            /*
                  tooltips: {
                    callbacks: {
                      label: function (tooltipItem, data) {
                        var allData = data.datasets[tooltipItem.datasetIndex].data;
                        var tooltipLabel = data.labels[tooltipItem.index];
                        var tooltipData = allData[tooltipItem.index];
                        var total = 0;
                        for (var i in allData) {
                          total += allData[i];
                        }
                        return tooltipData + '%';
                      }
                    }
                  },
             */
            responsive: true,
            legend: {
                display: false,
            },
            events: false,
            animation: {
                duration: 500,
                easing: "easeOutQuart",
                onComplete: function () {
                    var ctx = this.chart.ctx;
                    __WEBPACK_IMPORTED_MODULE_1_chart_js__["Chart"].defaults.global.defaultFontSize = 14;
                    ctx.font = __WEBPACK_IMPORTED_MODULE_1_chart_js__["Chart"].helpers.fontString(__WEBPACK_IMPORTED_MODULE_1_chart_js__["Chart"].defaults.global.defaultFontSize, 'normal', __WEBPACK_IMPORTED_MODULE_1_chart_js__["Chart"].defaults.global.defaultFontFamily);
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';
                    this.data.datasets.forEach(function (dataset) {
                        for (var i = 0; i < dataset.data.length; i++) {
                            var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model, total = dataset._meta[Object.keys(dataset._meta)[0]].total, mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2, start_angle = model.startAngle, end_angle = model.endAngle, mid_angle = start_angle + (end_angle - start_angle) / 2;
                            var x = mid_radius * Math.cos(mid_angle);
                            var y = mid_radius * Math.sin(mid_angle);
                            ctx.fillStyle = '#fff';
                            //if (i == 3) { // Darker text color for lighter background
                            //  ctx.fillStyle = '#444';
                            //}
                            //var percent = String(Math.round(dataset.data[i] / total * 100)) + "%";
                            ctx.fillText(dataset.data[i] + "%", model.x + x + 5, model.y + y + 7);
                            // Display percent in another line, line break doesn't work for fillText
                            //ctx.fillText(percent, model.x + x, model.y + y + 15);
                        }
                    });
                }
            }
        };
        console.log(options);
        this.pieChartOption1 = options;
    };
    // Changing the Panel Icon
    TaxEffectToolComponent.prototype.onclicktoggle = function (idname) {
        var icon = "";
        if (idname === "accordion3") {
            icon = "icon3";
        }
        var cN = document.getElementById(icon).className;
        if (icon === "icon3") {
            if (cN === "glyphicon glyphicon-plus") {
                document.getElementById(icon).className = "glyphicon glyphicon-minus";
            }
            else {
                document.getElementById(icon).className = "glyphicon glyphicon-plus";
            }
        }
    };
    return TaxEffectToolComponent;
}());
TaxEffectToolComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tax-effect-tool',
        template: __webpack_require__("../../../../../src/app/tax-effect-tool/tax-effect-tool.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tax-effect-tool/tax-effect-tool.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TaxEffectToolComponent);

//# sourceMappingURL=tax-effect-tool.component.js.map

/***/ }),

/***/ "../../../../../src/app/well-application.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WellApplicationServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WellApplicationServices = (function () {
    function WellApplicationServices(http) {
        this.http = http;
    }
    /*
        public getOneMileJSON() {
            return this.http.get('assets/WellDetails.json')
                .map((response: Response) => {
                    return response.json().OneMile;
                })
        }
    
        public getThreeMilesJSON() {
            return this.http.get('assets/WellDetails.json')
                .map((response: Response) => {
                    return response.json().ThreeMiles;
                })
        }
     */
    WellApplicationServices.prototype.getFiveMilesJSON = function () {
        return this.http.get('assets/WellDetails.json')
            .map(function (response) {
            return response.json().FiveMiles;
        });
    };
    return WellApplicationServices;
}());
WellApplicationServices = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WellApplicationServices);

var _a;
//# sourceMappingURL=well-application.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map