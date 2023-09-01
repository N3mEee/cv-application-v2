type TGeneral = {
    name: string;
    email: string;
    phone: string;
};

type TEducation = {
    school: string;
    studyTitle: string;
    dateOfStudy: string;
};

type TPractical = {
    companyName: string;
    positionTitle: string;
    responsabilities: string;
    dateOfWork: string;
};

type TDetails = {
    general: General;
    education: Education[];
    practical: Practical[];
};

export { TGeneral, TEducation, TPractical, TDetails };