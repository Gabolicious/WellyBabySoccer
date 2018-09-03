const brain = require("brain.js");

const network = new brain.NeuralNetwork();

const TheWellingtonSchool = 0;
const BloomCarroll = 1;
const JohnstownMonroe = 2;
const BishopHartley = 3;
const ColumbusSchoolForGirls = 4;
const WorthingtonChristianSchool = 5;
const WhitehallYearling = 6;
const ColumbusAcademy = 7;
const BishopRosecrans = 8;
const MiamiValleySchool = 9;
const Fairbanks = 10;
const GrandviewHeights = 11;
const Lancaster = 12;
const Bexley = 13;
const BishopReady = 14;
const FisherCatholic = 15;
const CentralCrossing = 16;
const Newark = 17;
const Berlin = 18;
const WestLibertySalem = 19;
const Zanesville = 20;
const LibertyUnion = 21;
const Chillicothe = 22;
const LickingHeights = 23;
const Anna = 24;
const WestJefferson = 25;
const Northeastern = 26;
const SummitCOuntryDaySchool = 27; 
const WorthingtonKilbourne = 28;
const FairfieldUnion = 29;
const Logan = 30;
const Pleasant = 31;

network.train([

//  ============================================ THE WELLINGTON SCHOOL ================================================= \\

  { input: [TheWellingtonSchool, BloomCarroll], output: [1]}, //Aug 20
  { input: [TheWellingtonSchool, JohnstownMonroe], output: [0]}, //Aug 27

// ============================================== BLOOM-CARROLL ===================================\\

 { input: [BloomCarroll, TheWellingtonSchool], output: [0]}, // Aug 20
 { input: [BloomCarroll, BishopHartley], output: [0]}, // Aug 23

// ================================================ JOHNSTOWN-MONROE ================================= \\

 { input: [JohnstownMonroe, Newark], output: [1]}, // Aug 17
 { input: [JohnstownMonroe, TheWellingtonSchool], output: [1]}, //Aug 27

// ============================================== BISHOP HARTLEY ======================================= \\

 { input: [BishopHartley, Berlin], output: [1]}, // Aug 21
 { input: [BishopHartley, BloomCarroll], output: [1]}, // Aug 23
 { input: [BishopHartley, Bexley], output: [1]}, // Aug 27

// ===================================================== COLUMBUS SCHOOL FOR GIRLS =============================================== \\

 { input: [ColumbusSchoolForGirls, WorthingtonChristianSchool], output: [1]}, // Aug 21

// =========================================== WORTHINGTON CHRISTIAN ============================================ \\

 { input: [WorthingtonChristianSchool, ColumbusSchoolForGirls], output: [0]}, // Aug 21
 { input: [WorthingtonChristianSchool, WestLibertySalem], output: [0]}, // Aug 25

// ================================== WHITEHALL-YEARLING ======================= \\

{ input: [WhitehallYearling, Bexley], output: [1]}, //Aug 29

// ==================================== COLUMBUS ACADEMY ======================= \\

 { input: [ColumbusAcademy, CentralCrossing], output: [0]}, // Aug 21
 { input: [ColumbusAcademy, BishopReady], output: [0]}, // Aug 23
 { input: [ColumbusAcademy, Fairbanks], output: [0]}, // Aug 25
 { input: [ColumbusAcademy, BishopRosecrans], output: [1]}, // Aug 29

// ========================================= BISHOP ROSECRANS ================== \\

 { input: [BishopRosecrans, Zanesville], output: [0]}, // Aug 17
 { input: [BishopRosecrans, LibertyUnion], output: [0]}, // Aug 20
 { input: [BishopRosecrans, Chillicothe], output: [0]}, // Aug 23
 { input: [BishopRosecrans, LickingHeights], output: [0]}, // Aug 27
 { input: [BishopRosecrans, ColumbusAcademy], output: [1]}, // Aug 29

// ========================================== MIAMI VALLEY SCHOOL ======================== \\

 { input: [MiamiValleySchool, Anna], output: [1]}, // Aug 25

// ============================ FAIRBANKS ========================== \\

 { input: [Fairbanks, WestJefferson], output: [0]}, // Aug 18
 { input: [Fairbanks, FisherCatholic], output: [0]}, // Aug 21
 { input: [Fairbanks, Northeastern], output: [0]}, // Aug 23
 { input: [Fairbanks, ColumbusAcademy], output: [1]},// Aug 25

// ================================ GRANDVIEW HEIGHTS ================== \\

 { input: [GrandviewHeights, SummitCOuntryDaySchool], output: [1]}, // Aug 18
 { input: [GrandviewHeights, WorthingtonKilbourne], output: [1]}, // Aug 23

// ==================================== LANCASTER ====================== \\

 { input: [Lancaster, FairfieldUnion], output: [0]}, // Aug 17
 { input: [Lancaster, Logan], output: [0]}, // Aug 21
 { input: [Lancaster, Newark], output: [1]}, // Aug 28

// ==================================== BEXLEY ======================= \\

 { input: [Bexley, BishopHartley], output: [0]}, // Aug 27
 { input: [Bexley, WhitehallYearling], output: [0]}, // Aug 29

// =================================== BISHOP READY ================ \\

 { input: [BishopReady, ColumbusAcademy], output: [1]}, // Aug 23

// ============================= FISHER CATHOLIC ===================== \\

 { input: [FisherCatholic, Pleasant], output: [0]}, // Aug 17
 { input: [FisherCatholic, Fairbanks], output: [1]}, //Aug 21

// ============================= CENTRAL CROSSING ==================== \\

 { input: [CentralCrossing, ColumbusAcademy], output: [1]}, // Aug 21

// ======================================================= END =============================================================== \\
 // { input: [], output: []},

])
//Aug 20 wrong 69%
//Aug 27 wrong 1%
//Aug 30 correct 79%
//Wrong: 2
//Correct: 1

const output = network.run([BishopHartley, TheWellingtonSchool]); //Chance of wellington winning
let fullOutput = output * 100

if (fullOutput >=50) {
  console.log("Wellington will most likely win")
  console.log(`With a chance of ${Math.floor(fullOutput)}%`)
} else {
  console.log("Wellington will most likely lose")
  console.log(`With a chance of ${Math.floor(fullOutput)}%`)
}