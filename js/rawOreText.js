$(document).ready(function(){

    var myOre = $('.raw_textInput').on('submit', function(e) {
        e.preventDefault();
            
            // Split the paste at carriage returns
        var oreAtCR = $('#raw_textArea').val().split('\n');
        var ore = { data:[] };

            // Loop through all carriage return user pasted values
        for (i = 0; i < oreAtCR.length; i++){
            var oreAtTab = oreAtCR[i];
                // Split the Carriage Return paste at 'tab'
            var minerals = oreAtTab.split('\t').filter(function(str){
                return str !== '';
            });
                // Create the Object
            var tempOre = {
                oreName: minerals[0],
                oreQty: minerals[1],
                oreType: minerals[2],
                oreVolume: minerals[3],
            };
                // Push the object into 'ore' array, ready for JSON
            ore.data.push(tempOre);
        };

            // Output!!!
        console.log(ore);
    });
});