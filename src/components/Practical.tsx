import { Label } from "@radix-ui/react-label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";

interface Props {
    item: { companyName: string; positionTitle: string; responsabilities: string; dateOfWork: string };
    index: number;
    onChangeEvent: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
}

export default function Practical({ item, index, onChangeEvent }: Props) {
    return (
        <div>
            <Card className="mb-2">
                <CardHeader>
                    <CardTitle>Practical Experience</CardTitle>
                    <CardDescription>A section to add practical experience.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
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
                        <Input
                            type="textarea"
                            id="responsabilities"
                            value={item.responsabilities}
                            onChange={(e) => onChangeEvent(e, index)}
                            placeholder="Responsabilities"
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
