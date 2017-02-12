$(document).ready(function(){
    var ore = []

    var myOre = $('.raw_textInput').on('submit', function(e) {
        e.preventDefault();
        var ores = {};
        var oreAtCR = $('#raw_textArea').val().split('\n');

        for (i = 0; i < oreAtCR.length; i++){
            var oreAtTab = oreAtCR[i];
            var minerals = oreAtTab.split('\t').filter(function(str){
                return str !== '';
            });
            ore.push(minerals);
        };
        
        for (i=0; i<ore.length; i++){
            console.log(ore[i]);
        }

    });
});