import { Label } from "@radix-ui/react-label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";

interface Props {
    general: { name: string; email: string; phone: string };
    onChangeEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function General({ general, onChangeEvent }: Props) {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>General Information</CardTitle>
                    <CardDescription>A section to add general information.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                            type="text"
                            id="name"
                            value={general.name}
                            onChange={onChangeEvent}
                            placeholder="Full Name"
                        />
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            id="email"
                            value={general.email}
                            onChange={onChangeEvent}
                            placeholder="Email"
                        />
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                            type="tel"
                            id="phone"
                            value={general.phone}
                            onChange={onChangeEvent}
                            placeholder="Phone Number"
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
