
var twitterServices = angular.module("twitter.services",[]);

twitterServices.factory("tweetData",function(){
	
	this.dataset =  [
	                 {
	                     "author": "Bill Gates",
	                     "quote": "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
	                     "image": "img/gates.jpg",
	                     "likes": 23,
	                     "liked": 1,
	                     "comments": [
	                         "This is one of the best words that i ahve heard from him.I am looking forward for more stuffs like this from him.",
	                         "It can be better"
	                     ]
	                 },
	                 {
	                     "author": "Steve Jobs",
	                     "quote": "Technology is nothing. What's important is that you have a faith in people that they're basically good and smart, and if you give them tools, they'll do wonderful things with them",
	                     "image": "img/st.jpg",
	                     "likes": 3,
	                     "liked": 0,
	                     "comments": []
	                 },
	                 {
	                     "author": "Steve Jobs",
	                     "quote": "If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it. And, like any great relationship, it just gets better and better as the years roll on.",
	                     "image": "img/st.jpg",
	                     "likes": 12,
	                     "liked": 0,
	                     "comments": [
	                         "Readers have the right to say whatever the fuck they want about a book. Period. They have that right. If they hate the book because the MC says the word “delicious” and the reader believes it’s the Devil’s word and only evil people use it, they can shout from the rooftops “This book is shit and don’t read it” if they want. If they want to write a review entirely about how much they hate the cover, they can if they want. If they want to make their review all about how their dog Foot Foot especially loved to pee on that particular book, they can",
	                         "If you want to write a negative review, don't tickle me gently with your aesthetic displeasure about my work. Unleash the goddamn Kraken"
	                     ]
	                 },
	                 {
	                     "author": "Bill Gates",
	                     "quote": "The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.",
	                     "image": "img/gates.jpg",
	                     "likes": 63,
	                     "liked": 1,
	                     "comments": [
	                         "this is awesome",
	                         "It can be better"
	                     ]
	                 },
	                 {
	                     "author": "Mark zuckerberg",
	                     "quote": "The biggest risk is not taking any risk... In a world that changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
	                     "image": "img/mark.jpg",
	                     "likes": 19,
	                     "liked": 0,
	                     "comments": [
	                         "I pay no attention whatever to anybody's praise or blame. I simply follow my own feelings.",
	                         "It can be better"
	                     ]
	                 },
	                 {
	                     "author": "Steve Jobs",
	                     "quote": "Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while. That's because they were able to connect experiences they've had and synthesize new things.",
	                     "image": "img/st.jpg",
	                     "likes": 109,
	                     "liked": 0,
	                     "comments": [
	                         "this is awesome",
	                         "It can be better"
	                     ]
	                 },
	                 {
	                     "author": "Bill Gates",
	                     "quote": "I think it's fair to say that personal computers have become the most empowering tool we've ever created. They're tools of communication, they're tools of creativity, and they can be shaped by their user.",
	                     "image": "img/gates.jpg",
	                     "likes": 12,
	                     "liked": 1,
	                     "comments": [
	                         "this is awesome",
	                         "It can be better"
	                     ]
	                 },
	                 {
	                     "author": "Mark zuckerberg",
	                     "quote": "Think about what people are doing on Facebook today. They're keeping up with their friends and family, but they're also building an image and identity for themselves, which in a sense is their brand. They're connecting with the audience that they want to connect to. It's almost a disadvantage if you're not on it now.",
	                     "image": "img/mark.jpg",
	                     "likes": 90,
	                     "liked": 1,
	                     "comments": [
	                         "this is awesome",
	                         "It can be better"
	                     ]
	                 },
	                 {
	                     "author": "Mark zuckerberg",
	                     "quote": "Facebook was not originally created to be a company. It was built to accomplish a social mission - to make the world more open and connected.",
	                     "image": "img/mark.jpg",
	                     "likes": 2,
	                     "liked": 0,
	                     "comments": [
	                         "this is awesome",
	                         "It can be better"
	                     ]
	                 },
	                 {
	                     "author": "Steve Jobs",
	                     "quote": "Everyone here has the sense that right now is one of those moments when we are influencing the future.",
	                     "image": "img/st.jpg",
	                     "likes": 6,
	                     "liked": 1,
	                     "comments": [
	                         "this is awesome",
	                         "It can be better"
	                     ]
	                 }
	             ];
	
	this.userprofile = [
	                    {
	                    	"name" : "Jennifer Aniston",
	                    	"image" :"img/jennifer.jpg",
	                    	"description" :" She is an American actress, film director, producer and businesswoman. She gained worldwide recognition for portraying Rachel Green on the television sitcom Friends (1994–2004), a role which earned her an Emmy Award, a Golden Globe Award, and a Screen Actors Guild Award. In 2012, she received a star on the Hollywood Walk of Fame.",
	                    	"posts":[
										{
										    
										    "quote": "Think about what people are doing on Facebook today. They're keeping up with their friends and family, but they're also building an image and identity for themselves, which in a sense is their brand. They're connecting with the audience that they want to connect to. It's almost a disadvantage if you're not on it now.",
										    "likes": 90,
										    "comments": [
										        "this is awesome",
										        "It can be better"
										    ]
										},
										{
										    "quote": "Facebook was not originally created to be a company. It was built to accomplish a social mission - to make the world more open and connected.",
										    "likes": 2,
										    "comments": [
										        "this is awesome",
										        "It can be better"
										    ]
										},
										{
										    "quote": "Everyone here has the sense that right now is one of those moments when we are influencing the future.",
										    "likes": 6,
										    "comments": [
										        "this is awesome",
										        "It can be better"
										    ]
										}	
	                    	         ]
	                    		
	                    }
	                    ];
	                
	
	return{
		dataset : this.dataset,
		userprofile : this.userprofile
	}
	                         
	});