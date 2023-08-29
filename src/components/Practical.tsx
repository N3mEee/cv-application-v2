import { Label } from "@radix-ui/react-label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Trash2 } from "lucide-react";
import { Textarea } from "./ui/textarea";

interface Props {
    item: { companyName: string; positionTitle: string; responsabilities: string; dateOfWork: string };
    index: number;
    onChangeEvent: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => void;
    onDeleteClick: (index: number, state: string) => void;
}

export default function Practical({ item, index, onChangeEvent, onDeleteClick }: Props) {
    return (
        <div>
            <Card className="mb-2">
                <CardHeader>
                    <CardTitle className="flex gap-1">
                        Practical Experience
                        <button onClick={() => onDeleteClick(index, "practical")}>
                            <Trash2 className="inline" color="#ff2424" />
                        </button>
                    </CardTitle>
                    <CardDescription>A section to add practical experience.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input
                            type="text"
                            id="companyName"
                            value={item.companyName}
                            onChange={(e) => onChangeEvent(e, index)}
                            placeholder="Company Name"
                        />
                        <Label htmlFor="positionTitle">Position Title</Label>
                        <Input
                            type="text"
                            id="positionTitle"
                            value={item.positionTitle}
                            onChange={(e) => onChangeEvent(e, index)}
                            placeholder="Position Title"
                        />
                        <Label htmlFor="responsabilities">Responsabilities</Label>
                        <Textarea
                            placeholder="Responsabilities"
                            id="responsabilities"
                            value={item.responsabilities}
                            onChange={(e) => onChangeEvent(e, index)}
                        />
                        <Label htmlFor="dateOfWork">Date</Label>
                        <Input
                            type="date"
                            id="dateOfWork"
                            value={item.dateOfWork}
                            onChange={(e) => onChangeEvent(e, index)}
                            placeholder="Date"
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
