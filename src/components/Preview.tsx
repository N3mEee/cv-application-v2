import { TDetails } from "@/types";
import { ScrollArea } from "./ui/scroll-area";

type Props = {
    details: TDetails;
};

export default function Preview({ details }: Props) {
    return (
        <ScrollArea className="h-4/5 w-full">
            <div className="preview flex p-10 gap-10 flex-col justify-center items-center text-black bg-white">
                <div className="flex flex-col gap-4 items-center">
                    <div className="text-4xl font-bold">
                        {details.general.name.length > 0 ? details.general.name : "Full Name"}
                    </div>
                    <div className="flex gap-4">
                        <div className="text-sm ">
                            {details.general.email.length > 0 ? details.general.email : "Email"}
                        </div>
                        <div className="text-sm ">
                            {details.general.phone.length > 0 ? details.general.phone : "Phone Number"}
                        </div>
                    </div>
                </div>
                {details.education.length > 0 && (
                    <div className="text-2xl font-bold self-start">Education Experience</div>
                )}
                {details.education.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col self-start gap-2">
                            <div className="text-xl font-bold">{item.school}</div>
                            <div className="text-l font-bold">{item.studyTitle}</div>
                            <div>{item.dateOfStudy}</div>
                        </div>
                    );
                })}
                {details.practical.length > 0 && (
                    <div className="text-2xl font-bold self-start">Practical Experience</div>
                )}
                {details.practical.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col self-start gap-2">
                            <div className="text-xl font-bold">{item.companyName}</div>
                            <div className="text-l font-bold">{item.positionTitle}</div>
                            <div>{item.responsabilities}</div>
                            <div>{item.dateOfWork}</div>
                        </div>
                    );
                })}
            </div>
        </ScrollArea>
    );
}
