import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { departmentsData } from "@/data/departments";
import { ArrowRight, Bot, Compass } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const featuredDepartments = departmentsData.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 xl:py-48 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-1 text-center">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-4">
                  <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Find Your Future with PathFinder
                  </h1>
                  <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                    PathFinder helps you find the perfect department by providing in-depth information, career pathways, and personalized AI-driven recommendations.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/departments">
                      <Compass className="mr-2" />
                      Explore Departments
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="secondary">
                    <Link href="/recommendations">
                      <Bot className="mr-2" />
                      Get AI Recommendations
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                  Find Your Passion in Tech
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Dive into some of the most exciting and innovative fields of study. Here's a glimpse of what our top tech departments have to offer.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3">
              {featuredDepartments.map((dept) => (
                <Card key={dept.slug} className="group transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <Link href={`/departments/${dept.slug}`} className="block h-full">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="bg-primary text-primary-foreground rounded-lg p-3">
                        <dept.icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="font-headline">{dept.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{dept.description}</CardDescription>
                      <div className="text-primary font-semibold mt-4 flex items-center group-hover:underline">
                        Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
                <Button asChild size="lg" variant="outline">
                    <Link href="/departments">View All Departments</Link>
                </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 PathFinder. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="/departments">
            Departments
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="/recommendations">
            Recommendations
          </Link>
        </nav>
      </footer>
    </div>
  );
}
