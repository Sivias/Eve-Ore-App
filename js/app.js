$(document).ready(function(){

            // Variables
            // Security
    var nullSec = 'Null Security';
    var lowSec = 'Low Security';
    var highSec = 'High Security';
    var anomoly = 'Anomoly';

            // Ore types
    var ores = {}
    var oreNames = [
        'pyroxeres', 'viscousPyro', 'solidPyro',
        'kernite', 'fieryKern', 'luminousKern',
        'veldspar', 'denseVeld', 'concentratedVeld',
        'scordite', 'massiveScord', 'condensedScord',
        'omber', 'goldenOmb', 'silverOmb',
        'radiantHermo', 'vividHermo',
        'hedbergite'
    ];

            // Ships
    function Ship(shipName, oreHold, miningRate) {
        this.shipName = shipName
        this.oreHold = oreHold;
            // Mining rate currently undfined
        this.miningRate = miningRate;
    };

    var venture = new Ship('Venture', 5000);
    var covetor = new Ship('Covetor', 7000);
    var retriever = new Ship('Retriever', 23100);

            // Calculate max hold value per ship type
    function oreHoldValue(oreM3, estIsk, shipOreHold) {
        if(estIsk) {
            return (((1 / oreM3) * estIsk) * shipOreHold);
        }
    };

            // Console ores
        var refreshOreList = function(){
        console.log(ores);
    };

            // Ore
    function Ore(m3, security, displayName, estIsk) {
        this.m3 = m3;
        this.security = security;
        this.displayName = displayName;
        this.estIsk = estIsk;
    };

        // Assign default values to ore types
    for(var i = 0; i < oreNames.length; i++){
        
        oreName = oreNames[i].toLowerCase();
        var oreM3, oreSec;

        if(oreName.indexOf('pyro') >= 0){
            ores[oreName] = new Ore(0.3, highSec);
        } else if(oreName.indexOf('kern') >= 0){
            ores[oreName] = new Ore(1.2, lowSec);
        } else if(oreName.indexOf('veld') >= 0){
            ores[oreName] = new Ore(0.1, highSec);
        } else if(oreName.indexOf('scord') >= 0){
            ores[oreName] = new Ore(0.15, highSec);
        } else if(oreName.indexOf('omber') >= 0){
            ores[oreName] = new Ore(0.6, anomoly);
        }
    };

        // JQuery Submit function.
        // Updates Ore Value (oreVal) based on user submission
    $('.js-ore-form').on('submit', function(e){
        e.preventDefault();
        var oreName = $('.js-ore-name').find(':selected').data().name;
            // **TO DO: .val() should be a number only**        
        var oreVal = $('.js-ore-input').val();
        var ore = ores[oreName] || {};
        ore.estIsk = oreVal;
        ore.displayName = oreName;
        ores[oreName] = ore;

             // Put eskIsk value and venture value into the list
        if (this.oreName === this.oreNames){
            $('#' + oreName).text(oreVal);
            $('#' + oreName).siblings('.ventureValue').text(' Venture Value: ' + oreHoldValue(ore.m3, oreVal, venture.oreHold));
        };

        refreshOreList();
    });
   
    $('.raw_textInput').on('submit', function(e) {
        e.preventDefault();
        var oreLine1 = $('#raw_textArea').val();
        console.log(oreLine1);
    });

});
