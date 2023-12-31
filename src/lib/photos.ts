export type Photo = {
	img: string;
	// TODO: this only works with a fixed height & width, and requires a crop value. Maybe this can't really be brought back with the current site layout?
	// imgGravity?:
	// 	| "north_east"
	// 	| "north"
	// 	| "north_west"
	// 	| "west"
	// 	| "south_west"
	// 	| "south"
	// 	| "south_east"
	// 	| "east"
	// 	| "center"
	// 	| "auto";
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
		title: "I Haven't Eaten in Days",
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
	},
	{
		img: "pvsudrmbvzmwxelwpklk",
		alt: "Newton the teenage golden retriever sitting on his bottom on top of a box that is too small to fully fit him. One of his legs hangs off the side and he seems ok with the fact that he may fall off.",
		title: "Balance Master",
		date: "2013-06-05",
		where: "Fort Collins, CO",
		text: "Sometimes I like to sit places that aren't quite big enough for me anymore, just to check and see how big I'm getting!",
		bg: "#2E2039"
	},
	{
		img: "krzphvomxalk9ymis3ww",
		alt: "Newton the golden retriever",
		title: "This Is So Comfy!",
		date: "2022-07-08",
		where: "The Mountains of WA",
		text: "Mom, when we get home, can you get me my very own cloud blanket so I am always so comfy?",
		bg: "#482E17"
	},
	{
		img: "aabcgr1z1xigo38uayqs",
		alt: "Newton the golden retriever",
		title: "How Much Longer?",
		date: "2014-01-31",
		where: "Denver, CO",
		text: "",
		bg: "#332E32"
	},
	{
		img: "aalfmnod60jgutmku4ip",
		alt: "Newton the golden retriever",
		title: "Hurry Up Daaahhhd",
		date: "2023-02-02",
		where: "Olympia, WA",
		text: "",
		bg: "#1C1D1A"
	},
	{
		img: "b1ldnjdlm3l7ebvg6mbq",
		alt: "Newton the golden retriever",
		title: "Rain Zoomies in 3...2...",
		date: "2023-11-30",
		where: "Ballard, WA",
		text: "",
		bg: "#332E22"
	},
	{
		img: "bacohhll8zmz5m5ubyry",
		alt: "Newton the golden retriever",
		title: "Give Us Both Treats, But Me First",
		date: "2016-01-09",
		where: "Englewood, CO",
		text: "",
		bg: "#6B4639"
	},
	{
		img: "bqedjjh1sjnmt7bxcvvh",
		alt: "Newton the golden retriever",
		title: "Good Gas Pumpin' Dad!",
		date: "2021-09-21",
		where: "Ballard, WA",
		text: "",
		bg: "#2B343C"
	},
	{
		img: "bsbm7agmmdjwfzkeepnm",
		alt: "Newton the golden retriever",
		title: "I'm a Good Sharer",
		date: "2018-03-13",
		where: "Englewood, CO",
		text: "",
		bg: "#54554E"
	},
	{
		img: "bu05wed4xutcj0z5hk0h",
		alt: "Newton the golden retriever",
		title: "When Is Play Time?",
		date: "2013-08-26",
		where: "Fort Collins, CO",
		text: "",
		bg: "#363029"
	},
	{
		img: "bwrcgmms2fhzw8srfb6b",
		alt: "Newton the golden retriever",
		title: "Dinner Time?",
		date: "2021-08-19",
		where: "Ballard, WA",
		text: "",
		bg: "#50371F"
	},
	{
		img: "c2fscw9cwmmps7hihjgw",
		alt: "Newton the golden retriever",
		title: "Helpin' Dad Work",
		date: "2023-03-14",
		where: "Olympia, WA",
		text: "",
		bg: "#303B4D"
	},
	{
		img: "ceogc8rvbm2ccwlhdo7m",
		alt: "Newton the golden retriever",
		title: "Elevator Vibes",
		date: "2021-05-25",
		where: "Ballard, WA",
		text: "",
		bg: "#271E16"
	},
	{
		img: "cgeoa5efm6umfpoqjtyg",
		alt: "Newton the golden retriever",
		title: "It's Professor Newton to You Dad",
		date: "2013-12-30",
		where: "Fort Collins, CO",
		text: "",
		bg: "#11080B"
	},
	{
		img: "chrddnmp6lflc9ycw8zf",
		alt: "Newton the golden retriever",
		title: "I'm A Wizard Dahd!",
		date: "2023-02-10",
		where: "Olympia, WA",
		text: "Accio kibbles amiright? heehhh... unless?",
		bg: "#44452F"
	},
	{
		img: "cmb3usezfpcmrhqwlugc",
		alt: "Newton the golden retriever",
		title: "It's The Best One Yet!",
		date: "2023-03-15",
		where: "Olympia, WA",
		text: "",
		bg: "#2F3E1E"
	},
	{
		img: "f5fpcoopbykubatnkvnl",
		alt: "Newton the golden retriever",
		title: "Personal Private Yogurt",
		date: "2022-03-20",
		where: "Ballard, WA",
		text: "",
		bg: "#493527"
	},
	{
		img: "d0uissz1sg1brmxqygez",
		alt: "Newton the golden retriever",
		title: "Let's Have Snacks!",
		date: "2022-07-28",
		where: "Ballard, WA",
		text: "",
		bg: "#44403B"
	},
	{
		img: "d6rc5zniyscjbpkvgydt",
		alt: "Newton the golden retriever",
		title: "Told You I Fit Mom",
		date: "2018-02-01",
		where: "Englewood, CO",
		text: "",
		bg: "#421B0F"
	},
	{
		img: "dehkjtz1gndipwcgsd1v",
		alt: "Newton the golden retriever",
		title: "Look I'm A Bull, Heehhh",
		date: "2013-11-22",
		where: "Fort Collins, CO",
		text: "",
		bg: "#3C2216"
	},
	{
		img: "df9orngzav0ogv2r7xhv",
		alt: "Newton the golden retriever",
		title: "Porch Swing Chillin'",
		date: "2013-07-21",
		where: "Denver, CO",
		text: "",
		bg: "#3F3735"
	},
	{
		img: "dfgpe1yaavxpwhqbkogn",
		alt: "Newton the golden retriever",
		title: "Let's Get Rollin'",
		date: "2023-11-11",
		where: "Ballard, WA",
		text: "",
		bg: "#272928"
	},
	{
		img: "dhc4odtgctbr68hm7ywr",
		alt: "Newton the golden retriever",
		title: "Sploooot",
		date: "2014-01-24",
		where: "Littleton, CO",
		text: "",
		bg: "#36201D"
	},
	{
		img: "di4znyjftdkqvcwtorsc",
		alt: "Newton the golden retriever",
		title: "Are You Commin' In or What?",
		date: "2013-07-12",
		where: "Denver, CO",
		text: "",
		bg: "#613016"
	},
	{
		img: "dvc10rbewbwxhzrqvrvb",
		alt: "Newton the golden retriever",
		title: "Habby Crisbas Everyone!",
		date: "2019-12-24",
		where: "Edmonds, WA",
		text: "",
		bg: "#403A2C"
	},
	{
		img: "e3tguwt3jkwrohmr7ngo",
		alt: "Newton the golden retriever",
		title: "My First Swim!",
		date: "2013-07-13",
		where: "Monument, CO",
		text: "",
		bg: "#3C2F0D"
	},
	{
		img: "ei0mr3zkuxlcaulickbt",
		alt: "Newton the golden retriever",
		title: "Still Splooootin'",
		date: "2020-09-13",
		where: "Ballard, WA",
		text: "",
		bg: "#3C2E23"
	},
	{
		img: "eigo37ylbmoegok0ycgj",
		alt: "Newton the golden retriever",
		title: "Tug Of Pizza!",
		date: "2022-01-25",
		where: "Ballard, WA",
		text: "",
		bg: "#322820"
	},
	{
		img: "eps4cxdxjtpzvzadftsk",
		alt: "Newton the golden retriever",
		title: "World Cup Snuggle Party",
		date: "2022-12-10",
		where: "Ballard, WA",
		text: "",
		bg: "#312019"
	},
	{
		img: "fuyfqdnn1eygwggv1rtp",
		alt: "Newton the golden retriever",
		title: "What's Over There?",
		date: "2023-05-13",
		where: "Ballard, WA",
		text: "",
		bg: "#233D12"
	},
	{
		img: "g6urjgbd5rapmkr9oevz",
		alt: "Newton the golden retriever",
		title: "Tiny Stick! Tiny Stick!",
		date: "2023-02-25",
		where: "Olympia, WA",
		text: "",
		bg: "#2F3436"
	},
	{
		img: "gir6u3h71oe9elltqgya",
		alt: "Newton the golden retriever",
		title: "I Love It Here Dahd!",
		date: "2016-03-08",
		where: "Englewood, CO",
		text: "",
		bg: "#212134"
	},
	{
		img: "gjvmw2nhrdtutyg1clos",
		alt: "Newton the golden retriever",
		title: "Doin' A Sneaky",
		date: "2013-04-04",
		where: "Fort Collins, CO",
		text: "",
		bg: "#25110A"
	},
	{
		img: "gmym6ggmki4c2hsaa06l",
		alt: "Newton the golden retriever",
		title: "Waitin' for the Elevator",
		date: "2019-08-09",
		where: "Ballard, WA",
		text: "",
		bg: "#5A2A2A"
	},
	{
		img: "gqdv53yittuomx3xs3nw",
		alt: "Newton the golden retriever",
		title: "Can We Go Hiking?",
		date: "2018-05-05",
		where: "Englewood, CO",
		text: "",
		bg: "#2B2C28"
	},
	{
		img: "gynkhyt4qazu4tqt5wnb",
		alt: "Newton the golden retriever",
		title: "Wake Up Mohhhm!!",
		date: "2013-11-05",
		where: "Fort Collins, CO",
		text: "",
		bg: "#2B2C28"
	},
	{
		img: "hih9mtheicvtqcvvuyil",
		alt: "Newton the golden retriever",
		title: "Maximum Comfort",
		date: "2017-12-20",
		where: "Englewood, CO",
		text: "",
		bg: "#474034"
	},
	{
		img: "hmro982sochtce5gfe1r",
		alt: "Newton the golden retriever",
		title: "Perfect Retriever",
		date: "2023-02-28",
		where: "Olympia, WA",
		text: "",
		bg: "#364331"
	},
	{
		img: "i0yh9ybkqltpwfy8y42f",
		alt: "Newton the golden retriever",
		title: "Sibling Cuddles!",
		date: "2013-03-02",
		where: "Loveland, CO",
		text: "",
		bg: "#343230"
	},
	{
		img: "i97dozc0adnykciiamlr",
		alt: "Newton the golden retriever",
		title: "Cheezin' n Sleepin'",
		date: "2013-07-04",
		where: "Denver, CO",
		text: "",
		bg: "#121010"
	},
	{
		img: "idw1x1sjtbhgmghchmpg",
		alt: "Newton the golden retriever",
		title: "Ok, New Favorite!",
		date: "2023-09-20",
		where: "Ballard, WA",
		text: "",
		bg: "#364331"
	},
	{
		img: "idw82fdhupmuxi7okhtt",
		alt: "Newton the golden retriever",
		title: "Still Figuring It Out",
		date: "2013-10-11",
		where: "Fort Collins, CO",
		text: "",
		bg: "#493D40"
	},
	{
		img: "inp8f8hxiy2p6hbq94oa",
		alt: "Newton the golden retriever",
		title: "TOOOOOFS",
		date: "2014-03-13",
		where: "Littleton, CO",
		text: "",
		bg: "#44231D"
	},
	{
		img: "iosphl1dtbvsavpzy2pr",
		alt: "Newton the golden retriever",
		title: "Let's Explore In There!",
		date: "2023-05-13",
		where: "Ballard, WA",
		text: "",
		bg: "#132100"
	},
	{
		img: "iuztnfaigsins8g6b74j",
		alt: "Newton the golden retriever",
		title: "What Dey Doin Over Der?",
		date: "2014-05-04",
		where: "Littleton, CO",
		text: "",
		bg: "#364331"
	},
	{
		img: "jmsopszoui6h6g8z6yfa",
		alt: "Newton the golden retriever",
		title: "Ok, Now We Mess It Up?",
		date: "2014-07-26",
		where: "Littleton, CO",
		text: "",
		bg: "#5E221B"
	},
	{
		img: "dwu8yv9xfv4ephkzdf5v",
		alt: "Newton the golden retriever",
		title: "Golden Hikin'",
		date: "2013-08-10",
		where: "Golden, CO",
		text: "",
		bg: "#5C493F"
	},
	{
		img: "k0lq3ejtzuzs5dm3hlvv",
		alt: "Newton the golden retriever",
		title: "Puppy Tree!",
		date: "2015-12-04",
		where: "Englewood, CO",
		text: "",
		bg: "#132100"
	},
	{
		img: "k3n2mmj3bjr9iiv949ff",
		alt: "Newton the golden retriever",
		title: "Please Take Me Serious",
		date: "2015-10-31",
		where: "Denver, CO",
		text: "",
		bg: "#45060F"
	},
	{
		img: "kdpquf1lfwekacsk9acu",
		alt: "Newton the golden retriever",
		title: "Yaaaaaaaaaaaa ahhhhheeeh",
		date: "2021-10-05",
		where: "Ballard, WA",
		text: "",
		bg: "#342E20"
	},
	{
		img: "kl6q0vvjzvnpewniwoji",
		alt: "Newton the golden retriever",
		title: "Sittin' Normal Style",
		date: "2013-08-06",
		where: "Denver, CO",
		text: "",
		bg: "#403021"
	},
	{
		img: "krgljmwwtqlimmdmk3ux",
		alt: "Newton the golden retriever",
		title: "Waitin' For Mom",
		date: "2021-05-01",
		where: "Ballard, WA",
		text: "",
		bg: "#30251E"
	},
	{
		img: "ktwbhzymhioejotsxhbp",
		alt: "Newton the golden retriever",
		title: "Splash Buddies!",
		date: "2015-08-08",
		where: "Fort Collins, CO",
		text: "",
		bg: "#27462C"
	},
	{
		img: "kv3xj6xfx8xpwsrzzeix",
		alt: "Newton the golden retriever",
		title: "Learnin' to Backpack",
		date: "2014-06-27",
		where: "Littleton, CO",
		text: "",
		bg: "#232C32"
	},
	{
		img: "l2yxixtpgt83ozaccx65",
		alt: "Newton the golden retriever laying on his side on the bed. One of his ears is turned inside out, and he is laying on top of two different dog bones.",
		title: "Two Bones, For Safety",
		date: "2014-02-05",
		where: "Denver, CO",
		text: "I always keep a second bone on hand, just in case I need to change flavors at a moments notice!",
		bg: "#786A43"
	},
	{
		img: "l90oinzelonj02yydd8w",
		alt: "Newton the golden retriever is laying very squished and curled up in an arm chair. One of his front paws is wrapped up in a sock becuase he has a small injury.",
		title: "Deep Thoughts",
		date: "2017-06-15",
		where: "Englewood, CO",
		text: "Yep, that's me - I bet you're wondering how I got here. Well it all started when I wasn't looking where I was going while playing fetch...",
		bg: "#5E4F47"
	},
	{
		img: "land8wgf2qpghtto9hhp",
		alt: "Newton the golden retriever looking very excited to be outside on a bright sunny day. He's ready for a day hike and is wearing his backpack and his boots.",
		title: "Romp Ready!",
		date: "2017-07-15",
		where: "The Mountains of CO",
		text: "Mom and Dad told me that I have to wear my boots and pack if we're going to hike for a long time. I love my all-grey gear!",
		bg: "#33613D"
	},
	{
		img: "lcapvtsxgt5fulj1djig",
		alt: "Newton the golden retriever is laying primly on the freshly made bed on a warm morning. He looks like he's just waiting to play once he's called off the bed.",
		title: "Freshly Made Bed",
		date: "2014-02-16",
		where: "Denver, CO",
		text: "When Dad washes and flattens my bed, I like to enjoy it like that for a few minutes before I make it how I like.",
		bg: "#632431"
	},
	{
		img: "lcfjq6doribzwsuetcoq",
		alt: "Newton the golden retriever is surrounded by 4 of his young cousins ranging in age from 3 to 8. He seems very happy to have small friends to play with.",
		title: "Cousin Party!",
		date: "2019-01-01",
		where: "Edmonds, WA",
		text: "I love all of my cousins so much and they love me! I wish all my people were the same size as me!",
		bg: "#253334"
	},
	{
		img: "lfeufq1dz0hgmndbkqs4",
		alt: "Newton the golden retriever posing next to his dad while on a hike in the mountains. His front feet are up on a downed log and he is very happy.",
		title: "Hikin' With Mom and Dad",
		date: "2017-07-15",
		where: "The Mountains of CO",
		text: "Mom and Dad take me on the best hikes and I get to smell all the best stuff and I love Mom and Dad and especially Daaaad!",
		bg: "#033957"
	},
	{
		img: "lotwyyc7t402nz4w70t4",
		alt: "Newton the adolescent golden retriever sitting on his bottom on top of his large sized dog crate. He looks mischievously towards the camera.",
		title: "Crate Sittin'",
		date: "2013-08-13",
		where: "Denver, CO",
		text: "If Mom didn't want me to sit on top of my crate when she tells me to 'go to my crate' why would she make it so comfy?",
		bg: "#421B0F"
	},
	{
		img: "lrd13fw0vhnyydgw4mwc",
		alt: "Newton the golden retriever standing in the lobby of an apartment building and wearing a red rain coat because he is about to go for a walk in the rain.",
		title: "It's Rainy Here",
		date: "2019-10-18",
		where: "Seattle, WA",
		text: "I love water almost much as I love Mom and Dad, but I don't really like to get wet, so I'm glad I have a cute red rain coat!",
		bg: "#90131C"
	},
	{
		img: "lwnvaplwimz5d1sf7yj1",
		alt: "Newton the golden retriever sitting very close to the camera and looking intently, probably because he is hungry for dinner.",
		title: "I Haven't Eaten in Days",
		date: "2023-03-18",
		where: "Seattle, WA",
		text: "It's 3:59pm, in just 1 minute it will have been 3 days since Dad fed me last. I don't know if I can make it that long. Tell my Mom I love her.",
		bg: "#6B7A63"
	},
	{
		img: "lzmad0s6nl73k2jzewtv",
		alt: "Newton the golden retriever",
		title: "Toy Nappin'",
		date: "2023-08-16",
		where: "Ballard, WA",
		text: "If you pile up 3 different toys under your chin, you're gonna have the best snoozicle of your life!",
		bg: "#473A3F"
	},
	{
		img: "mctfkkux9mnt7ckmtkfd",
		alt: "Newton the golden retriever",
		title: "Can We Go Back In?",
		date: "2013-07-13",
		where: "Monument, CO",
		text: "Dad I can't explain it, but I think I want to go back in that water...forever?",
		bg: "#3A6D44"
	},
	{
		img: "mfswpyudlwutwrq8zfd3",
		alt: "Newton the golden retriever",
		title: "Best Sleepy Buddies",
		date: "2016-01-08",
		where: "Englewood, CO",
		text: "Hey Jackson, when we're done napping, do you want to go back outside and play fetch some more?",
		bg: "#4D291E"
	},
	{
		img: "zuyqsaec5c686oy1xmsj",
		alt: "Newton the golden retriever",
		title: "Are You Kidding Me?",
		date: "2022-05-03",
		where: "Ballard, WA",
		text: "I just got settled here, and you're tellin' me you need me to come and snuggle you closer?? Ok!",
		bg: "#884624"
	},
	{
		img: "mioru8odvwx5ye4xhimg",
		alt: "Newton the golden retriever",
		title: "Whas Dat Dad?",
		date: "2020-09-08",
		where: "Ballard, WA",
		text: "I see you snacking on something, what is it? Is it to share? You wouldn't not share with me would you??",
		bg: "#665641"
	},
	{
		img: "mnovwfzutupp3apmvnpg",
		alt: "Newton the golden retriever laying half-on, half-off of his dog bet. He is gazing sweetly into the camera that is close in on his face.",
		title: "Sun Highlights",
		date: "2022-03-31",
		where: "Ballard, WA",
		text: "It's important to take the time you need to rest and recover, ideally in a spot that gives you beautiful sun highlighting!",
		bg: "#957664"
	},
	{
		img: "mpetnqmn4xiku3l21bxd",
		alt: "Newton the golden retriever laying down in the grass and sloppily drinking out of a water dish on a bright sunny day.",
		title: "Why Stand When You Can Lay?",
		date: "2016-07-30",
		where: "Englewood, CO",
		text: "I wish I could play fetch all day every day in our sunny back yard! I barely want to stop for water, even when I'm super tired!",
		bg: "#416723"
	},
	{
		img: "mptawo4fdm0txj9v3wlp",
		alt: "Newton the golden retriever sitting on his bottom in a dimly lit hallway, looking up at the camera with a face that seems to indicate that he would like a snack.",
		title: "Midnight Snack?",
		date: "2022-10-13",
		where: "Ballard, WA",
		text: "Dad, it's almost midnight and you're snacking...can I have a snack too? I haven't eaten in 3 days and I'm really REALLY hungry!",
		bg: "#251C0F"
	},
	{
		img: "myre0idrdyhapeujuh5a",
		alt: "Newton the golden retriever sitting on his bottom in a turf field on a bright sunny day. He's looking up at the camera with a huge smile.",
		title: "Making Friends",
		date: "2019-07-21",
		where: "Doggy Daycare, Ballard, WA",
		text: "I don't really like the other dogs at daycare, so I make friends with the daycare people and they give me extra kisses and take my picture!",
		bg: "#37495E"
	},
	{
		img: "nabagccqnpkxqs5ylmf7",
		alt: "Newton the baby golden retriever laying on his back on a tile floor but with his head laying on his side so he looks like a puppy pretzel.",
		title: "What, I'm Comfy Like This",
		date: "2013-08-19",
		where: "Denver, CO",
		text: "I'm just a baby, I'm still trying to pin down all the best positions for naps between playtimes...maybe this one?",
		bg: "#422511"
	},
	{
		img: "ng19xkysjgvul7giyl1e",
		alt: "Newton the golden retriever sitting on his bottom looking off to the side with his mouth half-open and making a very funny expression with his lip stuck to his teet. ",
		title: "Will I Smell Like This Forever?",
		date: "2014-01-02",
		where: "Fort Collins, CO",
		text: "Mom, I'm not so sure I like baths because now I smell like oatmeal doggy shampoo and it's making me confused and hungry!",
		bg: "#412A22"
	},
	{
		img: "nje8jngbzsv4mkwqlfw5",
		alt: "Newton the baby golden retriever walking with his leash on the sidewalk in the early morning sun.",
		title: "My First Walk!",
		date: "2013-03-31",
		where: "Fort Collins, CO",
		text: "Mom, I'm sorry I pooped in my crate on my first night home, and that I got you up at sunrise, and that I don't understand this rope thingy...I love you forever!",
		bg: "#111557"
	},
	{
		img: "nm0uztu2opbwsesjqsnd",
		alt: "Newton the golden retriever",
		title: "Squeeeeshyface",
		date: "2014-09-24",
		where: "Denver, CO",
		text: "Cuddles with Mom are so relaxing, I might just take a squishy little snoozicle!",
		bg: "#5F2C28"
	},
	{
		img: "nsx0lhycjphzuwlqf6pg",
		alt: "Newton the golden retriever",
		title: "Whatcha Makin' in the Kitchen?",
		date: "2023-07-14",
		where: "Ballard, WA",
		text: "I don't want to get up, but if you make something good can I have some of it? Also if it's not good, can I have some of it?",
		bg: "#2F302D"
	},
	{
		img: "nym2yo6twuigq9q7ybkz",
		alt: "Newton the golden retriever",
		title: "Just Woke Up",
		date: "2018-07-09",
		where: "Englewood, CO",
		text: `Now I know what you're thinking "Newton you look crusty and sleepy" and to that I say, lets see YOU spend all day at daycare and look any better!`,
		bg: "#704D32"
	},
	{
		img: "ooirre6bqbezvay7ttfe",
		alt: "Newton the golden retriever",
		title: "Jackson Has a Comfy Butt",
		date: "2018-03-14",
		where: "Englewood, CO",
		text: "Hey Jackson, when we're done napping, do you want to see if my Mom will give us second breakfast?",
		bg: "#595345"
	},
	{
		img: "qurrudxodxadmdamajaa",
		alt: "Newton the golden retriever",
		title: "Sun & Swim!",
		date: "2022-07-11",
		where: "Ballard, WA",
		text: "Nothing beats a summer afternoon of swimming with Mom and Dad!",
		bg: "#314366"
	},
	{
		img: "ouiipf7y4mawwxxnb7xi",
		alt: "Newton the golden retriever",
		title: "Is This Right?",
		date: "2015-05-25",
		where: "Littleton, CO",
		text: "Mom still hasn't told me why she makes the top of my crate so comfy and inviting, oh well I don't mind!",
		bg: "#49362B"
	},
	{
		img: "ox83dxkdcpckcj9kkauh",
		alt: "Newton the golden retriever",
		title: "That Could Have Been Anybody",
		date: "2013-08-17",
		where: "Fort Collins, CO",
		text: "And to be quite honest Dahd, I am a little confused why you would just asuuume I have any interest in the tasty, fun, dangling paper toy???",
		bg: "#41251A"
	},
	{
		img: "oxhinpxmfujblr6yxuhl",
		alt: "Newton the golden retriever",
		title: "Sleepin' In My Circle",
		date: "2023-01-18",
		where: "Olympia, WA",
		text: "My special circle bed is just the right size for me to cozy up into and hang out with Dad while he's workin'!",
		bg: "#302E2A"
	},
	{
		img: "p3thpx5kozyqw6idxopg",
		alt: "Newton the golden retriever",
		title: "Doin' A Sneaky",
		date: "2013-08-04",
		where: "Fort Collins, CO",
		text: "Shhh Dad, don't tell Mom where I am! I'm gonna jump out and scare her when she comes into the room!",
		bg: "#2D2D44"
	},
	{
		img: "pgqmmthb99uvlcimhcje",
		alt: "Newton the golden retriever",
		title: "Puzzle Done, I'm Exhausted",
		date: "2019-02-14",
		where: "Edmonds, WA",
		text: "I did the Valentines day space puzzle with my cousins! It's a tradition that I just started and I love it!",
		bg: "#3C5A55"
	},
	{
		img: "pprfmezdezkrykrzexbe",
		alt: "Newton the golden retriever",
		title: "Do You Like My Branch?",
		date: "2013-07-12",
		where: "Denver, CO",
		text: "I know you do you don't have to lie, it's basically the best branch anybody has ever seen and it's all mine!",
		bg: "#2C3518"
	},
	{
		img: "pupuih8t2ywtukr6at72",
		alt: "Newton the golden retriever",
		title: "Lost My Toy, Can You Help?",
		date: "2013-07-30",
		where: "Fort Collins, CO",
		text: "Sometimes when Dahd and I play he hides my toys for me to find but I can't find it this time!",
		bg: "#3C1F13"
	},
	{
		img: "pvswut1n5n16rmhfcmjs",
		alt: "Newton the golden retriever",
		title: "It's Doctor Newton to You Dad",
		date: "2019-02-18",
		where: "Ballard, WA",
		text: "I feel so smart when I wear Mom's glasses, maybe I'll invent an infinite kibble bowl!",
		bg: "#38332C"
	},
	{
		img: "pvvqh12kk6mmkoo2r2tt",
		alt: "Newton the golden retriever",
		title: "Heeeeeh Good One Mom",
		date: "2013-04-27",
		where: "Fort Collins, CO",
		text: "Mom takes me on the best hikes and tells me the best jokes when we stop for rest! I love my Mom!",
		bg: "#29385A"
	},
	{
		img: "q3lkrvq1nc5b5y3ngbpn",
		alt: "Newton the golden retriever",
		title: "Walks Tire Me Out",
		date: "2022-12-11",
		where: "Ballard, WA",
		text: "Sheesh, when it's cold out my toesies get chilly and I get tired pretty quick on morning walks - let's get inside and snuggle up!",
		bg: "#262626"
	},
	{
		img: "q3yvdmwcdtymx1w28kjg",
		alt: "Newton the golden retriever",
		title: "Excuuuse Me?",
		date: "2013-10-28",
		where: "Fort Collins, CO",
		text: `Daahhhd, what do you mean we have to stop playing, and what does "go to work" mean anyway, that sounds dumb?? `,
		bg: "#753212"
	},
	{
		img: "q66lyuyaqtennevlqt0k",
		alt: "Newton the golden retriever",
		title: "I Feld Asleep",
		date: "2013-04-02",
		where: "Fort Collins, CO",
		text: "I'm just a little boy, sometimes I need to take a quick little snoozicle on Mom's lap to recharge for more playtime!",
		bg: "#3B2F26"
	},
	{
		img: "qcam6dpbbwsd85amuqyw",
		alt: "Newton the golden retriever",
		title: "No Teef, No Problems",
		date: "2023-01-09",
		where: "Olympia, WA",
		text: "I may have worn down front teefs, and lost some color in my lips, but I think I'm still too cute for pictures don't you think!?",
		bg: "#3D2617"
	},
	{
		img: "qctroyvnvimmcfeirmcr",
		alt: "Newton the golden retriever",
		title: "New Profile Pic",
		date: "2013-11-01",
		where: "Fort Collins, CO",
		text: "I'm the most handsome and goodest boy and I love to play in the leaves with Mom and Dad!",
		bg: "#3D573A"
	},
	{
		img: "qdnbqmg6rfbvojo9uqyk",
		alt: "Newton the golden retriever",
		title: "Pupsicles!",
		date: "2019-07-13",
		where: "Ballard, WA",
		text: "Going downtown to the farmers market with Mom and Dad is the best! Sometimes they even give me frozen punkin if it's hot!",
		bg: "#474541"
	},
	{
		img: "qgqtdqlkfguafw2bv0rc",
		alt: "Newton the golden retriever",
		title: "Don't Squeesh Me Please!",
		date: "2013-11-08",
		where: "Fort Collins, CO",
		text: "I'm just a little tiny baby, but I got your chair and now you can't go anywhere without me Mom!",
		bg: "#3D201C"
	},
	{
		img: "qnl3ww8xa5nyg8xlcxbi",
		alt: "Newton the golden retriever",
		title: "Heeeeeh Good One Dad",
		date: "2014-04-08",
		where: "Denver, CO",
		text: "Dad tells the best jokes and takes me to the most fun places in the car!",
		bg: "#552835"
	},
	{
		img: "qpyl963zuscpmjzgqbay",
		alt: "Newton the golden retriever",
		title: "Workin Hard Next To Dad",
		date: "2023-01-17",
		where: "Olympia, WA",
		text: "It's not easy making sure Dahd stays on task, so I have to set up my home office right next to his to keep an eye on him!",
		bg: "#24231E"
	},
	{
		img: "qs0rsp3lyoiyio75wg4x",
		alt: "Newton the golden retriever",
		title: "No Let's Go This Way!",
		date: "2013-08-17",
		where: "Fort Collins, CO",
		text: "Moohm it is so smart that that you attached a rope toy directly to me so that we can play every time we stop on our walk!",
		bg: "#274A2B"
	},
	{
		img: "qsftuanwuvr1hj8z0vck",
		alt: "Newton the golden retriever",
		title: "Zen and Content",
		date: "2023-10-11",
		where: "Ballard, WA",
		text: "To truly experience inner peace, all you need to do is find the perfect stick and get plenty of sun!",
		bg: "#A83E2F"
	},
	{
		img: "qv2q5oskk32erarrged0",
		alt: "Newton the golden retriever",
		title: "Please Dad, May I Have Some More?",
		date: "2014-04-14",
		where: "Denver, CO",
		text: "Heyyy Dahhhhd I was thinking that maaaaybe I could have a whole one of dose bowls instead of just the sauce left over from yours???",
		bg: "#394A5E"
	},
	{
		img: "r247rwrn4xkmzjkbmzhq",
		alt: "Newton the golden retriever",
		title: "Judge Newton, Food Court",
		date: "2017-07-13",
		where: "Englewood, CO",
		text: `You told me "all done", but the fact that you're snacking right now proves that THAT was a lie!`,
		bg: "#3C2E24"
	},
	{
		img: "r4y1tltxou9djjuj47md",
		alt: "Newton the golden retriever",
		title: "Family Snuggles!",
		date: "2014-01-04",
		where: "Littleton, CO",
		text: "At the end of a long day, Mom and Dad usually need me to snuggle up to them to give them comfort and calm!",
		bg: "#4C2F2B"
	},
	{
		img: "rylmskhwo09ufiafac1o",
		alt: "Newton the golden retriever",
		title: "Table Mountain Hikes!",
		date: "2013-08-10",
		where: "Golden, CO",
		text: "I love when Mom and Dad take me to their favorite hiking spot, it's so fun to run up the mountain!",
		bg: "#5C493F"
	},
	{
		img: "s8nmon4ruqtwcvwggzgn",
		alt: "Newton the golden retriever",
		title: "Ehm Thoo Thired To Pahnt",
		date: "2016-01-08",
		where: "Denver, CO",
		text: "It's... so... cold... and... wet... outside... I... played... fetch... forever... now... sleepy!",
		bg: "#5E4A3C"
	},
	{
		img: "b6bhkh2q1ldt9gjmlhrd",
		alt: "Newton the golden retriever",
		title: "Are You My Mombo?",
		date: "2013-03-16",
		where: "Loveland, CO",
		text: "You smell good and you give me all the pets and your hugs are so nice and I love you and I can't wait to live with you and I love you!",
		bg: "#270507"
	},
	{
		img: "t7olwc4qxrbf7xinqef6",
		alt: "Newton the golden retriever",
		title: "I Just Found This!",
		date: "2013-07-12",
		where: "Denver, CO",
		text: "Doo de doo dee do dee, doo doo en dooo dooooo! Ohhh yea, everyone is gonna love this one!!",
		bg: "#303118"
	},
	{
		img: "tavvzeufri62zxvu6vsb",
		alt: "Newton the golden retriever",
		title: "Murry Crimbus!",
		date: "2015-12-04",
		where: "Englewood, CO",
		text: "Do you like my lights Dahd? I found them right here and they're really bright and don't taste good, but I think they're cute!",
		bg: "#693F2F"
	},
	{
		img: "tbuhwwv1tcxypd9e49mr",
		alt: "Newton the golden retriever",
		title: "Hiiii Mohhhm!",
		date: "2023-12-11",
		where: "Ballard, WA",
		text: `Are you working working or are you "working"? Cause I could use some cuddles and so I thought I should check what you're doin'!`,
		bg: "#764D3A"
	},
	{
		img: "tcrnwtkjverv572z9ugc",
		alt: "Newton the golden retriever",
		title: "Beauty And Grace",
		date: "2014-01-26",
		where: "Denver, CO",
		text: "I'm soooo sneaky, nobody can even tell that I'm takin' a nap because I'm not laying down... Newton you are one sneak sneakerson!",
		bg: "#74787C"
	},
	{
		img: "tdjw9trkke8ciwmkcbjv",
		alt: "Newton the golden retriever",
		title: "Look What I Found!",
		date: "2023-09-29",
		where: "Ballard, WA",
		text: "I found dis to give to Mohm for her birthday! She is always so excited for the sticks I find, so I think it's the perfct gift!",
		bg: "#59321E"
	},
	{
		img: "tfgabpda0w6m4wwvdzo4",
		alt: "Newton the golden retriever",
		title: "Dream Big",
		date: "2013-08-17",
		where: "Fort Collins, CO",
		text: "A lot of people don't know this, but if you try hard, I'm pretty sure you can pull the whole tree out to carry around!",
		bg: "#0A270D"
	},
	{
		img: "tnogygv1gu6ajtqehpv7",
		alt: "Newton the golden retriever",
		title: "I Swear I Used To Fit",
		date: "2014-01-18",
		where: "Littleton, CO",
		text: "Mohhhhm I think Dahd made my chair smaller! You're a bad dog Dahd!",
		bg: "#312F36"
	},
	{
		img: "toiku6bhxjaligtgzdgr",
		alt: "Newton the golden retriever",
		title: "Is This My Yoga Mat?",
		date: "2023-08-30",
		where: "Ballard, WA",
		text: "You layed down on the yoga mat Dad, that means you're ready for play time right?! I'll go get my toys!",
		bg: "#443326"
	},
	{
		img: "u5f1s0geqtohycauj0oj",
		alt: "Newton the golden retriever",
		title: "Grrrrrrrrrr",
		date: "2013-08-18",
		where: "Fort Collins, CO",
		text: "I WILL NEVER LET GO OF THIS TOY DAD, YOU MIGHT AS WELL GIVE UP NOWWWW BECAUSE I WILL NEVER GIVE IN!!!",
		bg: "#4A2315"
	},
	{
		img: "g1muixbdrfuhcaz9jjrp",
		alt: "Newton the golden retriever",
		title: "Can I Share Your Banana?",
		date: "2022-03-19",
		where: "Ballard, WA",
		text: "You seeeemed like you wanted to share it, and I figured well if you're going to share it, it should probably be with me!",
		bg: "#3F3D32"
	},
	{
		img: "udab6ged5b7vq7ezndun",
		alt: "Newton the golden retriever",
		title: "Story Time!",
		date: "2016-06-08",
		where: "Englewood, CO",
		text: "I love when my cousins come to visit me at my house and they read me spooky bedtime stories! I love my cousins!",
		bg: "#4E565A"
	},
	{
		img: "uphlz8ty1sd0xfcbahrc",
		alt: "Newton the golden retriever",
		title: "Speed Demon",
		date: "2013-03-16",
		where: "Loveland, CO",
		text: "I am speeeeeed! Zooooooooooooom!",
		bg: "#4F2D2B"
	},
	{
		img: "utxwd0cjjzpzo6qpfnq0",
		alt: "Newton the golden retriever",
		title: "It Fits Perfect!",
		date: "2015-10-31",
		where: "Denver, CO",
		text: `Ohhhh yea, the neighbors are going to be so startled by my Halloween costume because they'll be all like "how did a lobster get in here"....hehh!`,
		bg: "#561210"
	},
	{
		img: "uv2qlhtly5hfl39q88ku",
		alt: "Newton the golden retriever",
		title: "Carwashes, Not a Fan",
		date: "2014-01-31",
		where: "Denver, CO",
		text: "I would like to formally register my complaint that carwashes are jerks and I do not like them and why did you bring me here???",
		bg: "#294766"
	},
	{
		img: "v0cbmke9rupkn8ac0m9i",
		alt: "Newton the golden retriever",
		title: "Funny Little Whiskers",
		date: "2015-09-12",
		where: "Denver, CO",
		text: "Some people think I look like a otter baby, what do you think?",
		bg: "#513326"
	},
	{
		img: "van04eqhhu9rsuovtjiv",
		alt: "Newton the golden retriever",
		title: "Whaduyuwant?",
		date: "2013-12-01",
		where: "Fort Collins, CO",
		text: "Just nappin', you know how I be Mahma... did you need me to help you with some food cleanup?",
		bg: "#47251B"
	},
	{
		img: "vfnuewejo8knfkcqs49o",
		alt: "Newton the golden retriever",
		title: "Wanna Split A Burger?",
		date: "2013-09-08",
		where: "Fort Collins, CO",
		text: "Look at me look at me I went to get us burgers for dinner hehhh, just kidding wanna play tho?",
		bg: "#493122"
	},
	{
		img: "vp0wyb6brpzdtvws2xbc",
		alt: "Newton the golden retriever",
		title: "Swim Zoomies!",
		date: "2013-07-13",
		where: "Monument, CO",
		text: "Did you see me! I was all like swim swim swim swim swim swim swim, that was so fun let's run around and go back in!",
		bg: "#3C2F0D"
	},
	{
		img: "vq7accomh6fcf5lxi72u",
		alt: "Newton the golden retriever",
		title: "K Bye I Gueesss",
		date: "2014-01-20",
		where: "Littleton, CO",
		text: "Dear diary, today both of my parents left me forever. They barely even said goodbye, and they didn't leave me any kibbles. I don't know if I'll make it.",
		bg: "#121F34"
	},
	{
		img: "wcfzzknhehm2lwsifob4",
		alt: "Newton the golden retriever",
		title: "Taxidermy Squirrel",
		date: "2023-04-12",
		where: "Olympia, WA",
		text: "This year I hunted a squirrel so good at the pet store that they gave him to me as a frisbee!",
		bg: "#29391C"
	},
	{
		img: "wervgcd1uqejzcimh85l",
		alt: "Newton the golden retriever",
		title: "Just Chillaxin",
		date: "2013-08-10",
		where: "Fort Collins, CO",
		text: "Hey Moohhhm what should we do today? Maaaybe we should just cuddle up and share a pocorn snack!",
		bg: "#250B0F"
	},
	{
		img: "wgxrhxpsxrovucptzfsn",
		alt: "Newton the golden retriever",
		title: "So Fresh And So Clean",
		date: "2014-08-02",
		where: "Littleton, CO",
		text: "Looking good and smelling good, you know how I be! Do I get good boy treats now?!",
		bg: "#2F100D"
	},
	{
		img: "wheud06kqvv1qwtdbwqf",
		alt: "Newton the golden retriever",
		title: "That Bath Tired Me Out Mom",
		date: "2013-04-02",
		where: "Fort Collins, CO",
		text: "I'm gonna just curl up into a tiny little ball and rest, it takes a lot of energy to dry off after a bath!",
		bg: "#3D454C"
	},
	{
		img: "ww9riikj7ghaglwfqen1",
		alt: "Newton the golden retriever",
		title: "Boat Watchin' With Dad",
		date: "2019-03-24",
		where: "Ballard, WA",
		text: "And over my shoulder you can see some boats in the water, where I would like to be!",
		bg: "#2F371F"
	},
	{
		img: "wzm0zk7bazerdbt3lyj5",
		alt: "Newton the golden retriever",
		title: "Messy Eater",
		date: "2013-03-16",
		where: "Loveland, CO",
		text: "Uhoh, I was eating but then I feld asleep, and when I woke up I had dis bottle on my foot. Oh well!",
		bg: "#414040"
	},
	{
		img: "x7uogjahyt9uejbf0aiz",
		alt: "Newton the golden retriever",
		title: "This Helps Me Balance",
		date: "2023-02-23",
		where: "Olympia, WA",
		text: "The key to not slipping on the sidewalk is to have a nice long stick! Then if someone tries to pass you, you can whack their knees!",
		bg: "#27323D"
	},
	{
		img: "xj7yycdkejiogyo42ffv",
		alt: "Newton the golden retriever",
		title: "Keepin' Warm",
		date: "2018-12-23",
		where: "Ballard, WA",
		text: "It sure is cold out, I'm glad Mom lets me borrow her hat so I can snooze in warmth!",
		bg: "#4B4033"
	},
	{
		img: "xmriqhvad2jxpt6ggqzt",
		alt: "Newton the golden retriever",
		title: "Good Boy Pose",
		date: "2022-05-06",
		where: "Ballard, WA",
		text: "Daaaaahd, it's too early for pictures, I'm still sleepy!",
		bg: "#667C50"
	},
	{
		img: "y5i3rc4cucf779mj74oz",
		alt: "Newton the golden retriever",
		title: "It's An Armchair",
		date: "2013-08-18",
		where: "Fort Collins, CO",
		text: "Day 23 of experimenting to find the most comfy spots in the house. I'm trying out the arm of the couch today. Early results are promising!",
		bg: "#4A3329"
	},
	{
		img: "yaqqbzetnlgzdfdi2jct",
		alt: "Newton the golden retriever",
		title: "Quick Rest, Then More Fetch!",
		date: "2017-08-15",
		where: "Englewood, CO",
		text: "No Dahd, I'm not tired, I'm just giving you a chance to catch YOUR breath!",
		bg: "#344E1F"
	},
	{
		img: "yb3kwcjvrir474cwzktr",
		alt: "Newton the golden retriever",
		title: "I Did A Whoopsy",
		date: "2014-06-30",
		where: "Littleton, CO",
		text: "Yep, that's me - I bet you're wondering how I got here. Well it all started when I ran too hard on a hike...",
		bg: "#421B0D"
	},
	{
		img: "yjl3g18oys8na80m2mgg",
		alt: "Newton the golden retriever",
		title: "I Coulda' Been A Contender",
		date: "2018-08-05",
		where: "Fort Collins, CO",
		text: "Heh, just kidding, I'm a lover not a fighter ...except with cats ...and dogs that look at me funny ...and birds ...and racoons ...and squirrels!",
		bg: "#2A3B47"
	},
	{
		img: "ylmuxmyz8szcmsgkq1ou",
		alt: "Newton the golden retriever",
		title: "What The Heck Is That Thing?",
		date: "2023-03-13",
		where: "Olympia, WA",
		text: "I met a llama today. I'm deeply skeptical.",
		bg: "#434C36"
	},
	{
		img: "yookin0waseqo5rk3vbq",
		alt: "Newton the golden retriever",
		title: "Can I Bring This In?",
		date: "2013-10-15",
		where: "Fort Collins, CO",
		text: "Technically, I'm allowed, I asked Mom and she said I could. You don't need to check with her!",
		bg: "#503139"
	},
	{
		img: "zbcp82kuehbh4apshrc4",
		alt: "Newton the golden retriever",
		title: "That's Too Many Stairs",
		date: "2013-03-31",
		where: "Fort Collins, CO",
		text: "Heeyy Mooohm, I'm too small to walk up all these stairs! Will you carry me?",
		bg: "#332E32"
	},
	{
		img: "zkuuxfn0xumteyfghhrp",
		alt: "Newton the golden retriever",
		title: "Perfect Nap Pillow",
		date: "2019-07-28",
		where: "Ballard, WA",
		text: "When you find the perfect pillow to rest your chin on, naps get even better!",
		bg: "#2E2017"
	},
	{
		img: "zlzgd9cpkayf1moqsn4m",
		alt: "Newton the golden retriever",
		title: "I Haven't Eaten in Days",
		date: "2023-01-06",
		where: "Olympia, WA",
		text: "Please ...get up ...I need you to feed me ...I'm so weak ...I haven't eaten in 4 days!",
		bg: "#382E24"
	},
	{
		img: "zo9gmxvuddplqm4tzfjy",
		alt: "Newton the golden retriever",
		title: "Betchu I can Fetch That",
		date: "2022-07-28",
		where: "Ballard, WA",
		text: "Can I try Mohhm!?? I promise I won't get distracted by ducks flying by when I'm halfway there!",
		bg: "#1F2732"
	},

	{
		img: "zov5mopmlzmpqnqfganv",
		alt: "Newton the golden retriever",
		title: "What Are We Lookin' At?",
		date: "2013-04-06",
		where: "Fort Collins, CO",
		text: "I'm learning so many super smart things from my housemates, like how to sit and watch the back yard really good!",
		bg: "#3E4343"
	},
	{
		img: "qgbg4g06hfbxwdvifpy7",
		alt: "Newton the golden retriever",
		title: "Oh Geeez Daaahd",
		date: "2022-02-12",
		where: "Ballard, WA",
		text: "I'm kinda worried that we're going to miss dinner, I've been thinking we should have kibbles early just in case?",
		bg: "#482E17"
	}
];
