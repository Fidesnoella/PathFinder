"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { getPersonalizedRecommendations, PersonalizedRecommendationsOutput } from "@/ai/flows/personalize-department-recommendations";
import { Loader2, Sparkles, Lightbulb, Repeat } from "lucide-react";

const formSchema = z.object({
  interests: z.string().min(10, "Please tell us a bit more about your interests.").max(500),
  academicBackground: z.string().min(10, "Please tell us a bit more about your academic background.").max(500),
});

type FormData = z.infer<typeof formSchema>;

export default function RecommendationsPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PersonalizedRecommendationsOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interests: "",
      academicBackground: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setResult(null);
    try {
      const recommendations = await getPersonalizedRecommendations(data);
      setResult(recommendations);
    } catch (error) {
      console.error("Failed to get recommendations:", error);
      toast({
        title: "Error",
        description: "Failed to get recommendations. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    form.reset();
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4 text-center mb-12">
          <Sparkles className="mx-auto h-12 w-12 text-primary" />
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Get Personalized Recommendations
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Let our AI assistant help you find the right path. Share your interests and academic background to receive tailored department suggestions.
          </p>
        </div>

        {!result ? (
          <Card>
            <CardHeader>
              <CardTitle>Tell Us About Yourself</CardTitle>
              <CardDescription>The more details you provide, the better the recommendations will be.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="interests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Interests</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., building video games, coding competitions, robotics, data analysis..."
                            className="resize-none"
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Describe your hobbies, passions, and subjects you enjoy.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="academicBackground"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Academic Background</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., took AP computer science, strong in math, projects in Python..."
                            className="resize-none"
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Mention relevant courses, projects, and academic strengths.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={loading} className="w-full">
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      "Get My Recommendations"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6 animate-in fade-in-50">
             <Card className="bg-primary text-primary-foreground border-0">
              <CardHeader>
                  <CardTitle className="font-headline flex items-center gap-2"><Sparkles /> Recommended Departments</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 list-disc list-inside">
                  {result.departmentRecommendations.map((rec, index) => (
                    <li key={index} className="text-lg font-medium">{rec}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                  <CardTitle className="font-headline flex items-center gap-2"><Lightbulb /> Personalized Advice</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{result.advice}</p>
              </CardContent>
            </Card>

            <div className="text-center">
                <Button onClick={handleReset} variant="outline">
                    <Repeat className="mr-2 h-4 w-4" />
                    Start Over
                </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
