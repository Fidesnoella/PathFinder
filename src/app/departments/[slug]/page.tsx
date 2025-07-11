import { departmentsData, Department } from "@/data/departments";
import { notFound } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Briefcase, FlaskConical, MessageSquareQuote, CheckCircle, User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export async function generateStaticParams() {
  return departmentsData.map((dept) => ({
    slug: dept.slug,
  }));
}

const getDepartmentBySlug = (slug: string): Department | undefined => {
  return departmentsData.find((dept) => dept.slug === slug);
};

export default function DepartmentDetailPage({ params }: { params: { slug: string } }) {
  const department = getDepartmentBySlug(params.slug);

  if (!department) {
    notFound();
  }

  const { name, icon: Icon, longDescription, courses, careers, research, testimonials } = department;

  return (
    <div className="bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <header className="mb-12 text-center">
          <div className="inline-block bg-primary text-primary-foreground rounded-lg p-4 mb-4 shadow-md">
            <Icon className="h-12 w-12" />
          </div>
          <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl lg:text-6xl">{name}</h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-muted-foreground">{longDescription}</p>
        </header>

        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto bg-background/80 backdrop-blur-sm">
            <TabsTrigger value="courses"><BookOpen className="mr-2 h-4 w-4"/>Courses</TabsTrigger>
            <TabsTrigger value="careers"><Briefcase className="mr-2 h-4 w-4"/>Careers</TabsTrigger>
            <TabsTrigger value="research"><FlaskConical className="mr-2 h-4 w-4"/>Research</TabsTrigger>
            <TabsTrigger value="testimonials"><MessageSquareQuote className="mr-2 h-4 w-4"/>Testimonials</TabsTrigger>
          </TabsList>
          
          <div className="bg-background rounded-b-lg mt-0 border p-6 shadow-sm">
            <TabsContent value="courses">
              <Card className="border-0 shadow-none">
                <CardHeader>
                  <CardTitle className="font-headline text-3xl">Curriculum Overview</CardTitle>
                  <CardDescription>Explore the core courses offered in the {name} department to build your foundational knowledge.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {courses.map((course, index) => (
                    <div key={index} className="p-6 border-l-4 border-primary bg-secondary/50 rounded-r-lg">
                      <h3 className="font-semibold text-xl text-primary">{course.title}</h3>
                      <p className="text-muted-foreground mt-2">{course.description}</p>
                      <div className="mt-4">
                        <h4 className="font-semibold mb-2">Key Topics:</h4>
                        <ul className="space-y-1 list-inside">
                          {course.topics.map((topic, i) => (
                            <li key={i} className="flex items-center text-sm text-foreground">
                              <CheckCircle className="h-4 w-4 mr-2 text-accent" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="careers">
              <Card className="border-0 shadow-none">
                <CardHeader>
                  <CardTitle className="font-headline text-3xl">Career Pathways</CardTitle>
                  <CardDescription>Graduates from the {name} department have pursued a wide range of successful and impactful careers.</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {careers.map((career, index) => (
                    <Card key={index} className="bg-secondary/50 border-primary/20 border-t-4 hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-xl text-primary">{career.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground">{career.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="research">
              <Card className="border-0 shadow-none">
                <CardHeader>
                  <CardTitle className="font-headline text-3xl">Active Research Projects</CardTitle>
                  <CardDescription>Our department is at the forefront of innovation and discovery. Get involved in cutting-edge research.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {research.map((project, index) => (
                    <div key={index} className="p-6 border rounded-lg hover:bg-secondary/30 transition-colors">
                      <h3 className="font-semibold text-lg text-accent">{project.title}</h3>
                      <p className="text-muted-foreground mt-1">{project.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="testimonials">
              <Card className="border-0 shadow-none">
                <CardHeader>
                  <CardTitle className="font-headline text-3xl">Student Voices</CardTitle>
                  <CardDescription>Hear what students have to say about their experience in the {name} department.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <blockquote key={index} className="p-6 border-l-4 border-primary bg-secondary/50 rounded-r-lg shadow-sm">
                      <p className="italic text-lg mb-4">"{testimonial.quote}"</p>
                      <footer className="flex items-center gap-4">
                        <Avatar className="h-12 w-12 bg-muted text-muted-foreground">
                           <AvatarFallback>
                             <User className="h-6 w-6" />
                           </AvatarFallback>
                        </Avatar>
                        <div>
                          <cite className="font-semibold text-base not-italic text-primary">{testimonial.studentName}</cite>
                          <p className="text-sm text-muted-foreground">{testimonial.program}</p>
                        </div>
                      </footer>
                    </blockquote>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
