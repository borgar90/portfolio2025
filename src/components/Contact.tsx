import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LinkedinIcon, MailIcon } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-highlight to-accent">
      <div className="container">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Let's Connect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <a 
              href="https://linkedin.com/in/your-profile" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="w-full flex items-center gap-2">
                <LinkedinIcon className="w-5 h-5" />
                Connect on LinkedIn
              </Button>
            </a>
            <a href="mailto:your.email@example.com">
              <Button variant="outline" className="w-full flex items-center gap-2">
                <MailIcon className="w-5 h-5" />
                Send Email
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};