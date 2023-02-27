#DevQuiz

This is a [Create React App](https://create-react-app.dev/) (CRA) project with [Tailwind CSS](https://tailwindcss.com/) and [Daisy UI](https://daisyui.com/) integrated.

## Description of the Quiz App

The quiz app is designed to allow users to take a multiple-choice quiz. The main component of the app, `App`, renders different components based on the current state of the app.

If the app is waiting for the user to select their quiz preferences, `App` renders the `SetupForm` component which prompts the user to select the number of questions, category, and difficulty level they want for their quiz.

If the app is still loading the quiz questions, `App` renders the `Loading` component to indicate to the user that the app is still processing their request.

Once the quiz questions have been loaded, `App` renders the current quiz question and multiple answer choices using the `Question` component.

The `Question` component randomly shuffles the order of the answer choices and presents them to the user. If the user selects the correct answer, the app increments the user's score and presents the next question.

When the user has answered all the quiz questions, `App` renders the `Results` component which displays the user's final score and allows the user to restart the quiz.

The app makes use of context to manage the state of the quiz, including the user's preferences, the quiz questions, the user's score, and the user's progress through the quiz. The `useGlobalContext` hook allows other components in the app to access and modify the app's state.

## Installation

To install and run the App, use the following commands:

```
npm install
npm start
```

## Building

To build the App, use the following command:

```
npm run build
```

## Hosting

The App is hosted on [Netlify](https://www.netlify.com/).

The App is deployed at https://devquiz-fps.netlify.app

## Author

This App was created by Frank Kelly.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
