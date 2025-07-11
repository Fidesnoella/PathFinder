import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { departmentsData } from "@/data/departments";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DepartmentsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Explore Our Tech Departments</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Find your passion. Discover the innovative programs that will shape your future in technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {departmentsData.map((dept) => (
          <Card key={dept.slug} className="group flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
             <Link href={`/departments/${dept.slug}`} className="flex flex-col h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary text-primary-foreground rounded-lg p-3">
                  <dept.icon className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline">{dept.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <CardDescription className="flex-grow">{dept.description}</CardDescription>
                <div className="text-primary font-semibold mt-4 flex items-center group-hover:underline">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
