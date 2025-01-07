import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LinkedinIcon, MailIcon } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-highlight to-accent">
      <div className="container">
        <Card className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-4">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-white">Let's Connect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 flex justify-center flex-col items-center">
            <a 
              href="https://www.linkedin.com/in/borgar-stensrud-0204181a/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="w-full flex items-center gap-2">
                <LinkedinIcon className="w-5 h-5" />
                Connect on LinkedIn
              </Button>
            </a>
            <a href="mailto:Borgar90@gmail.com">
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