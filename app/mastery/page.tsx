import TopicSideList from "@/ui/lists/topicSideList";
import Progress from "@/ui/progress/progress";
import Card from "@/ui/card";
import Button from "@/ui/button";

export default function Mastery() {
  return (
    <div className="h-full">
      <TopicSideList />
      <div className="w-full pt-20 pl-60 lg:pl-0 sm:px-4 xl:py-8 lg:pt-8 ">
        <div className="grid px-20 sm:px-4">
          <Progress percent="50" className="mb-12" />
          <Card className="w-full px-16 py-14 sm:p-4 sm:text-sm xl:px-10 sm:px-2">
            <div className="px-10 lg:px-2">
              <p className="mb-10 text-xl font-thin leading-7 text-gray-800 sm:text-lg">
                A 30-year-old female presents with sudden-onset severe right
                lower quadrant abdominal pain. On examination, there is
                tenderness, rebound tenderness, and guarding in the right iliac
                fossa. The patient has a low-grade fever. What is the most
                likely diagnosis?
              </p>
              <div className="grid gap-6">
                <Button className="text-left sm:text-base" variant="light">
                  A) Gastroenteritis
                </Button>
                <Button className="text-left sm:text-base" variant="light">
                  B) Ovarian cyst rupture
                </Button>
                <Button className="text-left sm:text-base" variant="light">
                  C) Appendicitis
                </Button>
                <Button className="text-left sm:text-base" variant="light">
                  D) Renal colic
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
