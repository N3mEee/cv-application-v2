"use client";

import "./App.css";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Practical from "./components/Practical";
import Education from "./components/Education";
import General from "./components/General";

export default function App() {
    const [general, setGeneral] = useState({ name: "", email: "", phone: "" });
    const [education, setEducation] = useState([
        { school: "", studyTitle: "", dateOfStudy: "" },
        { school: "", studyTitle: "", dateOfStudy: "" },
    ]);
    const [practical, setPractical] = useState([
        {
            companyName: "",
            positionTitle: "",
            responsabilities: "",
            dateOfWork: "",
        },
    ]);

    function handleInputChangeGeneral(e: React.ChangeEvent<HTMLInputElement>) {
        setGeneral((prevGeneral) => ({ ...prevGeneral, [e.target.id]: e.target.value }));
    }
    function handleInputChangeEducation(e: React.ChangeEvent<HTMLInputElement>, index: number) {
        setEducation(
            education.map((item, indx) => {
                if (indx === index) {
                    return { ...item, [e.target.id]: e.target.value };
                } else {
                    return item;
                }
            })
        );
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
                <TabsContent value="educationExp">
                    {education.map((item, i) => {
                        return <Education key={i} item={item} index={i} onChangeEvent={handleInputChangeEducation} />;
                    })}
                </TabsContent>
                <TabsContent value="practicalExp">
                    {practical.map((item, i) => {
                        return <Practical key={i} item={item} index={i} onChangeEvent={handleInputChangePractical} />;
                    })}
                </TabsContent>
            </Tabs>
        </div>
    );
}
