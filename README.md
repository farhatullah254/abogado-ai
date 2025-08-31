# Spanish AI Legal Assistant

A sophisticated AI-powered legal assistant designed to provide accurate and current answers to Spanish legal questions. This application combines vector store search capabilities with live web search to deliver comprehensive legal information with proper formatting.

## 🌟 Features

### Core Functionality
- **Spanish Legal Expertise**: Specialized AI assistant for Spanish legal matters
- **Vector Store Integration**: Searches through embedded legal documents and data
- **Live Web Search**: Falls back to real-time web search when vector store results are insufficient
- **Markdown Support**: Beautifully formatted responses with proper headings and structure
- **WhatsApp Mode**: Special short-form responses when "whatsapp" keyword is detected

### Technical Features
- **Modern UI**: Clean, responsive interface built with Tailwind CSS
- **Real-time Chat**: Interactive chat interface with message history
- **Security**: DOMPurify integration for XSS protection
- **Markdown Rendering**: Client-side markdown parsing with security sanitization
- **Error Handling**: Robust error handling and user feedback

## 🏗️ Architecture

### Backend (Node.js/Express)
- **Server**: Express.js with EJS templating
- **AI Integration**: OpenAI API with custom tool configuration
- **Environment**: ES6 modules with dotenv configuration

### Frontend
- **Styling**: Tailwind CSS with custom gradients and dark theme
- **Interactivity**: Vanilla JavaScript with modern ES6+ features
- **Security**: DOMPurify for HTML sanitization
- **Markdown**: Marked.js for markdown parsing

### AI Configuration
- **Model**: GPT-4.1 with custom tool integration
- **Tools**: 
  - File search with vector store (`vs_68b3e80ff64881919b4ee6428b60b241`)
  - Web search for live information
- **Policy**: Structured response format with Spanish legal expertise

## 📁 Project Structure

```
spanishAI/
├── app.js                 # Main Express server
├── package.json           # Dependencies and scripts
├── models/
│   └── openaiResponser.js # AI integration and response handling
├── views/
│   └── index.ejs         # Main chat interface
├── public/
│   ├── css/
│   │   ├── style.css     # Tailwind styles
│   │   ├── common.css    # Custom styles
│   │   └── input.css     # Tailwind input
│   └── js/
│       └── script.js     # Frontend interactivity
└── README.md             # This file
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- OpenAI API key

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd spanishAI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Start the application**
   ```bash
   npm start
   ```

5. **Access the application**
   Open your browser and navigate to `http://localhost:3000`

## 🔧 Configuration

### AI Assistant Configuration
The AI assistant is configured in `models/openaiResponser.js` with the following features:

- **System Policy**: Defines the assistant's role as a Spanish legal expert
- **Tool Policy**: 
  1. First attempts file search on vector store
  2. Falls back to live web search if needed
  3. Always includes proper markdown formatting
  4. Uses heading tags for beautiful presentation
  5. Special WhatsApp mode for concise responses

### Vector Store Configuration
- **Vector Store ID**: `vs_68b3e80ff64881919b4ee6428b60b241`
- **Max Results**: 4 documents per search
- **Search Type**: Semantic search through embedded legal documents

## 💻 Usage

### Basic Usage
1. Open the application in your browser
2. Type your Spanish legal question in the chat input
3. Press Enter or click Send
4. Receive a comprehensive, formatted response

### WhatsApp Mode
- Include the word "whatsapp" in your question
- Receive a concise, to-the-point response suitable for messaging apps

### Response Format
The AI assistant provides responses with:
- **Proper Markdown**: Headings, lists, and formatting
- **Structured Content**: Organized with clear sections
- **Legal Accuracy**: Current and correct Spanish legal information
- **No Source Links**: Clean responses without external links

## 🛠️ Development

### Available Scripts
- `npm start`: Start the development server with nodemon
- `npm test`: Run tests (currently not implemented)

### Development Server
The application runs on port 3000 by default. The server automatically restarts when files are modified thanks to nodemon.

### Code Structure
- **ES6 Modules**: Modern JavaScript with import/export syntax
- **Async/Await**: Promises-based asynchronous operations
- **Error Handling**: Comprehensive try-catch blocks
- **Security**: Input sanitization and XSS protection

## 🔒 Security Features

- **DOMPurify**: Sanitizes HTML content to prevent XSS attacks
- **Input Validation**: Server-side validation of user inputs
- **Environment Variables**: Secure API key management
- **Content Security**: Safe markdown rendering

## 🎨 UI/UX Features

- **Dark Theme**: Modern dark gradient background
- **Responsive Design**: Works on desktop and mobile devices
- **Chat Interface**: Familiar messaging app layout
- **Loading States**: Visual feedback during AI processing
- **Message History**: Persistent conversation display
- **Keyboard Shortcuts**: Shift+Enter for new lines

## 📝 API Endpoints

### POST `/post-message`
- **Purpose**: Send user message and receive AI response
- **Request Body**: `{ "text": "user message" }`
- **Response**: `{ "ok": true, "text": "user message", "aiResponse": "AI response" }`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Pyaox** - Initial development

## 🔮 Future Enhancements

- [ ] User authentication and session management
- [ ] Conversation history persistence
- [ ] Multiple language support
- [ ] Advanced legal document analysis
- [ ] Integration with legal databases
- [ ] Mobile app development
- [ ] API rate limiting and caching
- [ ] Advanced error logging and monitoring

## 🐛 Troubleshooting

### Common Issues

1. **OpenAI API Key Error**
   - Ensure your `.env` file contains the correct API key
   - Verify the API key has sufficient credits

2. **Port Already in Use**
   - Change the port in `app.js` or kill the process using port 3000

3. **Module Import Errors**
   - Ensure you're using Node.js v16+ for ES6 module support
   - Run `npm install` to ensure all dependencies are installed

4. **Vector Store Issues**
   - Verify the vector store ID is correct and accessible
   - Check OpenAI API permissions for tool usage

For additional support, please open an issue in the repository.
