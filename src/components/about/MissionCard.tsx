import { Card, CardContent } from "@/components/ui/card";
import { Target } from "lucide-react";

const MissionCard = () => {
  return (
    <Card className="text-center shadow-card hover:shadow-primary transition-all duration-300 animate-scale-in">
      <CardContent className="p-8">
        <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
          <Target className="w-7 h-7 text-secondary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
        <p className="text-muted-foreground leading-relaxed">
          To empower communities by providing sustainable water solutions, supporting educational initiatives, 
          and fostering development programs that build resilient and equitable societies.
        </p>
      </CardContent>
    </Card>
  );
};

export default MissionCard;
