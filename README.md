# Shipping Form Application

This is a Next.js application with a shipping form that validates user input and displays a confirmation page upon successful submission. The form includes fields for Instagram handle, product, email, confirm email, first name, last name, address, city, state, and zip code. Tailwind CSS is used for styling.

## Steps to Try Out the Solution

1. **Clone the Repository**:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install Dependencies**:
    ```sh
    npm install
    ```

3. **Run the Development Server**:
    ```sh
    npm run dev
    ```

4. **Open the Application**:
    Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Bonus: Deploy Your Assignment Online for Easy Testing

You can easily deploy this Next.js application using Vercel.

1. **Install Vercel CLI**:
    ```sh
    npm install -g vercel
    ```

2. **Deploy the Application**:
    ```sh
    vercel
    ```

3. **Follow the Prompts** to link your project and complete the deployment.

## Design Choices

- **Next.js**: Chosen for its server-side rendering capabilities, ease of use, and excellent developer experience.
- **Tailwind CSS**: Used for styling to rapidly build a responsive and modern user interface.
- **Client-Side Validation**: Implemented to provide immediate feedback to users and ensure data integrity before submission.
- **Modular Components**: The form and modal components are separated for better maintainability and reusability.

## Limitations

- **Client-Side Only**: The current implementation handles validation and form submission on the client side only. There is no backend to process or store the form data.
- **Basic Error Handling**: The error messages are simple and only cover basic validation checks.

## Ideas for Improvement

- **Backend Integration**: Add a backend service to handle form submissions, store data, and send email confirmations.
- **Advanced Validation**: Implement more advanced validation, such as checking for existing Instagram handles or verifying email domains.
- **Unit Tests**: Add unit tests to ensure the reliability and correctness of the components and validation logic.
- **Enhanced UI/UX**: Improve the design and user experience, such as adding animations, tooltips, or better error messages.

## How You Would Approach It Differently with More Time/Resources

- **Scalable Architecture**: Design the application with a scalable architecture in mind, separating frontend and backend services.
- **API Integration**: Integrate with third-party APIs to enhance functionality, such as address auto-completion or Instagram handle verification.
- **Performance Optimization**: Optimize the application for performance, including lazy loading of images and components, and code splitting.
- **Accessibility**: Ensure the application is fully accessible, following WCAG guidelines and using semantic HTML.

## Other Important Thoughts

- **Security Considerations**: Ensure that user data is handled securely, including using HTTPS, sanitizing inputs, and protecting against common vulnerabilities such as XSS and CSRF.
- **Continuous Deployment**: Set up CI/CD pipelines to automate testing and deployment, ensuring that new changes are safely integrated and deployed to production.

---

Feel free to try out the application and explore its features. Contributions and feedback are welcome!

