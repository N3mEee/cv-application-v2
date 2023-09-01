import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Eye, Save } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import Preview from "./Preview";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { TDetails } from "@/types";
import { useState } from "react";

type Props = {
    details: TDetails;
};
export default function Settings({ details }: Props) {
    const [showPreview, setShowPreview] = useState(false);

    function handleSaveToPDF() {
        setShowPreview(true);
        setTimeout(async () => {
            const pdf = new jsPDF("portrait", "pt", "a4");
            const data = await html2canvas(document.querySelector(".preview") as HTMLElement);
            const img = data.toDataURL("image/png");
            const imgProperties = pdf.getImageProperties(img);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
            pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save("cv.pdf");
            setShowPreview(false);
        }, 1000);
    }

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>CV Settings</CardTitle>
                    <CardDescription>A section to save or preview the cv.</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center gap-2">
                    <Dialog>
                        <DialogTrigger>
                            <Button className="flex gap-1" variant="secondary" onClick={handleSaveToPDF}>
                                <Save />
                                Save CV
                            </Button>
                        </DialogTrigger>
                        {showPreview && (
                            <DialogContent className="max-w-none max-h-screen">
                                <Preview details={details} />
                            </DialogContent>
                        )}
                    </Dialog>
                    <Dialog>
                        <DialogTrigger>
                            <Button className="flex gap-1" variant="secondary">
                                <Eye />
                                Preview CV
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-none h-screen">
                            <DialogHeader>
                                <DialogTitle>Preview CV</DialogTitle>
                                <DialogDescription>This is a preview</DialogDescription>
                            </DialogHeader>
                            <Preview details={details} />
                        </DialogContent>
                    </Dialog>
                </CardContent>
            </Card>
        </>
    );
}
