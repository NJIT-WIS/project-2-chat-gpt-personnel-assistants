
  
  

## Epic 1: Sanity Schema Creation for Webclass

  

_As a webclass developer, I want to create and manage content for my webclass using Sanity, so that I can ensure a flexible and efficient content management experience._

  

### User Stories:

  

1.  **Create a footer schema**  _As a webclass developer, I want to create a footer schema, so that I can manage and update the website's footer content easily._
**Assigned to:** Jonathan Grossman
- Create a schema for the footer, including fields for copyright information, links, and social media icons.

- Ensure the footer schema can be edited and updated through the Sanity platform.

2.  **Create a page schema**  _As a webclass developer, I want to create a page schema, so that I can manage and create new pages with consistent layouts and content structures._
**Assigned to:** Jonathan Grossman
- Create a schema for pages, including fields for title, description, and content blocks.

- Enable the page schema to support different content block types such as text, images, and videos.

3.  **Create a post schema**  _As a webclass developer, I want to create a post schema, so that I can manage and publish blog posts or articles with ease._
**Assigned to:** Jonathan Grossman
- Create a schema for posts, including fields for title, author, date, categories, and content.

- Ensure the post schema supports rich text formatting, embedded images, and videos.

4.  **Create a menu schema**  _As a webclass developer, I want to create a menu schema, so that I can manage and update the site's navigation menu easily._
**Assigned to:** Jonathan Grossman
- Create a schema for the menu, including fields for menu items, links, and dropdowns.

- Enable the menu schema to support multi-level navigation.

5.  **Create an SEO schema**  _As a webclass developer, I want to create an SEO schema, so that I can manage and optimize the website's search engine visibility._
**Assigned to:** Jonathan Grossman
- Create a schema for SEO, including fields for meta title, meta description, and meta keywords.

- Ensure the SEO schema is applied to all pages and posts created using the page and post schemas.

6.  **Create a hero schema**  _As a webclass developer, I want to create a hero schema, so that I can manage and design engaging hero sections for pages and posts._
**Assigned to:** Jonathan Grossman
- Create a schema for hero sections, including fields for title, subtitle, background image, and call-to-action buttons.

- Enable the hero schema to be added to pages and posts as a content block.

  
  

## Epic 2: Responsive Frontend Components with Tailwind and Next.js

  

_As a frontend developer, I want to create responsive components using Tailwind CSS and Next.js, so that I can map content from Sanity schemas and provide a consistent, engaging user experience._

  

### User Stories:

  

1.  **Create a responsive footer component**  _As a frontend developer, I want to create a responsive footer component, so that I can display the content from the footer schema on the webclass._
**Assigned to:** Jonathan Grossman
- Create a responsive footer component using Tailwind CSS.

- Integrate the component with the footer schema from Sanity.

- Ensure the footer displays properly on all devices and screen sizes.

2.  **Create a responsive page component**  _As a frontend developer, I want to create a responsive page component, so that I can display the content from the page schema on the webclass._
**Assigned to:** Jonathan Grossman
- Create a responsive page component using Tailwind CSS.

- Integrate the component with the page schema from Sanity.

- Ensure the page component supports different content block types and displays properly on all devices and screen sizes.

3.  **Create a responsive post component**  _As a frontend developer, I want to create a responsive post component, so that I can display the content from the post schema on the webclass._
**Assigned to:** Jonathan Grossman
- Create a responsive post component using Tailwind CSS.

- Integrate the component with the post schema from Sanity.

- Ensure the post component displays properly on all devices and screen sizes.

4.  **Create a responsive menu component**  _As a frontend developer, I want to create a responsive menu component, so that I can display the content from the menu schema on the webclass._
**Assigned to:** Jonathan Grossman
- Create a responsive menu component using Tailwind CSS.

- Integrate the component with the menu schema from Sanity.

- Ensure the menu component supports multi-level navigation and displays properly on all devices and screen sizes.

5.  **Create responsive SEO components**  _As a frontend developer, I want to create responsive SEO components, so that I can optimize the website's search engine visibility using the SEO schema._

- Create responsive components for meta title, meta description, and meta keywords using Tailwind CSS.

- Integrate the components with the SEO schema from Sanity.

- Ensure the SEO components are applied to all pages and posts created using the page and post components.

6.  **Create a responsive hero component**  _As a frontend developer, I want to create a responsive hero component, so that I can display the content from the hero schema on the webclass._
**Assigned to:** Jonathan Grossman
- Create a responsive hero component using Tailwind CSS.

- Integrate the component with the hero schema from Sanity.

- Ensure the hero component displays properly on all devices and screen sizes.

  

## Epic: Setting Up a CI/CD Pipeline

- Assigned to: Jonathan Grossman

_As a developer, I want to set up a Continuous Integration and Continuous Deployment (CI/CD) pipeline, so that I can automate the build, test, and deployment processes for my project._

  

### User Stories:



1.  **Create a GitHub workflow for deploying the site to Vercel**  _As a developer, I want to create a GitHub workflow that deploys the site to Vercel on pushes to the main branch, so that I can automatically deploy new changes._
**Assigned to:** Jonathan Grossman

- Create a GitHub Actions workflow file.

- Configure the workflow to trigger on pushes to the main branch.

- Set up the necessary steps to build and deploy the site to Vercel.

2.  **Create a GitHub workflow to run a full Lighthouse audit**  _As a developer, I want to create a GitHub workflow that runs a full Lighthouse audit on pushes to the main branch, so that I can ensure the site's performance, accessibility, and SEO are optimized._
**Assigned to:** Jonathan Grossman
- Create a GitHub Actions workflow file.

- Configure the workflow to trigger on pushes to the main branch.

- Set up the necessary steps to run a full Lighthouse audit and report the results.

3.  **Create a GitHub workflow to run Playwright tests**  _As a developer, I want to create a GitHub workflow that runs Playwright tests on pushes to all branches, so that I can catch issues early and ensure the site functions correctly._
**Assigned to:** Jonathan Grossman
- Create a GitHub Actions workflow file.

- Configure the workflow to trigger on pushes to all branches.

- Set up the necessary steps to run Playwright tests and report the results.

4.  **Set up ESLint and Prettier**  _As a developer, I want to set up ESLint and Prettier, so that I can maintain a consistent code style and catch potential issues early._
**Assigned to:** Jonathan Grossman
- Install and configure ESLint with the desired rules.

- Install and configure Prettier with the desired settings.

- Ensure that ESLint and Prettier work together seamlessly.

  

With these user stories and their respective acceptance criteria, the development team will set up a robust CI/CD pipeline, automating the build, test, and deployment processes for the project. This will increase efficiency, maintain code quality, and ensure a reliable user experience.

  
  

## Epic: Frontend Functions and Integrations for A/B Testing

  

_As a frontend developer, I want to create frontend functions and integrations for A/B testing, so that I can optimize the user experience and conversion rates for the web application._

  

### User Stories:

  

1.  **Create a function for A/B testing of hero content**  _As a frontend developer, I want to create a function that saves a number as a cookie and uses it to set hero text and image, so that I can perform A/B testing on the hero section._
**Assigned to:** Jonathan Grossman
- Develop a function that generates a random number (0 or 1) and saves it as a cookie.

- Use the saved number to conditionally display different hero text and images.

- Ensure that the A/B testing function works seamlessly with the hero component and the user experience.

2.  **Create a modal with a volunteer form**  _As a frontend developer, I want to create a modal with a form to volunteer, so that users can easily express their interest in volunteering directly from the hero section._
**Assigned to:** Jonathan Grossman
- Develop a modal component that contains a form for users to input their information (e.g., name, email, and any additional relevant details).

- Create a button within the hero component to open the volunteer modal.

- Ensure the modal and form are responsive and user-friendly.

3.  **Create an API endpoint to send form data to Mailchimp**  _As a frontend developer, I want to create an API endpoint to send volunteer form data to Mailchimp, so that I can manage and communicate with volunteers efficiently._
**Assigned to:** Jonathan Grossman
- Develop an API endpoint that receives volunteer form data from the frontend.

- Integrate the API endpoint with Mailchimp, ensuring that form data is sent to the appropriate mailing list.

- Securely handle API keys and user data during the integration process.

4.  **Create a toast component for successful form submission**  _As a frontend developer, I want to create a toast component that displays on successful submission of the volunteer form data to the Mailchimp API endpoint, so that users receive feedback on their action._
**Assigned to:** Jonathan Grossman
- Develop a reusable toast component that can be triggered on successful form submission.

- Ensure the toast component displays a clear success message and dismisses automatically after a set duration or when the user clicks on it.

- Integrate the toast component into the volunteer form submission process.

5.  **Create a Mailchimp account for the project**  _As a team member, I want to create a Mailchimp account to use with the API endpoint, so that I can manage volunteers and communicate with them effectively._
**Assigned to:** Jonathan Grossman
- Sign up for a Mailchimp account.

- Set up the necessary mailing lists for the project.

- Obtain and securely store the API key for integration with the API endpoint.

6.  **Create a Google Analytics event for tracking hero clicks**  _As a frontend developer, I want to create a Google Analytics event to log the specific hero text and image clicked when a user volunteers, so that I can better understand user engagement and improve the effectiveness of the A/B testing._
**Assigned to:** Jonathan Grossman
- Set up a Google Analytics event for tracking clicks on the hero section.

- Ensure the event captures the specific hero text and image displayed when the user clicked to volunteer.

- Integrate the event with the volunteer form submission process, triggering the event when the user submits the form.
## Epic 5: Playwright Testing for Website Functionality and Compliance

_As a web developer, I want to leverage Playwright to create and manage automated tests for my website, so that I can ensure a high level of quality and compliance._

### User Stories:
1.  **Testing for descriptive links**_As a web developer, I want to write automated tests using Playwright to ensure that all links on the website are descriptive, so that users can understand the purpose of the links._
**Assigned to:** Frank Xu
- Write automated tests using Playwright to ensure that all links contain descriptive text.
- Identify any links that do not meet the descriptive text criteria and address them.

2.  **Testing for presence of a cookie modal and mentions GDPR in said cookie modal**_As a web developer, I want to write automated tests using Playwright to ensure that the website has a cookie modal that mentions GDPR compliance._
**Assigned to:** Frank Xu
- Write automated tests using Playwright to ensure that a cookie modal appears on the website.
- Verify that the cookie modal includes a mention of GDPR compliance.
- Address any issues identified by the automated tests.

3.  **Check the correct usage of meta tags**_As a web developer, I want to write automated tests using Playwright to ensure that the website is using meta tags correctly, so that search engines can properly index the website._
**Assigned to:** Frank Xu
- Write automated tests using Playwright to ensure that all pages have appropriate meta tags.
- Verify that the meta tags are being used correctly.
- Address any issues identified by the automated tests.

4.  **Checks the support of a specific language**_As a web developer, I want to write automated tests using Playwright to ensure that the website supports a specific language, so that users can access the website in their preferred language._
**Assigned to:** Frank Xu
- Write automated tests using Playwright to ensure that the website supports the desired language.
- Verify that all pages are correctly translated into the desired language.
- Address any issues identified by the automated tests.

5.  **Checks the presence of Google Analytics and GDPR in the privacy page**_As a web developer, I want to write automated tests using Playwright to ensure that Google Analytics is present on the website and GDPR compliance is mentioned on the privacy page._
**Assigned to:** Frank Xu
- Write automated tests using Playwright to ensure that Google Analytics is properly integrated into the website.
- Verify that GDPR compliance is mentioned on the privacy page.
- Address any issues identified by the automated tests.

6.  **Checks the presence of a title at a page**_As a web developer, I want to write automated tests using Playwright to ensure that all pages on the website have a title, so that users can understand the purpose of the page._
**Assigned to:** Frank Xu
- Write automated tests using Playwright to ensure that all pages have a title.
- Verify that the title is descriptive and accurately represents the purpose of the page.
- Address any issues identified by the automated tests.

7.  **Check accessibility of a page**_As a website developer, I want to ensure that my website is accessible to all users, including those with disabilities, so that I can provide an inclusive user experience._
- Use the Playwright test framework to check for common accessibility issues, such as missing or incorrect HTML tags, low contrast text, and non-descriptive link text.
- Check for compliance with Web Content Accessibility Guidelines (WCAG) 2.1, including standards for keyboard navigation, text alternatives for non-text content, and sufficient color contrast.
- Ensure that the website can be navigated using a screen reader, and that all content is read out in a logical order.
- Verify that all interactive elements have appropriate focus states and are accessible via keyboard navigation.
- Check that there are no time-based elements on the page that could cause issues for users with cognitive or visual disabilities.
- Ensure that any forms on the page are accessible, including appropriate labels and error messaging.
- Run the test suite with accessibility tools such as Axe, Wave or Chrome's Lighthouse, to ensure that the website meets accessibility standards.

8.  **Testing MailChimp integration with user data**_As a web developer, I want to write automated tests using Playwright to ensure that user data is properly integrated with MailChimp, so that we can effectively manage our email marketing campaigns._
- Write automated tests using Playwright to ensure that user data is correctly transferred to MailChimp.
- Verify that user data is accurately reflected in MailChimp, including contact information and subscription preferences.
- Check that email campaigns are successfully sent to subscribers, and that any automation workflows are triggered as expected.
- Address any issues identified by the automated tests.

By using Playwright to create and manage automated tests for our website, we can ensure that our website is of high quality and compliance. Additionally, integrating automated testing into our development process will allow us to catch any issues early on and address them before they become major problems.





## Epic: Creation of Webpages for a Content-Driven Website

_As a website owner, I want to create webpages for posts, home, about, privacy, and volunteer, so that users can navigate and interact with my website easily and understand the purpose and policies of the site._

**User Stories:**

1.  **As a developer, I want to create a Home webpage using pre-built frontend components and fetch data from Sanity Content Lake, so that users can view an organized and appealing landing page.**
    
    -   _Acceptance Criteria:_ 
        -   Home webpage uses pre-built frontend components.
        -   Home webpage fetches required data from Sanity Content Lake using queries.
    -   _Assigned Team Member:_ Jonathan Grossman
2.  **As a developer, I want to create an About webpage using pre-built frontend components and fetch data from Sanity Content Lake, so that users can learn about the organization or individuals behind the website.**
    
    -   _Acceptance Criteria:_
        -   About webpage uses pre-built frontend components.
        -   About webpage fetches required data from Sanity Content Lake using queries.
    -   _Assigned Team Member:_
3.  **As a developer, I want to create a Privacy webpage using pre-built frontend components and fetch data from Sanity Content Lake, so that users can understand the website's privacy policies and practices.**
    
    -   _Acceptance Criteria:_
        -   Privacy webpage uses pre-built frontend components.
        -   Privacy webpage fetches required data from Sanity Content Lake using queries.
        -   Develop a privacy/GDPR modal that displays the necessary information about the site's data collection practices.
        -   Ensure the modal includes options for users to manage their consent.
        -   Integrate the modal into the website so that it appears for new users and users who have not yet provided their consent.
        -   Test the functionality of the modal to ensure compliance with GDPR and other relevant privacy regulations.
    -   _Assigned Team Members:_  Frank Xu, Carlos Segarra, Jonathan Grossman
4.  **As a developer, I want to create a Volunteer webpage using pre-built frontend components and fetch data from Sanity Content Lake, so that users can learn about volunteer opportunities and get involved with the website's cause.**
    
    -   _Acceptance Criteria:_
        -   Volunteer webpage uses pre-built frontend components.
        -   Volunteer webpage fetches required data from Sanity Content Lake using queries.
    -   _Assigned Team Members:_  Jonathan Grossman, Frank Xu  
5.  **As a developer, I want to create a Posts webpage using pre-built frontend components and fetch data from Sanity Content Lake, so that users can view and interact with the content published on the website.**
    
    -   _Acceptance Criteria:_
        -   Posts webpage uses pre-built frontend components.
        -   Posts webpage fetches required data from Sanity Content Lake using queries.
    -   _Assigned Team Member:_ Jonathan Grossman
6.  **As a content creator, I want to create and manage the content for the Home, About, Privacy, and Volunteer pages in Sanity, including filling in SEO details, setting the menu and footer, using Markdown or Portable Text schemas, and adding images if required, so that it can be easily fetched and displayed on the corresponding webpages.**
    
    -   _Acceptance Criteria:_
        -   Content for each page is created and managed in Sanity.
        -   SEO details are filled in for each page.
        -   Menu and footer are set for each page.
        -   Markdown or Portable Text schemas are used for content creation.
        -   Images are added to each page if required.
    -   _Assigned Team Member:_ Arqam Usman Ali
7.  **As a content creator, I want to create and manage the content for the individual posts in Sanity, including filling in SEO details, setting the menu and footer, using Markdown or Portable Text schemas, and adding images if required, so that they can be easily fetched and displayed on the Posts webpage.**
    
    -   _Acceptance Criteria:_
        -   Content for individual posts is created and managed in Sanity.
        -   SEO details are filled in for each post.
        -   Menu and footer are set for each post.
        -   Markdown or Portable Text schemas are used for content creation.
        -   Images are added to each post if required.
    -   _Assigned Team Member:_ Arqam Usman Ali
   
  ## Epic - Sales Funnel Strategy with Google Analytics Tracking

## Description:
- As a product manager, I want to develop a sales funnel strategy to guide users from awareness to sign-up, tracking the hero section's call to action with Google Analytics, so that we can optimize the user journey and increase sign-ups.

## User Stories:

### User Story 1: Create Awareness Content
_As a content creator,_  
I want to create engaging content for the awareness stage,  
So that users become aware of our product or service.
    -   _Assigned Team Member:_Jonathan Grossman
**Acceptance Criteria:**
1. Develop blog posts, social media posts, videos, and other content to attract users.
2. Ensure content is informative, relevant, and engaging.
3. Promote content through various channels to reach the target audience.

### User Story 2: Implement Hero Section with Call to Action
_As a developer,_  
I want to design and implement a hero section with a compelling call to action,  
So that users are encouraged to sign up for our product or service.
    -   _Assigned Team Member: Jonathan Grossman
**Acceptance Criteria:**
1. Design a visually appealing hero section that aligns with the website's style.
2. Create a clear and persuasive call to action that encourages user sign-ups.
3. Ensure the hero section is responsive and compatible with different screen sizes and devices.

### User Story 3: Track Call to Action with Google Analytics
_As a developer,_  
I want to track the performance of the hero section's call to action with Google Analytics,  
So that we can make data-driven decisions for optimization.

**Acceptance Criteria:**
1. Integrate Google Analytics to track user interactions with the call to action.
2. Monitor key metrics such as click-through rate, conversion rate, and user engagement.
3. Analyze collected data to identify areas of improvement.



# Google Analytics Epic

## Epic Description:
As a website owner, I want to integrate Google Analytics tracking into my site, so that I can monitor and analyze user interactions such as page views, bounce rate, and session duration.

## User Stories:

### User Story 1: Implement Google Analytics Tracking Code
_As a developer,_  
I want to implement the Google Analytics tracking code on all pages of the website,  
So that user interactions can be monitored and analyzed.

**Acceptance Criteria:**
1. Add the Google Analytics tracking code to all pages of the website.
2. Ensure the tracking code is correctly configured and connected to the appropriate Google Analytics account.
    -   _Assigned Team Member: Arqam Usman Ali
### User Story 2: Real-time Tracking and Reporting
_As a website owner,_  
- I want to access real-time tracking and reporting of user interactions within the Google Analytics dashboard,  So that I can make informed decisions based on current user behavior.
 -   _Assigned Team Member: Arqam Usman Ali

**Acceptance Criteria:**
1. Real-time tracking and reporting of user interactions are available within the Google Analytics dashboard.
    -   _Assigned Team Member: Arqam Usman Ali

### User Story 3: Track Key Metrics
_As a website owner,_  
I want to track and display key metrics in the Google Analytics dashboard,  
So that I can assess the performance of my website.

**Acceptance Criteria:**
1. Track the following metrics and display them in the Google Analytics dashboard:
   a. Page views
   b. Bounce rate
   c. Session duration
    -   _Assigned Team Member: Arqam Usman Ali

### User Story 4: Data Storage and Accessibility
_As a website owner,_  
I want data to be stored and accessible for historical analysis and comparison,  
So that I can evaluate the performance of my website over time.

**Acceptance Criteria:**
1. Data is stored and accessible within the Google Analytics dashboard for historical analysis and comparison.
    -   _Assigned Team Member: Arqam Usman Ali

### User Story 5: Customizable Reports and Filters
_As a website owner,_  
I want to utilize customizable reports and filters within the Google Analytics dashboard,  
So that I can gain insights into specific user behavior and trends.

**Acceptance Criteria:**
1. The Google Analytics dashboard provides customizable reports and filters for various user behavior analyses.
    -   _Assigned Team Member: Arqam Usman Ali

### User Story 6: Compliance with Data Protection Regulations
_As a website owner,_  
I want to ensure user data is collected and processed in compliance with relevant data protection regulations, such as GDPR,  
So that I can maintain user trust and avoid legal issues.

**Acceptance Criteria:**
1. Implement necessary measures to comply with relevant data protection regulations during data collection and processing.
    -   _Assigned Team Member: Arqam Usman Ali

## Notes:
1. For optimal performance, consider implementing the tracking code asynchronously.
2. Regularly review and update tracking configurations to ensure the accuracy of data collection.
3. Use the data collected to identify areas of improvement and optimize the user experience on the website..

## Epic: AI-Powered Web Design and Layout Using Midjourney

_As a web developer, I want to leverage AI-powered tools like Midjourney to generate clean and visually appealing UI designs and layouts for my website, so that I can create a user-friendly and engaging experience for my audience._

### User Stories:

1. **Creating an AI-generated prompt for Midjourney** _As a web developer, I want to create a refined and specific AI-generated prompt for Midjourney, incorporating elements like design style, theme, archetype focus, and neurotransmitter targeting, so that the tool can generate relevant and appealing images for my website._
    - _Acceptance Criteria:_
        -   Develop a prompt template based on discussions and refinements.
        -   Create a final prompt that encompasses desired design elements and neurotransmitter targeting.
    -   _Assigned Team Member:_ Carlos Segarra 

2. **Generating images with Midjourney** _As a web developer, I want to use the refined AI-generated prompt to generate various background images and illustrations with Midjourney, so that I can review and select the most suitable visuals for my website._
    - _Acceptance Criteria:_
        - Submit the refined AI-generated prompt to Midjourney.
        - Review the generated images and select the most suitable options for the website.
    -   _Assigned Team Member:_ Carlos Segarra 

3. **Integrating AI-generated images into the website** _As a web developer, I want to integrate the selected AI-generated images into the website's UI design and layout, ensuring a cohesive and visually appealing experience for users._
    - _Acceptance Criteria:_
        - Integrate the selected images into the website's design and layout.
        - Ensure the images fit seamlessly with the overall aesthetic and theme of the website.
    -   _Assigned Team Member:_ Jonathan Grossman

4. **Optimizing images for user experience** _As a web developer, I want to optimize the AI-generated images for performance and user experience, ensuring that the images load quickly and display correctly across various devices and screen sizes._
    - _Acceptance Criteria:_
        - Optimize the selected images for faster loading times and improved performance.
        - Ensure the images display correctly on various devices and screen resolutions.
    -   _Assigned Team Member:_ Jonathan Grossman

5. **Leveraging AI-generated images to evoke desired emotions** _As a web developer, I want to utilize the AI-generated images in conjunction with targeted neurotransmitters, to evoke specific emotions in users that align with the website's goals and brand archetype._
    - _Acceptance Criteria:_
        - Analyze the relationship between the AI-generated images and the targeted neurotransmitters.
        - Implement strategies to evoke desired emotions in users based on the selected images and neurotransmitter targeting.
    -   _Assigned Team Member:_ Carlos Segarra 
