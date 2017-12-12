// <video width="320" height="240" controls>
//   <source src="movie.mp4" type="video/mp4">
//   <source src="movie.ogg" type="video/ogg">
//   Your browser does not support the video tag.
// </video>

let process = {
	menu:function(){
		let content = <div>
		<div align='center'>
					<img src='img/ED SHE.jpg' width='100px' height='100px' />
						<h1>ED SHEERAN SONG LYRICS </h1>
					</div>
			<audio id="audio_bomb">
				<source src="audio/bomb.mp3" type="audio/mp3" />
			</audio>
			<div align='center'>
			

<p class="buttons-row">
  <a href="#" class="button button-fill color-pink" onClick={process.page1}>SHAPE OF YOU</a>
  <a href="#" class="button button-fill color-pink" onClick={process.page2}>HAPPIER</a>
  
</p>
<p class="buttons-row">
  <a href="#" class="button button-fill color-pink" onClick={process.page3}>I LOVE YOU</a>
  <a href="#" class="button button-fill color-pink" onClick={process.page4}>MOVE ON</a>
</p>
<p class="buttons-row">
  <a href="#" class="button button-fill color-pink" onClick={process.page5}>PERFECT</a>
  <a href="#" class="button button-fill color-pink" onClick={process.page6}>NEW MAN</a>
</p>
<p class="buttons-row">
  <a href="#" class="button button-fill color-pink" onClick={process.page7}>PHOTOGRAPH</a>
  <a href="#" class="button button-fill color-pink" onClick={process.page8}>SMILE</a>
</p>
<p class="buttons-row">
  <a href="#" class="button button-fill color-pink" onClick={process.page9}>WHAT DO I KNOW</a>
  <a href="#" class="button button-fill color-pink" onClick={process.page10}>RUN AWAY</a>
</p>       
<p class="buttons-row">
  <a href="#" class="button button-fill color-pink" onClick={process.page11}>MISERY</a>
  <a href="#" class="button button-fill color-pink" onClick={process.page12}>GALWAY GIRL</a>
</p>
<p class="buttons-row">
  <a href="#" class="button button-fill color-pink" onClick={process.page13}>THINKING OUT LOUD</a>
  <a href="#" class="button button-fill color-pink" onClick={process.page14}>HOW WOULD YOU FEEL</a>
</p>
<p class="buttons-row">
  <a href="#" class="button button-fill color-pink" onClick={process.page15}>COLD COFFEE</a>
  <a href="#" class="button button-fill color-pink" onClick={process.page16}>ERACER</a>
</p>

			</div>
		</div>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		process.audio('audio_bomb').play();
		let content = <div>

		<p class="buttons-row">
  			<a href="#" class="button button-big color-BLUE " onClick={process.menu}>Back</a>
		</p>
				<div align='center'>
						<p>
						<h1>SHAPE OF YOU</h1>
						<div>The club isn't the best place to find a lover</div>
						<div>So the bar is where I go (mmmm)</div>
						<div>Me and my friends at the table doing shots</div>
						<div>Drinking fast and then we talk slow (mmmm)</div>
						<div>And you come over and start up a conversation with just me</div>
						<div>And trust me I'll give it a chance now (mmmm)</div>
						<div>Take my hand, stop, put Van The Man on the jukebox</div>
						<div>And then we start to dance</div>
						<div>And now I'm singing like</div>
						<div>Girl, you know I want your love<br/>
						Your love was handmade for somebody like me<br/>
						Come on now, follow my lead<br/>
						I may be crazy, don't mind me<br/>
						Say, boy, let's not talk too much<br/>
						Grab on my waist and put that body on me<br/>
						Come on now, follow my lead<br/>
						Come, come on now, follow my lead (mmmm)</div>
						<div>I'm in love with the shape of you<br/>
						We push and pull like a magnet do<br/>
						Although my heart is falling too<br/>
						I'm in love with your body<br/>
						Last night you were in my room<br/>
						And now my bedsheets smell like you<br/>
						Every day discovering something brand new<br/>
						I'm in love with your body</div>
						<div>Oh I oh I oh I oh I<br/>
						I'm in love with your body<br/>
						Oh I oh I oh I oh I<br/>
						I'm in love with your body<br/>
						Oh I oh I oh I oh I<br/>
						I'm in love with your body<br/>
						Every day discovering something brand new<br/>
						I'm in love with the shape of you</div>
						<div>One week in we let the story begin<br/>
						We're going out on our first date (mmmm)<br/>
						You and me are thrifty, so go all you can eat<br/>
						Fill up your bag and I fill up a plate (mmmm)<br/>
						We talk for hours and hours about the sweet and the sour<br/>
						And how your family is doing okay (mmmm)<br/>
						And leave and get in a taxi, then kiss in the backseat<br/>
						Tell the driver make the radio play<br/>
						And I'm singing like</div>
						<div>Girl, you know I want your love<br/>
						Your love was handmade for somebody like me<br/>
						Come on now, follow my lead<br/>
						I may be crazy, don't mind me<br/>
						Say, boy, let's not talk too much<br/>
						Grab on my waist and put that body on me<br/>
						Come on now, follow my lead<br/>
						Come, come on now, follow my lead (mmmm)</div>
						<div>I'm in love with the shape of you<br/>
						We push and pull like a magnet do<br/>
						Although my heart is falling too<br/>
						I'm in love with your body<br/>
						Last night you were in my room<br/>
						And now my bedsheets smell like you<br/>
						Every day discovering something brand new<br/>
						I'm in love with your body</div>
						</p>
					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
	page2:function(){
		process.audio('audio_bomb').play();
		let content = <div>
			<p class="buttons-row">
  				<a href="#" class="button button-big color-blue " onClick={process.menu}>Back</a>
			</p>
				<div align='center'>
						<p>
						<h1>HAPPIER</h1>
						<div>Walking down 29th and park<br/>
I saw you in another's arms<br/>
Only a month we've been apart<br/>
You look happier<br/>

Saw you walk inside a bar<br/>
He said something to make you laugh<br/>
I saw that both your smiles were twice as wide as ours<br/>
Yeah you look happier, you do<br/></div>
						<div>Ain't nobody hurt you like I hurt you<br/>
But ain't nobody love you like I do<br/>
Promise that I will not take it personal baby<br/>
If you're moving on with someone new<br/>

Cause baby you look happier, you do<br/>
My friends told me one day I'll feel it too<br/>
And until then I'll smile to hide the truth<br/>
But I know I was happier with you<br/></div>
						<div>Sat in the corner of the room<br/>
Everything's reminding me of you<br/>
Nursing an empty bottle and telling myself you're happier<br/>
Aren't you?<br/>

Ain't nobody hurt you like I hurt you<br/>
But ain't nobody need you like I do<br/>
I know that there's others that deserve you<br/>
But my darling I am still in love with you<br/></div>
						<div>But I guess you look happier, you do<br/>
My friends told me one day I'll feel it too<br/>
I could try to smile to hide the truth<br/>
But I know I was happier with you<br/>

Baby you look happier, you do<br/>
I knew one day you'd fall for someone new<br/>
But if he breaks your heart like lovers do<br/>
Just know that I'll be waiting here for you.</div>
						<div></div>

						</p>
					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
	page3:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-BLUE " onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<h1>I LOVE YOU</h1>
						<div>I'm standing on a mountain<br/>
Waiting for you to come<br/>
You were sitting counting<br/>
The days that I had gone<br/>
The note I wrote<br/>
I wrapped up in a cigarette<br/>
Burned away the memories<br/>
I tried to forget<br/>
But not yet<br/>
Wishing my life away<br/>
But these three words<br/>
I have to say to you<br/>
My baby blue<br/>
You know it's true<br/>
I love you<br/>
I love you<br/>
How can I tell you?<br/>
I don't know what to say<br/>
This chance that I won't miss<br/>
But I miss you anyway<br/>
I feel your pain<br/>
It's turning me insane<br/>
Thrown away<br/>
I had to take the last train home<br/>
But then you came<br/>
Wishing my life away<br/>
But these three words<br/>
I have to say to you<br/>
My baby blue<br/>
You know it's true<br/>
I love you<br/>
Wishing my life away<br/>
These three words<br/>
I have to say to you<br/>
My baby blue<br/>
You know it's true<br/>
You know it's true<br/>
I love you<br/>
I love you<br/>
I love you.</div>
						
					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
	page4:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-blue " onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<h1>MOVE ON</h1>
						<div>Now it seems I’ve been young, dug my hole in the ground<br/>
To me there’s only up, there ain’t no point in looking down<br/>
However hard I try, I only get weaker<br/>
Seems my lies and worries got my mind in a sleeper hold<br/>
What you gotta do is never get yourself down<br/>
Bastards do that for you, get you deeper in the ground<br/>
Seems like all you bastards gave me something to ignore now<br/>
Move on, forget it<br/>
Now move on, forget it<br/>
When I first started this rapping shit I felt pressure from haters<br/>
Became invaded with sadists and just developed a hater radar<br/>
And then appeared with a remedy kicking rhymes with a melody<br/>
Hennesey shots and glocks, all these fools on the block<br/>
Who said you gotta be a gangster now to raise to the top?<br/>
I'm just a normal, casual, usual, everyday type of guy<br/>
With my head in the sky<br/>
Ed Sheeran, Urban Angel coming ready to die<br/>
So see the signs, stand to the side<br/>
Open your eyes and take a look and realise<br/>
The resurrection's arrived<br/>
And as the mist clears, homie I arise<br/>
From my tomb in disguise<br/>
I'm all alone, Alonestar<br/>
Urban Angel rising from the ashes<br/>
Surprising all haters, guiding, advising them all to steady move<br/>
Now back up!rget it<br/>
Now move on, forget it<br/>
All I want in this cold world is to make music and use it<br/>
Not to abuse it and get affected, infected with the who's who of music<br/>
Who did it, who is it, who's in it, who …what the fuck does it matter?<br/>
Chitter chatter, don't matter, yidder, yidder, yadder<br/>
It don't matter to me<br/>
All I want is a bit of dignity in me to battle this industry freely<br/>
To be me in this seedy, needy world, can you hear me?<br/>
Yeah, yeah, can you hear me?</div>
						
					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	
	},

	page5:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-BLUE " onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<h1>PERFECT</h1>
						<div>I found a love for me<br/>
Darling, just dive right in and follow my lead<br/>
Well, I found a girl, beautiful and sweet<br/>
Oh, I never knew you were the someone waiting for me<br/>

'Cause we were just kids when we fell in love<br/>
Not knowing what it was<br/>
I will not give you up this time<br/>
But darling, just kiss me slow<br/>
Your heart is all I own<br/>
And in your eyes you're holding mine<br/>

Baby, I'm dancing in the dark<br/>
With you between my arms<br/>
Barefoot on the grass<br/>
Listening to our favourite song<br/>
When you said you looked a mess<br/>
I whispered underneath my breath<br/>
But you heard it,
Darling, you look perfect tonight<br/>

Well, I found a woman, stronger than anyone I know<br/>
She shares my dreams, I hope that someday I'll share her home<br/>
I found a love to carry more than just my secrets<br/>
To carry love, to carry children of our own<br/>

We are still kids but we're so in love<br/>
Fighting against all odds<br/>
I know we'll be alright this time<br/>
Darling, just hold my hand<br/>
Be my girl, I'll be your man<br/>
I see my future in your eyes<br/>

Baby, I'm dancing in the dark<br/>
With you between my arms<br/>
Barefoot on the grass<br/>
Listening to our favourite song<br/>
When I saw you in that dress<br/>
Looking so beautiful<br/>
I don't deserve this<br/>
Darling, you look perfect tonight<br/>

Baby, I'm dancing in the dark<br/>
With you between my arms<br/>
Barefoot on the grass<br/>
Listening to our favourite song<br/>
I have faith in what I see<br/>
Now I know I have met an angel in person<br/>
And she looks perfect<br/>
I don't deserve this<br/>
You look perfect tonight.</div>
						
					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page6:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-BLUE" onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<h1>NEW MAN</h1>
						<div>I heard he spent five hundred pounds on jeans<br/>
Goes to the gym at least six times a week<br/>
Wears boat shoes with no socks on his feet<br/>
And I heard he's on a new diet and watches what he eats<br/>
He's got his eyebrows plucked and his arsehole bleached<br/>
Owns every single Ministry CD<br/>
Tribal tattoos and he don't know what it means<br/>
But I heard he makes you happy so that's fine by me<br/>
But still, I'm just keeping it real, still looking at your Instagram and I'll be creeping a little<br/>
I'll be trying not to double tap, from way back, cause I know that's where the trouble's at<br/>
Let me remind you of the days when you used to hold my hand<br/>
And when we sipped champagne out of cider cans<br/>
I guess if you were Lois Lane, I wasn't superman, just a young boy trying to be loved<br/>
So let me give it to you<br/>
I don't wanna know about your new man, cause if it was meant to be<br/>
You wouldn't be calling me up trying to<br/>
Cause I'm positive that he don't wanna know about me<br/>
I don't wanna know about your new man, we'll get there eventually<br/>
I know you're missing all this kind of love<br/>
But I'm positive that he don't wanna know about me<br/>
Your new man rents a house in the burb, and wears a man bag on his shoulder but I call it a purse<br/>
Every year he goes to Malaga, with all the fellas, drinks beer but has a six pack, I'm kind of jealous<br/>
He wears sunglasses indoors in winter at nighttime, and every time a rap song comes on<br/>
He makes a gun sign, says chune, boydem light up the room<br/>
But enough about him, girl let's talk about you<br/>
You were the type of girl that sat beside the water reading<br/>
Eating a packet of crisps but you will never find you cheating<br/>
Now you're eating kale, hitting the gym, keeping up with Kylie & Kim<br/>
In the back of the club kissing a boy that ain't him<br/>
Ok you need to be alone, and if you wanna talk about it you can call my phone<br/>
I just thought that I would tell you cause you oughta know<br/>
You're still a young girl trying to be loved<br/>
So let me give it to you<br/>
I don't wanna know about your new man, cause if it was meant to be<br/>
You wouldn't be calling me up trying to<br/>
Cause I'm positive that he don't wanna know about me<br/>
I don't wanna know about your new man, we'll get there eventually<br/>
I know you're missing all this kind of love<br/>
But I'm positive that he don't wanna know about me<br/>
Baby, I'm not trying to ruin your week<br/>
But you act so differently<br/>
When you're with him I know you're lonely<br/>
Please, remember you're still free, to make the choice and leave<br/>
And don't call me up you need to show me<br/>
I don't wanna know about your new man, cause if it was meant to be<br/>
You wouldn't be calling me up trying to<br/>
Cause I'm positive that he don't wanna know about me<br/>
I don't wanna know about your new man, we'll get there eventually<br/>
I know you're missing all this kind of love<br/>
But I'm positive that he don't wanna know about me<br/>
Know about me, know, know about me<br/>
I don't wanna know about your new man, he don't wanna know</div>
						
					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page7:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-BLUE " onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<h1>PHOTOGRAPH</h1>
						<div>Loving can hurt<br/>
Loving can hurt sometimes<br/>
But it's the only thing that I know<br/> 
When it gets hard<br/>
You know it can get hard sometimes<br/>
It is the only thing that makes us feel alive<br/>
We keep this love in a photograph<br/>
We made these memories for ourselves<br/>
Where our eyes are never closing<br/>
Hearts are never broken<br/>
Times forever frozen still<br/>
So you can keep me<br/>
Inside the pocket<br/>
Of your ripped jeans<br/>
Holdin' me closer<br/>
'Til our eyes meet<br/>
You won't ever be alone<br/>
Wait for me to come home<br/>
Loving can heal<br/>
Loving can mend your soul<br/>
And it's the only thing that I know (know)<br/>
I swear it will get easier<br/>
Remember that with every piece of ya<br/>
And it's the only thing we take with us when we die<br/>
We keep this love in this photograph<br/>
We made these memories for ourselves<br/>
Where our eyes are never closing<br/>
Hearts were never broken<br/>
Times forever frozen still<br/>
So you can keep me<br/>
Inside the pocket<br/>
Of your ripped jeans<br/>
Holdin' me closer<br/>
'Til our eyes meet<br/>
You won't ever be alone<br/>
And if you hurt me<br/>
That's OK, baby, only words bleed<br/>
Inside these pages you just hold me<br/>
And I won't ever let you go<br/>
Wait for me to come home [4x]<br/>
Oh you can fit me<br/>
Inside the necklace you got when you were 16<br/>
Next to your heartbeat<br/>
Where I should be<br/>
Keep it deep within your soul<br/>
And if you hurt me<br/>
Well, that's OK, baby, only words bleed<br/>
Inside these pages you just hold me<br/>
And I won't ever let you go<br/>
When I'm away<br/>
I will remember how you kissed me<br/>
Under the lamppost<br/>
Back on 6th street<br/>
Hearing you whisper through the phone,<br/>
"Wait for me to come home."</div>
						
						</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page8:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-BLUE " onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<h1>SMILE</h1>
						<div>Just give me a pen and I’ll write my worries<br/>
Now and again I’ll try and not see that you don’t care<br/>
Taking the time to taste and savour<br/>
Life’s bitter wine and childish behaviour<br/>
But you don’t care<br/>
And hey, I don’t speak that language of youth<br/>
And hey, oh not the one that speaks truth<br/>
And hey, I lay in this world for a while<br/>
When all is lost just smile<br/>
They’ve written the dates and the times to follow<br/>
See all the fakes that look so hollow<br/>
But you don’t care<br/>
What ever happened to the youth and culture?<br/>
Wear chains and the same fecking Lonsdale jumper<br/>
So you don’t care<br/>
And hey, I don’t speak that language of youth<br/>
And hey, oh not the one that speaks truth<br/>
And hey, I lay in this world for a while</div>
						
						</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page9:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-BLUE " onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<h1>WHAT DO I KNOW</h1>
						<div>Ain't got a soapbox I can stand upon<br/>
But God gave me a stage, a guitar and a song<br/>
My daddy told me, "Son, don't you get involved<br/>
In politics, religions, other peoples' quarrels."<br/>

I'll paint the picture, let me set the scene,<br/>
I know when I have children, they will know what it means<br/>
And I'll pass on these things my family's given to me<br/>
Just love and understanding positivity<br/>

We could change this whole world with a piano<br/>
Add a bass, some guitar, grab a beat and away we go<br/>
I'm just a boy with a one-man show<br/>
No university, no degree, but Lord knows<br/>
Everybody's talking 'bout exponential growth<br/>
And the stock market crashing and their portfolios<br/>
While I'll be sitting here with a song that I wrote<br/>
Saying love could change the world in a moment<br/>
But what do I know?<br/>

Love can change the world in a moment<br/>
But what do I know?<br/>
Love can change the world in a moment<br/>

The revolution's coming, it's a minute away<br/>
I saw people marching in the streets today<br/>
You know we are made up of love and hate<br/>
But both of them are balanced on a razor blade<br/>

I'll paint the picture, let me set the scene<br/>
I know, I'm all for people following their dreams<br/>
Just re-remember life is more than fitting in your jeans<br/>
It's love and understanding positivity<br/>

We could change this whole world with a piano<br/>
Add a bass, some guitar, grab a beat and away we go<br/>
I'm just a boy with a one-man show<br/>
No university, no degree, but Lord knows<br/>
Everybody's talking 'bout exponential growth<br/>
And the stock market crashing and their portfolios<br/>
While I'll be sitting here with a song that I wrote<br/>
Saying love could change the world in a moment<br/>
But what do I know?<br/>

Love can change the world in a moment<br/>
But what do I know?<br/>
Love can change the world in a moment<br/>

I'll paint the picture, let me set the scene,<br/>
You know the future's in the hands of you and me<br/>
So let's all get together, we can all be free<br/>
Spread love and understanding positivity<br/>

We could change this whole world with a piano<br/>
Add a bass, some guitar, grab a beat and away we go<br/>
I'm just a boy with a one-man show<br/>
No university, no degree, but Lord knows<br/>
Everybody's talking about exponential growth<br/>
And the stock market crashing and their portfolios<br/>
While I'll be sitting here with a song that I wrote<br/>
Saying love could change the world in a moment<br/>
But what do I know?<br/>

Love can change the world in a moment<br/>
But what do I know?<br/>
Love can change the world in a moment<br/>
But what do I know?</div>
						
						</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page10:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-BLUE " onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<h1>RUN AWAY</h1>
						<div>I've known it for a long time<br/>
Daddy wakes up to a drink at nine<br/>
Disappearing all night<br/>
I don't wanna know where he's been lying<br/>
I know what I wanna do<br/>
Wanna run away, run away with you<br/>
Gonna grab clothes, six in the morning go<br/>
How long you leaving?<br/>
Well, dad, just don't expect me back this evening<br/>
Oh, it could take a bit of time to heal this<br/>
It's been a long day, thumb on side of the roadway, but<br/>
I love him from my skin to my bones<br/>
But I don't wanna live in his home<br/>
There's nothing to say 'cause he knows<br/>
I'll just run away and be on my own<br/></div>
					<div>I've never seen my dad cry<br/>
Cold as stone in the kitchen light<br/>
I'll tell you it's about time<br/>
But I was raised to keep quiet<br/>
Gonna run away, gonna make that move<br/>
Gonna grab clothes and when it's morning go<br/>
How long you leaving?<br/>
Well, dad, just don't expect me back this evening<br/>
Oh, it could take a bit of time to heal this<br/>
It's been a long day, thumb on side of the roadway, but<br/></div>
					<div>I love him from my skin to my bones<br/>
But I don't wanna live in his home<br/>
There's nothing to say 'cause he knows<br/>
I'll just run away and be on my own<br/>
Backpack and a flat cap turned to the back<br/>
As I packed my clothes up<br/>
My dad wasn't down with that plan to attack, intends to show love<br/>
I don't wanna live this way<br/>
Gonna take my things and go<br/>
If things change in a matter of days<br/>
I could be persuaded to hold on<br/>
Mama was the same<br/>
None of us are saints I guess that God knows that<br/>
I don't wanna run away<br/>
And one of these days I might just show that<br/>
Tie both shoe laces and hope that<br/>
Things change, but for now I'll leave town with a backpack on my shoulder<br/>
I love him from my skin to my bones<br/>
But I don't wanna live in his home<br/>
There's nothing to say 'cause he knows<br/>
I'll just run away and be on my own<br/></div>
				
						
						</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page11:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-BLUE" onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<h1>MISERY</h1>
						<div>Well, I've walked this street<br/>
Well, I've walked this street before<br/>
And everyone's locked up their door<br/>
'Cos they heard me coming<br/>
And I've been running<br/>
From what<br/>
I don't know if she's there<br/>
Or if she's cares<br/>
It's taken you a long time to see<br/>
You've got a goldfish memory<br/>
This song's for you, not for me<br/>
In misery<br/>
You said we went too fast<br/>
And you said we wouldn't last<br/>
Now I've put the past behind me<br/>
And I'm running<br/>
From what<br/>
I don't know if she's there<br/>
Or if she cares<br/>
It's taken you a long time to see<br/>
You've got a goldfish memory<br/>
This song's for you, not for me<br/>
In misery<br/>
It's taken you a long time to see<br/>
In misery</div>
				<div>And everyone's locked up their door<br/>
'Cos they heard me coming<br/>
And I've been running<br/>
From what<br/>
I don't know if she's there<br/>
Or if she's cares<br/>
It's taken you a long time to see<br/>
You've got a goldfish memory<br/>
This song's for you, not for me<br/>
In misery<br/>
You said we went too fast<br/>
And you said we wouldn't last<br/>
Now I've put the past behind me<br/>
And I'm running<br/>
From what<br/>
I don't know if she's there<br/>
Or if she cares<br/>
It's taken you a long time to see<br/>
You've got a goldfish memory<br/>
This song's for you, not for me<br/>
In misery<br/>
It's taken you a long time to see<br/>
In misery.</div>

					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page12:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-BLUE " onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<h1>GALWAY GIRL</h1>
							<div>She played the fiddle in an Irish band<br/>
But she fell in love with an English man<br/>
Kissed her on the neck and then I took her by the hand<br/>
Said, "Baby, I just want to dance"<br/>
I met her on Grafton street right outside of the bar<br/>
She shared a cigarette with me while her brother played the guitar<br/>
She asked me what does it mean the Gaelic ink on your arm?<br/>
Said it was one of my friend's songs do you want to drink on?<br/>
She took Jamie as a chaser, Jack for the fun<br/>
She got Arthur on the table, with Johnny riding as shot gun<br/>
Chatted some more, one more drink at the bar<br/>
Then put Van on the jukebox, got up to dance, you know<br/>
She played the fiddle in an Irish band<br/>
But she fell in love with an English man<br/>
Kissed her on the neck and then I took her by the hand<br/>
Said, "Baby, I just want to dance"<br/></div>
							<div>With my pretty little Galway Girl<br/>
You're my pretty little Galway Girl<br/>
You know she beat me at darts and then she beat me at pool<br/>
And then she kissed me like there was nobody else in the room<br/>
As last orders were called, was when she stood on the stool<br/>
After dancing to Cèilidh, singing to trad tunes<br/>
I never heard Carrickfergus ever sung so sweet<br/>
Acapella in the bar using her feet for a beat<br/>
Oh I could have that voice playing on repeat for a week<br/>
And in this packed out room, swear she was singing to me, you know<br/>
She played the fiddle in an Irish band<br/>
But she fell in love with an English man<br/>
Kissed her on the neck and then I took her by the hand<br/>
Said, "Baby, I just want to dance"<br/>
My pretty little Galway girl<br/>
My my my my my my my Galway girl<br/>
My my my my my my my Galway girl<br/>
My my my my my my my Galway girl<br/></div>
							<div>Now we've outstayed our welcome and it's closing time<br/>
I was holding her hand, her hand was holding mine<br/>
Our coats both smell of smoke, whisky and wine<br/>
As we fill up our lungs with the cold air of the night<br/>
I walked her home then she took me inside<br/>
Finish some Doritos and another bottle of wine<br/>
I swear I'm going to put you in a song that I write<br/>
About a Galway girl and a perfect night<br/>
She played the fiddle in an Irish band<br/>
But she fell in love with an English man<br/>
Kissed her on the neck and then I took her by the hand<br/>
Said, "Baby, I just want to dance"<br/>
My pretty little Galway girl<br/>
My my my my my my my Galway girl<br/>
My my my my my my my Galway girl<br/>
My my my my my my my Galway girl..</div>
					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page13:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-BLUE " onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<h1>THINKING OUT LOUD</h1>
							<div>When your legs don't work like they used to before<br/>
And I can't sweep you off of your feet<br/>
Will your mouth still remember the taste of my love?<br/>
Will your eyes still smile from your cheeks?<br/>
And, darling, I will be loving you 'til we're 70<br/>
And, baby, my heart could still fall as hard at 23<br/>
And I'm thinking 'bout how people fall in love in mysterious ways<br/>
Maybe just the touch of a hand<br/>
Well, me—I fall in love with you every single day<br/>
And I just wanna tell you I am<br/></div>
							<div>So, honey, now<br/>
Take me into your loving arms<br/>
Kiss me under the light of a thousand stars<br/>
Place your head on my beating heart<br/>
I'm thinking out loud<br/>
Maybe we found love right where we are<br/>
When my hair's all but gone and my memory fades<br/>
And the crowds don't remember my name<br/>
When my hands don't play the strings the same way (mmm...)<br/>
I know you will still love me the same<br/>
'Cause, honey, your soul could never grow old, it's evergreen<br/>
And, baby, your smile's forever in my mind and memory<br/>
I'm thinking 'bout how people fall in love in mysterious ways<br/>
Maybe it's all part of a plan<br/>
Well, I'll just keep on making the same mistakes<br/>
Hoping that you'll understand</div>
							<div>That, baby, now<br/>
Take me into your loving arms<br/>
Kiss me under the light of a thousand stars<br/>
Place your head on my beating heart<br/>
Thinking out loud<br/>
Maybe we found love right where we are (oh, oh)<br/>
La, la, la, la, la, la, la, la, lo-ud<br/>
So, baby, now<br/>
Take me into your loving arms<br/>
Kiss me under the light of a thousand stars<br/>
Oh, darling, place your head on my beating heart<br/>
I'm thinking out loud<br/>
But maybe we found love right where we are<br/>
Oh, baby, we found love right where we are<br/>
And we found love right where we are.</div>
					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page14:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-BLUE " onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<h1>HOW WOULD YOU FEEL</h1>
						<div>You are the one girl<br/>
And you know that it's true<br/>
I'm feeling younger<br/>
Every time that I'm alone with you<br/>
We were sitting in a parked car<br/>
Stealing kisses in the front yard<br/>
We got questions we should not ask but<br/>
How would you feel, if I told you I loved you?<br/>
It's just something that I want to do<br/>
I'll be taking my time, spending my life<br/>
Falling deeper in love with you<br/>
So tell me that you love me too<br/>
In the summer, as the lilacs bloom<br/>
Love flows deeper than the river<br/>
Every moment that I spend with you<br/>
We were sat upon our best friend's roof<br/>
I had both of my arms round you<br/>
Watching the sunrise replace the moon<br/></div>
						<div>How would you feel, if I told you I loved you?<br/>
It's just something that I want to do<br/>
I'll be taking my time, spending my life<br/>
Falling deeper in love with you<br/>
So tell me that you love me too<br/>
We were sitting in a parked car<br/>
Stealing kisses in the front yard<br/>
We got questions we should not ask but<br/>
How would you feel, if I told you I loved you?<br/>
It's just something that I want to do<br/>
I'll be taking my time, spending my life<br/>
Falling deeper in love with you<br/>
So tell me that you love me too<br/>
Tell me that you love me too<br/>
Tell me that you love me too.</div>
				
					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page15:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-BLUE " onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<h1>COLD COFFEE</h1>
						<div>She's like cold coffee in the morning<br/>
I'm drunk off last nights whisky and coke<br/>
She'll make me shiver without warning<br/>
And make me laugh as if I'm in on the joke<br/>
And you can stay with me forever<br/>
Or you could stay with me for now<br/>
Tell me if I'm wrong <br/>
Tell me if I'm right<br/>
Tell me if you need a loving hand<br/>
To help you fall asleep tonight<br/>
Tell me if I know<br/>
Tell me if I do<br/>
Tell me how to fall in love the way you want me to<br/>
I'll wake with coffee in the morning<br/>
But she prefers two lumps of sugar and tea<br/>
Outside the day is up and calling<br/>
But I don't have to be so, please go back to sleep</div>
						<div>Stay with me forever<br/>
Or you could stay with me for now<br/>
Tell me if I'm wrong<br/>
Tell me if I'm right<br/>
Tell me if you need a loving hand<br/>
To help you fall asleep tonight<br/>
Tell me if I know<br/>
Tell me if I do<br/>
Tell me how to fall in love the way you want me to<br/>
'Cause I love the way you wake me up<br/>
For goodness sake will my love not be enough?<br/>
Tell me if I'm wrong<br/>
Tell me if I'm right<br/>
Tell me if you need a loving hand <br/>
To help you fall asleep tonight<br/>
Tell me if I know<br/>
Tell me if I do<br/>
Tell me how to fall in love the way you want me to<br/>
Tell me if I'm wrong<br/>
Tell me if I'm right<br/>
Tell me if you need a loving hand<br/>
To help you fall asleep tonight.</div>
				
					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page16:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-BLUE " onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<h1>ERACER</h1>
						<div>I was born inside a small town, I lost that state of mind<br/>
Learned to sing inside the lord's house<br/>
But stopped at the age of nine<br/>
I forget when I get awards now, the wave I had to ride<br/>
The paving stones I played upon, that kept me on the grind<br/>
So blame it on the pain that blessed me with the life<br/>
Friends and family filled with envy, when they should be filled with pride<br/>
And when the world's against me, is when I really come alive<br/>
And every day that Satan tempts me, I try to take it in my stride<br/>
You know that I've got whisky with white lies, and smoke in my lungs<br/>
I think life has got to the point, I know without it's no fun<br/>
I need to get in the right mind and clear myself up<br/>
Instead I look in the mirror, questioning what I've become<br/>
Guess it's a stereotypical day, for someone like me<br/>
Without a nine to five job or a uni degree<br/>
To be caught up in the trappings of the industry<br/>
Show me the locked doors I'll find another use for the key, and you'll see<br/>
I'm well aware of certain things that can destroy a man like me<br/>
But with that said give me one more<br/>
I am another one to take the sting away<br/>
I am happy on my own so here I'll stay<br/>
Save your loving arms for a rainy day<br/>
And I'll find comfort in my pain eraser</div>
						<div>I used to think that nothing could be better than touring the world with my songs<br/>
I chased the picture perfect life, I think they painted it wrong<br/>
I think that money is the route of all evil, and fame is hell<br/>
Relationships and hearts you fix, they break as well<br/>
And ain't nobody want to see you down in the dumps<br/>
Because you're living your dream and this should be fun<br/>
Please know that I'm not trying to preach like I'm reverend run<br/>
I beg you don't be disappointed with the man I've become<br/>
Conversations with my father on the A14<br/>
Age 12, telling me I've gotta chase those dreams<br/>
Now I'm playing for the people dad and they know me<br/>
With my beaten small guitar, wearing the same old jeans<br/>
Wembley stadium crowds, two hundred and forty thou<br/>
I may have grown up but I hope that Damian's proud<br/>
And to the next generation, inspiration's allowed<br/>
The world may be filled with hate, but keep erasing it now, somehow<br/>
I'm well aware of certain things that will befall a man like me<br/>
But with that said give me one more<br/>
I am another one to take the sting away<br/>
Oh I am happy on my own so here I'll stay<br/>
Well save your loving arms for a rainy day<br/>
And I'll find comfort in my pain eraser<br/>
And I'll find comfort in my pain eraser<br/>
And I'll find comfort in my pain eraser</div>
						<div>Welcome to the new show<br/>
I guess you know I've been away<br/>
Where I'm heading who knows<br/>
My heart will stay the same<br/>
Welcome to the new show<br/>
I guess you know I've been away<br/>
Where I'm heading who knows<br/>
My pain eraser<br/>
And I'll find comfort in my pain eraser<br/>
And I'll find comfort in my pain eraser<br/>
And I'll find comfort in my pain eraser<br/>
And I'll find comfort in my pain eraser.</div>
				
					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	loading:function(){
		let content = <div>
					<div className="progressbar-infinite color-multi"></div>
					<audio id="audio">
						<source src="audio/bomb.mp3" type="audio/mP3" />
					</audio>
					<div align='center'>
						<img src='img/ED SHE.jpg' width='400px' height='500px'/>
						Loading...
					</div>

				</div>;
		ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio').play();
		process.replayAudio('audio');
	},
	audio:function(audio){
		let _audio = document.getElementById(audio);
		return _audio;
	},
	replayAudio:function(audio){
		process.audio(audio).addEventListener('ended',function(){
			process.audio('audio').pause();
			process.audio(audio).play();
		})
	}
}

let counting = 0;
process.loading();
setTimeout(function(){
	process.audio('audio').pause();
	process.menu();
},1000);