Got it! I’ll expand your Viscel README with more technical details while keeping it clear and readable:

---

# Viscel

Viscel is a desktop application built with **Electron**, **React**, **TypeScript**, and **Vite** that lets users create a customizable widget containing apps they use frequently. Users can **add apps to a widget**, give it a name, and then **click the widget to launch all selected apps at once**, streamlining their workflow.

The application leverages Electron to provide a cross-platform desktop environment. React and TypeScript handle the frontend UI and state management, while Vite is used as a fast bundler and development server. The app uses **Node.js child processes** to launch external applications, ensuring each selected app opens independently when the widget is clicked. Application configurations, including widget names and app paths, are persisted locally using **JSON-based storage**, allowing settings to remain across sessions.

The project separates frontend and backend concerns:

* The **renderer process** (`src/renderer`) handles the React UI, including the widget interface, app selection, and dynamic list rendering.
* The **main process** (`src/main`) manages Electron windows, IPC communication, and executes commands to launch apps.
* **IPC (Inter-Process Communication)** channels are used to send requests from the UI to the main process securely, such as adding new apps, saving widgets, or triggering app launches.

To set up Viscel locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/sr3yo/viscel-app.git
   cd viscel-app
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the development version:

   ```bash
   npm run dev
   ```

   This opens Viscel in an Electron window with hot reloading for UI changes.
4. Build a production-ready version for your platform:

   ```bash
   npm run build
   ```

   Uses **electron-builder** to package the app into an installer for Windows, macOS, or Linux.



