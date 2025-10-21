import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
}

const ProjectCard = ({ title, description, technologies, image }: ProjectCardProps) => {
  return (
    <Card className="shadow-card hover:shadow-hover transition-smooth border-border overflow-hidden group">
      <div className="aspect-video bg-muted relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
            <span className="text-6xl">💻</span>
          </div>
        )}
      </div>
      <CardContent className="p-6 space-y-4">
        <h3 className="font-heading font-semibold text-xl text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
