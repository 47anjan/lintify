# Lintify

AI Review App is a web application built using Next.js, TypeScript, and OpenAI's API. It allows users to generate insightful reviews for various products, services, or experiences using the power of artificial intelligence.

## Features

- **AI-Powered Review Generation:** Leverage OpenAI's API to create detailed and meaningful reviews.
- **User-Friendly Interface:** Intuitive design for a seamless user experience.
- **Customizable Review Parameters:** Users can specify the tone, length, and focus of the generated reviews.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop devices.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (React framework for server-side rendering and static site generation)
- **Language:** TypeScript (strongly-typed JavaScript for better code quality)
- **AI Integration:** [OpenAI API](https://platform.openai.com/docs/)
- **Styling:** Tailwind CSS or CSS Modules (customizable and modern styling solutions)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/47anjan/lintify
   cd lintify
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:

   Create a `.env.local` file in the root of the project and add your OpenAI API key:

   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

## Usage

1. Open the app in your browser.
2. Enter the product, service, or experience you want a review for.
3. Adjust parameters such as tone, length, or focus.
4. Click "Generate Review" to receive an AI-generated review.

## Deployment

To deploy the app, you can use [Vercel](https://vercel.com/):

1. Push your code to a Git repository (e.g., GitHub).
2. Connect your repository to Vercel.
3. Set up the `OPENAI_API_KEY` environment variable in the Vercel dashboard.
4. Deploy your application with a single click.

## Contributing

Contributions are welcome! If you have ideas, suggestions, or issues, feel free to open a pull request or issue.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [OpenAI API Documentation](https://platform.openai.com/docs/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

Happy building! 🚀
