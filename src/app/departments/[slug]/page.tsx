import { departmentsData, Department } from "@/data/departments";
import { notFound } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Briefcase, FlaskConical, MessageSquareQuote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
    <div className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary text-primary-foreground rounded-lg p-4">
              <Icon className="h-10 w-10" />
            </div>
            <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">{name}</h1>
          </div>
          <p className="text-xl text-muted-foreground">{longDescription}</p>
        </header>

        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-2 lg:grid-cols-4 h-auto">
            <TabsTrigger value="courses"><BookOpen className="mr-2 h-4 w-4"/>Courses</TabsTrigger>
            <TabsTrigger value="careers"><Briefcase className="mr-2 h-4 w-4"/>Careers</TabsTrigger>
            <TabsTrigger value="research"><FlaskConical className="mr-2 h-4 w-4"/>Research</TabsTrigger>
            <TabsTrigger value="testimonials"><MessageSquareQuote className="mr-2 h-4 w-4"/>Testimonials</TabsTrigger>
          </TabsList>
          
          <div className="bg-background rounded-b-lg mt-0 border border-t-0 p-6">
            <TabsContent value="courses">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Curriculum Overview</CardTitle>
                        <CardDescription>A selection of core courses offered in the {name} department.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {courses.map((course, index) => (
                        <div key={index} className="p-4 border rounded-lg">
                            <h3 className="font-semibold text-lg">{course.title}</h3>
                            <p className="text-muted-foreground">{course.description}</p>
                        </div>
                        ))}
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="careers">
                 <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Career Pathways</CardTitle>
                        <CardDescription>Graduates from the {name} department have pursued a wide range of successful careers.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       {careers.map((career, index) => (
                         <Card key={index}>
                           <CardHeader>
                              <CardTitle className="text-xl">{career.title}</CardTitle>
                           </CardHeader>
                           <CardContent>
                              <p className="text-muted-foreground">{career.description}</p>
                           </CardContent>
                         </Card>
                       ))}
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="research">
                 <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Active Research Projects</CardTitle>
                        <CardDescription>Our department is at the forefront of innovation and discovery.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {research.map((project, index) => (
                        <div key={index} className="p-4 border rounded-lg">
                            <h3 className="font-semibold text-lg">{project.title}</h3>
                            <p className="text-muted-foreground">{project.description}</p>
                        </div>
                        ))}
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="testimonials">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Student Voices</CardTitle>
                        <CardDescription>Hear what students have to say about their experience in the {name} department.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {testimonials.map((testimonial, index) => (
                        <blockquote key={index} className="p-4 border-l-4 border-primary bg-secondary rounded-r-lg">
                            <p className="italic mb-4">"{testimonial.quote}"</p>
                            <footer className="flex items-center gap-2">
                                 <Avatar className="h-10 w-10">
                                    <AvatarImage src={testimonial.imageUrl} alt={testimonial.studentName} data-ai-hint="student photo" />
                                    <AvatarFallback>{testimonial.studentName.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <cite className="font-semibold not-italic">{testimonial.studentName}</cite>
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
