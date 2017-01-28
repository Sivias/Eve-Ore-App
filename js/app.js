$(document).ready(function(){
    var ores = {}
        // Ore Value Update
    $('.js-ore-form').on('submit', function(e){
        e.preventDefault();
        var oreName = $('.js-ore-name').find(':selected').data().name;
        var oreVal = $('.js-ore-input').val();
        var ore = ores[oreName] || {};

        ore.estIsk = oreVal;

        ores[oreName] = ore;

        refreshOreList();
    })

    var refreshOreList = function(){
        console.log(ores);
    }

        // Ore
    function Ore(m3, security, estIsk) {
        this.m3 = m3;
        this.security = security;
        this.estIsk = estIsk;
    }

    var oreNames = [
        'pyroxeres', 'viscousPyroxeres', 'solidPyroxeres',
        'kernite', 'fieryKernite', 'luminousKernite',
        'veldspar', 'denseVeldspar', 'concentratedVeldspar',
        'scordite', 'massiveScordite', 'condensedScordite',
        'omber', 'goldenOmber', 'silverOmber',
        'radiantHemorphite', 'vividHemorphite',
        'hedbergite'
    ]

            // Security
        var nullSec = 'Null Security';
        var lowSec = 'Low Security';
        var highSec = 'High Security';
        var anomoly = 'Anomoly';


    for(var i = 0; i < oreNames.length; i++){
        console.log('-- Ores pre loop: ', ores);
        var oreName = oreNames[i].toLowerCase();
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

        console.log('Ores post loop: ', ores);
    }

        // Pyroxeres
    var pyroxeres = new Ore(0.3, highSec, null);
    var viscousPyroxeres = new Ore(0.3, highSec, null);
    var solidPyroxeres = new Ore(0.3, highSec, null);

        // Kernite
    var kernite = new Ore(1.2, lowSec, null);
    var fieryKernite = new Ore(1.2, lowSec, null);
    var luminousKernite = new Ore(1.2, lowSec, null)

        // Veldspar
    var veldspar = new Ore(0.1, highSec, null);
    var denseVeldspar = new Ore(0.1, highSec, null);
    var concentratedVeldspar = new Ore(0.1, highSec, null);

        // Scordite
    var scordite = new Ore(0.15, highSec, null);
    var massiveScordite = new Ore(0.15, highSec, null);
    var condensedScordite = new Ore(0.15, highSec, null);

        // Omber
    var omber = new Ore(0.6, anomoly, null);
    var goldenOmber = new Ore(0.6, anomoly, null);
    var silverOmber = new Ore(0.6, anomoly, null);

        // Hemmorphite
    var radiantHemorphite = new Ore(3, anomoly, null);
    var vividHemorphite = new Ore(3, anomoly, null);

        // Hedbergite
    var hedbergite = new Ore(3, anomoly, null);

        // Ships
    function Ship(oreHold, miningRate) {
        this.oreHold = oreHold;
        this.miningRate = miningRate;
    }

    var venture = new Ship(5000, null);
    var covetor = new Ship(7000, null);
    var retriever = new Ship(23100, null);

    // Needs work - returns 'undefined'
    var estIsk = 42;

    function oreHoldValue(oreM3, estIsk, shipOreHold) {
        if(estIsk) {
            return (((1 / oreM3) * estIsk) * shipOreHold);
        };
    };

    console.log(oreHoldValue(pyroxeres.m3, estIsk, venture.oreHold));

    // console.log(pyroxeres.m3);
    // console.log(venture.oreHold);
});
