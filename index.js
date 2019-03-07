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
const SummitCountryDaySchool = 27; 
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
const Maysville = 47;
const FranklinHeights = 48;
const TreeOfLifeSchool = 49;
const HamiltonTownship = 50;
const AmandaCiearcreek = 51;
const BishopWatterson = 52;
const BigWalnut = 53;
const BuckeyeValley = 54;
const TwinValleySouth = 55;
const Southeastern = 56;
const DaytonChristianSchool = 57;
const LegacyChrstianAcademy = 58;
const Norwood = 59;
const CatholicCentral = 60;
const WestervilleCentral = 61;
const UpperArlington = 62;
const Lakewood = 63;
const Mechanicsburg = 64;
const Briggs = 65;
const Marysville = 66;
const Greenon = 67;
const PickeringtonCentral = 68;
const MountVernon = 69;
const NewPhiladelphia = 70;
const WestervilleSouth = 71;
const PickeringtonNorth = 72;
const LoganElm = 73;
const CristoRey = 74;
const Westland = 75;
const SevenHills = 76;
const Middletown = 77;
const Lincoln = 78;
const ClearFork = 79;
const RiverValley = 80;
const TeaysValley = 81;
const HilliardDavidson = 82;
const Coffman = 83;
const BenjaminLogan = 84;
const WatkinsMemorial = 85;
const TroyChristian = 86;
const Granville = 87;
const Greeneview = 88;
const Ontario = 89;
const JonathanAlder = 90;
const SandyValley = 91;

network.train([

//  ======================= THE WELLINGTON SCHOOL =================================== \\

  { input: [TheWellingtonSchool, BloomCarroll], output: [1]}, //Aug 20
  { input: [TheWellingtonSchool, JohnstownMonroe], output: [0]}, //Aug 27
  { input: [TheWellingtonSchool, BishopHartley], output: [0]}, //Aug 30
  { input: [TheWellingtonSchool, ColumbusSchoolForGirls], output: [0]}, //Sep 6
  { input: [TheWellingtonSchool, WhitehallYearling], output: [0]}, //Sep 12
  { input: [TheWellingtonSchool, Fairbanks], output: [0]}, //Sep 24
  { input: [TheWellingtonSchool, GrandviewHeights], output: [1]}, //Sep 26
  { input: [TheWellingtonSchool, Lancaster], output: [0]}, //Sep 29
  { input: [TheWellingtonSchool, FisherCatholic], output: [0]}, //Oct 10
  { input: [TheWellingtonSchool, CentralCrossing], output: [0]}, //Oct 13
  { input: [TheWellingtonSchool, Pleasant], output: [0]}, //Oct 16
  { input: [TheWellingtonSchool, Fairbanks], output: [0]}, //Oct 18

// ============================================== BLOOM-CARROLL ===================================\\

 { input: [BloomCarroll, TheWellingtonSchool], output: [0]}, // Aug 20
 { input: [BloomCarroll, BishopHartley], output: [0]}, // Aug 23
 { input: [BloomCarroll, FisherCatholic], output: [0]}, // Sep 5 
 { input: [BloomCarroll, Circleville], output: [0]}, // Sep 8 
 { input: [BloomCarroll, Logan], output: [0]}, // Sep 11
 { input: [BloomCarroll, HamiltonTownship], output: [0]}, // Sep 12 
 { input: [BloomCarroll, ColumbusSchoolForGirls], output: [0]}, // Sep 17
 { input: [BloomCarroll, FairfieldUnion], output: [1]}, // Sep 19  
 { input: [BloomCarroll, LibertyUnion], output: [0]}, // Sep 22  
 { input: [BloomCarroll, AmandaCiearcreek], output: [0]}, // Sep 26
 { input: [BloomCarroll, LickingHeights], output: [0]}, // Oct 2
 { input: [BloomCarroll, LoganElm], output: [0]}, // Oct 4 
 { input: [BloomCarroll, JonathanAlder], output: [0]}, // Oct 18

// ===============DONE============ JOHNSTOWN-MONROE ========================= \\

 { input: [JohnstownMonroe, Newark], output: [1]}, // Aug 17
 { input: [JohnstownMonroe, TheWellingtonSchool], output: [1]}, //Aug 27
 { input: [JohnstownMonroe, Heath], output: [0]}, //Aug 30
 { input: [JohnstownMonroe, Fairbanks], output: [1]}, //Sep 4
 { input: [JohnstownMonroe, LickingValley], output: [0]}, //Sep 6
 { input: [JohnstownMonroe, Pleasant], output: [0]}, //Sep 10
 { input: [JohnstownMonroe, Whetstone], output: [0]}, //Sep 12
 { input: [JohnstownMonroe, AmandaCiearcreek], output: [0]}, //Sep 13
 { input: [JohnstownMonroe, WorthingtonChristianSchool], output: [1]}, //Sep 15
 { input: [JohnstownMonroe, FisherCatholic], output: [0]}, //Sep 17
 { input: [JohnstownMonroe, Lakewood], output: [0]}, //Sep 20
 { input: [JohnstownMonroe, NewPhiladelphia], output: [1]}, //Sep 29
 { input: [JohnstownMonroe, WatkinsMemorial], output: [1]}, //Oct 4
 { input: [JohnstownMonroe, ColumbusAcademy], output: [1]}, //Oct 8
 { input: [JohnstownMonroe, Granville], output: [1]}, //Oct 11
 { input: [JohnstownMonroe, LibertyUnion], output: [0]}, //Oct 16
 { input: [JohnstownMonroe, ColumbusAcademy], output: [1]}, //Oct 18

// =========================== BISHOP HARTLEY ============================== \\

 { input: [BishopHartley, Berlin], output: [1]}, // Aug 21
 { input: [BishopHartley, BloomCarroll], output: [1]}, // Aug 23
 { input: [BishopHartley, Bexley], output: [1]}, // Aug 27
 { input: [BishopHartley, TheWellingtonSchool], output: [1]}, // Aug 30
 { input: [BishopHartley, BishopWatterson], output: [1]}, // Sep 6
 { input: [BishopHartley, CentralCrossing], output: [1]}, // Sep 11
 { input: [BishopHartley, BishopReady], output: [0]}, // Sep 13
 { input: [BishopHartley, BigWalnut], output: [1]}, // Sep 15
 { input: [BishopHartley, WestervilleSouth], output: [1]}, // Sep 27
 { input: [BishopHartley, BuckeyeValley], output: [1]}, // Oct 2
 { input: [BishopHartley, ColumbusSchoolForGirls], output: [0]}, // Oct 6
 { input: [BishopHartley, GrandviewHeights], output: [1]}, // Oct 9
 { input: [BishopHartley, WorthingtonChristianSchool], output: [1]}, // Oct 11
 { input: [BishopHartley, HamiltonTownship], output: [0]}, // Oct 15

// =====DONE============== COLUMBUS SCHOOL FOR GIRLS ======================== \\

 { input: [ColumbusSchoolForGirls, WorthingtonChristianSchool], output: [1]}, // Aug 21
 { input: [ColumbusSchoolForGirls, FisherCatholic], output: [0]}, // Aug 30
 { input: [ColumbusSchoolForGirls, Whetstone], output: [0]}, // Sep 4
 { input: [ColumbusSchoolForGirls, TheWellingtonSchool], output: [1]}, // Sep 6
 { input: [ColumbusSchoolForGirls, GroveportMadison], output: [0]}, // Sep 11
 { input: [ColumbusSchoolForGirls, BishopWatterson], output: [1]}, // Sep 13
 { input: [ColumbusSchoolForGirls, BloomCarroll], output: [1]}, // Sep 17
 { input: [ColumbusSchoolForGirls, WestJefferson], output: [0]}, // Sep 25
 { input: [ColumbusSchoolForGirls, GrandviewHeights], output: [1]}, // Sep 29
 { input: [ColumbusSchoolForGirls, CristoRey], output: [0]}, // Oct 2
 { input: [ColumbusSchoolForGirls, BishopReady], output: [0]}, // Oct 4
 { input: [ColumbusSchoolForGirls, BishopHartley], output: [1]}, // Oct 6
 { input: [ColumbusSchoolForGirls, BishopRosecrans], output: [1]}, // Oct 8
 { input: [ColumbusSchoolForGirls, FisherCatholic], output: [0]}, // Oct 16
 { input: [ColumbusSchoolForGirls, GrandviewHeights], output: [1]}, // Oct 18

// ========================== WORTHINGTON CHRISTIAN =============================== \\

 { input: [WorthingtonChristianSchool, ColumbusSchoolForGirls], output: [0]}, // Aug 21
 { input: [WorthingtonChristianSchool, WestLibertySalem], output: [0]}, // Aug 25
 { input: [WorthingtonChristianSchool, ColumbusAcademy], output: [0]}, // Sep 5
 { input: [WorthingtonChristianSchool, Bexley], output: [0]}, // Sep 12
 { input: [WorthingtonChristianSchool, JohnstownMonroe], output: [0]}, // Sep 15
 { input: [WorthingtonChristianSchool, LickingHeights], output: [0]}, // Sep 18
 { input: [WorthingtonChristianSchool, WhitehallYearling], output: [0]}, // Sep 19
 { input: [WorthingtonChristianSchool, BishopRosecrans], output: [0]}, // Oct 6
 { input: [WorthingtonChristianSchool, Fairbanks], output: [0]}, // Oct 8
 { input: [WorthingtonChristianSchool, BishopHartley], output: [0]}, // Oct 11
 { input: [WorthingtonChristianSchool, MadisonPlains], output: [0]}, // Oct 16
 { input: [WorthingtonChristianSchool, BishopReady], output: [0]}, // Oct 18
 
// ================================== WHITEHALL-YEARLING ======================= \\

{ input: [WhitehallYearling, London], output: [1]}, //Aug 22
{ input: [WhitehallYearling, Bexley], output: [1]}, //Aug 29
{ input: [WhitehallYearling, GrandviewHeights], output: [1]}, //Sep 5
{ input: [WhitehallYearling, TheWellingtonSchool], output: [1]}, //Sep 12
{ input: [WhitehallYearling, WorthingtonChristianSchool], output: [1]}, //Sep 19
{ input: [WhitehallYearling, BishopRosecrans], output: [1]}, //Sep 26
{ input: [WhitehallYearling, Westland], output: [1]}, //Oct 6

// ==================================== COLUMBUS ACADEMY ======================= \\

 { input: [ColumbusAcademy, CentralCrossing], output: [0]}, // Aug 21
 { input: [ColumbusAcademy, BishopReady], output: [0]}, // Aug 23
 { input: [ColumbusAcademy, Fairbanks], output: [0]}, // Aug 25
 { input: [ColumbusAcademy, BishopRosecrans], output: [1]}, // Aug 29
 { input: [ColumbusAcademy, WorthingtonChristianSchool], output: [1]}, // Sep 5
 { input: [ColumbusAcademy, BuckeyeValley], output: [0]}, // Sep 12
 { input: [ColumbusAcademy, WestLibertySalem], output: [1]}, // Sep 22
 { input: [ColumbusAcademy, FairfieldUnion], output: [1]}, // Oct 1
 { input: [ColumbusAcademy, JohnstownMonroe], output: [0]}, // Oct 8
 { input: [ColumbusAcademy, TreeOfLifeSchool], output: [0]}, // Oct 16
 { input: [ColumbusAcademy, JohnstownMonroe], output: [0]}, // Oct 18
 
// ========================================= BISHOP ROSECRANS ================== \\

 { input: [BishopRosecrans, Zanesville], output: [0]}, // Aug 17
 { input: [BishopRosecrans, LibertyUnion], output: [0]}, // Aug 20
 { input: [BishopRosecrans, Chillicothe], output: [0]}, // Aug 23
 { input: [BishopRosecrans, LickingHeights], output: [0]}, // Aug 27
 { input: [BishopRosecrans, ColumbusAcademy], output: [0]}, // Aug 29
 { input: [BishopRosecrans, RiverView], output: [0]}, // Sep 3
 { input: [BishopRosecrans, Dover], output: [0]}, // Sep 6
 { input: [BishopRosecrans, Maysville], output: [0]}, // Sep 11
 { input: [BishopRosecrans, GrandviewHeights], output: [1]}, // Sep 15
 { input: [BishopRosecrans, WhitehallYearling], output: [0]}, // Sep 26
 { input: [BishopRosecrans, WorthingtonChristianSchool], output: [1]}, // Oct 6
 { input: [BishopRosecrans, ColumbusSchoolForGirls], output: [0]}, // Oct 8
 { input: [BishopRosecrans, SandyValley], output: [0]}, // Oct 18

// ================================ MIAMI VALLEY SCHOOL ======================== \\

 { input: [MiamiValleySchool, TwinValleySouth], output: [0]}, // Aug 17
 { input: [MiamiValleySchool, Anna], output: [1]}, // Aug 25
 { input: [MiamiValleySchool, Southeastern], output: [0]}, // Aug 27
 { input: [MiamiValleySchool, YellowSprings], output: [0]}, // Aug 28
 { input: [MiamiValleySchool, DaytonChristianSchool], output: [0]}, // Sep 4
 { input: [MiamiValleySchool, Northeastern], output: [0]}, // Sep 6
 { input: [MiamiValleySchool, FranklinMonroe], output: [0]}, // Sep 8
 { input: [MiamiValleySchool, LegacyChrstianAcademy], output: [1]}, // Sep 11
 { input: [MiamiValleySchool, Norwood], output: [1]}, // Sep 15
 { input: [MiamiValleySchool, SevenHills], output: [1]}, // Sep 29
 { input: [MiamiValleySchool, Middletown], output: [0]}, // Oct 2
 { input: [MiamiValleySchool, CatholicCentral], output: [1]}, // Oct 4
 { input: [MiamiValleySchool, TroyChristian], output: [1]}, // Oct 9
 { input: [MiamiValleySchool, Greeneview], output: [0]}, // Oct 13
 { input: [MiamiValleySchool, Northeastern], output: [0]}, // Oct 16
 { input: [MiamiValleySchool, TwinValleySouth], output: [0]}, // Oct 20

// ================DONE============ FAIRBANKS ========================== \\

 { input: [Fairbanks, WestJefferson], output: [0]}, // Aug 18
 { input: [Fairbanks, FisherCatholic], output: [0]}, // Aug 21
 { input: [Fairbanks, Northeastern], output: [0]}, // Aug 23
 { input: [Fairbanks, ColumbusAcademy], output: [1]},// Aug 25
 { input: [Fairbanks, MadisonPlains], output: [0]},// Aug 30
 { input: [Fairbanks, JohnstownMonroe], output: [0]},// Sep 4
 { input: [Fairbanks, GrandviewHeights], output: [1]},// Sep 10
 { input: [Fairbanks, CatholicCentral], output: [1]},// Sep 15
 { input: [Fairbanks, Mechanicsburg], output: [0]},// Sep 20
 { input: [Fairbanks, Greenon], output: [1]},// Sep 22
 { input: [Fairbanks, TheWellingtonSchool], output: [1]},// Sep 24
 { input: [Fairbanks, WestLibertySalem], output: [1]},// Sep 27
 { input: [Fairbanks, Southeastern], output: [0]},// Oct 6
 { input: [Fairbanks, WorthingtonChristianSchool], output: [1]},// Oct 8
 { input: [Fairbanks, Greeneview], output: [1]},// Oct 11
 { input: [Fairbanks, WestJefferson], output: [0]},// Oct 16
 { input: [Fairbanks, TheWellingtonSchool], output: [1]},// Oct 18

// ================================ GRANDVIEW HEIGHTS ================== \\

 { input: [GrandviewHeights, SummitCountryDaySchool], output: [1]}, // Aug 18
 { input: [GrandviewHeights, WorthingtonKilbourne], output: [1]}, // Aug 23
 { input: [GrandviewHeights, MansfieldChristianSchool], output: [0]}, // Sep 1
 { input: [GrandviewHeights, WhitehallYearling], output: [0]}, // Sep 5
 { input: [GrandviewHeights, Fairbanks], output: [0]}, // Sep 10
 { input: [GrandviewHeights, Pleasant], output: [0]}, // Sep 12
 { input: [GrandviewHeights, BishopRosecrans], output: [0]}, // Sep 15
 { input: [GrandviewHeights, Bexley], output: [0]}, // Sep 20
 { input: [GrandviewHeights, TheWellingtonSchool], output: [0]}, // Sep 26
 { input: [GrandviewHeights, ColumbusSchoolForGirls], output: [0]}, // Sep 29
 { input: [GrandviewHeights, MansfieldChristianSchool], output: [0]}, // Oct 1
 { input: [GrandviewHeights, BishopHartley], output: [0]}, // Oct 9
 { input: [GrandviewHeights, Zanesville], output: [0]}, // Oct 11
 { input: [GrandviewHeights, CristoRey], output: [0]}, // Oct 16
 { input: [GrandviewHeights, ColumbusSchoolForGirls], output: [0]}, // Oct 18

// ==================================== LANCASTER ====================== \\

 { input: [Lancaster, FairfieldUnion], output: [0]}, // Aug 17
 { input: [Lancaster, Logan], output: [0]}, // Aug 21
 { input: [Lancaster, Newark], output: [1]}, // Aug 28
 { input: [Lancaster, CentralCrossing], output: [1]}, // Aug 30
 { input: [Lancaster, GroveportMadison], output: [0]}, // Sep 4
 { input: [Lancaster, Circleville], output: [0]}, // Sep 11
 { input: [Lancaster, PickeringtonCentral], output: [1]}, // Sep 20
 { input: [Lancaster, MountVernon], output: [0]}, // Sep 22
 { input: [Lancaster, PickeringtonNorth], output: [1]}, // Sep 25
 { input: [Lancaster, TheWellingtonSchool], output: [1]}, // Sep 29
 { input: [Lancaster, Lincoln], output: [1]}, // Oct 2
 { input: [Lancaster, Reynoldsburg], output: [1]}, // Oct 9
 { input: [Lancaster, Chillicothe], output: [0]}, // Oct 13

// ==============DONE====================== BEXLEY ================== \\

 { input: [Bexley, BishopHartley], output: [0]}, // Aug 27
 { input: [Bexley, WhitehallYearling], output: [0]}, // Aug 29
 { input: [Bexley, Loudonville], output: [0]}, // Sep 3
 { input: [Bexley, WorthingtonChristianSchool], output: [1]}, // Sep 12
 { input: [Bexley, WestervilleCentral], output: [1]}, // Sep 15
 { input: [Bexley, GrandviewHeights], output: [1]}, // Sep 20
 { input: [Bexley, RiverView], output: [1]}, // Sep 29
 { input: [Bexley, ClearFork], output: [1]}, // Oct 6
 { input: [Bexley, StFrancisDeSales], output: [1]}, // Oct 8
 { input: [Bexley, JonathanAlder], output: [1]}, // Oct 15

// ============DONE========== Tree of Life School ======================== \\

 { input: [TreeOfLifeSchool, FisherCatholic], output: [1]}, // Sep 10
 { input: [TreeOfLifeSchool, LibertyUnion], output: [1]}, // Sep 13
 { input: [TreeOfLifeSchool, BishopReady], output: [1]}, // Sep 17
 { input: [TreeOfLifeSchool, RiverValley], output: [1]}, // Sep 27
 { input: [TreeOfLifeSchool, AmandaCiearcreek], output: [1]}, // Oct 1
 { input: [TreeOfLifeSchool, WestJefferson], output: [1]}, // Oct 2
 { input: [TreeOfLifeSchool, HamiltonTownship], output: [0]}, // Oct 6
 { input: [TreeOfLifeSchool, ColumbusAcademy], output: [1]}, // Oct 16

// =================DONE======== FISHER CATHOLIC ===================== \\

 { input: [FisherCatholic, Pleasant], output: [0]}, // Aug 17
 { input: [FisherCatholic, Fairbanks], output: [1]}, //Aug 21
 { input: [FisherCatholic, ColumbusSchoolForGirls], output: [1]}, //Aug 30
 { input: [FisherCatholic, BloomCarroll], output: [1]}, //Sep 5
 { input: [FisherCatholic, TreeOfLifeSchool], output: [0]}, //Sep 10
 { input: [FisherCatholic, HamiltonTownship], output: [0]}, //Sep 11
 { input: [FisherCatholic, JohnstownMonroe], output: [1]}, //Sep 17
 { input: [FisherCatholic, FairfieldUnion], output: [1]}, //Sep 24
 { input: [FisherCatholic, LoganElm], output: [0]}, //Sep 26
 { input: [FisherCatholic, Lakewood], output: [0]}, //Oct 1
 { input: [FisherCatholic, TeaysValley], output: [1]}, //Oct 3
 { input: [FisherCatholic, Circleville], output: [0]}, //Oct 6
 { input: [FisherCatholic, TheWellingtonSchool], output: [1]}, //Oct 10
 { input: [FisherCatholic, ColumbusSchoolForGirls], output: [1]}, //Oct 16

// ============================= CENTRAL CROSSING ==================== \\

 { input: [CentralCrossing, ColumbusAcademy], output: [1]}, // Aug 21
 { input: [CentralCrossing, Lancaster], output: [0]}, // Aug 30
 { input: [CentralCrossing, Reynoldsburg], output: [1]}, //Sep 4  
 { input: [CentralCrossing, BishopHartley], output: [0]}, //Sep 11
 { input: [CentralCrossing, UpperArlington], output: [1]}, //Sep 13
 { input: [CentralCrossing, Marysville], output: [1]}, //Sep 20
 { input: [CentralCrossing, HilliardDavidson], output: [1]}, //Sep 25
 { input: [CentralCrossing, Coffman], output: [1]}, //Oct 2
 { input: [CentralCrossing, Westland], output: [0]}, //Oct 9
 { input: [CentralCrossing, Chillicothe], output: [0]}, //Oct 11
 { input: [CentralCrossing, TheWellingtonSchool], output: [1]}, //Oct 13

// ============DONE================== PLEASANT ================================ \\

 { input: [Pleasant, FisherCatholic], output: [1]}, //Aug 17
 { input: [Pleasant, HamiltonTownship], output: [1]}, //Sep 1
 { input: [Pleasant, RiverValley], output: [1]}, //Sep 8
 { input: [Pleasant, JohnstownMonroe], output: [1]}, //Sep 10
 { input: [Pleasant, GrandviewHeights], output: [1]}, //Sep 12
 { input: [Pleasant, BenjaminLogan], output: [1]}, //Sep 15
 { input: [Pleasant, BuckeyeValley], output: [1]}, //Sep 18
 { input: [Pleasant, ClearFork], output: [1]}, //Oct 1
 { input: [Pleasant, WestJefferson], output: [1]}, //Oct 6
 { input: [Pleasant, BishopReady], output: [1]}, //Oct 8
 { input: [Pleasant, Ontario], output: [1]}, //Oct 10
 { input: [Pleasant, RiverValley], output: [0]}, //Oct 11
 { input: [Pleasant, TheWellingtonSchool], output: [1]}, //Oct 16

// ======================================================= END =============================================================== \\
 // { input: [], output: []},

])
//Aug 20 wrong 69%
//Aug 27 wrong 1%
//Aug 30 correct 79%
//Sep 6 correct 64%
//Sep 12 correct 89%
//Sep 24 Correct 71%
//Sep 26 wrong 73%
//Sep 29 corrct 75%
//Oct 10 correct 95%
//Oct 13 correct 92%
//Oct 16 correct 90%
//Oct 18 correct 95%
//Oct 24 wrong 95%

//Wrong: 4
//Correct: 9

//69% accurate

const output = network.run([WorthingtonChristianSchool, TheWellingtonSchool]); //Chance of wellington winning
let fullOutput = output * 100

if (fullOutput >=50) {
  console.log("Wellington will most likely win")
  console.log(`With a chance of ${Math.round(fullOutput)}%`)
} else {
  console.log("Wellington will most likely lose")
  console.log(`With a chance of ${Math.round(fullOutput)}%`)
}
