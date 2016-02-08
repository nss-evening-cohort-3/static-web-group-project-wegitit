var goals = [];
// allyson
var softwareDeveloper = {
	name: "Software Developer",
	imageUrl: "http://wikipcpedia.com/wp-content/uploads/2011/06/Toshiba_T1100.jpg",
	description: "a;lsdkjfa;sdlifkjas;diorjweql/;ajr",
	price: "$150 (per hour)",
	buttonLink: "index.html",
	buttonText: "make appointment"
};
goals.push(softwareDeveloper);

var musician = {
	name: "Musician",
	imageUrl: "https://s-media-cache-ak0.pinimg.com/236x/b2/1b/b4/b21bb494a8abed7cf7704b002a7ab2d1.jpg",
	description: "a;lsdkjfa;sdlifkjas;diorjweql/;ajr",
	price: "$150 (per hour)",
	buttonLink: "index.html",
	buttonText: "make appointment"
};
goals.push(musician);

// Sylvia
var dream5 = {
 name: "Event Video Making",
 imageUrl: "http://www.stelazaharieva.com/wp-content/uploads/2015/10/0_60-160x160.jpg",
description: "Wedding, Traveling, Bridal Shower... We give you the top notch of video making experience to record your big moment! From video shooting to editting.",
 price: "$35 (per hour)",
 buttonLink: "index.html",
 buttonText: "make appointment"
};
goals.push(dream5);

var dream6 = {
 name: "Birthday Celebration",
 imageUrl: "http://ecx.images-amazon.com/images/I/519s2D86nmL._AC_UL160_SR160,160_.jpg",
description: "Being alone on birthday? Don't worry, we could pretend to be your friends and give you the whole package of birthday celebration, dinner, superise party, gift...",
 price: "$25 (per hour)",
 buttonLink: "index.html",
 buttonText: "make appointment"
};
goals.push(dream6);

// Abbie
var safari = {
  name: "Go on an African Safari",
  imageUrl: "http://lodges.safari.co.za/infoimg/ezulwini-river-lodge-lion-160.jpg",
  description: "Touch the alien sand and hear the cries of strange birds.",
  price: "Starting at $10,000",
  buttonLink: "index.html",
  buttonText: "Schedule"
};
goals.push(safari);

var childrensBook = {
  name: "Publish a Children's Book",
  imageUrl: "http://cdi.uvm.edu/archives/collections/prospect.gif",
  description: "There's no point being grown-up if you can't be childish sometimes.",
  price: "$20 per hour",
  buttonLink: "index.html",
  buttonText: "Schedule"
};
goals.push(childrensBook);

// Max
var softwareKeyNoteSpeaker = {
  name: "Dream Offering 3",
  imageUrl: "http://www.fokalfusion.com/wp-content/uploads/2015/04/Public-Speaking-Icon.png",
  description: "Learn how to become a keynote speaker",
  price: "$80 (per hour)",
  buttonLink: "index.html",
  buttonText: "make appointment"
};
goals.push(softwareKeyNoteSpeaker);


var softwareOlympics = {
  name: "Dream Offering 2",
  imageUrl: "http://media.mlive.com/business/detroit_impact/photo/11432645-small.jpg",
  description: "A trip to the Olympics for a Day",
  price: "$120 (per hour)",
  buttonLink: "index.html",
  buttonText: "make appointment"
};
goals.push(softwareOlympics);

var goalElements = document.getElementsByClassName("javascript")[0];


for ( i = 0; i < goals.length ; i++){
	// if (goals[i].buttonText)
	{
		var currentgoal = goals[i];
		goalElements.innerHTML += '<article class="col-1-3"><h2 class="prodH">'+goals[i].name+'</h2><table id="wrapper"><tr><td><img src="'+goals[i].imageUrl+'"></td></tr></table><p class="dscrpt">'+goals[i].description+'</p><p class="price">'+goals[i].price+'</p></article>'
}
};

