import { Label } from "@radix-ui/react-label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Trash2 } from "lucide-react";

interface Props {
    item: { school: string; studyTitle: string; dateOfStudy: string };
    index: number;
    onChangeEvent: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
    onDeleteClick: (index: number, state: string) => void;
}

export default function Education({ item, index, onChangeEvent, onDeleteClick }: Props) {
    return (
        <div>
            <Card className="mb-2">
                <CardHeader>
                    <CardTitle className="flex gap-1">
                        Educational Experience
                        <button onClick={() => onDeleteClick(index, "education")}>
                            <Trash2 className="inline" color="#ff2424" />
                        </button>
                    </CardTitle>
                    <CardDescription>A section to add your educational experience.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="grid w-full items-center gap-1.5">
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
