var planets = [
	{
		name: "mercury",
		info: "Mercury is the closest planet to the Sun and due to its proximity it is not easily seen except during twilight. For every two orbits of the Sun, Mercury completes three rotations about its axis and up until 1965 it was thought that the same side of Mercury constantly faced the Sun. Thirteen times a century Mercury can be observed from the Earth passing across the face of the Sun in an event called a transit, the next will occur on the 9th May 2016.",
		image: "img/mercury.gif",
		factOne: "Mercury does not have any moons or rings.",
		factTwo: "Your weight on Mercury would be 38% of your weight on Earth.",
		factThree: "A day on the surface of Mercury lasts 176 Earth days.",
		factFour: "A year on Mercury takes 88 Earth days.",
		factFive: "Mercury has a diameter of 4,879 km, making it the smallest planet."
	},
	{
		name: "venus",
		info: "Venus is the second planet from the Sun and is the second brightest object in the night sky after the Moon. Named after the Roman goddess of love and beauty, Venus is the second largest terrestrial planet and is sometimes referred to as the sister planet of Earth due the their similar size and mass. The surface of the planet is obscured by an opaque layer of clouds made up of sulphuric acid.",
		image: "img/venus.gif",
		factOne: "Venus does not have any moons or rings.",
		factTwo: "Venus is nearly as big as the Earth with a diameter of 12,104 km.",
		factThree: "A day on the surface of Venus (solar day) would appear to take 117 Earth days.",
		factFour: "A year on Venus takes 225 Earth days.",
		factFive: "The surface temperature on Venus can reach 471 °C."
	},
	{
		name: "earth",
		info: "Earth is the third planet from the Sun and is the largest of the terrestrial planets. The Earth is the only planet in our solar system not to be named after a Greek or Roman deity. The Earth was formed approximately 4.54 billion years ago and is the only known planet to support life.",
		image: "img/earth.gif",
		factOne: "The Earth's rotation is gradually slowing.",
		factTwo: "Earth has a powerful magnetic field. This phenomenon is caused by the nickel-iron core of the planet, coupled with its rapid rotation. This field protects the Earth from the effects of solar wind.",
		factThree: "There is only one natural satellite of the planet Earth.As a percentage of the size of the body it orbits, the Moon is the largest satellite of any planet in our solar system. In real terms, however, it is only the fifth largest natural satellite.",
		factFour: "Earth is the only planet not named after a god.",
		factFive: "The Earth is the densest planet in the Solar System. This varies according to the part of the planet; for example, the metallic core is denser than the crust. The average density of the Earth is approximately 5.52 grams per cubic centimetre."
	},
	{
		name: "mars",
		info: "Mars is the fourth planet from the Sun and is the second smallest planet in the solar system. Named after the Roman god of war, Mars is also often described as the 'Red Planet' due to its reddish appearance. Mars is a terrestrial planet with a thin atmosphere composed primarily of carbon dioxide.",
		image: "img/mars.gif",
		factOne: "Mars and Earth have approximately the same landmass.",
		factTwo: "Mars is home to the tallest mountain in the solar system.",
		factThree: "Mars has the largest dust storms in the solar system.",
		factFour: "There are signs of liquid water on Mars.",
		factFive: "On Mars the Sun appears about half the size as it does on Earth."
	},
	{
		name: "jupiter",
		info: "The planet Jupiter is the fifth planet out from the Sun, and is two and a half times more massive than all the other planets in the solar system combined. It is made primarily of gases and is therefore known as a 'gas giant'.",
		image: "img/jupiter.gif",
		factOne: "Jupiter has the shortest day of all the planets.",
		factTwo: "The Great Red Spot is a huge storm on Jupiter. It has raged for at least 350 years. It is so large that three Earths could fit inside it.",
		factThree: "Jupiter's interior is made of rock, metal, and hydrogen compounds. Below Jupiter's massive atmosphere (which is made primarily of hydrogen), there are layers of compressed hydrogen gas, liquid metallic hydrogen, and a core of ice, rock, and metals.",
		factFour: "Jupiter orbits the Sun once every 11.8 Earth years. From our point of view on Earth, it appears to move slowly in the sky, taking months to move from one constellation to another.",
		factFive: "Jupiter has unique cloud features. The upper atmosphere of Jupiter is divided into cloud belts and zones. They are made primarily of ammonia crystals, sulfur, and mixtures of the two compounds."
	},
	{
		name: "saturn",
		info: "Saturn is the sixth planet from the Sun and the most distant that can be seen with the naked eye. Saturn is the second largest planet and is best known for its fabulous ring system that was first observed in 1610 by the astronomer Galileo Galilei. Like Jupiter, Saturn is a gas giant and is composed of similar gasses including hydrogen, helium and methane.",
		image: "img/saturn.gif",
		factOne: "Saturn can be seen with the naked eye. It is the fifth brightest object in the solar system and is also easily studied through binoculars or a small telescope.",
		factTwo: "Saturn orbits the Sun once every 29.4 Earth years.",
		factThree: "Saturn's upper atmosphere is divided into bands of clouds. The top layers are mostly ammonia ice. Below them, the clouds are largely water ice. Below are layers of cold hydrogen and sulfur ice mixtures.",
		factFour: "Saturn is made mostly of hydrogen. It exists in layers that get denser farther into the planet. Eventually, deep inside, the hydrogen becomes metallic. At the core lies a hot interior.",
		factFive: "Saturn has 150 moons and smaller moonlets."
	},
	{
		name: "uranus",
		info: "Uranus is the seventh planet from the Sun. It's not visible to the naked eye, and became the first planet discovered with the use of a telescope. Uranus is tipped over on its side with an axial tilt of 98 degrees. It is often described as “rolling around the Sun on its side.”",
		image: "img/uranus.gif",
		factOne: "Uranus turns on its axis once every 17 hours, 14 minutes. The planet rotates in a retrograde direction, opposite to the way Earth and most other planets turn.",
		factTwo: "Uranus makes one trip around the Sun every 84 Earth years.",
		factThree: "Uranus hits the coldest temperatures of any planet.",
		factFour: "Uranus is often referred to as an 'ice giant' planet. Like the other gas giants, it has a hydrogen upper layer, which has helium mixed in. Below that is an icy 'mantle, which surrounds a rock and ice core.'",
		factFive: "Uranus' moons are named after characters created by William Shakespeare and Alexander Pope."
	},
	{
		name: "neptune",
		info: "Neptune is the eighth planet from the Sun making it the most distant in the solar system. This gas giant planet may have formed much closer to the Sun in early solar system history before migrating to its present position.",
		image: "img/neptune.gif",
		factOne: "Neptune spins on its axis very rapidly. Its equatorial clouds take 18 hours to make one rotation. This is because Neptune is not solid body.",
		factTwo: "The atmosphere of Neptune is made of hydrogen and helium, with some methane. The methane absorbs red light, which makes the planet appear a lovely blue. High, thin clouds drift in the upper atmosphere.",
		factThree: "Neptune has a very active climate. Large storms whirl through its upper atmosphere, and high-speed winds track around the planet at up 600 meters per second. One of the largest storms ever seen was recorded in 1989. It was called the Great Dark Spot. It lasted about five years.",
		factFour: "Neptune has 14 moons. The most interesting moon is Triton, a frozen world that is spewing nitrogen ice and dust particles out from below its surface. It was likely captured by the gravitational pull of Neptune. It is probably the coldest world in the solar system.",
		factFive: "Neptune has a very thin collection of rings. They are likely made up of ice particles mixed with dust grains and possibly coated with a carbon-based substance."
	},
	{
		name: "pluto",
		info: "Discovered in 1930, Pluto is the second closest dwarf planet to the Sun and was at one point classified as the ninth planet. Pluto is the largest dwarf planet but only the second most massive, with Eris being the most massive.",
		image: "img/pluto.gif",
		factOne: "Pluto was reclassified from a planet to a dwarf planet in 2006.",
		factTwo: "Pluto was discovered on February 18th, 1930 by the Lowell Observatory. For the 76 years between Pluto being discovered and the time it was reclassified as a dwarf planet it completed under a third of its orbit around the Sun.",
		factThree: "Pluto has five known moons.",
		factFour: "Pluto is one third water. This is in the form of water ice which is more than 3 times as much water as in all the Earth's oceans, the remaining two thirds are rock. Pluto's surface is covered with ices, and has several mountain ranges, light and dark regions, and a scattering of craters.",
		factFive: "Pluto has a eccentric and inclined orbit. This takes it between 4.4 and 7.3 billion km from the Sun meaning Pluto is periodically closer to the Sun than Neptune."
	},
	{	
		name: "crazy",
		info: " ",
		image: "img/crazy.gif",
		

	}
];

function getInfo() {
	var planet = document.getElementById('sign').value.toLowerCase();
	checkPlanet(planet)
}

function checkPlanet(planet) {
	for (var i = 0; i < planets.length; i++) {
		if (planets[i].name == planet) {
			$("#image").attr("src", planets[i].image);
			var funFact1 = document.getElementById('two').innerHTML = planets[i].info;
			document.getElementById('header').textContent = "Quick Fun Facts";
			document.getElementById('fact1').textContent = "- " + planets[i].factOne;
			document.getElementById('fact2').textContent = "- " + planets[i].factTwo;
			document.getElementById('fact3').textContent = "- " + planets[i].factThree;
			document.getElementById('fact4').textContent = "- " + planets[i].factFour;
			document.getElementById('fact5').textContent = "- " + planets[i].factFive;
			return
		}
	}
	$("#image").attr("src", planets[9].image);
}

























