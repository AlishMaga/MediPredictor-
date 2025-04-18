document.addEventListener('DOMContentLoaded', () => {
	const signUpButton = document.getElementById('signUp');
	const signInButton = document.getElementById('signIn');
	const container = document.getElementById('container');

	// Toggle between sign-up and sign-in forms
	signUpButton.addEventListener('click', () => {
			container.classList.add('right-panel-active');
	});

	signInButton.addEventListener('click', () => {
			container.classList.remove('right-panel-active');
	});
});
