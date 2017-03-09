function horoscopeObject(name, upperMonth, upperDay, horoscope) {
	this.name = name;
	this.upperMonth = upperMonth;
	this.upperDay = upperDay;
	this.horoscope = horoscope;
}

var capricorn = new horoscopeObject("CAPRICORN",1,19,"Just don't even leave the house!");
var aquarius = new horoscopeObject("AQUARIUS",2,18,"You're a freaking gossip!");
var pisces = new horoscopeObject("PISCES",3,20,"You're paranoid!");
var aries = new horoscopeObject("ARIES",4,19,"You work too hard!");
var taurus = new horoscopeObject("TAURUS",5,20,"You're too sexually promiscuous!");
var gemini = new horoscopeObject("GEMINI",6,20,"You're too messy!");
var cancer = new horoscopeObject("CANCER",7,22,"You stay too busy!");
var leo = new horoscopeObject("LEO",8,22,"You are a perfect MOFO!");
var virgo = new horoscopeObject("VIRGO",9,22,"You don't get along with people!");
var libra = new horoscopeObject("LIBRA",10,22,"You're mean to people!");
var scorpio = new horoscopeObject("SCORPIO",11,21,"You're broke!");
var sagittarius = new horoscopeObject("SAGITTARIUS",12,21,"You're careless!");

//Array of zodiac sign objects
var signArray = [capricorn, aquarius, pisces, aries, taurus, gemini,
				 cancer, leo, virgo, libra, scorpio, sagittarius]

//function called on click of first button for zodiac sign entry
function horoscope() {
	//set initial value to false
	var signMatch = false
	//bring in user's entry
	var userSign = document.getElementById("sign").value
	//I want to clean up their entry if they enter the
	//correct letters, but mixed capital letters and spaces
	userSign = userSign.toUpperCase()
	//Don't ask.  I just googled this.  Removes all spaces.
	userSign = userSign.replace(/\s/g,'')

	//Test to see if they entered a sign and output horoscope.
	for (var i = 0; i < signArray.length; i++) {
		if (userSign == signArray[i].name) {
			signMatch = true
			document.getElementById("output").innerHTML =
			signArray[i].name + "<br><br>" + signArray[i].horoscope
		}
	}
	//If they did not enter a matchable zodiac sign, gives user error message
	if (!signMatch) {
		var signList = ""
		for (i = 0; i < signArray.length; i++) {
			signList = signList + (i+1) + ". " + signArray[i].name + "<br>"
		}
		document.getElementById("output").innerHTML =
		"Are you sure you spelled that correctly? " +
		"Please type one of the following and try again:<br><br>"
		 + signList
	}
}
//function called on click of second button
function horoscopeDate() {
	//set initial value to false
	var signMatch = false
	//bring in user's entries of Birth month and day
	var userMonth = document.getElementById("month").value
	var userDay = document.getElementById("day").value
	//I want to clean up their entry of any spaces - if it matters
	//and convert strings to numbers
	userMonth = userMonth.replace(/\s/g,'')
	userDay = userDay.replace(/\s/g,'')
	userMonth = Number(userMonth)
	userDay = Number(userDay)
	//Test to see what their zodiac sign is and output horoscope if non-error.
	for (var i = 0; i < signArray.length; i++) {
		if (userMonth == signArray[i].upperMonth) {
			if (userDay <= signArray[i].upperDay) {
				signMatch = true
				document.getElementById("output").innerHTML =
				signArray[i].name + "<br><br>" + signArray[i].horoscope
			}
			else if (userDay > signArray[i].upperDay) {
				signMatch = true
				if (userMonth != 12) {
					document.getElementById("output").innerHTML =
					signArray[i+1].name + "<br><br>" + signArray[i+1].horoscope
				}
				else if (userMonth = 12) {
					document.getElementById("output").innerHTML =
					signArray[0].name + "<br><br>" + signArray[0].horoscope
				}
				//else do nothing
			}
			//else do nothing
		}
		//else do nothing
	}
	//if no match, give error message
	if (!signMatch) {
		document.getElementById("output").innerHTML =
		"Are you sure you put in a correct month and day? " +
		"Please fix your numeric month and day and try again."
	}
}
