# My Project

Welcome to My Project! This repository contains the source code for my website.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with the project, follow the instructions below.

## Features

- **Alarm**: Set and manage alarms with customizable time selection.
- **Clock**: View the current time with hours, minutes, and seconds.
- **Stopwatch**: Measure time intervals with start, stop, and reset functionality.
- **Timer**: Set a timer for a specific duration and receive a notification when the time elapses.

## File Structure

The repository is organized into the following folders:

1. **screen**: Contains the HTML files for different screens of the application.
   - `alarm.html`: HTML file for the alarm screen.
   - `clock.html`: HTML file for the clock screen.
   - `index.html`: HTML file for the main landing page.
   - `stopwatch.html`: HTML file for the stopwatch screen.
   - `timer.html`: HTML file for the timer screen.
2. **script**: Contains JavaScript files for each functionality of the clock app.
   - `alarm.js`: JavaScript code for the alarm functionality.
   - `clock.js`: JavaScript code for updating the clock.
   - `stopwatch.js`: JavaScript code for the stopwatch functionality.
   - `timer.js`: JavaScript code for the timer functionality.
3. **style**: Contains CSS files for styling the clock app.
   - `style.css`: CSS styles shared across different screens.
   - `responsive.css`: CSS styles for responsive design.
4. **icons&ringtones**: Contains icon and ringtone files used in the application.
   - `fontawesome-5.15.4/css/all.css`: CSS file for Font Awesome icons.
   - `alarm.mp3`: Audio file for the alarm ringtone.

### Prerequisites

Make sure you have the following software installed on your system:

- Node.js (https://nodejs.org)
- Visual Studio Code (https://code.visualstudio.com)

### Installation

1. Clone this repository to your local machine using the following command: https://github.com/PropZii/Portfolio-Clock.git

2. Navigate to the project directory: cd my-project

3. Install the required dependencies by running the following command: npm install

## Usage

1. Open the project in Visual Studio Code.

2. Open the `settings.json` file in the `.vscode` directory.

3. Modify the `liveServer.settings.port` property to set the desired port number for Live Server. For example, change it to: "liveServer.settings.port": 5501

4. Save the `settings.json` file.

5. Start Live Server by clicking on the "Go Live" button at the bottom right corner of Visual Studio Code, or by using the keyboard shortcut `Ctrl+Alt+L`.

6. Your website will open in your default web browser with the Live Server running on the specified port.


## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please create a new issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

