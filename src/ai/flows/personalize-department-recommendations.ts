// src/ai/flows/personalize-department-recommendations.ts
'use server';
/**
 * @fileOverview Provides personalized department recommendations based on student interests and academic background.
 *
 * - getPersonalizedRecommendations - A function that takes student data and returns personalized department recommendations.
 * - PersonalizedRecommendationsInput - The input type for the getPersonalizedRecommendations function.
 * - PersonalizedRecommendationsOutput - The return type for the getPersonalizedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationsInputSchema = z.object({
  interests: z
    .string()
    .describe('The interests of the student, such as specific subjects, hobbies, or activities.'),
  academicBackground: z
    .string()
    .describe('The academic background of the student, including previous courses, grades, and achievements.'),
});
export type PersonalizedRecommendationsInput = z.infer<
  typeof PersonalizedRecommendationsInputSchema
>;

const PersonalizedRecommendationsOutputSchema = z.object({
  departmentRecommendations: z
    .array(z.string())
    .describe('A list of department recommendations based on the student’s interests and academic background.'),
  advice: z
    .string()
    .describe('Personalized advice for the student regarding their department choices.'),
});
export type PersonalizedRecommendationsOutput = z.infer<
  typeof PersonalizedRecommendationsOutputSchema
>;

export async function getPersonalizedRecommendations(
  input: PersonalizedRecommendationsInput
): Promise<PersonalizedRecommendationsOutput> {
  return personalizedRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedRecommendationsPrompt',
  input: {schema: PersonalizedRecommendationsInputSchema},
  output: {schema: PersonalizedRecommendationsOutputSchema},
  prompt: `You are a college advisor providing personalized department recommendations to students.

  Based on the student's interests and academic background, provide a list of department recommendations and personalized advice.

  Interests: {{{interests}}}
  Academic Background: {{{academicBackground}}}
  Please provide department recommendations that are tech related.
  `,
});

const personalizedRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
