$(document).ready(function(){

        // Ore types
    var oreNames = [
        'pyroxeres', 'viscousPyro', 'solidPyro',
        'kernite', 'fieryKern', 'luminousKern',
        'veldspar', 'denseVeld', 'concentratedVeld',
        'scordite', 'massiveScord', 'condensedScord',
        'omber', 'goldenOmb', 'silverOmb',
        'radiantHermo', 'vividHermo',
        'hedbergite'
    ];

    var ores = {}

        // Update ore value based on user submission
    $('.js-ore-form').on('submit', function(e){
        e.preventDefault();
        var oreName = $('.js-ore-name').find(':selected').data().name;
            // **TO DO: .val() should be a number ONLY **        
        var oreVal = $('.js-ore-input').val();
        var ore = ores[oreName] || {};
        ore.estIsk = oreVal;
        ore.displayName = oreName;
        ores[oreName] = ore;

             // Put eskIsk value and venture value into the list
        if (this.oreName === this.oreNames){
             $('#' + oreName).text(oreVal + ' | Venture Value: ' + oreHoldValue(ore.m3, oreVal, venture.oreHold));
        };

        refreshOreList();
    });

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

    var refreshOreList = function(){
        console.log(ores);
    };

        // Ships
    function Ship(shipName, oreHold, miningRate) {
        this.shipName = shipName
        this.oreHold = oreHold;
        this.miningRate = miningRate;
    };

    var venture = new Ship('Venture', 5000, null);
    var covetor = new Ship('Covetor', 7000, null);
    var retriever = new Ship('Retriever', 23100, null);

        // Calculate max hold value per ship type
    function oreHoldValue(oreM3, estIsk, shipOreHold) {
        if(estIsk) {
            return (((1 / oreM3) * estIsk) * shipOreHold);
        }
    };

        // Security
    var nullSec = 'Null Security';
    var lowSec = 'Low Security';
    var highSec = 'High Security';
    var anomoly = 'Anomoly';


        // Ore loop to assign Ore values to the Ore Types array that
        // can be referenced on the HTML page (data-name="")

    refreshOreList();

});
