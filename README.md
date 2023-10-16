# Credit Card Validation System
This project is a React application that allows admins to submit credit card numbers for validation. The application has the following features:

## Credit Card Input: 
Users can input credit card numbers. The application determines if the input number is a real credit card number using the Luhn algorithm and checks if the card number length is between 13 and 16 digits.

## Country Input: 
Users can input the country of origin for the credit card. The application checks if the country is in a list of banned countries.

## Expiration Date Input:
Users can input the expiration date of the credit card. The application checks if the card has already expired.

## Banned Countries: 
The application maintains a list of countries banned from credit card purchases. Users can add or remove countries from this list.

## Card List: 
The application displays all valid credit cards that have been saved during the session. It does not allow duplicate cards to be added to the list.
The state of the application is managed using React’s useState and useEffect hooks. The state is saved to sessionStorage for the duration of the session, and user inputs will remain saved until 
the page is refreshed.

## Security:
In a real world application, for safety and data protection reasons, a system such as this would be handled by trusted 3rd party software. For the scope of this project, it is unnecessary.


### Installation
To install this project, clone the repository and run npm install to install all dependencies. Then run npm start to start the development server.

## Important - Usage
To use this application, enter a credit card number, select a country, and enter an expiration date. Click “Submit” to add the card to the list of valid cards. If the card is invalid, the date has expired, or if it’s from a banned country, an error message will be displayed. Only valid credit card numbers will be accepted. For the reason of safety and privacy, please do not use your real card information. For the purposes of this assignment, I tested the application with a list of testing-specific credit card numbers from PayPal (https://www.paypalobjects.com/en_AU/vhelp/paypalmanager_help/credit_card_numbers.html). Any country and date may be chosen at random. For your convenience, please select one of the numbers from the list below to use as input:

378282246310005
	
371449635398431
	
378734493671000
	
5610591081018250
	
30569309025904
	
38520000023237
	
6011111111111117
	
6011000990139424
	
3530111333300000
	
3566002020360505
	
5555555555554444
	
5105105105105100

To add a country to the banned list, enter the country name in the “Banned Countries” section and click “Add”. To remove a country from the banned list, click “Remove” next to the country name.

Contributing:
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

License
MIT
