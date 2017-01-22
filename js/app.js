    // Ore
function ore(m3, security) {
    this.m3 = m3;
    this.security = security;
}

    // Security
var nullSec = 'Null Security';
var lowSec = 'Low Security';
var highSec = 'High Security';
var anomoly = 'Anomoly';

    // Pyroxeres
var pyroxeres = new ore(0.3, highSec);
var viscousPyroxeres = new ore(0.3, highSec);
var solidPyroxeres = new ore(0.3, highSec);

    // Kernite
var kernite = new ore(1.2, lowSec);
var fieryKernite = new ore(1.2, lowSec);
var luminousKernite = new ore(1.2, lowSec)

    // Veldspar
var veldspar = new ore(0.1, highSec);
var denseVeldspar = new ore(0.1, highSec);
var concentratedVeldspar = new ore(0.1, highSec);

    // Scordite
var scordite = new ore(0.15, highSec);
var massiveScordite = new ore(0.15, highSec);
var condensedScordite = new ore(0.15, highSec);

    // Omber
var omber = new ore(0.6, anomoly);
var goldenOmber = new ore(0.6, anomoly);
var silverOmber = new ore(0.6, anomoly);

    // Hemmorphite
var radiantHemorphite = new ore(3, anomoly);
var vividHemorphite = new ore(3, anomoly);

    // Hedbergite
var hedbergite = new ore(3, anomoly);


    // Ships
function ship(oreHold, miningRate) {
    this.oreHold = oreHold;
    this.miningRate = miningRate;
}

var venture = new ship(5000, null);
var covetor = new ship(7000, 13.6);
var retriever = new ship(23100, 176.4);

var estIsk = 42.7

function oreHoldValue(oreM3, shipOreHold) {
    (((1 / oreM3) * estIsk) * shipOreHold);
};

console.log(oreHoldValue(pyroxeres, venture));
console.log(pyroxeres);