OrangeHRM UI Automation Framework

A UI test automation framework built using Playwright and TypeScript to automate key functionalities of the OrangeHRM web application.

🛠️ Tech Stack
Playwright
TypeScript
Node.js
GitHub Actions
Git and GitHub
🚀 Features
Page Object Model (POM): Separates test logic from page interactions for maintainability.
Component Pattern: Promotes reusable UI components and reduces code duplication.
Test Data Pattern: Organizes test data for reusable and maintainable test scenarios.
Custom Fixtures: Provides reusable page objects and authenticated test setup.
Environment Configuration: Manages application URLs and credentials using environment variables.
Test Reporting: Uses Playwright reports and failure artifacts for debugging.
Continuous Integration: Integrates GitHub Actions to execute automated tests during pushes and pull requests.
🧪 Modules Covered
Login
Dashboard
Admin
Leave
Time
Recruitment
⚙️ Setup and Execution

Install dependencies:

npm ci
npx playwright install


Run all tests:

npx playwright test


Run smoke tests:

npx playwright test --grep "@smoke"


View the HTML report:

npx playwright show-report

🔐 Security

Credentials are managed through environment variables locally and GitHub Actions repository secrets in CI. Sensitive files are excluded using .gitignore.

🎯 Objective

Demonstrate practical skills in UI automation, reusable framework design, test reporting, debugging, and CI integration.

👨‍💻 Author

Your Name