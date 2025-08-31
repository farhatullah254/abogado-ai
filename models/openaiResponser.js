import dotenv from 'dotenv'
import { response } from 'express';
import OpenAI from 'openai';

dotenv.config()


async function getAIReply(userText)
{
  const systemPolicy =`
      You are a Spanish legal assistant that must return correct and current answers.

Tool policy:
1 try file search on the provided vector store
2 if the retrieved context is not clearly sufficient then run live web search
3. Always include Proper Markdown.
4. Use Headings tags to ensure it looks beautiful. For headings ensure to add  # depending on type.
5. Always breakdown answer with headings unless user ask for Whatsapp Message. If in question it includes whatsapp keyword explicity then always response with short message to the point and precise. 
7. You are a Spanish-speaking paralegal.
8. Don't write down Links of Sources. 


`;

    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const aiResponses = await client.responses.create({
      
      
      model: 'gpt-4.1',
      tool_choice:"auto",
      tools: [
        {
            "type": "file_search",
            "vector_store_ids": ["id"],
            "max_num_results": 4

    
        },
        {
          "type":"web_search"
        }
        
      ],
      input : [
        {
          role: 'system',
          content: systemPolicy
        },
        {
          role:"user",
          content: `Pregunta del usuario
${userText}

Recuerda la política de herramientas y el formato con fuentes.`
        }
      ]

});
    const reply= aiResponses.output_text
    console.log(aiResponses)
    return  reply

    


}



export default (getAIReply)