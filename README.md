# Greeting Card Maker

Welcome to the Greeting Card Maker project! This application enables users to craft personalized greeting cards effortlessly. Users can input a title and a message, which dynamically update on the card preview. Additionally, they can choose from a selection of preset background images or upload their own to further customize their cards.

## Features

- **Real-time Updates**: Witness instant changes to your card preview as you type your title and message.
- **Background Images**: Select from a variety of preset background images or upload your own to tailor the card's ambiance.
- **Message Generation with Google Gemini AI**: Utilize the power of Google Gemini AI to generate unique and creative messages for your greeting cards.
- **Download as Image**: Download your created greeting card as an image file for easy sharing and printing.
- **Responsive Design**: Enjoy a seamless experience across various devices and screen sizes.

## Technologies Used

- **React**: Frontend framework for crafting user interfaces.
- **Node.js**: Backend JavaScript runtime environment.
- **HTML/CSS**: Markup and styling for the user interface.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

## Screenshots

![Greeting Card](/screenshots/card.png)
_Screenshot of the Greeting Card where users can modify the card._

![Greeting Card Open](/screenshots/cardOpen.png)
_Screenshot of the Greeting Card opened where you can see the message inside._

![Message](/screenshots/generateMessage.png)
_Screenshot of the Message generating modal where you can generate an AI message._

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/Raderne/greetings-card-maker.git
   ```

2. Navigate to the project directory:

   ```
   cd greeting-card-maker
   ```

3. Install dependencies for both the frontend and backend:

   ```
   cd client
   npm install
   cd ../backend
   npm install
   ```

4. Start the backend server:

   ```
   npm start
   ```

5. Start the frontend development server:

   ```
   npm run dev
   ```

6. Open your web browser and navigate to `http://localhost:3000` to view the application.

## Usage

1. **Create a Greeting Card**: Begin by entering a title and message for your greeting card.
2. **Choose Background Image**: Select a background image from the presets or upload your own.
3. **Generate Message with Google Gemini AI**: Optionally, use Google Gemini AI to generate a unique message for your card.
4. **Preview**: Witness real-time updates on the card preview as you compose your title, message, or generate a message with AI.
5. **Download**: Once satisfied, download your greeting card as an image.

## License

This project is licensed under the [MIT License](LICENSE).
