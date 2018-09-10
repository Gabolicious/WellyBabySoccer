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
const Heath = 32;
const Whetstone = 33;
const RiverView = 34;
const YellowSprings = 35;
const MadisonPlains = 36;
const MansfieldChristianSchool = 37;
const Circleville = 38;
const GroveportMadison = 39;
const Loudonville = 40;
const London = 41;
const Reynoldsburg = 42;
const LickingValley = 43;
const Dover = 44;
const FranklinMonroe = 45;
const StFrancisDeSales = 46;

network.train([

//  ============================================ THE WELLINGTON SCHOOL ================================================= \\

  { input: [TheWellingtonSchool, BloomCarroll], output: [1]}, //Aug 20
  { input: [TheWellingtonSchool, JohnstownMonroe], output: [0]}, //Aug 27
  { input: [TheWellingtonSchool, BishopHartley], output: [0]}, //Aug 30
  { input: [TheWellingtonSchool, ColumbusSchoolForGirls], output: [0]}, //Sep 6

// ============================================== BLOOM-CARROLL ===================================\\

 { input: [BloomCarroll, TheWellingtonSchool], output: [0]}, // Aug 20
 { input: [BloomCarroll, BishopHartley], output: [0]}, // Aug 23
 { input: [BloomCarroll, FisherCatholic], output: [0]}, // Sep 5 
 { input: [BloomCarroll, Circleville], output: [0]}, // Sep 8 

// ================================================ JOHNSTOWN-MONROE ================================= \\

 { input: [JohnstownMonroe, Newark], output: [1]}, // Aug 17
 { input: [JohnstownMonroe, TheWellingtonSchool], output: [1]}, //Aug 27
 { input: [JohnstownMonroe, Heath], output: [0]}, //Aug 30
 { input: [JohnstownMonroe, Fairbanks], output: [1]}, //Sep 4
 { input: [JohnstownMonroe, LickingValley], output: [0]}, //Sep 6

// ============================================== BISHOP HARTLEY ======================================= \\

 { input: [BishopHartley, Berlin], output: [1]}, // Aug 21
 { input: [BishopHartley, BloomCarroll], output: [1]}, // Aug 23
 { input: [BishopHartley, Bexley], output: [1]}, // Aug 27
 { input: [BishopHartley, TheWellingtonSchool], output: [1]}, // Aug 30

// ===================================================== COLUMBUS SCHOOL FOR GIRLS =============================================== \\

 { input: [ColumbusSchoolForGirls, WorthingtonChristianSchool], output: [1]}, // Aug 21
 { input: [ColumbusSchoolForGirls, FisherCatholic], output: [0]}, // Aug 30
 { input: [ColumbusSchoolForGirls, Whetstone], output: [0]}, // Sep 4
 { input: [ColumbusSchoolForGirls, TheWellingtonSchool], output: [1]}, // Sep 6

// =========================================== WORTHINGTON CHRISTIAN ============================================ \\

 { input: [WorthingtonChristianSchool, ColumbusSchoolForGirls], output: [0]}, // Aug 21
 { input: [WorthingtonChristianSchool, WestLibertySalem], output: [0]}, // Aug 25
 { input: [WorthingtonChristianSchool, ColumbusAcademy], output: [0]}, // Aug 25

// ================================== WHITEHALL-YEARLING ======================= \\

{ input: [WhitehallYearling, London], output: [1]}, //Aug 22
{ input: [WhitehallYearling, Bexley], output: [1]}, //Aug 29
{ input: [WhitehallYearling, GrandviewHeights], output: [1]}, //Sep 5

// ==================================== COLUMBUS ACADEMY ======================= \\

 { input: [ColumbusAcademy, CentralCrossing], output: [0]}, // Aug 21
 { input: [ColumbusAcademy, BishopReady], output: [0]}, // Aug 23
 { input: [ColumbusAcademy, Fairbanks], output: [0]}, // Aug 25
 { input: [ColumbusAcademy, BishopRosecrans], output: [1]}, // Aug 29
 { input: [ColumbusAcademy, WorthingtonChristianSchool], output: [1]}, // Sep 5

// ========================================= BISHOP ROSECRANS ================== \\

 { input: [BishopRosecrans, Zanesville], output: [0]}, // Aug 17
 { input: [BishopRosecrans, LibertyUnion], output: [0]}, // Aug 20
 { input: [BishopRosecrans, Chillicothe], output: [0]}, // Aug 23
 { input: [BishopRosecrans, LickingHeights], output: [0]}, // Aug 27
 { input: [BishopRosecrans, ColumbusAcademy], output: [1]}, // Aug 29
 { input: [BishopRosecrans, RiverView], output: [0]}, // Sep 3
 { input: [BishopRosecrans, Dover], output: [0]}, // Sep 6

// ========================================== MIAMI VALLEY SCHOOL ======================== \\

 { input: [MiamiValleySchool, Anna], output: [1]}, // Aug 25
 { input: [MiamiValleySchool, YellowSprings], output: [0]}, // Aug 28
 { input: [MiamiValleySchool, FranklinMonroe], output: [0]}, // Sep 8

// ============================ FAIRBANKS ========================== \\

 { input: [Fairbanks, WestJefferson], output: [0]}, // Aug 18
 { input: [Fairbanks, FisherCatholic], output: [0]}, // Aug 21
 { input: [Fairbanks, Northeastern], output: [0]}, // Aug 23
 { input: [Fairbanks, ColumbusAcademy], output: [1]},// Aug 25
 { input: [Fairbanks, MadisonPlains], output: [0]},// Aug 30
 { input: [Fairbanks, JohnstownMonroe], output: [0]},// Sep 4


// ================================ GRANDVIEW HEIGHTS ================== \\

 { input: [GrandviewHeights, SummitCOuntryDaySchool], output: [1]}, // Aug 18
 { input: [GrandviewHeights, WorthingtonKilbourne], output: [1]}, // Aug 23
 { input: [GrandviewHeights, MansfieldChristianSchool], output: [0]}, // Sep 1
 { input: [GrandviewHeights, WhitehallYearling], output: [0]}, // Sep 5

// ==================================== LANCASTER ====================== \\

 { input: [Lancaster, FairfieldUnion], output: [0]}, // Aug 17
 { input: [Lancaster, Logan], output: [0]}, // Aug 21
 { input: [Lancaster, Newark], output: [1]}, // Aug 28
 { input: [Lancaster, CentralCrossing], output: [1]}, // Aug 30
 { input: [Lancaster, GroveportMadison], output: [0]}, // Sep 4

// ==================================== BEXLEY ======================= \\

 { input: [Bexley, BishopHartley], output: [0]}, // Aug 27
 { input: [Bexley, WhitehallYearling], output: [0]}, // Aug 29
 { input: [Bexley, Loudonville], output: [0]}, // Sep 3

// =================================== BISHOP READY ================ \\

 { input: [BishopReady, ColumbusAcademy], output: [1]}, // Aug 23
 { input: [BishopReady, London], output: [0]}, // Aug 30
 { input: [BishopReady, StFrancisDeSales], output: [1]}, // Sep 6

// ============================= FISHER CATHOLIC ===================== \\

 { input: [FisherCatholic, Pleasant], output: [0]}, // Aug 17
 { input: [FisherCatholic, Fairbanks], output: [1]}, //Aug 21
 { input: [FisherCatholic, ColumbusSchoolForGirls], output: [1]}, //Aug 30
 { input: [FisherCatholic, BloomCarroll], output: [1]}, //Sep 5

// ============================= CENTRAL CROSSING ==================== \\

 { input: [CentralCrossing, ColumbusAcademy], output: [1]}, // Aug 21
 { input: [CentralCrossing, Lancaster], output: [0]}, // Aug 30
 { input: [CentralCrossing, Reynoldsburg], output: [1]}, //Sep 4

// ======================================================= END =============================================================== \\
 // { input: [], output: []},

])
//Aug 20 wrong 69%
//Aug 27 wrong 1%
//Aug 30 correct 79%
//Sep 6 wrong 64%
//Sep 10 90%
//Wrong: 3
//Correct: 1

const output = network.run([ColumbusSchoolForGirls, TheWellingtonSchool]); //Chance of wellington winning
let fullOutput = output * 100

if (fullOutput >=50) {
  console.log("Wellington will most likely win")
  console.log(`With a chance of ${Math.floor(fullOutput)}%`)
} else {
  console.log("Wellington will most likely lose")
  console.log(`With a chance of ${Math.floor(fullOutput)}%`)
}