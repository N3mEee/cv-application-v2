import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Eye, Save } from "lucide-react";

export default function Settings() {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>CV Settings</CardTitle>
                    <CardDescription>A section to save or preview the cv.</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center gap-2">
                    <Button className="flex gap-1" variant="secondary">
                        <Save />
                        Save CV
                    </Button>
                    <Button className="flex gap-1" variant="secondary">
                        <Eye />
                        Preview CV
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
