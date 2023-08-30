"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "./components/ui/button";
import Practical from "./components/Practical";
import Education from "./components/Education";
import General from "./components/General";
import { PlusCircle } from "lucide-react";
import Settings from "./components/Settings";
import { ThemeToggle } from "./components/theme/theme-toggle";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Details, Education as TEducation } from "./types";

export default function App() {
    const [general, setGeneral] = useState({ name: "", email: "", phone: "" });
    const [education, setEducation] = useState([{ school: "", studyTitle: "", dateOfStudy: "" }]);
    const [practical, setPractical] = useState([
        {
            companyName: "",
            positionTitle: "",
            responsabilities: "",
            dateOfWork: "",
        },
    ]);

    const details: Details = {
        general: general,
        education: education,
        practical: practical,
    };

    //I handle the input change in more ways for practice
    function handleInputChangeGeneral(e: React.ChangeEvent<HTMLInputElement>) {
        setGeneral((prevGeneral) => ({ ...prevGeneral, [e.target.id]: e.target.value }));
    }

    function handleInputChangeEducation(e: React.ChangeEvent<HTMLInputElement>, index: number) {
        const newEducation = [...education];
        newEducation[index][e.target.id as keyof TEducation] = e.target.value;
        setEducation(newEducation);
    }

    function handleInputChangePractical(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) {
        setPractical(
            practical.map((item, indx) => {
                if (indx === index) {
                    return { ...item, [e.target.id]: e.target.value };
                } else {
                    return item;
                }
            })
        );
    }

    function handleAddClick(state: string) {
        if (state === "education") {
            const newEducation = [...education];
            newEducation.push({ school: "", studyTitle: "", dateOfStudy: "" });
            setEducation(newEducation);
        } else {
            const newPractical = [...practical];
            newPractical.push({ companyName: "", positionTitle: "", responsabilities: "", dateOfWork: "" });
            setPractical(newPractical);
        }
    }

    function handleDeleteClick(index: number, state: string) {
        if (state === "education") {
            const newEducation = [...education];
            newEducation.splice(index, 1);
            setEducation(newEducation);
        } else {
            const newPractical = [...practical];
            newPractical.splice(index, 1);
            setPractical(newPractical);
        }
    }

    return (
        <div className="flex flex-col items-end gap-2">
            <ThemeToggle />
            <Tabs defaultValue="generalInfo">
                <TabsList>
                    <TabsTrigger value="generalInfo">General Informations</TabsTrigger>
                    <TabsTrigger value="educationExp">Education Experience</TabsTrigger>
                    <TabsTrigger value="practicalExp">Practical Experience</TabsTrigger>
                    <TabsTrigger value="settings">CV Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="generalInfo">
                    <General general={general} onChangeEvent={handleInputChangeGeneral} />
                </TabsContent>
                <TabsContent value="educationExp" className="flex flex-col gap-2 items-stretch">
                    <Accordion type="single" collapsible>
                        {education.map((item, index) => {
                            return (
                                <AccordionItem key={index} value={index.toString()}>
                                    <AccordionTrigger>
                                        {item.school.length > 0 ? item.school : "Education Experience"}{" "}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <Education
                                            key={index}
                                            item={item}
                                            index={index}
                                            onChangeEvent={handleInputChangeEducation}
                                            onDeleteClick={handleDeleteClick}
                                        />
                                    </AccordionContent>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                    <Button
                        variant="secondary"
                        className="self-center flex gap-1"
                        onClick={() => handleAddClick("education")}
                    >
                        <PlusCircle size={20} color="#44c54c" strokeWidth={3} />
                        Add more
                    </Button>
                </TabsContent>
                <TabsContent value="practicalExp" className="flex flex-col gap-2 items-stretch">
                    <Accordion type="single" collapsible>
                        {practical.map((item, index) => {
                            return (
                                <AccordionItem key={index} value={index.toString()}>
                                    <AccordionTrigger>
                                        {item.companyName.length > 0 ? item.companyName : "Preactical Experience"}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <Practical
                                            item={item}
                                            index={index}
                                            onChangeEvent={handleInputChangePractical}
                                            onDeleteClick={handleDeleteClick}
                                        />
                                    </AccordionContent>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                    <Button
                        variant="secondary"
                        className="self-center flex gap-1"
                        onClick={() => handleAddClick("practical")}
                    >
                        <PlusCircle size={20} color="#44c54c" strokeWidth={3} />
                        Add more
                    </Button>
                </TabsContent>
                <TabsContent value="settings">
                    <Settings details={details as Details} />
                </TabsContent>
            </Tabs>
        </div>
    );
}
