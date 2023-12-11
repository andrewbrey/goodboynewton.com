export type Photo = {
	img: string;
	alt: string;
	title: string;
	date: string;
	where: string;
	text: string;
	bg: string;
};

export const PHOTOS: Array<Photo> = [
	{
		img: "bheu7bjpxjope5lxmf13",
		alt: "Newton the golden retriever sitting on his bottom on the turf field at doggy daycare on a bright summer day, smiling at the camera with squinting eyes",
		title: "I Love Daycare!",
		date: "2019-07-03",
		where: "Doggy Daycare, Ballard, WA",
		text: "I love spending the whole day at doggy daycare because I get to follow the people around and sometimes get sprayed by the water hose!",
		bg: "#667644"
	},
	{
		img: "k3ghueosgpotdxzugawc",
		alt: "Newton the golden retriever sitting on his bottom on the sidewalk at twilight. He is wearing his harness for a walk and looking quite cute.",
		title: "I Love Walks With Dad!",
		date: "2019-07-04",
		where: "Ballard, WA",
		text: "Sometimes Dad notices that I look extra cute on our walks and stops to take a picture, so I make sure to pose and make my ears as fluffy as I can!",
		bg: "#344966"
	},
	{
		img: "ywqoynsei8rfmidde6wp",
		alt: "Newton the golden retriever sitting very close to the camera with a concerned look on his face.",
		title: "I Haven't Eaten In Days",
		date: "2019-10-03",
		where: "Ballard, WA",
		text: "Through years of experimenting, I've found that the best way to let Mom and Dad know that I haven't eaten in like 3 days is to get right in their face and look concerned.",
		bg: "#5e676c"
	},
	{
		img: "gsvqyxf5ifqg3cc4f19d",
		alt: "Newton the baby golden retriever sitting on his bottom looking keenly up at the camera. He is next to his favorite dog toy and his tail is very small.",
		title: "Puppy Blubber!",
		date: "2013-03-31",
		where: "Fort Collins, CO",
		text: "I just woke up from a power nap, I found my favorite toy, and my fat rolls are lookin' extra cute — is it play time now?",
		bg: "#432725"
	}
];
