"use client";

import "./App.css";
import { Fragment, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "./components/ui/button";
import Practical from "./components/Practical";
import Education from "./components/Education";
import General from "./components/General";

interface Education {
    school: string;
    studyTitle: string;
    dateOfStudy: string;
}
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

    //I handle the input change in more ways for practice

    function handleInputChangeGeneral(e: React.ChangeEvent<HTMLInputElement>) {
        setGeneral((prevGeneral) => ({ ...prevGeneral, [e.target.id]: e.target.value }));
    }

    function handleInputChangeEducation(e: React.ChangeEvent<HTMLInputElement>, index: number) {
        const newEducation = [...education];
        newEducation[index][e.target.id as keyof Education] = e.target.value;
        setEducation(newEducation);
    }

    function handleInputChangePractical(e: React.ChangeEvent<HTMLInputElement>, index: number) {
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
        <div className="dark">
            <Tabs defaultValue="generalInfo">
                <TabsList>
                    <TabsTrigger value="generalInfo">General Informations</TabsTrigger>
                    <TabsTrigger value="educationExp">Education Experience</TabsTrigger>
                    <TabsTrigger value="practicalExp">Practical Experience</TabsTrigger>
                </TabsList>
                <TabsContent value="generalInfo">
                    <General general={general} onChangeEvent={handleInputChangeGeneral} />
                </TabsContent>
                <TabsContent value="educationExp" className="flex flex-col gap-2 items-stretch">
                    {education.map((item, index) => {
                        return (
                            <Fragment key={index}>
                                <Education item={item} index={index} onChangeEvent={handleInputChangeEducation} />
                                <Button
                                    className="w-20 self-center"
                                    onClick={() => handleDeleteClick(index, "education")}
                                >
                                    Delete
                                </Button>
                            </Fragment>
                        );
                    })}
                    <Button className="w-40 self-center" onClick={() => handleAddClick("education")}>
                        Add more
                    </Button>
                </TabsContent>
                <TabsContent value="practicalExp" className="flex flex-col gap-2 items-stretch">
                    {practical.map((item, index) => {
                        return (
                            <Fragment key={index}>
                                <Practical item={item} index={index} onChangeEvent={handleInputChangePractical} />
                                <Button
                                    className="w-20 self-center"
                                    onClick={() => handleDeleteClick(index, "practical")}
                                >
                                    Delete
                                </Button>
                            </Fragment>
                        );
                    })}
                    <Button className="w-40 self-center" onClick={() => handleAddClick("practical")}>
                        Add more
                    </Button>
                </TabsContent>
            </Tabs>
        </div>
    );
}
