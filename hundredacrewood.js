var tigger = { character: "Tigger" }; // start with just the character attribute
var pooh = { character: "Winnie the Pooh" };
var piglet = { character: "Piglet" };
var owl = { character: "owl" };
var christopher_robins = { character: "Christopher Robin" };
var Rabbit = {character: "rabbit"};
var bees = { character: "bees" };
var gopher = { character: "Gopher" }; 
var kango = {character: "Kango"};
var eeyore = { character: "Eeyore" };

tigger.north = pooh;
pooh.south - tigger
pooh.west = piglet 
piglet.east = pooh;
piglet.north = owl;
owl.south= piglet; 
christopher_robins.west = owl;
owl.east = christopher_robins;
christopher_robins.south = pooh;
pooh.north = christopher_robins; 
bees.west = pooh;
pooh.east= bees; 
bees.north = rabbit;
rabbit.south = bees;
rabbit.west = gopher;
gopher.east = rabbit;
christopher_robins.north = kango;
kango.south = christopher_robins;
kango.north = eeyore;
eeyore.south = kango;
eeyore.east = heffalumps;
heffalumps.west = eeyore


