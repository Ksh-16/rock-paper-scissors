# Rock Paper Scissors Game 🎮

A classic **Rock Paper Scissors** game built with vanilla HTML, CSS, and JavaScript. Play against the computer and track your score in real-time!

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [How to Use](#how-to-use)
- [Game Rules](#game-rules)
- [Technologies Used](#technologies-used)
- [File Descriptions](#file-descriptions)
- [How It Works](#how-it-works)
- [Known Issues & Future Enhancements](#known-issues--future-enhancements)

---

## 🎯 Overview

This is a fun, interactive Rock Paper Scissors game where you can play against a computer opponent. The game features:
- Real-time feedback on game outcomes
- Visual feedback with color-coded messages
- Scoreboard tracking
- Responsive button interactions with hover effects

---

## ✨ Features

✅ **Interactive Gameplay** - Click on Rock, Paper, or Scissors to make your move  
✅ **Computer AI** - Random computer choice generation  
✅ **Live Feedback** - Messages tell you if you won, lost, or drew  
✅ **Color-Coded Results**:
   - 🟢 Green: You win!
   - 🔴 Red: You lose
   - 🟡 Yellow: Game draw
   - 🔵 Blue: Default state  
✅ **User-Friendly UI** - Circular choice buttons with images and hover effects  
✅ **Scoreboard** - Keep track of your score vs computer score  

---

## 📁 Project Structure

```
rock-paper-scissors/
│
├── index.html          # Main HTML structure
├── style.css           # Styling and layout
├── game.js             # Game logic and interactivity
├── img_rock.jpg        # Rock choice image
├── img_paper.jpg       # Paper choice image
├── img_scissors.jpg    # Scissors choice image
└── README.md           # Project documentation
```

---

## 🚀 How to Use

### Getting Started
1. **Download or clone** the project files to your local machine
2. **Ensure all files are in the same directory**:
   - `index.html`
   - `style.css`
   - `game.js`
   - Image files (`img_rock.jpg`, `img_paper.jpg`, `img_scissors.jpg`)
3. **Open `index.html`** in your web browser
4. **Start playing!** Click on your choice: Rock, Paper, or Scissors

### Playing the Game
- Click one of the three circular buttons (Rock, Paper, or Scissors)
- The computer automatically generates its choice
- The result is displayed with a message and color feedback
- The message disappears after your next move

---

## 🎲 Game Rules

The classic Rock Paper Scissors rules apply:
- **Rock** beats **Scissors** ✂️
- **Paper** beats **Rock** 🪨
- **Scissors** beats **Paper** 📄
- Same choices = **Draw** 🤝

---

## 💻 Technologies Used

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Structure and semantic markup |
| **CSS3** | Styling, layout, and hover effects |
| **Vanilla JavaScript (ES6)** | Game logic and DOM manipulation |

No external libraries or frameworks required - lightweight and fast!

---

## 📄 File Descriptions

### `index.html`
- Contains the semantic HTML structure
- Defines the game container with three choice buttons
- Includes the scoreboard section
- Links to CSS stylesheet and JavaScript file
- All images are referenced with `src` attributes

**Key Elements:**
- Header: Game title
- Choices: Three circular buttons (rock, paper, scissors)
- Scoreboard: Displays user score and computer score
- Message Container: Shows game result messages

### `style.css`
- Uses a dark theme with color accents (indigo `#081b31` background)
- **Flexbox layout** for responsive design
- **Circular buttons** with 50% border-radius
- **Hover effects** for better UX
- **Color-coded messages**: Green (win), Red (loss), Yellow (draw)
- Responsive text sizing and spacing

**Key Styles:**
```css
.choice { height: 165px; width: 165px; border-radius: 50%; }
.choice:hover { cursor: pointer; background-color: #081b31; }
#msg { background-color: #081b31; color: #fff; padding: 1rem; }
```

### `game.js`
- **Core game logic** with event listeners
- **Computer choice generation** using `Math.random()`
- **Game outcome determination** logic
- **DOM updates** for real-time feedback

**Key Functions:**
- `genCompChoice()` - Generates random computer choice
- `playGame(userChoice)` - Main game function
- `showWinner()` - Displays win/loss message with styling
- `drawGame()` - Handles draw scenarios

---

## ⚙️ How It Works

### Game Flow

```
1. User clicks a choice button (Rock, Paper, or Scissors)
   ↓
2. Event listener captures the choice via button's ID
   ↓
3. playGame() function is triggered with user's choice
   ↓
4. Computer generates a random choice using genCompChoice()
   ↓
5. Game logic compares choices:
   - If same → drawGame()
   - If different → Calculate winner using conditional logic
   ↓
6. showWinner() displays the result with appropriate styling
   ↓
7. Message box updates with outcome and color feedback
```

### Logic Breakdown

**Winning Conditions:**
```javascript
if(userChoice==="rock"){
    userWin = compChoice==="paper" ? false : true;
}
// Similar logic for paper and scissors
```

Each choice is evaluated against all three possibilities to determine if the user wins or loses.

---

## 🐛 Known Issues & Future Enhancements

### Known Issues
1. **Score Not Persisted** - `userScore` and `compScore` variables are declared but never incremented. Need to update score display after each game.
2. **Missing Reset Button** - No way to reset scores back to 0.
3. **No Game History** - Previous moves are not displayed or stored.

### Suggested Improvements
- [ ] **Update Score Display** - Increment scores and update DOM elements `#user-score` and `#comp-score`
- [ ] **Add Reset Button** - Reset scores to 0 with a "Reset Game" button
- [ ] **Game Statistics** - Show win/loss ratio and total games played
- [ ] **Keyboard Controls** - Allow playing with R/P/S keys
- [ ] **Game History** - Display last 5 moves with outcomes
- [ ] **Sound Effects** - Add audio feedback for wins/losses
- [ ] **Difficulty Levels** - Easy/Medium/Hard computer AI
- [ ] **Local Storage** - Persist high scores across sessions
- [ ] **Animations** - Add smooth transitions and choice animations
- [ ] **Mobile Responsive** - Optimize for mobile devices

---

## 🎨 UI Theme

- **Primary Color**: Dark Indigo (`#081b31`)
- **Text Color**: White (`#fff`)
- **Win Message**: Green background
- **Loss Message**: Red background
- **Draw Message**: Yellow background
- **Button Size**: 165px × 165px circular buttons
- **Font Size**: 2rem for messages, 4rem for scores

---

## 📝 Example Game Sequence

```
1. User clicks on "Rock" button
2. Computer randomly selects "Scissors"
3. Message displays: "You win! your rock beats scissors"
4. Message box turns green
5. Ready for next move
```

---

## 🤝 Contributing

Feel free to fork this project and make improvements! Some great areas to contribute:
- Implementing the missing score update functionality
- Adding the reset button feature
- Improving the UI/UX design
- Adding new features from the enhancement list

---

## 📄 License

This project is open source and available for educational and personal use.

---

## 🙋 Support

If you encounter any issues or have questions:
1. Check the **Known Issues** section above
2. Review the game logic in `game.js`
3. Verify all image files are present and properly named
4. Ensure all three files (HTML, CSS, JS) are in the same directory

---

## 🎉 Have Fun!

Enjoy playing Rock Paper Scissors! Challenge yourself and see if you can beat the computer! 🎮

---

**Last Updated**: September 2026  
**Version**: 1.0  
**Status**: Active Development
