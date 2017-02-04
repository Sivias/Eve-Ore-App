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
        ores[oreName] = ore;

            // Pretty sure this can be compacted (Copy pasta is the devil)  Also auto-ordered by venture hold value.
        
        $('#'+ore.oreName).text(ore.displayName + ' - ' + oreVal + ' | Venture Value: ' + oreHoldValue(ore.m3, oreVal, venture.oreHold));

        // if(oreName.indexOf('kernite') >= 0){
        //     $('#ore-1').text('Kernite' + ' - ' + oreVal + ' | Venture Value: ' + oreHoldValue(ore.m3, oreVal, venture.oreHold));
        // } else if(oreName.indexOf('fierykern') >= 0){
        //     $('#ore-2').text('Fiery Kernite' + ' - ' + oreVal + ' | Venture Value: ' + oreHoldValue(ore.m3, oreVal, venture.oreHold));
        // } else if(oreName.indexOf('luminouskern') >= 0){
        //     $('#ore-3').text('Luminous Kernite' + ' - ' + oreVal + ' | Venture Value: ' + oreHoldValue(ore.m3, oreVal, venture.oreHold));
        // } else if(oreName.indexOf('pyroxeres') >= 0){
        //     $('#ore-4').text('Pyroxeres' + ' - ' + oreVal + ' | Venture Value: ' + oreHoldValue(ore.m3, oreVal, venture.oreHold));
        // } else if(oreName.indexOf('viscouspyro') >= 0){
        //     $('#ore-5').text('Viscous Pyroxeres' + ' - ' + oreVal + ' | Venture Value: ' + oreHoldValue(ore.m3, oreVal, venture.oreHold));
        // } else if(oreName.indexOf('solidpyro') >= 0){
        //     $('#ore-6').text('Solid Pyroxeres' + ' - ' + oreVal + ' | Venture Value: ' + oreHoldValue(ore.m3, oreVal, venture.oreHold));
        // } else if(oreName.indexOf('veldspar') >= 0){
        //     $('#ore-7').text('Veldspar' + ' - ' + oreVal + ' | Venture Value: ' + oreHoldValue(ore.m3, oreVal, venture.oreHold));
        // } else if(oreName.indexOf('denseveld') >= 0){
        //     $('#ore-8').text('Dense Veldspar' + ' - ' + oreVal + ' | Venture Value: ' + oreHoldValue(ore.m3, oreVal, venture.oreHold));
        // } else if(oreName.indexOf('concentratedveld') >= 0){
        //     $('#ore-9').text('Concentrated Veldspar' + ' - ' + oreVal + ' | Venture Value: ' + oreHoldValue(ore.m3, oreVal, venture.oreHold));
        // } else if(oreName.indexOf('scordite') >= 0){
        //     $('#ore-10').text('Scordite' + ' - ' + oreVal + ' | Venture Value: ' + oreHoldValue(ore.m3, oreVal, venture.oreHold));
        // } else if(oreName.indexOf('massivescord') >= 0){
        //     $('#ore-11').text('Massive Scordite' + ' - ' + oreVal + ' | Venture Value: ' + oreHoldValue(ore.m3, oreVal, venture.oreHold));
        // } else if(oreName.indexOf('condensedscord') >= 0){
        //     $('#ore-12').text('Condensed Scordite' + ' - ' + oreVal + ' | Venture Value: ' + oreHoldValue(ore.m3, oreVal, venture.oreHold));
        // } else if(oreName.indexOf('omber') >= 0){
        //     $('#ore-13').text('Omber' + ' - ' + oreVal + ' | Venture Value: ' + oreHoldValue(ore.m3, oreVal, venture.oreHold));
        // } else if(oreName.indexOf('goldenomb') >= 0){
        //     $('#ore-14').text('Golden Omber' + ' - ' + oreVal + ' | Venture Value: ' + oreHoldValue(ore.m3, oreVal, venture.oreHold));
        // } else if(oreName.indexOf('silveromb') >= 0){
        //     $('#ore-15').text('Silver Omber' + ' - ' + oreVal + ' | Venture Value: ' + oreHoldValue(ore.m3, oreVal, venture.oreHold));
        // }
        
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

        // Ships

    function Ship(oreHold, miningRate) {
        this.oreHold = oreHold;
        this.miningRate = miningRate;
    };

    var venture = new Ship(5000, null);
    var covetor = new Ship(7000, null);
    var retriever = new Ship(23100, null);

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
