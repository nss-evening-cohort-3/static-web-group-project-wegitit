var goals = [];

// Sylvia
var dream5 = {
 name: "Event Video Making",
 imageUrl: "http://www.stelazaharieva.com/wp-content/uploads/2015/10/0_60-160x160.jpg",
 description: "Wedding, Traveling, Bridal Shower... We give you the top notch of video making experience to record your big moment! From video shooting to editting.",
 price: "$35 (per hour)",
 buttonLink: "index.html",
 buttonText: "read more"
};
goals.push(dream5);

var dream6 = {
 name: "Birthday Celebration",
 imageUrl: "http://ecx.images-amazon.com/images/I/519s2D86nmL._AC_UL160_SR160,160_.jpg",
 description: "Being alone on birthday? Don't worry, we could pretend to be your friends and give you the whole package of birthday celebration, dinner, superise party, gift...",
 price: "$25 (per hour)",
 buttonLink: "index.html",
 buttonText: "read more"
};
goals.push(dream6);
// Abbie
var safari = {
  name: "Go on an African Safari",
  imageUrl: "http://lodges.safari.co.za/infoimg/ezulwini-river-lodge-lion-160.jpg",
  description: "Touch the alien sand and hear the cries of strange birds. - home to unforgettable wild animals and extraordinary scenic beauty. We won’t show you the world. However, ...",
  price: "Starting at $10,000",
  buttonLink: "index.html",
  buttonText: "read more"
};
goals.push(safari);

var childrensBook = {
  name: "Publish a Children's Book",
  imageUrl: "http://cdi.uvm.edu/archives/collections/prospect.gif",
  description: "There's no point being grown-up if you can't be childish sometimes. We will guide you through the process of publishing your first childrens book.",
  price: "$20 per hour",
  buttonLink: "index.html",
  buttonText: "read more"
};
goals.push(childrensBook);

// Max
var softwareKeyNoteSpeaker = {
  name: "Dream Offering 3",
  imageUrl: "http://www.fokalfusion.com/wp-content/uploads/2015/04/Public-Speaking-Icon.png",
  description: "Learn how to become a keynote speaker. Like you, perhaps, I knew that I wanted to be a professional speaker, but I never jumped in. I thought I needed some victory ",
  price: "$80 (per hour)",
  buttonLink: "index.html",
  buttonText: "read more"
};
goals.push(softwareKeyNoteSpeaker);


var softwareOlympics = {
  name: "Olympic Trip",
  imageUrl: "http://media.mlive.com/business/detroit_impact/photo/11432645-small.jpg",
  description: "It's a long, arduous path, but it will be nothing short of worth it if you succeed. If you're ready to commit years to a sport and to yourself, you may have the mindset",
  price: "$120 (per hour)",
  buttonLink: "index.html",
  buttonText: "read more"
};
goals.push(softwareOlympics);

// allyson
var softwareDeveloper = {
  name: "Software Developer",
  imageUrl: "http://wikipcpedia.com/wp-content/uploads/2011/06/Toshiba_T1100.jpg",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem.",
  price: "$150 (per hour)",
  buttonLink: "index.html",
  buttonText: "read more"
};
goals.push(softwareDeveloper);

var musician = {
  name: "Musician",
  imageUrl: "https://s-media-cache-ak0.pinimg.com/236x/b2/1b/b4/b21bb494a8abed7cf7704b002a7ab2d1.jpg",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem.",
  price: "$150 (per hour)",
  buttonLink: "read more"
};
goals.push(musician);

var skiingTheAlps = {
  name: "Skiing The Alps",
  imageUrl: "https://pbs.twimg.com/profile_images/669238564543041536/F8oJKPUG.jpg",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo.",
  price: "$250 (per hour)",
  buttonLink: "index.html",
  buttonText: "read more"
};
goals.push(skiingTheAlps);

var goalElements = document.getElementsByClassName("javascript")[0];


for ( i = 0; i < goals.length ; i++){
  var currentGoal = goals[i];

  var article = "<article class = 'goal'>";
  var section = "<section>";
  var image = "<img src='" + currentGoal.imageUrl + "'>";
  var h3 = "<h3>" + currentGoal.name + "</h3>";
  var description = "<p>" + currentGoal.description + "</p>";
  var h4 = "<h4>" + currentGoal.price + "</h4>";
  var button = "<button><a href='" + currentGoal.buttonLink + "'>" + currentGoal.buttonText + "</a></button></section></article>"


    goalElements.innerHTML += article + section + image + h3 + description + h4 + button;

}
