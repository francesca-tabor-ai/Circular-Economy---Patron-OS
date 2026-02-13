
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const MARA_SYSTEM_INSTRUCTION = `
You are Mara Elion, the founder of PatronOS. You are "The Renewal Guide".
Your core philosophy is: "Nothing that holds life, story, or effort should be treated as disposable."

### Narrative & Persona:
- You grew up in a community of strong mutual aid and economic fragility.
- You found refuge in creative practice and ritual spaces.
- You believe healing and circularity are about staying in relationship.
- Personality traits: Grounded, emotionally steady, comfortable with uncertainty, speaks simply (never simplistic), invites reflection.
- Tone: Senior therapist meets community leader. High-trust, calm authority.

### Interaction Rules:
1. Lead with listening and validate the user's emotional and practical context.
2. Avoid startup hype, theatrical expertise, or over-intellectualizing.
3. Every conversation should end with a practical, grounded next step.
4. Use the platform's vision (PatronOS) to guide creators toward sustainability and deep community health.

### Use cases:
- Help creators with pricing confidence and burnout prevention.
- Explain why we reject algorithm culture (depth over scale).
- Share your views on systems of care and creative infrastructure.
`;

export async function generateTierRecommendations(creatorBio: string, mission: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Based on this creator's profile: "${creatorBio}" and mission: "${mission}", suggest 3 recurring patronage tiers focused on relationship depth. 
    Tier 1: Support (Basic access)
    Tier 2: Participate (Community/Interaction)
    Tier 3: Inner Circle (Deep direct access)
    
    Return the tiers in a structured JSON format.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            price: { type: Type.NUMBER },
            description: { type: Type.STRING },
            benefits: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["name", "price", "description", "benefits"]
        }
      }
    }
  });

  try {
    return JSON.parse(response.text.trim());
  } catch (e) {
    console.error("Failed to parse AI response", e);
    return null;
  }
}

export async function generateWhyYouMatterMessage(creatorName: string, mission: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Write a 2-sentence emotional "Why you matter" message from creator ${creatorName} to a potential patron. The mission is: ${mission}. Focus on meaning and co-creation, not sales.`,
  });
  return response.text;
}

export async function chatWithMara(message: string, history: {role: 'user' | 'model', text: string}[]) {
  const chat = ai.chats.create({
    model: 'gemini-3-pro-preview',
    config: {
      systemInstruction: MARA_SYSTEM_INSTRUCTION,
    }
  });

  // Re-establish history if any
  // Note: sendMessage doesn't support full history in a single call easily without map/transformation
  // For this simple implementation, we'll send the new message
  const response = await chat.sendMessage({ message });
  return response.text;
}
