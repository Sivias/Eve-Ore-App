$(document).ready(function(){

    $('#kernite').text('Kernite' + ' - ');
    $('#fierykern').text('Fiery Kernite' + ' - ');
    $('#luminouskern').text('Luminous Kernite' + ' - ');
    $('#pyroxeres').text('Pyroxeres' + ' - ');
    $('#viscouspyro').text('Viscous Pyroxeres' + ' - ');
    $('#solidpyro').text('Solid Pyroxeres' + ' - ');
    $('#veldspar').text('Veldspar' + ' - ');
    $('#denseveld').text('Dense Veldspar' + ' - ');
    $('#concentratedveld').text('Concentrated Veldspar' + ' - ');
    $('#scordite').text('Scordite' + ' - ');
    $('#massivescord').text('Massive Scordite' + ' - ');
    $('#condensedscord').text('Condensed Scordite' + ' - ');
    $('#omber').text('Omber' + ' - ');
    $('#goldenomb').text('Golden Omber' + ' - ');
    $('#silveromb').text('Silver Omber' + ' - ');

    var ores = {}

        // Update ore value based on user submission
      
    $('.js-ore-form').on('submit', function(e){
        e.preventDefault();
        var oreName = $('.js-ore-name').find(':selected').data().name;
            // **TO DO: .val() should be a number ONLY **        
        var oreVal = $('.js-ore-input').val();
        var ore = ores[oreName] || {};

        ore.estIsk = oreVal;
        ores[oreName] = ore;

            // Pretty sure this can be compacted (Copy pasta is the devil)  Also auto-ordered by venture hold value.
        
        $('#'+ore.oreName).text(ore.displayName + ' - ' + oreVal + ' | Venture Value: ' + oreHoldValue(ore.m3, oreVal, venture.oreHold));
        refreshOreList();
    });

    var refreshOreList = function(){
        console.log(ores);
    };

        // Ore
    function Ore(m3, security, estIsk, displayName) {
        this.m3 = m3;
        this.security = security;
        this.estIsk = estIsk;
        this.displayName = displayName
    };

        // Security
    var nullSec = 'Null Security';
    var lowSec = 'Low Security';
    var highSec = 'High Security';
    var anomoly = 'Anomoly';

        // Ore types
    var oreNames = [
        'pyroxeres', 'viscousPyro', 'solidPyro',
        'kernite', 'fieryKern', 'luminousKern',
        'veldspar', 'denseVeld', 'concentratedVeld',
        'scordite', 'massiveScord', 'condensedScord',
        'omber', 'goldenOmb', 'silverOmb',
        'radiantHermo', 'vividHermo',
        'hedbergite'
    ]

        // Ore loop to assign Ore values to the Ore Types array that
        // can be referenced on the HTML page (data-name="")

    for(var i = 0; i < oreNames.length; i++){
        
        // console.log('-- Ores pre loop: ', ores);

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

        // console.log('Ores post loop: ', ores);
    }

    refreshOreList();

    //     // Pyroxeres
    // var pyroxeres = new Ore(0.3, highSec, null);
    // var viscousPyroxeres = new Ore(0.3, highSec, null);
    // var solidPyroxeres = new Ore(0.3, highSec, null);

    //    // Kernite
    // var kernite = new Ore(1.2, lowSec, null);
    // var fieryKernite = new Ore(1.2, lowSec, null);
    // var luminousKernite = new Ore(1.2, lowSec, null)

    //     // Veldspar
    // var veldspar = new Ore(0.1, highSec, null);
    // var denseVeldspar = new Ore(0.1, highSec, null);
    // var concentratedVeldspar = new Ore(0.1, highSec, null);

    //     // Scordite
    // var scordite = new Ore(0.15, highSec, null);
    // var massiveScordite = new Ore(0.15, highSec, null);
    // var condensedScordite = new Ore(0.15, highSec, null);

    //     // Omber
    // var omber = new Ore(0.6, anomoly, null);
    // var goldenOmber = new Ore(0.6, anomoly, null);
    // var silverOmber = new Ore(0.6, anomoly, null);

    //     // Hemmorphite
    // var radiantHemorphite = new Ore(3, anomoly, null);
    // var vividHemorphite = new Ore(3, anomoly, null);

    //     // Hedbergite
    // var hedbergite = new Ore(3, anomoly, null);

});
