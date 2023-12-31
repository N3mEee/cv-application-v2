import { Label } from "@radix-ui/react-label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Trash2 } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { TPractical } from "@/types";

interface Props {
    item: TPractical;
    index: number;
    onChangeEvent: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => void;
    onDeleteClick: (index: number, state: string) => void;
}

export default function Practical({ item, index, onChangeEvent, onDeleteClick }: Props) {
    return (
        <>
            <Card className="mb-2">
                <CardHeader>
                    <CardTitle className="flex gap-1 justify-between items-center">
                        Practical Experience
                        <Button variant="outline" size="icon" onClick={() => onDeleteClick(index, "practical")}>
                            <Trash2 className="inline" color="#ff2424" />
                        </Button>
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
        </>
    );
}
