import { Label } from "@radix-ui/react-label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";

interface Props {
    item: { school: string; studyTitle: string; dateOfStudy: string };
    index: number;
    onChangeEvent: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
}

export default function Education({ item, index, onChangeEvent }: Props) {
    return (
        <div>
            <Card className="mb-2">
                <CardHeader>
                    <CardTitle>Educational Experience</CardTitle>
                    <CardDescription>A section to add your educational experience.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="school">School Name</Label>
                        <Input
                            type="text"
                            id="school"
                            value={item.school}
                            onChange={(e) => onChangeEvent(e, index)}
                            placeholder="School Name"
                        />
                        <Label htmlFor="studyTitle">Study Title</Label>
                        <Input
                            type="text"
                            id="studyTitle"
                            value={item.studyTitle}
                            onChange={(e) => onChangeEvent(e, index)}
                            placeholder="Study Title"
                        />
                        <Label htmlFor="dateOfStudy">Date</Label>
                        <Input
                            type="date"
                            id="dateOfStudy"
                            value={item.dateOfStudy}
                            onChange={(e) => onChangeEvent(e, index)}
                            placeholder="Date"
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
