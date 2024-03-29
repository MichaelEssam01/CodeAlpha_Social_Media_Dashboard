let users = [
	{ email: 'user1@example.com', password: 'password1' },
	{ email: 'user2@example.com', password: 'password2' }
  ];
  
 
  let socialMediaStats = {
	twitter: {
	  reactions: 1500,
	  comments: 500,
	  shares: 200,
	  postsThisWeek: 10,
	  chartData: [500, 300, 700, 400, 600, 800, 900] 
	},
	facebook: {
	  reactions: 2500,
	  comments: 800,
	  shares: 300,
	  postsThisWeek: 15,
	  chartData: [800, 700, 1200, 900, 1000, 1500, 1400] 
	},
	instagram: {
	  reactions: 1800,
	  comments: 600,
	  shares: 250,
	  postsThisWeek: 12,
	  chartData: [400, 600, 800, 1000, 1200, 1400, 1600] 
	},
	youtube: {
	  reactions: 3500,
	  comments: 1200,
	  shares: 400,
	  videosThisWeek: 20,
	  chartData: [800, 1000, 1200, 1500, 1800, 2000, 2200] 
	}
  };
  
// Function to check if the user exists and sign in
function signIn() {
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;

let user = users.find(u => u.email === email && u.password === password);
if (user) {
	document.getElementById('auth-message').innerText = '';
	showDashboard();
	drawCharts();
} 
else {
	document.getElementById('auth-message').innerText = 'Invalid email or password';
}
}
  
function signUp() {
	alert('Sign Up functionality not implemented in this example.');
}
  
// Function to display the dashboard after successful sign in
function showDashboard() {
	document.getElementById('auth-container').style.display = 'none';
	document.getElementById('dashboard-container').style.display = 'block';
  
	// Display social media stats
	displaySocialMediaStats();
}
  
// Function to display social media stats
  	function displaySocialMediaStats() {
	let twitterStats = socialMediaStats.twitter;
	let facebookStats = socialMediaStats.facebook;
	let instagramStats = socialMediaStats.instagram;
	let youtubeStats = socialMediaStats.youtube;

	document.getElementById('twitter-reactions').innerText = twitterStats.reactions;
	document.getElementById('twitter-comments').innerText = twitterStats.comments;
	document.getElementById('twitter-shares').innerText = twitterStats.shares;
	document.getElementById('twitter-posts').innerText = twitterStats.postsThisWeek;

	document.getElementById('facebook-reactions').innerText = facebookStats.reactions;
	document.getElementById('facebook-comments').innerText = facebookStats.comments;
	document.getElementById('facebook-shares').innerText = facebookStats.shares;
	document.getElementById('facebook-posts').innerText = facebookStats.postsThisWeek;
  
	document.getElementById('instagram-reactions').innerText = instagramStats.reactions;
	document.getElementById('instagram-comments').innerText = instagramStats.comments;
	document.getElementById('instagram-shares').innerText = instagramStats.shares;
	document.getElementById('instagram-posts').innerText = instagramStats.postsThisWeek;
  
	document.getElementById('youtube-reactions').innerText = youtubeStats.reactions;
	document.getElementById('youtube-comments').innerText = youtubeStats.comments;
	document.getElementById('youtube-shares').innerText = youtubeStats.shares;
	document.getElementById('youtube-videos').innerText = youtubeStats.videosThisWeek;
}
  
// Function to draw charts using Chart.js
function drawCharts() {
	// Twitter chart
	let twitterCtx = document.getElementById('twitter-chart').getContext('2d');
	let twitterChart = new Chart(twitterCtx, {
	  type: 'line',
	  data: {
		labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		datasets: [{
		  label: 'Engagement',
		  data: socialMediaStats.twitter.chartData,
		  fill: false,
		  borderColor: '#1da1f2', 
		  tension: 0.4
		}]
	  },
	  options: {
		scales: {
		  y: {
			beginAtZero: true
		  }
		}
	  }
	});
  
	// Facebook chart
	let facebookCtx = document.getElementById('facebook-chart').getContext('2d');
	let facebookChart = new Chart(facebookCtx, {
	  type: 'line',
	  data: {
		labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		datasets: [{
		  label: 'Engagement',
		  data: socialMediaStats.facebook.chartData,
		  fill: false,
		  borderColor: '#3b5998', 
		  tension: 0.4
		}]
	  },
	  options: {
		scales: {
		  y: {
			beginAtZero: true
		  }
		}
	  }
	});
  
	// Instagram chart
	let instagramCtx = document.getElementById('instagram-chart').getContext('2d');
	let instagramChart = new Chart(instagramCtx, {
	  type: 'line',
	  data: {
		labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		datasets: [{
		  label: 'Engagement',
		  data: socialMediaStats.instagram.chartData,
		  fill: false,
		  borderColor: '#c32aa3', 
		  tension: 0.4
		}]
	  },
	  options: {
		scales: {
		  y: {
			beginAtZero: true
		  }
		}
	  }
	});
  
	// YouTube chart
	let youtubeCtx = document.getElementById('youtube-chart').getContext('2d');
	let youtubeChart = new Chart(youtubeCtx, {
	  type: 'line',
	  data: {
		labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		datasets: [{
		  label: 'Engagement',
		  data: socialMediaStats.youtube.chartData,
		  fill: false,
		  borderColor: '#ff0000', 
		  tension: 0.4
		}]
	  },
	  options: {
		scales: {
		  y: {
			beginAtZero: true
		  }
		}
	  }
	});
}
// Function to exit the dashboard and return to the authentication page
function exitDashboard() {
	document.getElementById('dashboard-container').style.display = 'none';
	document.getElementById('auth-container').style.display = 'block';
  
	// Clear the email and password input fields
	document.getElementById('email').value = '';
	document.getElementById('password').value = '';
  
	// Clear the authentication message if any
	document.getElementById('auth-message').innerText = '';
  }
  