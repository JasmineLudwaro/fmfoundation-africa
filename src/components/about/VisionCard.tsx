import { Card, CardContent } from "@/components/ui/card";
import { Eye } from "lucide-react";

const VisionCard = () => {
  return (
    <Card className="text-center shadow-card hover:shadow-primary transition-all duration-300 animate-scale-in">
      <CardContent className="p-8">
        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
          <Eye className="w-7 h-7 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
        <p className="text-muted-foreground leading-relaxed">
          A transformed society where communities thrive through access to clean water, quality education, 
          sustainable development, environmental conservation, and opportunities that promote shared prosperity for all.
        </p>
      </CardContent>
    </Card>
  );
};

export default VisionCard;
